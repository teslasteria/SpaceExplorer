import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
// import AccessoriesView from '../views/AccessoriesView.vue'
// import SouvenirsView from '../views/SouvenirsView.vue'
// import VueAppView from '../views/VueAppView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
//   { path: '/about', name: 'about', component: AboutView },
//   { path: '/accessories', name: 'accessories', component: AccessoriesView },
//   { path: '/souvenirs', name: 'souvenirs', component: SouvenirsView },
  // { path: '/vue-app', name: 'vue-app', component: VueAppView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router