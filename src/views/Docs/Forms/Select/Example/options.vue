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
  const i = ref([{
    bound: '北京',
  }, {
    bound: '上海',
  }, {
    bound: '广州',
  }])
<` + '/script>'
)
const usage = ref('北京')
const i = ref([
  {
    bound: '北京'
  },
  {
    bound: '上海'
  },
  {
    bound: '广州'
  }
])
</script>

<style lang="postcss" scoped>
</style>