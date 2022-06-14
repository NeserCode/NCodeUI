<template>
  <viewBox :code="code">
    <nc-link href="#" :underline="isUnderline" @click="handleUnderlineLink"
      >切换 underline 状态</nc-link
    >
    <nc-link href="#" :underline="isUnderline" meaning="success"
      >Success 链接</nc-link
    >
    <nc-link href="#" :underline="isUnderline" meaning="info"
      >Info 链接</nc-link
    >
    <nc-link href="#" :underline="isUnderline" meaning="warning"
      >Warning 链接</nc-link
    >
    <nc-link href="#" :underline="isUnderline" meaning="danger"
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
    <nc-link href="#" :underline="isUnderline" @click="handleUnderlineLink">切换 Disabled 状态</nc-link>
    <nc-link href="#" :underline="isUnderline" meaning="success">Success 链接</nc-link>
    <nc-link href="#" :underline="isUnderline" meaning="info">Info 链接</nc-link>
    <nc-link href="#" :underline="isUnderline" meaning="warning">Warning 链接</nc-link>
    <nc-link href="#" :underline="isUnderline" meaning="danger">Danger 链接</nc-link>
</template>

<script setup>
import { ref } from 'vue'
const isUnderline = ref(true)

function handleUnderlineLink(){
    isUnderline.value = !isUnderline.value
}
<` + '/script>'
)
const isUnderline = ref(true)

function handleUnderlineLink () {
  isUnderline.value = !isUnderline.value
}
</script>