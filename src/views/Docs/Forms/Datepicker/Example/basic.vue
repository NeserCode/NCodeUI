<template>
  <viewBox :code="code">
    <nc-datepicker v-model="t" />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcDatepicker from '@/components/Forms/Datepicker/index.vue'

import { ref } from 'vue'
const t = ref(new Date(2022, 0, 1))

const code = ref(
  `<template>
    <nc-datepicker v-model="t" />
</template>

<script setup>
  import { ref } from 'vue'

  const t = ref(new Date(2022, 0, 1))
<` + '/script>'
)
</script>

<style lang="postcss" scoped>
</style>