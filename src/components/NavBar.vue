<template>
  <nav class="navigation">
    <ul class="nav-list">
      <li class="nav-item"><router-link class="link" :class="{ active: $route.name === 'home' }" to="/">Home</router-link></li>
      <li class="nav-item"><router-link class="link" :class="{ active: $route.name === 'gallery' }" to="/gallery">Gallery</router-link></li>
      <li class="nav-item"><router-link class="link" :class="{ active: $route.name === 'about' }" to="/about">About</router-link></li>
      
      <li class="auth-item">
        <span class="auth-links">
          <router-link class="link" :class="{ active: $route.name === 'registration' }" to="/registration">register</router-link>
          <span class="separator">or</span>
          <router-link class="link" :class="{ active: $route.name === 'login' }" to="/login">log in</router-link>
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
<style>
@import '@/assets/css/navStyle.css';
</style>