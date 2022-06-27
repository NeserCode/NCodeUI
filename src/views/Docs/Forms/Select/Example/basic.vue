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
    
</template>

<script setup>
  import { ref } from 'vue'

  const usage = ref('北京')
<` + '/script>'
)
const usage = ref('a')
const i = ref(['北京', '武汉', '上海', '杭州', '深圳', '广东', '长沙'])
</script>

<style lang="postcss" scoped>
</style>