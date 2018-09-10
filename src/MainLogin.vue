<template>
<div id="login">
  <CNHeadLogin></CNHeadLogin>
  <CNBodyLogin></CNBodyLogin>
</div>
</template>

<script>
import CNHeadLogin from '@/components/login/HeadLogin.vue'
import CNBodyLogin from '@/components/login/BodyLogin.vue'


export default {
  components: { CNHeadLogin, CNBodyLogin }
}
</script>


