<template>
  <viewBox :code="code">
    <nc-checkbox
      v-model="isNamed1"
      label="选项一"
      size="large"
      boxStyle="bordered"
    />
    <nc-checkbox
      v-model="isNamed2"
      label="选项二"
      size="normal"
      boxStyle="bordered"
    />
    <nc-checkbox
      v-model="isNamed3"
      label="选项三"
      size="small"
      boxStyle="bordered"
    />
    <nc-checkbox
      v-model="isNamed4"
      label="选项四"
      size="mini"
      disabled
      boxStyle="bordered"
    />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcCheckbox from '@/components/Forms/Checkbox/index.vue'

import { ref } from 'vue'

const code = ref(
  `<template>
    <nc-checkbox v-model="isNamed1" label="选项一" size="large" boxStyle="bordered" />
    <nc-checkbox v-model="isNamed2" label="选项二" size="normal" boxStyle="bordered" />
    <nc-checkbox v-model="isNamed3" label="选项三" size="small" boxStyle="bordered" />
    <nc-checkbox v-model="isNamed4" label="选项四" size="mini" disabled boxStyle="bordered" />
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

const isNamed1 = ref(true)
const isNamed2 = ref(true)
const isNamed3 = ref(true)
const isNamed4 = ref(true)
</script>

<style lang="postcss" scoped>
.nc-checkbox {
  @apply mx-2;
}
</style>