import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/docs',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import('@/views/Docs/index.vue')
  },
  {
    path: '/docs/dark',
    name: 'Docs-Dark',
    component: () => import('@/views/Docs/Others/dark.vue')
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
    path: '/docs/basic/scrollbar',
    name: 'Docs-Basic-Scrollbar',
    component: () => import('@/views/Docs/Basic/Scrollbar/index.vue')
  },
  {
    path: '/docs/forms/checkbox',
    name: 'Docs-Forms-Checkbox',
    component: () => import('@/views/Docs/Forms/Checkbox/index.vue')
  },
  {
    path: '/docs/forms/datepicker',
    name: 'Docs-Forms-Datepicker',
    component: () => import('@/views/Docs/Forms/Datepicker/index.vue')
  },
  {
    path: '/docs/forms/form',
    name: 'Docs-Forms-Form',
    component: () => import('@/views/Docs/Forms/Form/index.vue')
  },
  {
    path: '/docs/forms/input',
    name: 'Docs-Forms-Input',
    component: () => import('@/views/Docs/Forms/Input/index.vue')
  },
  {
    path: '/docs/forms/radio',
    name: 'Docs-Forms-Radio',
    component: () => import('@/views/Docs/Forms/Radio/index.vue')
  },
  {
    path: '/docs/forms/select',
    name: 'Docs-Forms-Select',
    component: () => import('@/views/Docs/Forms/Select/index.vue')
  },
  {
    path: '/docs/forms/slider',
    name: 'Docs-Forms-Slider',
    component: () => import('@/views/Docs/Forms/Slider/index.vue')
  },
  {
    path: '/docs/forms/switch',
    name: 'Docs-Forms-Switch',
    component: () => import('@/views/Docs/Forms/Switch/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
