import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import('@/views/Docs/index.vue')
  },
  {
    path: '/docs/basic/button',
    name: 'Docs-Basic-Button',
    component: () => import('@/views/Docs/Basic/Button/index.vue')
  },
  {
    path: '/docs/basic/link',
    name: 'Docs-Basic-Link',
    component: () => import('@/views/Docs/Basic/Link/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
