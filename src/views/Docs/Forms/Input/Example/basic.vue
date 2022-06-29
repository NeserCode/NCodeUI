<template>
  <viewBox :code="code">
    <nc-input v-model="t" />
    <nc-input v-model="num" type="number" />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcInput from '@/components/Forms/Input/index.vue'

import { ref } from 'vue'
const t = ref('ABC')
const num = ref(0)

const code = ref(
  `<template>
    <nc-input v-model="t" />
</template>

<script setup>
  import { ref } from 'vue'

  const t = ref(1)
<` + '/script>'
)
</script>