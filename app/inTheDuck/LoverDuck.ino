#include <Adafruit_NeoPixel.h>
//test
#include <Adafruit_Sensor.h>
#include <Adafruit_LSM303.h>
#include <Wire.h>
#include <SoftwareSerial.h>
SoftwareSerial BT(10,11);
//RX/TX

#define tonePin 2
#define buttonPin 3
#define ledPinA 6 //6 leds here
#define ledNumA 6
#define ledPinB 7 //4 leds here
#define ledNumB 4

Adafruit_NeoPixel pixelsA = Adafruit_NeoPixel(ledNumA, ledPinA, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel pixelsB = Adafruit_NeoPixel(ledNumB, ledPinB, NEO_GRB + NEO_KHZ800);
int color[]={0,250,50};
int startColor[]={0, 0, 250};
int endColor[]={0, 250, 0};
unsigned long mode1Duration=1*60*1000;


Adafruit_LSM303 lsm;
boolean isBT=true;
String idString="00";

int mode=1; //0 is off, 1 is on, 2 is warning
int buttonState;
int lastButtonState=HIGH;
unsigned long lastDebounceTime=0;
unsigned long debounceDelay=50;

unsigned long startCurrentMode=0;

void setup() {
  // put your setup code here, to run once:
  comBegin(9600);
  //https://store.arduino.cc/usa/arduino-nano
  //https://learn.adafruit.com/lsm303-accelerometer-slash-compass-breakout/coding
  //I2C: A4 (SDA) and A5 (SCL)
  if(!lsm.begin()){
    Serial.println("unable to initialize the LSM303.");
    delay(500);
    while(1);
  }
  pinMode(buttonPin, INPUT_PULLUP);
  pixelsA.begin();
  pixelsB.begin();
}

void loop() {
  // toggle on/off states
  checkButton();


  // send accelerometer data once every 100ms
  processData();

  if(comAvailable()>0){
    int data=comRead();
//    switch(data){
//      case 1:
//        changeMode(2);
//        break;
//      default:
//        //do nothing
//        break;
//    }
  changeMode(2);
  }
  setColors();
}

//toggles on/off
//https://www.arduino.cc/en/Tutorial/Debounce
void checkButton(){
  int reading=digitalRead(buttonPin);
  if(reading != lastButtonState){
    lastDebounceTime=millis();
  }
  if((millis()-lastDebounceTime)>debounceDelay){
      if(reading != buttonState){
        buttonState=reading;
        if(buttonState==LOW){
          if(mode != 0){
            changeMode(0);
          }
          else{
            changeMode(1);
          }
        }
      }
      }
  lastButtonState=reading;
}

unsigned long previousProcess=0;
unsigned long sendInterval=50;
void processData(){
  if((millis()-previousProcess)>sendInterval){
    float data[6];
    getData(data);
    sendLSMData(data);
    previousProcess=millis();
  }
}

void getData(float data[]){
  lsm.read();
  data[0]=(float)lsm.accelData.x;
  data[1]=(float)lsm.accelData.y;
  data[2]=(float)lsm.accelData.z;
  data[3]=(float)lsm.magData.x;
  data[4]=(float)lsm.magData.y;
  data[5]=(float)lsm.magData.z;
}

void sendLSMData(float data[]){
  mySend((String)data[0]+" "+(String)data[1]+" "+(String)data[2]+" "+ (String)mode);
}

void comBegin(int speed){
  if(isBT){
    //passkey is 1234
    BT.begin(speed);
  }
  else{
    Serial.begin(speed);
  }
}

void mySend(String s){
  //add device ID
  s=idString+" "+s;
  if(isBT){
    BT.println(s);
  }
  else{
    Serial.println(s);
  }
}

boolean comAvailable(){
  boolean value;
  if(isBT){
    value=BT.available();
  }
  else{
    value=Serial.available();
  }
  return value;
}

int comRead(){
  int value;
  if(isBT){
    value=BT.parseInt();
  }
  else{
    value=Serial.parseInt();
  }
  return value;
}

//void warning(){
//  for(int i=0; i<4; i++){
//    tone(tonePin, 900);
//    delay(500);
//    tone(tonePin, 700);
//    delay(250);
//  }
//  noTone(tonePin);
//}

int LEDangles[]={355, 5, 67, 77, 139, 149, 211, 221, 283, 293};
void setLED(int i, int c[]){
  for(int j ; j<3; j++){
    if(c[j]<20){
      c[j]=0;
    }
  }
  if(i<6){
    pixelsA.setPixelColor(5-i, pixelsA.Color(c[0], c[1], c[2]));
    pixelsA.show();
  }
  else{
    pixelsB.setPixelColor(i-6, pixelsA.Color(c[0], c[1], c[2]));
    pixelsB.show();
  }
}
void setColors(){
  switch(mode){
    case 1:{
      float ratio= 0.7+ 0.3 * sin(((millis()/10)%360)*3.14/180);
      int tmp[3];
      for(int i=0; i<3; i++){
        long a=(endColor[i]-startColor[i])*(millis()-startCurrentMode);
        if(endColor[i]-startColor[i] <0){
          a=-abs(a);
        }
        color[i]=(a/mode1Duration+startColor[i])%256;
//        color[i]=startColor[i];
        color[i]=(int)(color[i]*ratio);
      }

      if(millis()-startCurrentMode>mode1Duration){
        changeMode(3);
      }
      break;}
    case 2:
      if((millis()-startCurrentMode)%1000<600){
        color[0]=200;
        color[1]=200;
        color[2]=200;
      }
      else{
        color[0]=0;
        color[1]=0;
        color[2]=0;
      }
      //possible drowning
      break;
    case 3:
      //10 minutes have passed
      if((millis()-startCurrentMode)%2000<1000){
        color[0]=0;
        color[1]=200;
        color[2]=0;
      }
      else{
        color[0]=0;
        color[1]=0;
        color[2]=0;
      }
      break;
    case 0:
        color[0]=0;
        color[1]=0;
        color[2]=0;
        break;
    default:
      break;
  }
  for(int i=0; i<10; i++){
    setLED(i, color);
  }
}

void changeMode(int i){
  switch(i){
    case 1:
      //normal mode
      //tracks how much time has passed since start of mode1
      break;
    case 2:
      //warning mode- possible drowning
      break;
    case 3:
      //warning mode- 10minutes have passed
      break;
    default:
      break;
  }
  startCurrentMode=millis();
  mode=i;
}

//phi is angle of LED
//theta is edge of current LED lgihting state
float getRatio(float phi, float theta){
  float width=100;
  if(theta-width<0){
    if(theta<phi || 360+theta-width < phi){
      return 0.0;
    }
    else if(phi<=theta){
      return (phi-theta+width)/width;
    }
    else{
      return (phi-360.0-theta+width)/width;
    }
  }
  else{
    return (phi-theta+width)/width;
  }
  return 0.0;
}
