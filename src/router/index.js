import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/pages/index'], resolve)
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: resolve => require(['@/pages/userInfo'], resolve)
    }
  ]
})
