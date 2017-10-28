// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import { sync } from 'vuex-router-sync'
import BootstrapVue from 'bootstrap-vue'

import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App) // これは App.vue を createElementしているということ
}).$mount('#app')
