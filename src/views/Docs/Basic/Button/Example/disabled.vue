<template>
  <viewBox :code="code">
    <nc-button disabled>默认样式</nc-button>
    <nc-button meaning="success" disabled>成功样式</nc-button>
    <nc-button meaning="info" disabled>提醒样式</nc-button>
    <nc-button meaning="warning" disabled>警告样式</nc-button>
    <nc-button meaning="danger" disabled>危险样式</nc-button>
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcButton from '@/components/Basic/Button/index.vue'

import { ref } from 'vue'

const code = ref(`<template>
    <nc-button disabled>默认样式</nc-button>
    <nc-button meaning="success" disabled>成功样式</nc-button>
    <nc-button meaning="info" disabled>提醒样式</nc-button>
    <nc-button meaning="warning" disabled>警告样式</nc-button>
    <nc-button meaning="danger" disabled>危险样式</nc-button>
</template>`)
</script>