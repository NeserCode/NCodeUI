<template>
  <div class="doc-nc-input">
    <headTitle :level="1">Nc-Input 输入</headTitle>
    <para>常用的表单组件</para>
    <headTitle :level="2">基础用法</headTitle>
    <headTitle :level="3">原生属性</headTitle>
    <para
      >此组件有较多的原生属性可以使用。如 spellcheck autocomplete
      等不参与组件独有功能的属性可以按照原有的用法直接使用</para
    >
    <example-input-basic />
    <headTitle :level="3">受控绑定</headTitle>
    <para>此组件是一个受控的组件，在接受 v-model 绑定之前无法改变或传入值</para>
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