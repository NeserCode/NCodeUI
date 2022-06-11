<template>
  <div class="doc-nc-button">
    <headTitle :level="1">Nc-Button 按钮</headTitle>
    <para>常用的操作组件</para>
    <headTitle :level="2">基础用法</headTitle>
    <para>在默认未传入 btnStyle 情况下，按钮将会以默认风格呈现</para>
    <div>
      <nc-button @click="testLog('测试')">测试</nc-button> |
      <nc-button @click="testLog('Test')">Test</nc-button>
    </div>
  </div>
</template>

<script setup>
import headTitle from '@/components/Native/HeadTitle/index.vue'
import para from '@/components/Native/Para/index.vue'
import NcButton from '@/components/Basic/Button/index.vue'
// import { ref } from 'vue'

function testLog (s) {
  console.log(s)
}
</script>

<style scoped lang="postcss">
.doc-nc-button {
  @apply inline-flex flex-col w-full h-full;
}
</style>