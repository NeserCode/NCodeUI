<template>
  <viewBox :code="code">
    <nc-slider v-model="usage" :step="10" />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcSlider from '@/components/Forms/Slider/index.vue'

import { ref } from 'vue'

const code = ref(
  `<template>
    <nc-slider v-model="usage" />
</template>

<script setup>
  import { ref } from 'vue'

  const usage = ref(0)
<` + '/script>'
)
const usage = ref(0)
</script>

<style lang="postcss" scoped>
:deep(.nc-slider-body) {
  @apply w-64;
}
</style>