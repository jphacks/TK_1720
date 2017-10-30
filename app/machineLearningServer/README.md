# Machine Learning Server
ハードウェア(アヒル, LoverDuck)と連携して、センサの値からメインサーバーへのロジック管理を行う。

## environment
* Python3

## requirement
* future==0.16.0            # via serial
* iso8601==0.1.12           # via serial
* numpy==1.13.3
* pyyaml==3.12              # via serial
* serial==0.0.15

## logic
1. アヒルとble接続します。(status = 0)
2. アヒルのボタンが押されたら、入浴開始の合図、メインサーバーへ通知。(status = 1)
3. もしも途中で溺れを検知したら、メインサーバーへ通知。(status = 2)
4. 体温が十分温まったら、アヒルから通知が来るので、メインサーバーへ通知。(status = 3)

## Anomaly Detection Algorithm

