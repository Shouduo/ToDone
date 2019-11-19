import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import _ from 'lodash'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.prototype._ = _
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
