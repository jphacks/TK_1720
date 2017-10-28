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
