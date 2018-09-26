// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iView' //引入iView
import 'iview/dist/styles/iview.css' //使用css

import axios from 'axios' //引入axios
import echarts from 'echarts' //引入echarts

axios.defaults.withCredentials = true; //让ajax携带cookie

Vue.config.productionTip = false


Vue.use(iView)
//使用iView
Vue.prototype.$http = axios
//使用echarts
Vue.prototype.$echarts = echarts


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
