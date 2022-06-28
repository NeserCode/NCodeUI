<template>
  <div class="doc-nc-select">
    <headTitle :level="1">Nc-Select 选择</headTitle>
    <para>常用的选择输入组件</para>
    <headTitle :level="2">基础用法</headTitle>
    <para
      >使用 items 与 v-model 为组件分别传入选项与预选值，这两个属性分别接受
      Array 与 String / Number 类型的值</para
    >
    <example-select-basic />
    <headTitle :level="2">推荐用法</headTitle>
    <para
      >在使用此组件时，items 接受的数组虽然可以是字符串数组，但对 select
      组件本身来说，对象数组是一个更好的选择</para
    >
    <example-select-options />
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
import ExampleSelectBasic from '@/views/Docs/Forms/Select/Example/basic.vue'
import ExampleSelectOptions from '@/views/Docs/Forms/Select/Example/options.vue'
</script>

<style scoped lang="postcss">
.doc-nc-select {
  @apply relative inline-flex flex-col w-full h-full py-4 px-6 min-h-full;
}
</style>