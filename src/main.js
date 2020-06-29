// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
import '@/assets/area.js'
// import axios from 'axios'

// Vue.use(axios)
//引入vant组件信息
import vant from "vant";
import "vant/lib/index.css";
Vue.use(vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
