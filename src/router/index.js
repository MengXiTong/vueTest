import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      name: 'index',
      component: resolve => require(['@/pages/index'], resolve), //这种方式进行懒加载已经Out了
      // () => import(/* webpackChunkName: "index" */ '@/pages/index') 建议使用这种
      // resolve => require.ensure([], () => resolve(require('@/pages/index')), 'index');
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
          children: [{
              path: 'routerTest',
              name: 'routerTest',
              components: {
                default: {
                  template: '<div>default内容</div>'
                },
                left: {
                  template: '<div>left内容</div>'
                },
                right: {
                  template: '<div>right内容</div>'
                }
              }
            },
            {
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
        },
        {
          path: '/jsTest',
          name: 'jsTest',
          component: resolve => require(['@/pages/jsTest'], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: '/mapTest',
          name: 'mapTest',
          component: resolve => require(['@/pages/mapTest'], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: '/BMapTest',
          name: 'BMapTest',
          component: resolve => require(['@/pages/BMapTest'], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: '/TMapTest',
          name: 'TMapTest',
          component: resolve => require(['@/pages/TMapTest'], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: '/leafletMapTest',
          name: 'leafletMapTest',
          component: resolve => require(['@/pages/leafletMapTest'], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: '/createjsTest',
          name: 'createjsTest',
          component: resolve => require(['@/pages/createjsTest'], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: '/dataV',
          name: 'dataV',
          component: resolve => require(['@/pages/dataV'], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: '/iframeTest',
          name: 'iframeTest',
          component: resolve => require(['@/pages/iframeTest'], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        {
          path: '/easyFlowTest',
          name: 'easyFlowTest',
          component: resolve => require(['@/pages/easyFlowTest'], resolve),
          meta: {
            keepAlive: true // 需要缓存
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import ( /* webpackChunkName: "login" */ '@/pages/login')
    },
    {
      path: '/layout',
      name: 'layout',
      component: () =>
        import ( /* webpackChunkName: "layout" */ '@/pages/layout'),
      children: [{
          path: 'manage',
          name: 'manage',
          component: () =>
            import ( /* webpackChunkName: "manage" */ '@/pages/manage')
        },
        {
          path: 'privilege',
          name: 'privilege',
          component: () =>
            import ( /* webpackChunkName: "privilege" */ '@/pages/privilege')
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: () =>
            import ( /* webpackChunkName: "statistics" */ '@/pages/statistics')
        }
      ]
    },
    {
      path: '/DPSY0001',
      name: 'DPSY0001',
      component: () =>
        import ( /* webpackChunkName: "DPSY0001" */ '@/pages/DPSY0001')
    },
    {
      path: '/DPSY0003',
      name: 'DPSY0003',
      component: () =>
        import ( /* webpackChunkName: "DPSY0003" */ '@/pages/DPSY0003')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
