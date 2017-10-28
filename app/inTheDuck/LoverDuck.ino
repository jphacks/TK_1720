#include <Adafruit_Sensor.h>
#include <Adafruit_LSM303.h>
#include <Wire.h>
#include <SoftwareSerial.h>
SoftwareSerial BT(10,11);
//RX/TX
Adafruit_LSM303 lsm;
boolean isBT=true;
int idString="00";
void setup() {
  // put your setup code here, to run once:
  comBegin(9600);
  //https://store.arduino.cc/usa/arduino-nano
  //https://learn.adafruit.com/lsm303-accelerometer-slash-compass-breakout/coding
  //I2C: A4 (SDA) and A5 (SCL)
  if(!lsm.begin()){
    Serial.println("unable to initialize the LSM303.");
    while(1);
  }
}

void loop() {
  // put your main code here, to run repeatedly:
  float data[6];
  getData(data);
  sendLSMData(data);
  if(comAvailable()>0){
    
  }
  delay(100);
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


