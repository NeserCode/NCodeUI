<template>
  <div class="doc-nc-slider">
    <headTitle :level="1">Nc-Slider 滑块</headTitle>
    <para>常用的传值操作组件，期望用户传入一个大概的值时推荐使用</para>
    <headTitle :level="2">基础用法</headTitle>
    <para>默认的滑块样式，使用 v-model 绑定输入值</para>
    <example-slider-basic />
    <headTitle :level="2">限定范围</headTitle>
    <para>使用原始的 min 与 max 属性传入 Number 类型的值</para>
    <example-slider-range />
    <headTitle :level="2">限定步长</headTitle>
    <para>使用原始的 step 属性传入 Number 类型的值</para>
    <example-slider-step />
    <headTitle :level="2">禁用状态</headTitle>
    <para>对 disabled 属性传入一个 Boolean 类型的值，以控制组件的禁用行为</para>
    <example-slider-disabled />
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
import ExampleSliderBasic from '@/views/Docs/Forms/Slider/Example/basic.vue'
import ExampleSliderRange from '@/views/Docs/Forms/Slider/Example/range.vue'
import ExampleSliderStep from '@/views/Docs/Forms/Slider/Example/step.vue'
import ExampleSliderDisabled from '@/views/Docs/Forms/Slider/Example/disabled.vue'
</script>

<style scoped lang="postcss">
.doc-nc-slider {
  @apply inline-flex flex-col w-full h-full py-4 px-6 min-h-full;
}
</style>