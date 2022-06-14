<template>
  <viewBox :code="code">
    <nc-link href="#" target="_blank">文字链接</nc-link>
    <nc-link href="#" target="_blank" meaning="success"
      >文字链接Success</nc-link
    >
    <nc-link href="#" target="_blank" meaning="info">文字链接Info</nc-link>
    <nc-link href="#" target="_blank" meaning="warning"
      >文字链接Warning</nc-link
    >
    <nc-link href="#" target="_blank" meaning="danger">文字链接Danger</nc-link>
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcLink from '@/components/Basic/Link/index.vue'

import { ref } from 'vue'

const code = ref(`<template>
    <nc-link href="#" target="_blank" >文字链接</nc-link>
    <nc-link href="#" target="_blank" meaning="success">文字链接Success</nc-link>
    <nc-link href="#" target="_blank" meaning="info">文字链接Info</nc-link>
    <nc-link href="#" target="_blank" meaning="warning">文字链接Warning</nc-link>
    <nc-link href="#" target="_blank" meaning="danger">文字链接Danger</nc-link>
</template>`)
</script>