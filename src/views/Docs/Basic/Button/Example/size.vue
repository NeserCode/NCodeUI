<template>
  <viewBox :code="code">
    <nc-button :size="sizes[targetSize]">默认样式</nc-button>
    <nc-button
      meaning="success"
      @click="handleChangeSize()"
      :size="sizes[targetSize]"
      btnStyle="lightBar"
      >点击</nc-button
    >
    <nc-button
      meaning="info"
      @click="handleChangeSize()"
      :size="sizes[targetSize]"
      >按钮</nc-button
    >
    <nc-button
      meaning="warning"
      @click="handleChangeSize()"
      :size="sizes[targetSize]"
      disabled
      btnStyle="lightBar"
      >调整</nc-button
    >
    <nc-button
      meaning="danger"
      @click="handleChangeSize()"
      :size="sizes[targetSize]"
      btnStyle="lightBar-top"
      >尺寸</nc-button
    >
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcButton from '@/components/Basic/Button/index.vue'

import { ref } from 'vue'

const code = ref(
  `<template>
    <nc-button :size="sizes[targetSize]">默认样式</nc-button>
    <nc-button meaning="success" btnStyle="lightBar" @click="handleChangeSize()" :size="sizes[targetSize]">成功样式</nc-button> 
    <nc-button meaning="info" @click="handleChangeSize()" :size="sizes[targetSize]">提醒样式</nc-button>
    <nc-button meaning="warning" btnStyle="lightBar" @click="handleChangeSize()" disabled :size="sizes[targetSize]">警告样式</nc-button>
    <nc-button meaning="danger" btnStyle="lightBar-top" @click="handleChangeSize()" :size="sizes[targetSize]">危险样式</nc-button>
</template>

<script>
import { ref } from 'vue'

var sizes = ref(['mini', 'small', 'normal', 'large'])
var targetSize = ref(2)

function handleChangeSize () {
  targetSize.value = targetSize.value === 3 ? 0 : targetSize.value + 1
}
<` + '/script>'
)
var sizes = ref(['mini', 'small', 'normal', 'large'])
var targetSize = ref(2)

function handleChangeSize () {
  targetSize.value = targetSize.value === 3 ? 0 : targetSize.value + 1
}
</script>

<style lang="postcss" scoped>
.viewBox .nc-button {
  @apply m-4;
}
</style>