import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: 'docs',
        name: 'Docs',
        component: () => import('@/views/Docs/index.vue'),
        children: [
          {
            path: 'basic',
            name: 'Docs-Basic',
            component: () => import('@/views/Docs/Basic/index.vue'),
            children: [
              {
                path: 'button',
                name: 'Docs-Basic-Button',
                component: () => import('@/views/Docs/Basic/Button/index.vue')
              },
              {
                path: 'link',
                name: 'Docs-Basic-Link',
                component: () => import('@/views/Docs/Basic/Link/index.vue')
              }
            ]
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
