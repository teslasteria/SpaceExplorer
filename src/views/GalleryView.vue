<template>
  
    <!-- nav  -->
    <NavBar />
    <h1>Gallery</h1>
    <TheFooter />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar,
    TheFooter
  }
}
</script>

<style scoped>
/* @import '@/assets/css/style.css'; */
</style>