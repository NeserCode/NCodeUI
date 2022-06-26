<template>
  <viewBox :code="code">
    <nc-slider v-model="usage" :disabled="disabled" />
    <nc-checkbox v-model="disabled" boxStyle="bordered" label="禁用组件" />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcSlider from '@/components/Forms/Slider/index.vue'
import NcCheckbox from '@/components/Forms/Checkbox/index.vue'

import { ref } from 'vue'

const code = ref(
  `<template>
    <nc-slider v-model="usage" :disabled="disabled" />
    <nc-checkbox v-model="disabled" boxStyle="bordered" label="禁用组件" />
</template>

<script setup>
  import { ref } from 'vue'

  const usage = ref(0)
  const disabled = ref(false)
<` + '/script>'
)
const usage = ref(0)
const disabled = ref(false)
</script>

<style lang="postcss" scoped>
</style>