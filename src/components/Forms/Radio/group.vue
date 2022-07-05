<template>
  <div class="nc-radio-group" ref="radioGroupRef">
    <slot />
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref, provide, reactive, toRefs } from 'vue'
import { radioGroupKey, radioGroupUpdateKey } from '@/tokens/radio'

const $emit = defineEmits(['update:modelValue'])
const $props = defineProps({
  modelValue: {
    type: String
  },
  name: {
    type: String
  }
})

const radioGroupRef = ref(null)

function updateModelValue (val) {
  $emit('update:modelValue', val)
  console.log(val)
}

provide(
  radioGroupKey,
  reactive({
    ...toRefs($props),
    radioGroupRef
  })
)
provide(radioGroupUpdateKey, { updateModelValue })
</script>

<style lang="postcss" scoped>
</style>