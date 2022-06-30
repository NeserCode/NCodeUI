<template>
  <viewBox :code="code">
    <nc-input v-model="t" :id="id" placeholder="框架名称" />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcInput from '@/components/Forms/Input/index.vue'

import { ref, defineProps, toRefs } from 'vue'

const $props = defineProps({
  isVmodel: {
    type: Boolean,
    default: true
  }
})
const { isVmodel } = toRefs($props)

const t = isVmodel.value ? ref('NCodeUI') : ref(undefined)
const id = ref('basic-example-' + (Math.random() * 20).toFixed(2))

const code = isVmodel.value
  ? ref(
      `<template>
    <nc-input v-model="t" :id="id" placeholder="框架名称" />
</template>

<script setup>
import { ref } from 'vue'

const t = ref("NCodeUI")
const id = ref('basic-example' + (Math.random() * 20).toFixed(2))
<` + '/script>'
  )
  : ref(
      `<template>
    <nc-input :id="id" placeholder="框架名称" />
</template>

<script setup>
import { ref } from 'vue'

const t = ref("NCodeUI")
const id = ref('basic-example' + (Math.random() * 20).toFixed(2))
<` + '/script>'
  )
</script>