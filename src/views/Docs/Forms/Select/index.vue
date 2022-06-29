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
    <headTitle :level="2">未选文本</headTitle>
    <para
      >使用 unchecked-text 属性控制在组件未选中时显示的文本，该属性接受一个
      String 类型的值，默认为 Unchecked</para
    >
    <example-select-unchecked />
    <headTitle :level="2">推荐用法</headTitle>
    <para
      >在使用此组件时，items 接受的数组虽然可以是字符串数组，但对 select
      组件本身来说，对象数组是一个更好的选择</para
    >
    <para
      >并且，只有当 items
      符合上述数据结构即对象数组后，才能够使用对应的功能</para
    >
    <example-select-options />
    <headTitle :level="2">禁用状态</headTitle>
    <headTitle :level="3">组件禁用</headTitle>
    <para>使用组件的 disabled 属性控制整个组件的禁用行为</para>
    <example-select-disabled-all />
    <headTitle :level="3">选项禁用</headTitle>
    <para>使用 items 属性对象中的 disabled 属性控制各个选项的禁用行为</para>
    <example-select-disabled />
    <headTitle :level="2">属性键值</headTitle>
    <para>😥 这部分等我什么时候做出来表格再写</para>
    <headTitle :level="2">Todo</headTitle>
    <para>✨ 分组(子菜单)</para>
    <placeholder />
  </div>
</template>

<script setup>
import headTitle from '@/components/Native/HeadTitle/index.vue'
import para from '@/components/Native/Para/index.vue'
import placeholder from '@/components/Native/Placeholder/index.vue'
// import { ref } from 'vue'
import ExampleSelectBasic from '@/views/Docs/Forms/Select/Example/basic.vue'
import ExampleSelectUnchecked from '@/views/Docs/Forms/Select/Example/unchecked.vue'
import ExampleSelectOptions from '@/views/Docs/Forms/Select/Example/options.vue'
import ExampleSelectDisabledAll from '@/views/Docs/Forms/Select/Example/disabled-all.vue'
import ExampleSelectDisabled from '@/views/Docs/Forms/Select/Example/disabled.vue'
</script>

<style scoped lang="postcss">
.doc-nc-select {
  @apply inline-flex flex-col w-full h-full py-4 px-6 min-h-full;
}
</style>