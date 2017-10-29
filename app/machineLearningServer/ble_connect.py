#coding utf-8
import serial
import re

def main():
    with serial.Serial('/dev/cu.HC-06-DevB-1', 9600, timeout=1) as ser:
        while True:
            c = ser.readline()
            d = re.findall('[0-9]+\.+[0-9]',str(c),flags=0)
            d = [float(i) for i in d]
            for i in range(0, len(d)):  #要素を1つずつ順番に出力します
                print(d[i])
        ser.close()

if __name__=="__main__":
    main()

