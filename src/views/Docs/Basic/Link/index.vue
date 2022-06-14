<template>
  <div class="doc-nc-link">
    <headTitle :level="1">Nc-Link 链接</headTitle>
    <para>一般的文本链接</para>
    <headTitle :level="2">基础用法</headTitle>
    <para
      >基础的文字链接用法。使用 href 属性传入链接地址，该属性接受一个 String
      类型的值； 使用 target 属性传入跳转窗体名称，该属性接受一个 String
      类型的值</para
    >
    <para
      >另外，可使用 meaning
      属性传入含有感情色彩的值，该属性接受一个字符串。可选的预设值有 success /
      info / warning / danger</para
    >
    <example-link-basic />
    <headTitle :level="2">禁用状态</headTitle>
    <para
      >同样的，Link 也可以使用 disabled 属性来禁用 Link，该属性接受一个 Boolean
      类型的值。</para
    >
    <para>需要注意的是，disabled 禁用的仅仅只是 Link 的链接跳转行为。</para>
    <example-link-disabled />
    <placeholder />
  </div>
</template>

<script setup>
import headTitle from '@/components/Native/HeadTitle/index.vue'
import para from '@/components/Native/Para/index.vue'
import placeholder from '@/components/Native/Placeholder/index.vue'

import ExampleLinkBasic from '@/views/Docs/Basic/Link/Example/basic.vue'
import ExampleLinkDisabled from '@/views/Docs/Basic/Link/Example/disabled.vue'
</script>

<style scoped lang="postcss">
.doc-nc-link {
  @apply flex flex-col w-full h-full;
}
</style>