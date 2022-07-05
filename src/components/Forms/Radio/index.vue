<template>
  <div :class="['nc-radio', disabledClass, size]">
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
  size: {
    type: String,
    validator (sizeString) {
      return ['mini', 'small', 'normal', 'large'].includes(sizeString)
    },
    default: 'normal'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const { id, label, value, disabled, size } = toRefs($props)
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
  @apply inline-flex items-center justify-center
  box-border;
}

/* Radio Body Style */
.nc-radio-body {
  @apply inline-flex justify-center items-center w-3 h-3;
}

/* Radio Label Style */
.nc-radio-label {
  @apply inline-flex items-center justify-center pl-1.5
  select-none;
}

/* Size Style */
.nc-radio.mini {
  @apply p-0.5;
}
.nc-radio.mini .nc-radio-body {
  @apply transform scale-75;
}
.nc-radio.mini .nc-radio-label {
  @apply text-xs;
}

.nc-radio.small {
  @apply py-0.5 px-1;
}
.nc-radio.small .nc-radio-body {
  @apply transform scale-90;
}
.nc-radio.small .nc-radio-label {
  @apply text-sm;
}

.nc-radio.normal {
  @apply py-1 px-1.5;
}
.nc-radio.normal .nc-radio-body {
  @apply transform scale-100;
}
.nc-radio.normal .nc-radio-label {
  @apply text-base;
}

.nc-radio.large {
  @apply py-1.5 px-2;
}
.nc-radio.large .nc-radio-body {
  @apply transform scale-110;
}
.nc-radio.large .nc-radio-label {
  @apply text-lg;
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