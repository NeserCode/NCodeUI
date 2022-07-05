<template>
  <div class="doc-nc-radio">
    <headTitle :level="1">Nc-Radio 单选</headTitle>
    <para>常用的操作组件</para>
    <headTitle :level="2">基础用法</headTitle>
    <para>此组件必须传入 id 与 name 属性，二者都接受一个 String 类型的值</para>
    <para>配合容器 nc-radio-group 使用</para>
    <example-radio-basic />
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
import ExampleRadioBasic from '@/views/Docs/Forms/Radio/Example/basic.vue'
</script>

<style scoped lang="postcss">
.doc-nc-radio {
  @apply inline-flex flex-col w-full h-full py-4 px-6 min-h-full;
}
</style>