<template>
  <viewBox :code="code">
    <nc-input v-model="t" :id="id" placeholder="框架名称" clearable />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcInput from '@/components/Forms/Input/index.vue'

import { ref } from 'vue'

const t = ref('NCodeUI')
const id = ref('clearable-example')

const code = ref(
  `<template>
    <nc-input v-model="t" :id="id" placeholder="框架名称" clearable />
</template>

<script>
import { ref } from 'vue'

const t = ref('NCodeUI')
const id = ref('clearable-example')
</` + 'script>'
)
</script>