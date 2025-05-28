<template>
  <div id="app">
    <!-- Навигация будет в каждом компоненте, поэтому здесь только router-view -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/css/globalStyle.css';
</style>