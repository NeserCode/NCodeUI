<template>
  <div class="doc-nc-switch">
    <headTitle :level="1">Nc-Switch </headTitle>
    <para>常用的操作组件</para>
    <headTitle :level="2">基础用法</headTitle>
    <para>在默认未传入 btnStyle 情况下，按钮将会以默认风格呈现</para>
    <headTitle :level="2">属性键值</headTitle>
    <para>😥 这部分等我什么时候做出来表格再写</para>
    <placeholder />
  </div>
</template>

<script setup>
import headTitle from '@/components/Native/HeadTitle/index.vue'
import para from '@/components/Native/Para/index.vue'
import placeholder from '@/components/Native/Placeholder/index.vue'
// import { ref } from 'vue'
</script>

<style scoped lang="postcss">
.doc-nc-switch {
  @apply relative inline-flex flex-col w-full h-full py-4 px-6 min-h-full;
}
</style>