<template>
  <div class="doc-nc-button">
    <headTitle :level="1">Nc-Button 按钮</headTitle>
    <para>常用的操作组件</para>
    <headTitle :level="2">基础用法</headTitle>
    <nc-button>test</nc-button>
  </div>
</template>

<script setup>
import headTitle from '@/components/Native/HeadTitle/index.vue'
import para from '@/components/Native/Para/index.vue'
import NcButton from '@/components/Basic/Button/index.vue'
// import { ref } from 'vue'
</script>

<style scoped lang="postcss">
.doc-nc-button {
  @apply inline-flex flex-col w-full h-full;
}
</style>