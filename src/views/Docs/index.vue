<template>
  <div class="doc">
    <headTitle :level="1">开始使用</headTitle>
    <para>从这里开始，您将学习到如何一步步使用 NCodeUI 组件库。</para>
    <para>首先，使用包管理器添加组件库。</para>
    <highlightjs :lang="lang[0]" :code="code[0]" />
    <para
      >然后，如果您选择使用 NCodeUI, 那么您必须安装 Vue.js v3.0+, NCodeUI 是基于
      Vue3 来开发的。</para
    >
    <highlightjs :lang="lang[0]" :code="code[1]" />
    <para>安装完 Vue 后, 创建一个新的工程, 并在 main.js 中添加：</para>
    <highlightjs :lang="lang[1]" :code="code[2]" />
  </div>
</template>

<script setup>
import headTitle from '@/components/Native/HeadTitle/index.vue'
import para from '@/components/Native/Para/index.vue'
import { ref } from 'vue'

const code = ref([
  '$ npm install @nesercode/ncodeui -g',
  '$ npm install vue@lastest -g',
  `// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { installNCodeUI } from '@nesercode/ncodeui'

createApp(App).use(installNCodeUI).mount('#app')`
])
const lang = ref(['shell', 'javascript'])
</script>

<style scoped lang="postcss">
.doc {
  @apply flex flex-col w-full h-full;
}
</style>