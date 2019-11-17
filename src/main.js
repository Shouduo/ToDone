import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import animated from 'animate.css'
import _ from 'lodash'
import VueCookies from 'vue-cookies'

// var Vue = require('vue');
// var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookies)
// import jquery from 'jquery'

// Vue.use(animated)
// Vue.use(jquery)
Vue.prototype._ = _
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
