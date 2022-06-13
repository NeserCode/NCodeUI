<template>
  <viewBox :code="code">
    <nc-button>默认样式</nc-button>
    <nc-button meaning="success">成功样式</nc-button>
    <nc-button meaning="info">提醒样式</nc-button>
    <nc-button meaning="warning">警告样式</nc-button>
    <nc-button meaning="danger">危险样式</nc-button>
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcButton from '@/components/Basic/Button/index.vue'

import { ref } from 'vue'

const code = ref(`<template>
    <nc-button >默认样式</nc-button>
    <nc-button meaning="success">成功样式</nc-button>
    <nc-button  meaning="info">提醒样式</nc-button>
    <nc-button  meaning="warning">警告样式</nc-button>
    <nc-button  meaning="danger">危险样式</nc-button>
</template>`)
</script>

<style lang="postcss" scoped>
.viewBox .nc-button {
  @apply m-4;
}
</style>