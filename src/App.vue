<template>
 
    <component :is="layout"></component>
  
</template>

<script>
import MainLogin from '@/MainLogin.vue'
import index from '@/index.vue'
import {mapState} from 'vuex'
export default {
  name: 'app',
  components: { MainLogin, index },
  computed: mapState(['layout']),
  data () {
    return {
      layout: 'MainLogin'
    }
  }
}
</script>

