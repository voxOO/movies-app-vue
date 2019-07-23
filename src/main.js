import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import { PaginationPlugin } from 'bootstrap-vue'
Vue.use(PaginationPlugin)

import { 	BTableLite } from 'bootstrap-vue'
Vue.component('b-table-lite', 	BTableLite)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
