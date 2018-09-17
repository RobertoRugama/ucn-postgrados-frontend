
<template>
<div id="app">
    <CNHead></CNHead>
    <body class="app sidebar-mini rtl">
        <CNHeader></CNHeader>
        <CNSidebar></CNSidebar>
        <CNAside></CNAside>
         <router-view></router-view>
        <CNMain></CNMain>
       
        <CNFooter></CNFooter>
    </body>
</div>

</template>

<script>
import CNHead from '@/components/layouts/head.vue'
import CNHeader from '@/components/layouts/header.vue'
import CNSidebar from '@/components/includes/sidebar.vue'
import CNAside from '@/components/includes/aside.vue'
import CNMain from '@/components/includes/main.vue'
import CNFooter from '@/components/layouts/footer.vue'

export default {
   
    name: 'app',    
    components: { CNHead, CNHeader, CNSidebar, CNAside, CNMain, CNFooter }
}
</script>

        
    
    
