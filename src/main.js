import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import {store} from './store'

import routes from '@/Routes/routes'

Vue.use(vueRouter)
const router = new vueRouter({
  routes
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App }, 
  template: '<App/>'
})
