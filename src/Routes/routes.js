import Vue from 'vue'
import Router from 'vue-router'
import MainLogin from '@/MainLogin.vue'
import index from '@/index.vue'
import Catalogo from '@/components/contents/Catalogo.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: 'Login',
          component: MainLogin
        },
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
            path: '/Catalogo',
            name: 'Catalogo',
            Component: Catalogo
        }
      ]
})


