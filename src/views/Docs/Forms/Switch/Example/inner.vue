<template>
  <viewBox :code="code">
    <nc-switch
      v-model="isActived"
      active-text="开"
      inactive-text="关"
      inner-mode
    ></nc-switch>
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcSwitch from '@/components/Forms/Switch/index.vue'

import { ref } from 'vue'

const code = ref(
  `<template>
    <nc-switch
      v-model="isActived"
      active-text="开"
      inactive-text="关"
      inner-mode
    ></nc-switch>
</template>

<script setup>
  import { ref } from 'vue'

  const isActived = ref(true)
<` + '/script>'
)

const isActived = ref(true)
</script>

<style lang="postcss" scoped>
</style>