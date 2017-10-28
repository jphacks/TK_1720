# front-base

> Vue.js front base architecture

## All you have to do is only 3STEPs below
### STEP1
in terminal
```
$ git clone https://github.com/Queue-inc/front-base.git
$ mv front-base/ your-project-name/
$ cd your-project-name
$ git remote set-url origin git@git.example.com:foo/bar.git　// プロジェクトのリポジトリのURL
$ git commit --allow-empty -m "first commit" // 空コミット
```
### STEP2
in your editor

`./package-lock.json` にて<br>
`"name": "front-base"` → `"name": "your-project-name"`  
<br>
`./index.html` にて<br>
`<title>front-base</title>` → `<title>your-project-name</title>`
### STEP3
in terminal
```
$ npm install
$ npm run dev
```
### enjoy!!!
<br>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Content

## 構成

```

src
├── App.vue         // Appのルート. これがindex.htmlに呼ばれる
├── api             // 外部APIコール関係のファイル
│   └── common
├── assets
│   └── logo.png
├── components      // Vueコンポーネント群
│   ├── Hello
│   └── parts
├── main.js         // メインのScriptファイル
├── router          // ページのルーティング関係
│   └── index.js    // ここにルーティングを書き足す
├── stories         // Storybook用のフォルダ
│   └── index.js
├── stylus          // Stylusファイル群
│   └── main.styl   // Vuetifyのテーマのカスタムはここ
└── vuex            // アプリケーションロジック関係
    ├── base.js
    └── index.js

```

## Vueコンポーネントについて

まずスタイルガイドを熟読すべし

https://github.com/pablohpsilva/vuejs-component-style-guide/blob/master/README-JP.md



<!-- # Workflow

### 1. Building Component [Markup]

#### What's Storybook

We use Storybook to create style guide. In this case, style guide means a list of components.

Like this 👇

![Attlasian Style Gudie](https://raw.githubusercontent.com/Queue-inc/document_resources/master/styleguide1.png)

Right after the finishing building the wireframe of the project, web engineer begin building components.

You can see two directories related to Storybook. Which are `/.storybook` and `/src/stories`.

Let me show how these works.

#### Use other external packages

Basically, you don't need to make any change on any files under `/.storybook`. I already set up everything you need, except one case.

If you need to import and use other external vue components, you need to add codes to `/.storybook/config.js` like this 👇

```Javascript
// import external package
import BootstrapVue from 'bootstrap-vue'
// Clarify using another package
Vue.use(BootstrapVue)
```

#### Add new components to Storybook

If you need to just create new components, just care about `/src/stories`. Here is where everything happens.

```Javascript
// import components you built
import Welcome from './Welcome.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));
```

Every `storiesOf()` makes a section you can see on the sidebar on the Storybook you built.

After adding new components to storybook, launch the storybook and see what's happening.

```sh
npm run storybook
```

Okay, that's everything.

** KEEP CALM AND BUILD COMPONENTS ** -->
