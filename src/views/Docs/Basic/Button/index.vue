<template>
  <div class="doc-nc-button">
    <headTitle :level="1">Nc-Button 按钮</headTitle>
    <para>常用的操作组件</para>
    <headTitle :level="2">基础用法</headTitle>
    <para>在默认未传入 btnStyle 情况下，按钮将会以默认风格呈现</para>
    <div class="viewBox">
      <nc-button @click="logInnerText($event)">默认样式</nc-button>
      <nc-button @click="logInnerText($event)" meaning="success"
        >成功样式</nc-button
      >
      <nc-button @click="logInnerText($event)" meaning="info"
        >提醒样式</nc-button
      >
      <nc-button @click="logInnerText($event)" meaning="warning"
        >警告样式</nc-button
      >
      <nc-button @click="logInnerText($event)" meaning="danger"
        >危险样式</nc-button
      >
    </div>
    <headTitle :level="2">禁用状态</headTitle>
    <para>你可以使用 disabled 属性来定义按钮是否被禁用</para>
    <para
      >使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean
      类型的值。</para
    >
    <div class="viewBox">
      <nc-button @click="logInnerText($event)" disabled>默认样式</nc-button>
      <nc-button @click="logInnerText($event)" meaning="success" disabled
        >成功样式</nc-button
      >
      <nc-button @click="logInnerText($event)" meaning="info" disabled
        >提醒样式</nc-button
      >
      <nc-button @click="logInnerText($event)" meaning="warning" disabled
        >警告样式</nc-button
      >
      <nc-button @click="logInnerText($event)" meaning="danger" disabled
        >危险样式</nc-button
      >
    </div>
  </div>
</template>

<script setup>
import headTitle from '@/components/Native/HeadTitle/index.vue'
import para from '@/components/Native/Para/index.vue'
import NcButton from '@/components/Basic/Button/index.vue'
// import { ref } from 'vue'

function logInnerText (e) {
  console.log(e.target.textContent)
}
</script>

<style scoped lang="postcss">
.doc-nc-button {
  @apply inline-flex flex-col w-full h-full;
}

.viewBox {
  @apply flex justify-evenly items-center min-w-max mx-auto;
}

.nc-button {
  @apply mx-2.5;
}
</style>