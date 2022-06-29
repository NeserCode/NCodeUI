<template>
  <div class="doc-nc-input">
    <headTitle :level="1">Nc-Input 输入</headTitle>
    <para>常用的表单组件</para>
    <headTitle :level="2">基础用法</headTitle>
    <example-input-basic />
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
import ExampleInputBasic from '@/views/Docs/Forms/Input/Example/basic.vue'
</script>

<style scoped lang="postcss">
.doc-nc-input {
  @apply relative inline-flex flex-col w-full h-full py-4 px-6 min-h-full;
}
</style>