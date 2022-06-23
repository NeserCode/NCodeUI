<template>
  <div class="doc-nc-switch">
    <headTitle :level="1">Nc-Switch 开关</headTitle>
    <para>常用的表单操作组件</para>
    <headTitle :level="2">基础用法</headTitle>
    <para
      >在默认情况下，开关将会以默认风格呈现，使用 v-model 绑定一个 Boolean
      类型的值以管理数据</para
    >
    <example-switch-basic />
    <headTitle :level="2">文字描述</headTitle>
    <para>对开关开和关状态的文字描述</para>
    <headTitle :level="3">两侧文字描述</headTitle>
    <para
      >在默认情况下，开关没有描述文字，如需对开和关两种状态进行说明描述使用，要对
      active-text 与 inactive-text
      属性传入一个字符串类型的值，默认传入的值会被渲染在开关两侧
    </para>
    <example-switch-activeText />
    <headTitle :level="3">行内文字描述</headTitle>
    <para
      >在两侧文字描述的基础上使用 inner-mode
      属性控制文字描述是否在开关内部，该属性接受一个 Boolean 类型的值</para
    >
    <para>建议传入两个较短的字符串，否则效果较差</para>
    <example-switch-inner />
    <headTitle :level="2">禁用状态</headTitle>
    <para
      >对 disabled 属性传入一个 Boolean 类型的值，来控制开关组件的禁用行为</para
    >
    <para
      >同样的，这里的禁用行为并不会阻止点击事件的发生，只会阻拦开关的切换行为</para
    >
    <example-switch-disabled />
    <headTitle :level="2">圆形样式</headTitle>
    <para
      >使用 round-mode 属性控制开关是否使用圆形开关样式，该属性接受一个 Boolean
      类型的值</para
    >
    <example-switch-round />
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
import ExampleSwitchBasic from '@/views/Docs/Forms/Switch/Example/basic.vue'
import ExampleSwitchActiveText from '@/views/Docs/Forms/Switch/Example/activeText.vue'
import ExampleSwitchInner from '@/views/Docs/Forms/Switch/Example/inner.vue'
import ExampleSwitchDisabled from '@/views/Docs/Forms/Switch/Example/disabled.vue'
import ExampleSwitchRound from '@/views/Docs/Forms/Switch/Example/round.vue'
</script>

<style scoped lang="postcss">
.doc-nc-switch {
  @apply inline-flex flex-col w-full h-full py-4 px-6 min-h-full;
}
</style>