<template>
  <div class="nc-radio-group" ref="radioGroupRef">
    <slot @change="handleChangeModelValue" />
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref, provide, reactive, toRefs } from 'vue'
import { radioGroupKey } from '@/tokens/radio'

const $emit = defineEmits(['update:modelValue'])
const $props = defineProps({
  modelValue: {
    type: String
  },
  name: {
    type: String
  }
})

const groupValue = ref(null)
const radioGroupRef = ref(null)

function handleChangeModelValue (val) {
  groupValue.value = val
  console.log(val)
  $emit('update:modelValue', val)
}

provide(
  radioGroupKey,
  reactive({
    ...toRefs($props),
    radioGroupRef
  })
)
</script>

<style lang="postcss" scoped>
</style>