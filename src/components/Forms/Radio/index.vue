<template>
  <div :class="['nc-radio', disabledClass]">
    <input
      type="radio"
      class="nc-radio-body"
      v-model="checkedValue"
      :value="computedValue"
      :name="name"
      :disabled="computedDisabled"
      :id="id"
    />
    <label
      v-if="label"
      class="nc-radio-label"
      :for="id"
      :disabled="computedDisabled"
      >{{ label ?? value }}</label
    >
    <label
      v-if="!label"
      class="nc-radio-label"
      :for="id"
      :disabled="computedDisabled"
    >
      <slot />
    </label>
  </div>
</template>

<script setup>
import { ref, defineProps, watch, computed, inject, toRefs } from 'vue'
import { radioGroupKey, radioGroupUpdateKey } from '@/tokens/radio'

const $props = defineProps({
  id: {
    type: String
  },
  label: {
    type: String
  },
  value: {
    type: [String, Number, Boolean]
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const { id, label, value, disabled } = toRefs($props)
const { name, modelValue, isAllDisabled } = toRefs(
  inject(radioGroupKey, undefined)
)
const { updateModelValue } = inject(radioGroupUpdateKey, undefined)
const checkedValue = ref(false)

const disabledClass = computed(() => {
  return isAllDisabled.value || disabled.value ? 'disabled' : null
})
const computedDisabled = computed(() => {
  return isAllDisabled.value || disabled.value
})
const computedValue = computed(() => {
  console.log('computedValue', value.value)
  return value.value === undefined ? label.value : value.value
})

watch(checkedValue, () => {
  updateModelValue(checkedValue.value)
})
watch(modelValue, () => {
  initModelValue()
})

function initModelValue () {
  checkedValue.value = modelValue.value
}

initModelValue()
</script>

<style lang="postcss" scoped>
.nc-radio {
  @apply inline-flex items-center justify-center;
}

/* Radio Body Style */
.nc-radio-body {
  @apply inline-flex justify-center items-center w-3 h-3;
}

/* Radio Label Style */
.nc-radio-label {
  @apply inline-flex items-center justify-center px-1.5
  select-none;
}

/* Disabled Style */
.nc-radio.disabled {
  @apply opacity-60;
}
.nc-radio.disabled,
.nc-radio.disabled .nc-radio-body,
.nc-radio.disabled .nc-radio-label {
  @apply cursor-not-allowed;
}
</style>