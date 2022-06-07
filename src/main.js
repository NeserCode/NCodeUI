import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// TailwindCss 样式导入
import '@/assets/styles/tailwind.css'

createApp(App).use(router).mount('#app')
