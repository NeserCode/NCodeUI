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
  },
  disabled: {
    type: Boolean,
    default: false
  },
  radioStyle: {
    type: String,
    validator (radioStyleString) {
      return ['bordered'].includes(radioStyleString)
    }
  }
})
const { modelValue, name, disabled, radioStyle } = toRefs($props)
const radioGroupRef = ref(null)

function updateModelValue (val) {
  $emit('update:modelValue', val)
}

provide(
  radioGroupKey,
  reactive({
    modelValue,
    name,
    isAllDisabled: disabled,
    isAllStyle: radioStyle,
    radioGroupRef
  })
)
provide(radioGroupUpdateKey, { updateModelValue })
</script>

<style lang="postcss" scoped>
.nc-radio-group {
  @apply flex justify-center items-center;
}
</style>