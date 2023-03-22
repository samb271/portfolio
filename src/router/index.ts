import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cv',
      name: 'cv',
      component: HomeView
    },
    {
      path: '/reach',
      name: 'reach',
      component: HomeView
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: HomeView
    },
  ]
})

export default router
