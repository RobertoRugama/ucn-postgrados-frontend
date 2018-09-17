import MainLogin from '@/MainLogin.vue'
import index from '@/index.vue'
import Catalogo from '@/components/contents/Catalogo.vue'

const route = [
  { path: '/', component: index, name: 'Principal' },
  { path : '@/Catalogo', component: Catalogo, name: 'Catalogo'},
  { path : '@/MainLogin', component: MainLogin, name: 'MainLogin'}
]
export default route 

