<template>
  <div class="doc-nc-radio">
    <headTitle :level="1">Nc-Radio 单选</headTitle>
    <para>常用的操作组件</para>
    <headTitle :level="2">基础用法</headTitle>
    <para
      >此组件必须传入 id 与 name 属性来控制组件的行为，二者都接受一个 String
      类型的值，同时传入 value 属性管理选择的值</para
    >
    <para>推荐配合容器 nc-radio-group 使用</para>
    <example-radio-basic />
    <headTitle :level="2">禁用状态</headTitle>
    <para>使用 disabled 属性控制组件和容器的禁用行为</para>
    <para>禁用容器则将其包含的 radio 组件全部禁用</para>
    <example-radio-disabled />
    <headTitle :level="2">尺寸大小</headTitle>
    <para
      >使用 size 属性控制组件(nc-radio)的尺寸大小，默认的预设值有 large / small
      / mini 与 normal</para
    >
    <para>对容器使用将会覆盖掉所有组件已设 size 值</para>
    <example-radio-size />
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
import ExampleRadioDisabled from '@/views/Docs/Forms/Radio/Example/disabled.vue'
import ExampleRadioSize from '@/views/Docs/Forms/Radio/Example/size.vue'
</script>

<style scoped lang="postcss">
.doc-nc-radio {
  @apply inline-flex flex-col w-full h-full py-4 px-6 min-h-full;
}
</style>