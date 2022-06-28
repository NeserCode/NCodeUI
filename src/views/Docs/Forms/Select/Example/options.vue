<template>
  <viewBox :code="code">
    <nc-select v-model="usage" :items="i" />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcSelect from '@/components/Forms/Select/index.vue'

import { ref } from 'vue'

const code = ref(
  `<template>
      <nc-select v-model="usage" :items="i" />
</template>

<script setup>
import { ref } from 'vue'

const usage = ref('北京')
const i = ref([
  { id: 1, bound: '北京' },
  { id: 2, bound: '武汉' },
  { id: 3, bound: '上海' },
  { id: 4, bound: '杭州' },
  { id: 5, bound: '深圳' },
  { id: 6, bound: '广东' },
  { id: 7, bound: '长沙' },
])
<` + '/script>'
)
const usage = ref('北京')
const i = ref([
  { id: 1, bound: '北京' },
  { id: 2, bound: '武汉' },
  { id: 3, bound: '上海' },
  { id: 4, bound: '杭州' },
  { id: 5, bound: '深圳' },
  { id: 6, bound: '广东' },
  { id: 7, bound: '长沙' }
])
</script>

<style lang="postcss" scoped>
</style>