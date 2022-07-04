<template>
  <div :class="['nc-radio']">
    <input
      type="radio"
      class="nc-radio-body"
      v-model="checkedValue"
      :value="label"
      :name="name"
      :id="id"
    />
    <label class="nc-radio-label" :for="id">{{ label }}</label>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, watch, inject, toRefs } from 'vue'
import { radioGroupKey } from '@/tokens/radio'

const $emit = defineEmits(['change'])
const $props = defineProps({
  id: {
    type: String
  },
  label: {
    type: String
  }
})

const { id, label } = toRefs($props)
const { name, modelValue } = toRefs(inject(radioGroupKey, undefined))
const checkedValue = ref(false)

watch(checkedValue, () => {
  handleChangeCheckedValue()
})
watch(modelValue, () => {
  initModelValue()
})

function initModelValue () {
  checkedValue.value = modelValue.value
}
function handleChangeCheckedValue () {
  if (label.value === checkedValue.value) {
    $emit('change', label.value)
    console.log('emitted')
  }
}

initModelValue()
</script>

<style lang="postcss" scoped>
.nc-radio {
  @apply inline-flex items-center justify-center;
}

.nc-radio-body {
  @apply inline-flex justify-center items-center w-3 h-3;
}

.nc-radio-label {
  @apply inline-flex items-center justify-center px-1.5
  select-none;
}
</style>