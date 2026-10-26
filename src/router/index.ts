import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { site } from '@/content'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Old paths kept as aliases so existing links still work.
    { path: '/', name: 'home', component: HomeView, alias: ['/cv', '/reach', '/hobbies'] },
    { path: '/blog', name: 'blog', component: () => import('../views/BlogIndexView.vue') },
    { path: '/blog/:slug', name: 'post', component: () => import('../views/BlogPostView.vue'), props: true },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) {
      // Coming from another page, wait for the home sections to render first.
      const delay = from.name && from.name !== to.name ? 120 : 0
      return new Promise((resolve) => setTimeout(() => resolve({ el: to.hash }), delay))
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (to.name !== 'post') document.title = to.name === 'blog' ? `${site.sections.blog.title.toLowerCase()} — ${site.name}` : site.name
})

export default router
