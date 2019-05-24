// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import VueI18n from 'vue-i18n';
import ElementUI from "element-ui";
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import "element-ui/lib/theme-chalk/index.css";
import "@ztree/ztree_v3/js/jquery.ztree.core.min.js";
import "@ztree/ztree_v3/js/jquery.ztree.excheck.min.js";
import "@ztree/ztree_v3/css/zTreeStyle/zTreeStyle.css";
import "./lib/util";
import 'babel-polyfill';

Vue.use(ElementUI);
Vue.use(iView);
Vue.use(VueI18n);
const i18n = new VueI18n({ locale: 'zh_CN', })
Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  dictionary: { zh_CN }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: createElement => createElement(App)
  // components: { App },
  // template: '<App/>'
})
