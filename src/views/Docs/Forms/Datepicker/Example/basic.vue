<template>
  <viewBox :code="code">
    <nc-datepicker v-model="t" />
    <nc-button size="small" meaning="success" @click="add">下一月</nc-button>
    <nc-button size="small" meaning="info" @click="reduce">上一月</nc-button>
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcDatepicker from '@/components/Forms/Datepicker/index.vue'
import NcButton from '@/components/Basic/Button/index.vue'

import { ref, computed } from 'vue'
const m = ref(0)
const t = computed(() => new Date(2022, m.value, 19))

function add () {
  if (m.value !== 11) m.value++
  else m.value = 0
}
function reduce () {
  if (m.value !== 0) m.value--
  else m.value = 11
}
const code = ref(
  `<template>
    <nc-checkbox v-model="isNamed1" label="选项一" size="large" boxStyle="toggle" />
    <nc-checkbox v-model="isNamed2" label="选项二" size="normal" boxStyle="toggle" />
    <nc-checkbox v-model="isNamed3" label="选项三" size="small" boxStyle="toggle" />
    <nc-checkbox v-model="isNamed4" label="选项四" size="mini" disabled boxStyle="toggle" />
</template>

<script setup>
  import { ref } from 'vue'

  const isNamed1 = ref(true)
  const isNamed2 = ref(true)
  const isNamed3 = ref(true)
  const isNamed4 = ref(true)
<` +
    `/script>

<style lang="postcss" scoped>
.nc-checkbox {
  @apply mx-2;
}
</style>`
)
</script>

<style lang="postcss" scoped>
</style>