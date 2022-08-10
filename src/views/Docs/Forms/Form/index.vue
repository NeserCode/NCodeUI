<template>
  <div class="doc-nc-form">
    <headTitle :level="1">Nc-Form 表单</headTitle>
    <para>Form 组件可支持对多个表单项如单多选、输入等进行管理</para>
    <headTitle :level="2">基础用法</headTitle>
    <para
      >使用 form-item 容器包裹每一项表单项。可以使用 v-on 监听表单的 submit
      事件以校验表单数据</para
    >
    <para
      >也可以对基础表单组件使用原生的限制属性如 required min maxlength
      等。此类原生校验在表单提交前会被浏览器触发</para
    >
    <example-form-basic />
    <headTitle :level="2">尺寸大小</headTitle>
    <para
      >对 form 总容器添加 size 属性，控制 item 间距，该属性接受一个 String
      类型的值。预设值含有 large / small / normal， 默认为 normal</para
    >
    <para
      >对于特定的组件如设置了 movable 为 up 的 nc-input
      组件来说，组件本身的外边距会撑开 size 的外边距预设值。</para
    >
    <example-form-size />
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
import ExampleFormBasic from '@/views/Docs/Forms/Form/Example/basic.vue'
import ExampleFormSize from '@/views/Docs/Forms/Form/Example/size.vue'
</script>

<style scoped lang="postcss">
.doc-nc-form {
  @apply inline-flex flex-col w-full h-full py-4 px-6 min-h-full;
}
</style>