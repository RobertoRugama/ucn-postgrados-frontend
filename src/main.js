import Vue from 'vue'
import App from './index.vue'
import vueRouter from 'vue-router'


import routes from '@/Routes/routes'

Vue.use(vueRouter)
const router = new vueRouter({
  routes,
  mode: 'history'
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
