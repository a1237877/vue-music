// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import store from './vuex/store'

Vue.use(VueLazyload)
 
// or with options
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: '../static/img/loading.gif',
  // attempt: 1
})

FastClick.attach(document.body);

Vue.config.productionTip = false
import {
  Toast,
  loading
} from '@/common/plugin'

Vue.use(Toast)
Vue.use(loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
