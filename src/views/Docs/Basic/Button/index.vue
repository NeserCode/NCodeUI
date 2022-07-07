<template>
  <div class="doc-nc-button">
    <headTitle :level="1">Nc-Button 按钮</headTitle>
    <para>常用的操作组件</para>
    <headTitle :level="2">基础用法</headTitle>
    <para>在默认未传入 btnStyle 情况下，按钮将会以默认风格呈现</para>
    <para
      >另外，可使用 meaning
      属性传入含有感情色彩的值，该属性接受一个字符串。可选的预设值有 success /
      info / warning / danger</para
    >
    <example-button-basic />
    <headTitle :level="2">禁用状态</headTitle>
    <para>你可以使用 disabled 属性来定义按钮是否被禁用</para>
    <para
      >使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean
      类型的值。</para
    >
    <example-button-disabled />
    <headTitle :level="2">简明样式</headTitle>
    <para>你可以使用 btnStyle 属性来定义按钮是否启用简明样式</para>
    <para
      >使用 btnStyle = 'lightBar'
      属性来控制按钮是否为简明样式，该样式可以执行加载方面的动画反馈。</para
    >
    <example-button-lightbar />
    <headTitle :level="3">简明在上样式</headTitle>
    <para
      >使用 btnStyle = 'lightBar-top'属性来控制简明样式的标志线位于上方</para
    >
    <example-button-lightbar-top />
    <headTitle :level="3">加载状态</headTitle>
    <para>另外，作为一个效果反馈组件，我们提供了一个 loading 属性</para>
    <para
      >使用 loading 属性，决定按钮是否处于加载样式，该属性接受一个 Boolean
      类型的值</para
    >
    <para
      >最后，为按钮添加 loadingText 属性可使按钮于 loading
      状态下使用该字段值为按钮显示文本。该字段值接受一个 String 类型的值</para
    >
    <example-button-lightbar-loading />
    <headTitle :level="2">调整尺寸</headTitle>
    <para
      >除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。</para
    >
    <para
      >使用 size 属性额外配置尺寸，可使用 large | small | mini 和 normal
      四种值。默认为 normal</para
    >
    <example-button-size />
    <headTitle :level="2">属性键值</headTitle>
    <para>😥 这部分等我什么时候做出来表格再写</para>
    <placeholder />
  </div>
</template>

<script setup>
import headTitle from '@/components/Native/HeadTitle/index.vue'
import para from '@/components/Native/Para/index.vue'
import placeholder from '@/components/Native/Placeholder/index.vue'

import ExampleButtonBasic from '@/views/Docs/Basic/Button/Example/basic.vue'
import ExampleButtonDisabled from '@/views/Docs/Basic/Button/Example/disabled.vue'
import ExampleButtonLightbar from '@/views/Docs/Basic/Button/Example/lightbar.vue'
import ExampleButtonLightbarTop from '@/views/Docs/Basic/Button/Example/lightbar-top.vue'
import ExampleButtonLightbarLoading from '@/views/Docs/Basic/Button/Example/lightbar-loading.vue'
import ExampleButtonSize from '@/views/Docs/Basic/Button/Example/size.vue'
// import { ref } from 'vue'
</script>

<style scoped lang="postcss">
.doc-nc-button {
  @apply inline-flex flex-col w-full h-full py-4 px-6 min-h-full;
}

.nc-button {
  @apply mx-2.5;
}
</style>