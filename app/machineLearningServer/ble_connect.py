#coding utf-8
import numpy as np
import serial
import re

class LoverDuck(object):

    def __init__(self):
        self.t = 0
        self.last_move_t = 0
        self.LIMIT_TIME = 10000 #ms
        self.MOVE_THRESHOLD = 1000
        self.get_base_value()

    def get_base_value(self):
        """実験的に得た値を使用
        """
        # 水上
        self.base_x = -2737
        self.base_y = -3970
        self.base_z = 13934
        # 陸上(debug用)
        self.base_x = 256
        self.base_y = 1088
        self.base_z = 14592

    def connect_ble(self):
        """10msごとに受信
        """
        with serial.Serial('/dev/cu.HC-06-DevB-1', 9600, timeout=1) as ser:
            print("Start connected!")
            while True:
                # 時間update
                self.t += 10
                c = ser.readline()
                d = re.findall('[0-9]+\.+[0-9]',str(c),flags=0)
                x, y, z = [float(i) for i in d]
                print("x:", x, "y: ",y, "z: ",z)
                if self.__judge_if_move(x, y, z):
                    print("Detect Movement")
                    self.last_move_t = self.t
                else:
                    pass
                if self.t - self.last_move_t > self.LIMIT_TIME:
                    print("No Detection")
            ser.close()

    def __judge_if_move(self, x, y, z):
        """XYZ全方向で閾値を超えていたら動きと認識
        """
        if np.abs(x-self.base_x) > self.MOVE_THRESHOLD and np.abs(y-self.base_y) > self.MOVE_THRESHOLD and np.abs(z-self.base_z) > self.MOVE_THRESHOLD:
            return True
        else:
            return False

if __name__=="__main__":
    loverduck = LoverDuck()
    loverduck.connect_ble()

