<template>
  <viewBox :code="code">
    <nc-checkbox v-model="isNamed" label="选项一" size="large" />
    <nc-checkbox v-model="isNamed" label="选项二" size="normal" />
    <nc-checkbox v-model="isNamed" label="选项三" size="small" />
    <nc-checkbox v-model="isNamed" label="选项四" size="mini" />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcCheckbox from '@/components/Forms/Checkbox/index.vue'

import { ref } from 'vue'

const code = ref(
  `<template>
    <nc-checkbox v-model="isNamed" label="选项一" size="large" />
    <nc-checkbox v-model="isNamed" label="选项二" size="normal" />
    <nc-checkbox v-model="isNamed" label="选项三" size="small" />
    <nc-checkbox v-model="isNamed" label="选项四" size="mini" />
</template>

<script setup>
  import { ref } from 'vue'

  const isNamed = ref(true)
<` + '/script>'
)

const isNamed = ref(true)
</script>

<style lang="postcss" scoped>
</style>