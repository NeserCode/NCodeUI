import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// TailwindCss 样式导入
import '@/assets/styles/tailwind.css'

// Router meta 信息替换
router.beforeEach((to, from, next) => { if (to.meta.title) document.title = to.meta.title; next() })

createApp(App).use(router).mount('#app')
