import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/pages/Hello/Index'

import LP from '@/components/LP'
// import Hoge from '@/components/fuga/HogeHoge'
import Signin from '@/components/auth/api/authSignin'
import Signup from '@/components/auth/api/authSignup'
import Profile from '@/components/auth/api/authProfile'
import ProfileEdit from '@/components/auth/api/authProfileEdit'
import PasswordEdit from '@/components/auth/api/authPasswordEdit'

import CreateDuck from '@/components/duck/duckCreate'
import RegisterDuck from '@/components/duck/duckRegister'
import DuckTop from '@/components/duck/Top'
import DuckDetail from '@/components/duck/DuckDetail'

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
      path: '/',
      name: 'LP',
      component: LP
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/profile/edit',
      name: 'ProfileEdit',
      component: ProfileEdit
    },
    {
      path: '/password/edit',
      name: 'PasswordEdit',
      component: PasswordEdit
    },
    {
      path: '/duck/create',
      name: 'CreateDuck',
      component: CreateDuck
    },
    {
      path: '/duck/register',
      name: 'RegisterDuck',
      component: RegisterDuck
    },
    {
      path: '/duck',
      name: 'DuckTop',
      component: DuckTop
    },
    {
      path: '/duck/detail/:id',
      name: 'DuckDetail',
      component: DuckDetail
    }
  ]
})
