<template>
  <viewBox :code="code">
    <nc-input
      v-model="t"
      :id="id"
      placeholder="框架名称"
      :movable="direction"
    />
    <nc-select v-model="direction" :items="directions" />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcInput from '@/components/Forms/Input/index.vue'
import NcSelect from '@/components/Forms/Select/index.vue'

import { ref } from 'vue'

const t = ref('NCodeUI')
const id = ref('movable-example-' + (Math.random() * 20).toFixed(2))
const direction = ref('left')

const directions = ref([
  { id: 1, bound: 'left' },
  { id: 2, bound: 'up' }
])

const code = ref(
  `<template>
    <nc-input
      v-model="t"
      :id="id"
      placeholder="框架名称"
      :movable="direction"
    />
    <nc-select v-model="direction" :items="directions" />
</template>

<script>
import { ref } from 'vue'

const t = ref('NCodeUI')
const id = ref('movable-example-' + (Math.random() * 20).toFixed(2))
const direction = ref('left')

const directions = ref([
  { id: 1, bound: 'left' },
  { id: 2, bound: 'up' }
])
</` +
    `script>

<style lang="postcss" scoped>
.nc-select {
  @apply ml-4;
}
</style>`
)
</script>

<style lang="postcss" scoped>
.nc-select {
  @apply ml-4;
}
</style>