import Vue from 'vue'
import Router from 'vue-router'

import Login from './map/Login'
import Home from './map/Home'

//重定向 放最后面
import Redirect from './map/Redirect'

Vue.use(Router);

export default new Router({
  routes: [
    Login, //登录模块
    Home, //首页概览
    Redirect, //路由重定向(访问不存在的页面时，重定向到这个页面) 放最后面
  ]
})
