# in the duck
アヒルの内部で使われているコードです

# 回路図
![circuit](/images/LoverDuck_scheme.png?raw=true)

# 使用デバイス
リンクをクリックすると、購入できるサイトに飛びます
### [Arduino nano(互換機)](http://www.aitendo.com/product/10700)
* Arduino nanoの半額ほどで買える
* 普通のArduinoとは異なる、CH340GというUSB-シリアル変換チップが搭載されているので、別途ドライバーをインストールする必要があり
* 9Vの乾電池と、VinとGNDを繋ぐことで電源供給した
* このモジュール上に搭載された５V変換素子のASM1117は、1Aまで流せるので、全てのデバイスへの電源供給はこれ一つで足りた

### [加速度センサ LSM303](https://strawberry-linux.com/catalog/items?code=12114)
* I2C規格でArduinoと通信
* 実はコンパスも搭載されている
* 説明書にある通り、VDDとVDD_IOを接続する必要あり（これをちゃんと読んでおらず、値が返ってこなくて泣きを見た）
* processData()内で、10msごとにこのセンサの値を読み取って、加速度の値をBluetoothで送信している

### [Bluetoothモジュール HC-06](http://www.aitendo.com/product/9905)
* Arduinoのpin 10&11に繋いで使用
* 普通のシリアル通信と同じように使えてとても便利

### [LEDモジュール neopixels](http://www.akiba-led.jp/product/963)
* デイジーチェーン状に繋げば、一つ一つのLEDの色をコントロールすることが可能
