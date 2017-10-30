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
3. もしも途中で溺れを検知したら、メインサーバーとアヒルへ通知。(status = 2)
4. 体温が十分温まったら、アヒルから通知が来るので、メインサーバーへ通知。(status = 3)

## Anomaly Detection Algorithm
### 実際に計測したデータ
![有人](https://github.com/jphacks/TK_1720/blob/master/app/analysis/images/With%20Human.png "human")

![有人](https://github.com/jphacks/TK_1720/blob/master/app/analysis/images/Without%20Human.png "no human")

![溺れ](https://github.com/jphacks/TK_1720/blob/master/app/analysis/images/Sanking!!.png "sanking")

これから、安全にお風呂に入っているかそうでないかの区別は加速度の振幅の変化のある無しで検知できるとした。        
(ここは、データが少ないこともありベースライン的な置き方になってしまっている。今後日常的に、作成したプロトタイプを使用し、データを集め、より科学的に正しい検知アルゴリズムとしたい。)
