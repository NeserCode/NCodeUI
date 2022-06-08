<template>
  <div class="doc">
    <sapn class="title">文档</sapn>
    <span class="text">以下为代码高亮测试</span>
    <highlightjs lang="javascript" :code="testCode" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

var testCode = ref(`watch($route, () => {
  if ($route.params.pathMatch) console.log($route.params.pathMatch)
  if ($route.name === 'Docs') initActiveItem(1)
  docs.value.forEach((element, index) => {
    if (element.path === $route.path) initActiveItem(index)
  })
})`)
</script>

<style scoped lang="postcss">
.doc {
  @apply flex flex-col w-full h-full;
}

.title {
  @apply inline-block mx-2 my-2 font-semibold text-3xl;
}
.text {
  @apply inline-block mx-4 my-4;
}

/* highlight.js Css */
pre {
  @apply px-8 py-4 rounded-lg
  bg-gray-900;
}
:deep(.hljs) {
  @apply text-gray-300 bg-gray-900;
}
:deep(.hljs-doctag),
:deep(.hljs-keyword),
:deep(.hljs-meta .hljs-keyword),
:deep(.hljs-template-tag),
:deep(.hljs-template-variable),
:deep(.hljs-type),
:deep(.hljs-variable.language_) {
  color: #d73a49;
}
:deep(.hljs-title),
:deep(.hljs-title.class_),
:deep(.hljs-title.class_.inherited__),
:deep(.hljs-title.function_) {
  color: #6f42c1;
}
:deep(.hljs-attr),
:deep(.hljs-attribute),
:deep(.hljs-literal),
:deep(.hljs-meta),
:deep(.hljs-number),
:deep(.hljs-operator),
:deep(.hljs-selector-attr),
:deep(.hljs-selector-class),
:deep(.hljs-selector-id),
:deep(.hljs-variable) {
  color: #005cc5;
}
:deep(.hljs-meta .hljs-string),
:deep(.hljs-regexp),
:deep(.hljs-string) {
  color: #a32f62;
}
:deep(.hljs-property) {
  color: aqua;
}
:deep(.hljs-built_in),
:deep(.hljs-symbol) {
  color: #e36209;
}
:deep(.hljs-code),
:deep(.hljs-comment),
:deep(.hljs-formula) {
  color: #6a737d;
}
:deep(.hljs-name),
:deep(.hljs-quote),
:deep(.hljs-selector-pseudo),
:deep(.hljs-selector-tag) {
  color: #22863a;
}
:deep(.hljs-subst) {
  color: #24292e;
}
:deep(.hljs-section) {
  color: #005cc5;
  font-weight: 700;
}
:deep(.hljs-bullet) {
  color: #735c0f;
}
:deep(.hljs-emphasis) {
  color: #24292e;
  font-style: italic;
}
:deep(.hljs-strong) {
  color: #24292e;
  font-weight: 700;
}
:deep(.hljs-addition) {
  color: #22863a;
  background-color: #f0fff4;
}
:deep(.hljs-deletion) {
  color: #b31d28;
  background-color: #ffeef0;
}
</style>