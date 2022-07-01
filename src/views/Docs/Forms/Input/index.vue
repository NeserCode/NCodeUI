<template>
  <div class="doc-nc-input">
    <headTitle :level="1">Nc-Input 输入</headTitle>
    <para>常用的表单组件</para>
    <headTitle :level="2">基础用法</headTitle>
    <para>此组件必须传递一个 id，否则将影响后续功能</para>
    <headTitle :level="3">原生属性</headTitle>
    <para
      >此组件有较多的原生属性可以使用。如 spellcheck autocomplete
      等不参与组件独有功能的属性可以按照原有的用法直接使用，
      但必须是页末属性键值列举的可选值</para
    >
    <example-input-basic />
    <headTitle :level="3">受控绑定</headTitle>
    <para>此组件是一个受控的组件，在接受 v-model 绑定之前无法改变或传入值</para>
    <example-input-basic :isVmodel="false" />
    <headTitle :level="2">并用标签</headTitle>
    <para>原生 placeholder 属性的进阶用法</para>
    <headTitle :level="3">移动标签</headTitle>
    <para
      >使用 movable 属性控制组件的并用标签预设位置 该属性接受一个 String
      类型的值</para
    >
    <headTitle :level="4">基础用法</headTitle>
    <para
      >使用此功能时请注意组件标签的预设空间是否足够标签的显示，否则用户体验差</para
    >
    <example-input-movable />
    <headTitle :level="4">自动隐藏</headTitle>
    <para>使用移动标签功能后才能启用该功能，让运动标签仅在用户输入时显示</para>
    <example-input-hidden />
    <headTitle :level="2">范围控制</headTitle>
    <para
      >使用原生的 minlength 与 maxlength 控制范围，这两种属性都接受一个 Number
      类型的值</para
    >
    <example-input-range />
    <headTitle :level="2">清除内容</headTitle>
    <para
      >使用 clearable 属性控制组件的清除行为，该属性接受一个 Boolean
      类型的值，默认为 false</para
    >
    <example-input-clearable />
    <headTitle :level="2">属性键值</headTitle>
    <para>😥 这部分等我什么时候做出来表格再写</para>
    <headTitle :level="2">Todo</headTitle>
    <para>✨ readonly等属性的增添</para>
    <placeholder />
  </div>
</template>

<script setup>
import headTitle from '@/components/Native/HeadTitle/index.vue'
import para from '@/components/Native/Para/index.vue'
import placeholder from '@/components/Native/Placeholder/index.vue'
// import { ref } from 'vue'
import ExampleInputBasic from '@/views/Docs/Forms/Input/Example/basic.vue'
import ExampleInputClearable from '@/views/Docs/Forms/Input/Example/clearable.vue'
import ExampleInputMovable from '@/views/Docs/Forms/Input/Example/movable.vue'
import ExampleInputHidden from '@/views/Docs/Forms/Input/Example/hidden.vue'
import ExampleInputRange from '@/views/Docs/Forms/Input/Example/range.vue'
</script>
<style scoped lang="postcss">
.doc-nc-input {
  @apply inline-flex flex-col w-full h-full py-4 px-6 min-h-full;
}
</style>