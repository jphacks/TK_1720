#coding utf-8
import json
import numpy as np
import serial
import urllib.request

class LoverDuck(object):

    def __init__(self):
        self.t = 0
        self.status = 0 # 0:off, 1:on, 2: sanking 3: end
        self.last_move_t = 0
        self.LIMIT_TIME = 3000 #ms
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
        self.base_y = 2000
        self.base_z = 14592

    def connect_ble(self):
        """10msごとに受信
        """
        with serial.Serial('/dev/cu.HC-06-DevB-1', 9600, timeout=1) as ser:
            print("Start connected!")
            while True:
                # 時間update
                self.t += 10
                # 信号受信
                byte_line = ser.readline()
                str_line = byte_line.decode('utf-8') 
                try:
                    unique_id, x, y, z, status = str_line.split()
                    # type convert
                    x = float(x)
                    y = float(y)
                    z = float(z)
                    unique_id = str(unique_id)
                    status = int(status)
                    print("x:", x, "y: ",y, "z: ",z)
                except:
                    continue
                # start ロジック
                if self.__judge_if_start(status):
                    self.__start_post_to_Kanshiho()
                if self.__judge_if_end(status):
                    self.__end_post_to_Kanshiho()
                self.status = status
                # move ロジック
                if self.__judge_if_move(x, y, z):
                    print("Detect Movement")
                    self.last_move_t = self.t
                else:
                    pass
                if self.t - self.last_move_t > self.LIMIT_TIME:
                    print("No Movement")
                    self.__alert_post_to_Kanshiho()
                    self.__alert_to_duck(ser)
                    break
            ser.close()

    def __judge_if_start(self, new_status):
        """BLE接続した状態で、ボタンが押され、ステータスが0->1に変わるとtrue
        """
        if self.status == 0 and new_status == 1:
            return True
        else:
            return False

    def __judge_if_end(self, new_status):
        """BLE接続した状態で、体が十分に温まり、ステータスが1->3に変わるとtrue
        """
        if self.status == 1 and new_status == 3:
            return True
        else:
            return False

    def __judge_if_move(self, x, y, z):
        """XYZ全方向で閾値を超えていたら動きと認識
        """
        if np.abs(x-self.base_x) > self.MOVE_THRESHOLD and np.abs(y-self.base_y) > self.MOVE_THRESHOLD and np.abs(z-self.base_z) > self.MOVE_THRESHOLD:
            return True
        else:
            return False

    def __start_post_to_Kanshiho(self):
        """Kanshihoさんにお風呂に入ったことを伝える
        """
        url = "https://loverduck.herokuapp.com/api/bath/create"
        method = "POST"
        headers = {"Content-Type" : "application/json"}

        # PythonオブジェクトをJSONに変換する
        obj = {"unique_id": "qe3443rfq43"} 
        json_data = json.dumps(obj).encode("utf-8")
        # httpリクエストを準備してPOST
        request = urllib.request.Request(url, data=json_data, method=method, headers=headers)
        print("POST to Kanshiho")
        print(request.data)
        with urllib.request.urlopen(request) as response:
            response_body = response.read().decode("utf-8")
            print(response_body)

    def __end_post_to_Kanshiho(self):
        """Kanshihoさんにお風呂に入ったことを伝える
        """
        url = "https://loverduck.herokuapp.com/api/bath/end"
        method = "POST"
        headers = {"Content-Type" : "application/json"}

        # PythonオブジェクトをJSONに変換する
        obj = {"unique_id": "qe3443rfq43"} 
        json_data = json.dumps(obj).encode("utf-8")
        # httpリクエストを準備してPOST
        request = urllib.request.Request(url, data=json_data, method=method, headers=headers)
        print("POST to Kanshiho")
        print(request.data)
        with urllib.request.urlopen(request) as response:
            response_body = response.read().decode("utf-8")
            print(response_body)

    def __alert_post_to_Kanshiho(self):
        """Kanshihoさんにラブコールポストを送る
        """
        url = "https://loverduck.herokuapp.com/api/alert/create"
        method = "POST"
        headers = {"Content-Type" : "application/json"}

        # PythonオブジェクトをJSONに変換する
        obj = {"unique_id": "qe3443rfq43"} 
        json_data = json.dumps(obj).encode("utf-8")
        # httpリクエストを準備してPOST
        request = urllib.request.Request(url, data=json_data, method=method, headers=headers)
        print("POST to Kanshiho")
        print(request.data)
        with urllib.request.urlopen(request) as response:
            response_body = response.read().decode("utf-8")
            print(response_body)

    def __alert_to_duck(self, ser):    
        """Duckにアラートを送る。
        """
        print("Alert to Duck")
        flag=bytes("a",'utf-8') #シリアル通信で文字を送信する際は, byte文字列に変換する
        ser.write(flag)

if __name__=="__main__":
    loverduck = LoverDuck()
    loverduck.connect_ble()
