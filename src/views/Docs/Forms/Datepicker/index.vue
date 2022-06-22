<template>
  <div class="doc-nc-datepicker">
    <headTitle :level="1">Nc-Datepicker 日期选择器</headTitle>
    <para>常用的选择操作组件</para>
    <headTitle :level="2">基础用法</headTitle>
    <para>在默认情况下，日期选择器将会以默认风格呈现（以后完善）</para>
    <example-datepicker-basic />
    <headTitle :level="2">受控绑定</headTitle>
    <para
      >此外，日期选择器是一个受控组件，在不传入 v-model
      绑定值时，组件将默认传入目前的日期，并且不接受更改，包括年月份的更改</para
    >
    <para>v-model 绑定值必须是一个有效的 JavaScript Date()对象</para>
    <example-datepicker-model />
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
import ExampleDatepickerBasic from '@/views/Docs/Forms/Datepicker/Example/basic.vue'
import ExampleDatepickerModel from '@/views/Docs/Forms/Datepicker/Example/model.vue'
</script>

<style scoped lang="postcss">
.doc-nc-datepicker {
  @apply inline-flex flex-col w-full h-full py-4 px-6 min-h-full;
}
</style>