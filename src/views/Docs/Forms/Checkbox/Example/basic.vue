<template>
  <viewBox :code="code">
    <nc-checkbox v-model="isNamed" label="选项一" />
    <nc-checkbox v-model="isNamed" label="选项二" />
    <nc-checkbox v-model="isNamed" label="选项三" />
    <nc-checkbox v-model="isNamed" label="选项四" />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcCheckbox from '@/components/Forms/Checkbox/index.vue'

import { ref } from 'vue'

const code = ref(
  `<template>
    <nc-checkbox v-model="isNamed" label="选项一" />
    <nc-checkbox v-model="isNamed" label="选项二" />
    <nc-checkbox v-model="isNamed" label="选项三" />
    <nc-checkbox v-model="isNamed" label="选项四" />
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