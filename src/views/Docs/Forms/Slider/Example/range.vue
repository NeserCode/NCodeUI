<template>
  <viewBox :code="code">
    <nc-slider v-model="usage" :max="20" :min="3" />
    <nc-checkbox v-model="readable" boxStyle="bordered" :label="checkString" />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcSlider from '@/components/Forms/Slider/index.vue'
import NcCheckbox from '@/components/Forms/Checkbox/index.vue'

import { ref, computed } from 'vue'

const code = ref(
  `<template>
    <nc-slider v-model="usage" :max="20" :min="3" />
    <nc-checkbox v-model="readable" boxStyle="bordered" :label="checkString" />
</template>

<script setup>
  import { ref, computed } from 'vue'

  const usage = ref(0)
  const readable = ref(false)
  const checkString = computed(() => {
    return readable.value ? \`\${usage.value} 取消显示\` : '显示 Slider 的值'
  })
<` + '/script>'
)
const usage = ref(0)
const readable = ref(false)
const checkString = computed(() => {
  return readable.value ? `${usage.value} 取消显示` : '显示 Slider 的值'
})
</script>

<style lang="postcss" scoped>
</style>