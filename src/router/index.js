import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/pages/index'], resolve), //这种方式进行懒加载已经Out了
      // () => import(/* webpackChunkName: "index" */ '@/pages/index') 建议使用这种
      // resolve => require.ensure([], () => resolve(require('@/pages/index')), 'index');
      children: [
        {
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
        },
        {
          path: '/cssHtml',
          name: 'cssHtml',
          component: resolve => require(['@/pages/cssHtml'], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: '/dota2',
          name: 'dota2',
          component: resolve => require(['@/pages/dota2'], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: '/vueTest',
          name: 'vueTest',
          component: resolve => require(['@/pages/vueTest'], resolve),
          meta: {
            keepAlive: true // 需要缓存
          },
          children: [
            {
              path: 'routerTest',
              name: 'routerTest',
              components: {
                default: { template: '<div>default内容</div>' },
                left: { template: '<div>left内容</div>' },
                right: { template: '<div>right内容</div>' }
              }
            },{
              path: 'redirect',
              name: 'redirect',
              redirect: 'routerTest'
            }
          ]
        },
        {
          path: '/lodashTest',
          name: 'lodashTest',
          component: resolve => require(['@/pages/lodashTest'], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        }
      ]
    }
  ]
});
