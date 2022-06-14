<template>
  <viewBox :code="code">
    <nc-link href="#" :disabled="isDisabled" @click="handleDisabledLink"
      >切换 Disabled 状态</nc-link
    >
    <nc-link href="#" target="_blank" :disabled="isDisabled" meaning="success"
      >Success 链接</nc-link
    >
    <nc-link href="#" target="_blank" :disabled="isDisabled" meaning="info"
      >Info 链接</nc-link
    >
    <nc-link href="#" target="_blank" :disabled="isDisabled" meaning="warning"
      >Warning 链接</nc-link
    >
    <nc-link href="#" target="_blank" :disabled="isDisabled" meaning="danger"
      >Danger 链接</nc-link
    >
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcLink from '@/components/Basic/Link/index.vue'

import { ref } from 'vue'

const code = ref(
  `<template>
    <nc-link href="#" :disabled="isDisabled" @click="handleDisabledLink">切换 Disabled 状态</nc-link>
    <nc-link href="#" target="_blank" :disabled="isDisabled" meaning="success">Success 链接</nc-link>
    <nc-link href="#" target="_blank" :disabled="isDisabled" meaning="info">Info 链接</nc-link>
    <nc-link href="#" target="_blank" :disabled="isDisabled" meaning="warning">Warning 链接</nc-link>
    <nc-link href="#" target="_blank" :disabled="isDisabled" meaning="danger">Danger 链接</nc-link>
</template>

<script setup>
import { ref } from 'vue'
const isDisabled = ref(false)

function handleDisabledLink(){
    isDisabled.value = !isDisabled.value
}
<` + '/script>'
)
const isDisabled = ref(false)

function handleDisabledLink () {
  isDisabled.value = !isDisabled.value
}
</script>