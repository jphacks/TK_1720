# Web front

### lover-duck-web-front
- front Vue application
### mock-server
- dev用のserver、静的データを吐く

## how to build
```
$ npm install
$ npm run dev
```

## JPHACKSでの選定理由
- VDOM を用いた素早いレンダリングが可能なため、緊急性の高い通知を素早く検知できる
- micro service architectureを用い、APIサーバーと完全に切り離すことで、applicationの役割ごとの疎結合を実現し、開発工数を短縮する狙いがあった
- flux architectureを採用することで、データの整合性を保証し、異なるブラウザ間でのデータの整合性が取れるようにした
