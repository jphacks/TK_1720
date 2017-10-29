#include <Adafruit_Sensor.h>
#include <Adafruit_LSM303.h>
#include <Wire.h>
#include <SoftwareSerial.h>
SoftwareSerial BT(10,11);
//RX/TX
Adafruit_LSM303 lsm;
boolean isBT=false;
String idString="00";
int tonePin=2;

int buttonPin=3;
boolean isON=false;
int buttonState;
int lastButtonState=HIGH;
unsigned long lastDebounceTime=0;
unsigned long debounceDelay=50;

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
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  // toggle on/off states
  checkButton();
  
  if(isON){
    digitalWrite(LED_BUILTIN, HIGH);
  }else{
    digitalWrite(LED_BUILTIN, LOW);
  }

  // send accelerometer data once every 100ms
  processData();

  if(comAvailable()>0){
    int data=comRead();
    switch(data){
      case 1:
        warning();
        break;
      default:
        //do nothing
        break;
    }
  }
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
          isON=!isON;
        }
      }
      }
  lastButtonState=reading;
}

unsigned long previousProcess=0;
unsigned long sendInterval=100;
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
  mySend("x"+(String)data[0]);
  mySend("y"+(String)data[1]);
  mySend("z"+(String)data[2]);
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
  s=idString+s;
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

void warning(){
  for(int i=0; i<4; i++){
    tone(tonePin, 900);
    delay(500);
    tone(tonePin, 700);
    delay(250);
  }
  noTone(tonePin);
}

