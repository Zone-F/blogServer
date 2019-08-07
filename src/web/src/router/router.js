import Vue from 'vue'
import Router from 'vue-router'

//开发环境不适用懒加载
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)
// 路由守卫
// router.beforeEach((to, from, next) => {})

export const constantRouterMap = [
  {
    path: '/',
    component: _import('index'),
  },
  {
    path: '/login',
    component: _import('login'),
  },
  // {
  //   path: '/404',
  //   component: _import('404'),
  //   hidden: true
  // },
  // {
  //   path: '/*',
  //   component: _import('404'),
  // },
]


export default new Router({
  // mode: 'history',
  routes: constantRouterMap
})

