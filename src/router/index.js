import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/docs',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import('@/views/Docs/index.vue'),
    meta: {
      title: 'NCodeUI Docs'
    }
  },
  {
    path: '/docs/dark',
    name: 'Docs-Dark',
    component: () => import('@/views/Docs/Others/dark.vue'),
    meta: {
      title: 'NCodeUI Dark 暗黑模式'
    }
  },
  {
    path: '/docs/basic/button',
    name: 'Docs-Basic-Button',
    component: () => import('@/views/Docs/Basic/Button/index.vue'),
    meta: {
      title: 'NCodeUI Button 按钮'
    }
  },
  {
    path: '/docs/basic/link',
    name: 'Docs-Basic-Link',
    component: () => import('@/views/Docs/Basic/Link/index.vue'),
    meta: {
      title: 'NCodeUI Link 链接'
    }
  },
  {
    path: '/docs/basic/scrollbar',
    name: 'Docs-Basic-Scrollbar',
    component: () => import('@/views/Docs/Basic/Scrollbar/index.vue'),
    meta: {
      title: 'NCodeUI Scrollbar 滚动条'
    }
  },
  {
    path: '/docs/forms/checkbox',
    name: 'Docs-Forms-Checkbox',
    component: () => import('@/views/Docs/Forms/Checkbox/index.vue'),
    meta: {
      title: 'NCodeUI Checkbox 多选'
    }
  },
  {
    path: '/docs/forms/datepicker',
    name: 'Docs-Forms-Datepicker',
    component: () => import('@/views/Docs/Forms/Datepicker/index.vue'),
    meta: {
      title: 'NCodeUI Datepicker 日期选择'
    }
  },
  {
    path: '/docs/forms/form',
    name: 'Docs-Forms-Form',
    component: () => import('@/views/Docs/Forms/Form/index.vue'),
    meta: {
      title: 'NCodeUI Form 表单'
    }
  },
  {
    path: '/docs/forms/input',
    name: 'Docs-Forms-Input',
    component: () => import('@/views/Docs/Forms/Input/index.vue'),
    meta: {
      title: 'NCodeUI Input 输入'
    }
  },
  {
    path: '/docs/forms/radio',
    name: 'Docs-Forms-Radio',
    component: () => import('@/views/Docs/Forms/Radio/index.vue'),
    meta: {
      title: 'NCodeUI Radio 单选'
    }
  },
  {
    path: '/docs/forms/select',
    name: 'Docs-Forms-Select',
    component: () => import('@/views/Docs/Forms/Select/index.vue'),
    meta: {
      title: 'NCodeUI Select 选择'
    }
  },
  {
    path: '/docs/forms/slider',
    name: 'Docs-Forms-Slider',
    component: () => import('@/views/Docs/Forms/Slider/index.vue'),
    meta: {
      title: 'NCodeUI Slider 滑动条'
    }
  },
  {
    path: '/docs/forms/switch',
    name: 'Docs-Forms-Switch',
    component: () => import('@/views/Docs/Forms/Switch/index.vue'),
    meta: {
      title: 'NCodeUI Switch 开关'
    }
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
