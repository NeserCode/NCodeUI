<template>
  <viewBox :code="code">
    <nc-input
      v-model="t"
      :id="id"
      auto-hidden
      placeholder="框架名称"
      movable="left"
      show-count
      show-limit
      clearable
      :maxlength="10"
      :minlength="5"
    />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcInput from '@/components/Forms/Input/index.vue'

import { ref } from 'vue'

const t = ref('NCodeUI')
const id = ref('range-example')

const code = ref(
  `<template>
    <nc-input
      v-model="t"
      :id="id"
      auto-hidden
      placeholder="框架名称"
      movable="left"
      show-count
      show-limit
      clearable
      :maxlength="10"
      :minlength="5"
    />
</template>

<script>
import { ref } from 'vue'

const t = ref('NCodeUI')
const id = ref('range-example')
</` + 'script>'
)
</script>