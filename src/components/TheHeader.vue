<template>
    <header class="header">
      <div class="container header__container">
        <a href="/" class="logo">
          <!-- <img src="@/assets/img/sea-wave-clipart-lg.png" alt="Логотип" class="logo__img"> -->
        </a>
        
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item" v-for="link in links" :key="link.path">
              <router-link :to="link.path" class="nav__link">{{ link.title }}</router-link>
            </li>
          </ul>
        </nav>
        
        <button class="burger" @click="toggleMenu" aria-label="Меню">
          <span class="burger__line"></span>
        </button>
      </div>
    </header>
  </template>
  
  <script>
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>