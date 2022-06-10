<template>
  <div class="doc">
    <headTitle :level="1">开始使用</headTitle>
    <para>从这里开始，您将学习到如何一步步使用 NCodeUI 组件库。</para>
    <para>首先，使用包管理器添加组件库。</para>
    <highlightjs lang="javascript" :code="code[0]" />
    <para
      >然后，如果您选择使用 NCodeUI, 那么您必须安装 Vue.js v3.0+, NCodeUI 是基于
      Vue3 来开发的。</para
    >
    <highlightjs lang="javascript" :code="code[1]" />
    <para>安装完 Vue 后, 创建一个新的工程, 并在 main.js 中添加：</para>
    <highlightjs lang="javascript" :code="code[2]" />
  </div>
</template>

<script setup>
import headTitle from '@/components/Native/HeadTitle/index.vue'
import para from '@/components/Native/Para/index.vue'
import { ref } from 'vue'

var code = ref([
  'npm install @nesercode/ncodeui -g',
  'npm install vue@lastest -g',
  `// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { installNCodeUI } from '@nesercode/ncodeui'

createApp(App).use(installNCodeUI).mount('#app')`
])
</script>

<style scoped lang="postcss">
.doc {
  @apply flex flex-col w-full h-full;
}

/* highlight.js Css */
pre {
  @apply px-6 py-4 mx-16 my-4 rounded-md border
  bg-gray-300 dark:bg-gray-900 border-gray-600
  overflow-auto;
}
</style>

<style lang="postcss">
.hljs {
  @apply text-gray-800 bg-gray-300
  dark:text-gray-300 dark:bg-gray-900;
}
.hljs-doctag,
.hljs-keyword,
.hljs-meta .hljs-keyword,
.hljs-template-tag,
.hljs-template-variable,
.hljs-type,
.hljs-variable.language_ {
  color: #d73a49;
}
.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-title.function_ {
  color: #6f42c1;
}
.hljs-attr,
.hljs-attribute,
.hljs-literal,
.hljs-meta,
.hljs-number,
.hljs-operator,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-id,
.hljs-variable {
  color: #005cc5;
}
.hljs-meta .hljs-string,
.hljs-regexp,
.hljs-string {
  color: #a32f62;
}
.hljs-property {
  color: aqua;
}
.hljs-built_in,
.hljs-symbol {
  color: #e36209;
}
.hljs-code,
.hljs-comment,
.hljs-formula {
  color: #6a737d;
}
.hljs-name,
.hljs-quote,
.hljs-selector-pseudo,
.hljs-selector-tag {
  color: #22863a;
}
.hljs-subst {
  color: #24292e;
}
.hljs-section {
  color: #005cc5;
  font-weight: 700;
}
.hljs-bullet {
  color: #735c0f;
}
.hljs-emphasis {
  color: #24292e;
  font-style: italic;
}
.hljs-strong {
  color: #24292e;
  font-weight: 700;
}
.hljs-addition {
  color: #22863a;
  background-color: #f0fff4;
}
.hljs-deletion {
  color: #b31d28;
  background-color: #ffeef0;
}
</style>