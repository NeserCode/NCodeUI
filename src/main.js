import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Highlight.js 语法高亮
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript.js'
import hljsVuePlugin from '@highlightjs/vue-plugin'
// TailwindCss 样式导入
import '@/assets/styles/tailwind.css'

hljs.registerLanguage('javascript', javascript)

// Router meta 信息替换
router.beforeEach((to, from, next) => { if (to.meta.title) document.title = to.meta.title; next() })

createApp(App).use(router).use(hljsVuePlugin).mount('#app')
