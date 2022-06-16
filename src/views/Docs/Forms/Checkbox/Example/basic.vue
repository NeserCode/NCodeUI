<template>
  <viewBox :code="code">
    <nc-checkbox v-model:checked="isChecked" />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcCheckbox from '@/components/Forms/Checkbox/index.vue'

import { ref } from 'vue'

const code = ref(`<template>
    <nc-button >默认样式</nc-button>
</template>`)
const isChecked = ref(true)
</script>

<style lang="postcss" scoped>
</style>