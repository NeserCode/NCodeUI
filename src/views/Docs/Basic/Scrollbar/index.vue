<template>
  <div class="doc-nc-scrollbar">
    <headTitle :level="1">Nc-Scrollbar 滚动条</headTitle>
    <para>替换浏览器默认样式的滚动条</para>
    <headTitle :level="2">基础用法</headTitle>
    <para
      >替换浏览器默认样式的滚动条，scrollbar 组件将会被定位到 slot
      插槽元素的父元素的内边距左边和上边，对应着 y 轴与 x 轴</para
    >
    <para
      >在使用这个组件时，你也许需要注意：组件是默认隐藏内容的原始滚动条的，如果该组件有任何不符合行为规范的，请停止使用这个组件以开启原始滚动条</para
    >
    <example-scrollbar-basic />
    <headTitle :level="2">激活横轴滚动</headTitle>
    <para>默认情况下，scrollbar 组件不开启横向轴即 x 轴的显示</para>
    <para
      >使用 vertical 与 horizontal 属性开启对应的滚动条，这两种属性都接受一个
      Boolean 类型的值。其中 vertical 即 y 轴是默认开启的</para
    >
    <example-scrollbar-vertical />
    <headTitle :level="2">属性键值</headTitle>
    <para>😥 这部分等我什么时候做出来表格再写</para>
    <placeholder />
  </div>
</template>

<script setup>
import headTitle from '@/components/Native/HeadTitle/index.vue'
import para from '@/components/Native/Para/index.vue'
import placeholder from '@/components/Native/Placeholder/index.vue'

import ExampleScrollbarBasic from '@/views/Docs/Basic/Scrollbar/Example/basic.vue'
import ExampleScrollbarVertical from '@/views/Docs/Basic/Scrollbar/Example/vertical.vue'
</script>

<style scoped lang="postcss">
.doc-nc-scrollbar {
  @apply flex flex-col w-full h-full py-4 px-6;
}
</style>