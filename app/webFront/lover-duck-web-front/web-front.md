# フロントエンド全体方針

## 概要

### ■ 再利用可能なComponent開発によって、全てのコードをチーム横断的財産とする。

すべての開発(code + design)をComponent単位での開発 + 管理とし、徹底的に再利用・再活用を行う。これら全てがチームの財産となり、開発スピードは加速していく。

具体的には、

** Vue.js + Atomic Design **

によりこれを達成する。

#### 参考
- https://jp.vuejs.org/index.html
- http://postd.cc/the-unicorn-workflow-design-to-code-with-atomic-design-principles-and-sketch/
- https://www.cyberagent.co.jp/technicalcreator/article/id=12462



### ■ 型付言語とフレームワークの活用によって、安定した品質を達成する。

シンプルで可読なコードを書くことを重視する。

アーキテクチャに関しては、Vue.jsの採用により一定の可読性を担保した上で、vuexというnpm(npmについては後述)を用いてfluxフレームワークを採用し明快なアーキテクチャを設計する。

また、型の積極的利用(** Typescriptによる **)によって、安定した開発を実現し、スケーラビリティも担保する。

具体的には、Typescriptの採用には次のようなメリットがある。

- コンパイル時のエラーによってバグを早期に発見する
- 型定義によって、より可読なコードを書く
- ES6との互換性

## How Web-Front Does Work

### 概要(初学者むけ)
Webフロントは、サーバーにhttp(s) request を送り、その response を用いてアプリケーションのviewをrenderingすることで成り立っています。

#### http request
http requestには種類があります。[wikipediaのリンク]
ほとんどのケースにおいては、このうち、post, get, put, deleteを使います。それぞれは以下のような役割になっています。
- post: DBに新たなレコードを追加する[CREATE]
- get: データベース(Database: DB)のデータをフェッチする[READ]
- put: DBのレコードの内容を更新する[UPDATE]
- delete: DBのレコードを削除する[DELETE]

この4つの基本形をまとめて、CRUDと呼びます。このCRUD操作の組み合わせにより、アプリケーションは成立しています。

#### APIとの会話
APIでは、DBの中のそれぞれのデータソースに対して、requestを送る先である endpoint を提供します。たとえば、ログイン機能を持ったつぶやきシステムを想定しましょう。ここではフォロー関係はなく、ただみんなで同じ場所につぶやきを投稿するとします。

データとして想定されるのは、それぞれのユーザー情報を保持するuserテーブルと、つぶやき内容を保持するpostテーブルですね。するとAPIは、/userと/postという2つの endpoint を提供します。ここで、仮にこのサイトがabc.comというドメインであるとすると、

- http://www.abc.com/user
- http://www.abc.com/post

というエンドポイントにアクセスすることで、responseを得ることができます。このエンドポイントに対して、getやpostを行うとアプリケーションが機能するわけです。たとえば、新規ユーザーの登録は、/userにpost requestを、つぶやき一覧の取得は、/postにget requestを送ることで行うことができます。このリクエストに、様々なパラメータを含ませることで、よりリッチな挙動をさせることができます。サーバーサイドでは主にこのデータのやり取りを行います。

本稿では、このAPIへのrequestから、そのresponseをfetchしてviewにrenderingする部分を見ていきます。

### 採用ライブラリ・ツールについて

#### パッケージマネージャ: npm
フロントエンドのライブラリはほとんどjavascriptで書かれており、node.jsを持ちて管理されます。node.jsはjavascriptのサーバーサイド向けライブラリになります。

プロジェクトのディレクトリにライブラリを追加する際には、圧縮されたソースコードをダウンロードしてきて、配置して読み込ませることもありますが、パッケージマネージャを使うことが多いです。最もメジャーなものは、npm(node package manager)とbowerです。今回はnpmを用います。

#### フロントエンドフレームワーク: Vue.js

#### 開発言語: JavaScript(ES6)

#### タスクランナー

#### 依存解決

#### ユニットテスト

#### Viewテスト
