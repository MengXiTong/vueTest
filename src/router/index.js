import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: resolve => require(['@/pages/index'], resolve),
    children: [{
        path: '/userInfo',
        name: 'userInfo',
        component: resolve => require(['@/pages/userInfo'], resolve),
        meta: {
          keepAlive: false // 不需要缓存
        }
      },
      {
        path: '/jqTest',
        name: 'jqTest',
        component: resolve => require(['@/pages/jqTest'], resolve),
        meta: {
          keepAlive: true // 需要缓存
        }
      }
    ]
  }]
})
