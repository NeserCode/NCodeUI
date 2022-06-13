<template>
  <viewBox :code="code">
    <nc-button>默认样式</nc-button>
    <nc-button
      meaning="success"
      @click="handleChangeSize()"
      :size="sizes[targetSize]"
      btnStyle="lightBar"
      >成功样式</nc-button
    >
    <nc-button
      meaning="info"
      @click="handleChangeSize()"
      :size="sizes[targetSize]"
      btnStyle="lightBar-top"
      >提醒样式</nc-button
    >
    <nc-button
      meaning="warning"
      @click="handleChangeSize()"
      :size="sizes[targetSize]"
      btnStyle="lightBar"
      >警告样式</nc-button
    >
    <nc-button
      meaning="danger"
      @click="handleChangeSize()"
      :size="sizes[targetSize]"
      btnStyle="lightBar-top"
      >危险样式</nc-button
    >
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcButton from '@/components/Basic/Button/index.vue'

import { ref } from 'vue'

const code = ref(
  `<template>
    <nc-button btnStyle="lightBar-top">默认样式</nc-button>
    <nc-button meaning="success" btnStyle="lightBar-top" @click="handleChangeSize()" :size="sizes[targetSize]">成功样式</nc-button> 
    <nc-button meaning="info" btnStyle="lightBar-top" @click="handleChangeSize()" :size="sizes[targetSize]">提醒样式</nc-button>
    <nc-button meaning="warning" btnStyle="lightBar-top" @click="handleChangeSize()" :size="sizes[targetSize]">警告样式</nc-button>
    <nc-button meaning="danger" btnStyle="lightBar-top" @click="handleChangeSize()" :size="sizes[targetSize]">危险样式</nc-button>
</template>

<script>
import { ref } from 'vue'

var sizes = ref(['mini', 'small', 'normal', 'large'])
var targetSize = ref(2)

function handleChangeSize () {
  targetSize.value = targetSize.value === 3 ? 0 : targetSize.value + 1
  console.log(targetSize.value)
}
<` + '/script>'
)
var sizes = ref(['mini', 'small', 'normal', 'large'])
var targetSize = ref(2)

function handleChangeSize () {
  targetSize.value = targetSize.value === 3 ? 0 : targetSize.value + 1
  console.log(targetSize.value)
}
</script>

<style lang="postcss" scoped>
.viewBox .nc-button {
  @apply m-4;
}
</style>