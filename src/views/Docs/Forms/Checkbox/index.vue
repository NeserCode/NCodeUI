<template>
  <div class="doc-nc-checkbox">
    <headTitle :level="1">Nc-CheckBox 多选</headTitle>
    <para>常用的表单选择组件</para>
    <headTitle :level="2">基础用法</headTitle>
    <para>在默认未传入 boxStyle 情况下，按钮将会以默认风格呈现</para>
    <example-checkbox-basic />
    <headTitle :level="2">调整尺寸</headTitle>
    <para
      >使用 size 属性来调整多选选项的尺寸，该属性接受一个 String
      类型的值。可选的预设值有：mini / small / normal / large，默认尺寸为
      normal</para
    >
    <example-checkbox-size />
    <headTitle :level="2">禁用状态</headTitle>
    <para>使用 disabled 属性使用禁用状态</para>
    <example-checkbox-disabled />
    <headTitle :level="2">风格样式</headTitle>
    <para>使用 boxStyle 属性使用预设风格</para>
    <headTitle :level="3">平切样式</headTitle>
    <para
      >使用 boxStyle="toggle"
      使用预设的平切风格，该风格会隐藏原有的多选框样式</para
    >
    <example-checkbox-toggle />
    <headTitle :level="3">边框样式</headTitle>
    <para>使用 boxStyle="border" 使用预设的边框风格</para>
    <example-checkbox-border />
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

import ExampleCheckboxBasic from '@/views/Docs/Forms/Checkbox/Example/basic.vue'
import ExampleCheckboxSize from '@/views/Docs/Forms/Checkbox/Example/size.vue'
import ExampleCheckboxDisabled from '@/views/Docs/Forms/Checkbox/Example/disabled.vue'
import ExampleCheckboxToggle from '@/views/Docs/Forms/Checkbox/Example/toggle.vue'
import ExampleCheckboxBorder from '@/views/Docs/Forms/Checkbox/Example/border.vue'
</script>

<style scoped lang="postcss">
.doc-nc-checkbox {
  @apply relative inline-flex flex-col w-full h-full py-4 px-6 min-h-full;
}
</style>