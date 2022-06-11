<template>
  <button
    type="button"
    :disabled="disabled"
    :class="['nc-button', disableClass, btnStyle]"
  >
    <span :class="['nc-button-inner-text']"><slot></slot></span>
  </button>
</template>

<script setup>
import { ref, defineProps, computed, toRefs } from 'vue'

var $props = defineProps({
  disabled: {
    type: Boolean,
    defalut: false
  },
  btnStyle: {
    type: String,
    defalut: null
  }
})
const { disabled, btnStyle } = toRefs($props)
var disableClass = computed(() => (disabled.value ? 'disabled' : null))

var isDisable = ref(false)
console.log(isDisable.value ?? '')
</script>

<style scoped lang="postcss">
/* nc-button */
.nc-button {
  @apply inline-flex justify-center items-center py-1.5 px-5 max-w-min h-full border-2 rounded-md
  border-gray-200 dark:border-gray-600 bg-white dark:bg-black
  transition-all cursor-pointer overflow-hidden box-border;
}
.nc-button:hover {
  @apply opacity-90
  bg-gray-50 dark:bg-gray-900 border-blue-300;
}
.nc-button:focus .nc-button-inner-text {
  @apply text-blue-500;
}
.nc-button:hover .nc-button-inner-text {
  @apply text-blue-500;
}
.nc-button:active {
  @apply opacity-100
  bg-gray-50 border-blue-500;
}

/* nc-button-inner-text */
.nc-button-inner-text {
  @apply inline-block min-w-max text-lg
  text-gray-800 dark:text-gray-100
  transition-all;
}
/* Disabled Button */
.nc-button.disabled {
  @apply opacity-60
  select-none cursor-not-allowed;
}
.nc-button.disabled:active,
.nc-button.disabled:hover {
  @apply border-gray-200 dark:border-gray-600 bg-white dark:bg-black;
}
</style>