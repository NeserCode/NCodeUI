<template>
  <viewBox :code="code">
    <nc-checkbox>title</nc-checkbox>
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcCheckbox from '@/components/Forms/Checkbox/index.vue'

import { ref } from 'vue'

const code = ref(`<template>
    <nc-button >默认样式</nc-button>
</template>`)
</script>

<style lang="postcss" scoped>
</style>