import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello/Index'

// import Hoge from '@/components/fuga/HogeHoge'

// validationです、コメントアウトを外して使ってください
// function authValidater () {
//  let validation = sessionStorage.getItem('accessToken')
//  if (validation !== null) {
//    return
//  } else {
//    return '/auth/signin'
//  }
// }

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
