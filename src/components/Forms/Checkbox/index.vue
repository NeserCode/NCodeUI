<template>
  <div
    :class="['nc-checkbox', checkedClass, disabledClass, boxStyle, size]"
    @click="toggleChecked"
  >
    <input
      type="checkbox"
      class="nc-checkbox-body"
      ref="checkbox"
      :disabled="disabled"
      v-model="isChecked"
    />
    <span class="nc-checkbox-label">{{ label }}</span>
  </div>
</template>

<script setup>
import {
  ref,
  defineProps,
  toRefs,
  defineEmits,
  watch,
  computed,
  onBeforeMount
} from 'vue'

onBeforeMount(() => {
  initModelValue()
})

const $props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  boxStyle: {
    type: String,
    default: null
  }
})
const { modelValue, label, size, disabled, boxStyle } = toRefs($props)

const isChecked = ref(false)
const $emits = defineEmits(['update:modelValue'])

watch(isChecked, () => {
  handleChangeModel()
})
watch(modelValue, () => {
  initModelValue()
})

const checkedClass = computed(() => (isChecked.value ? 'checked' : ''))
const disabledClass = computed(() => (disabled.value ? 'disabled' : ''))

function handleChangeModel () {
  $emits('update:modelValue', isChecked.value)
}
function toggleChecked () {
  if (!disabled.value) isChecked.value = !isChecked.value
}
function initModelValue () {
  isChecked.value = modelValue.value
}
</script>

<style lang="postcss" scoped>
.nc-checkbox {
  @apply inline-flex justify-center items-center min-w-max px-1;
}

/* Checkbox Body */
.nc-checkbox .nc-checkbox-body {
  @apply inline-block h-full min-w-min mr-2
  bg-transparent;
}

/* Checkbox label */
.nc-checkbox .nc-checkbox-label {
  @apply inline-flex items-center min-w-min font-light
  select-none transition-all;
}

/* Size Style */
.nc-checkbox.normal .nc-checkbox-label {
  @apply text-base;
}
.nc-checkbox.normal .nc-checkbox-body {
  @apply w-3.5 h-3.5;
}

.nc-checkbox.large .nc-checkbox-label {
  @apply text-lg;
}
.nc-checkbox.large .nc-checkbox-body {
  @apply w-4 h-4 mr-2.5;
}

.nc-checkbox.small .nc-checkbox-label {
  @apply text-sm;
}
.nc-checkbox.small .nc-checkbox-body {
  @apply w-3 h-3 mr-1.5;
}

.nc-checkbox.mini .nc-checkbox-label {
  @apply text-xs;
}
.nc-checkbox.mini .nc-checkbox-body {
  @apply w-2.5 h-2.5 mr-1;
}

/* Checked Style */
.nc-checkbox.checked {
  @apply text-green-500;
}

/* Box Style */
.nc-checkbox.toggle {
  @apply px-6 py-2 rounded-full border
  bg-gray-900 text-white border-gray-600;
}
.nc-checkbox.toggle .nc-checkbox-body {
  @apply absolute opacity-0;
}
.nc-checkbox.toggle.checked {
  @apply bg-green-500 text-gray-100;
}
.nc-checkbox.toggle.large {
  @apply px-6 py-3;
}
.nc-checkbox.toggle.normal {
  @apply px-6 py-2;
}
.nc-checkbox.toggle.small {
  @apply px-5 py-1.5;
}
.nc-checkbox.toggle.mini {
  @apply px-3 py-0.5;
}

/* Disabled Style */
.nc-checkbox.disabled {
  @apply opacity-50 text-gray-800 dark:text-gray-100;
}
</style>