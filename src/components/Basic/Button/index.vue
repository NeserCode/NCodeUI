<template>
  <button
    type="button"
    :disabled="disabled"
    :class="['nc-button', disableClass, btnStyle, meaning]"
  >
    <span :class="['nc-button-inner-text']"><slot></slot></span>
    <span v-if="btnStyle" class="nc-button-line"> </span>
  </button>
</template>

<script setup>
import { defineProps, computed, toRefs } from 'vue'

var $props = defineProps({
  disabled: {
    type: Boolean,
    defalut: false
  },
  btnStyle: {
    type: String,
    defalut: null
  },
  meaning: {
    type: String,
    defalut: null
  }
})
const { disabled, btnStyle, meaning } = toRefs($props)
var disableClass = computed(() => (disabled.value ? 'disabled' : null))
</script>

<style scoped lang="postcss">
/* nc-button */
.nc-button {
  @apply relative inline-flex justify-center items-center py-1.5 px-5 m-0 max-w-min h-full border-2 rounded-md
  border-gray-200 dark:border-gray-600 bg-white dark:bg-black
  transition-all cursor-pointer overflow-hidden box-border;
}
/* Default */
.nc-button:hover {
  @apply opacity-90
  bg-gray-50 dark:bg-gray-900 border-blue-300;
}
.nc-button:focus .nc-button-inner-text {
  @apply text-blue-400;
}
.nc-button:hover .nc-button-inner-text {
  @apply text-blue-400;
}
.nc-button:active {
  @apply opacity-100
  bg-gray-50 border-blue-400;
}
/* Success */
.nc-button.success {
  @apply border-green-300 dark:border-green-400 bg-green-400 dark:bg-green-500;
}
.nc-button.success:hover {
  @apply opacity-90
  bg-green-300 border-green-400 dark:bg-green-400 dark:border-green-500;
}
.nc-button.success:active {
  @apply opacity-100
  bg-green-400 border-green-500 dark:bg-green-500 dark:border-green-400;
}
.nc-button.lightBar.success:hover,
.nc-button.lightBar-top.success:hover {
  @apply opacity-90
  bg-white dark:bg-black border-green-400 dark:border-green-500;
}
.nc-button.lightBar.success:active,
.nc-button.lightBar-top.success:active {
  @apply opacity-100
  bg-white dark:bg-black border-green-400 dark:border-green-400;
}
/* Info */
.nc-button.info {
  @apply border-purple-300 dark:border-purple-400 bg-purple-400 dark:bg-purple-500;
}
.nc-button.info:hover {
  @apply opacity-90
  bg-purple-300 border-purple-400 dark:bg-purple-400 dark:border-purple-500;
}
.nc-button.info:active {
  @apply opacity-100
  bg-purple-400 border-purple-500 dark:bg-purple-500 dark:border-purple-400;
}
.nc-button.lightBar.info:hover,
.nc-button.lightBar-top.info:hover {
  @apply opacity-90
  bg-white dark:bg-black border-purple-400 dark:border-purple-500;
}
.nc-button.lightBar.info:active,
.nc-button.lightBar-top.info:active {
  @apply opacity-100
  bg-white dark:bg-black border-purple-400 dark:border-purple-400;
}
/* Warning */
.nc-button.warning {
  @apply border-yellow-300 dark:border-yellow-400 bg-yellow-400 dark:bg-yellow-500;
}
.nc-button.warning:hover {
  @apply opacity-90
  bg-yellow-300 border-yellow-400 dark:bg-yellow-400 dark:border-yellow-500;
}
.nc-button.warning:active {
  @apply opacity-100
  bg-yellow-400 border-yellow-500 dark:bg-yellow-500 dark:border-yellow-400;
}
.nc-button.lightBar.warning:hover,
.nc-button.lightBar-top.warning:hover {
  @apply opacity-90
  bg-white dark:bg-black border-yellow-400 dark:border-yellow-500;
}
.nc-button.lightBar.warning:active,
.nc-button.lightBar-top.warning:active {
  @apply opacity-100
  bg-white dark:bg-black border-yellow-400 dark:border-yellow-400;
}
/* Danger */
.nc-button.danger {
  @apply border-red-300 dark:border-red-400 bg-red-400 dark:bg-red-500;
}
.nc-button.danger:hover {
  @apply opacity-90
  bg-red-300 border-red-400 dark:bg-red-400 dark:border-red-500;
}
.nc-button.danger:active {
  @apply opacity-100
  bg-red-400 border-red-500 dark:bg-red-500 dark:border-red-400;
}
.nc-button.lightBar.danger:hover,
.nc-button.lightBar-top.danger:hover {
  @apply opacity-90
  bg-white dark:bg-black border-red-400 dark:border-red-500;
}
.nc-button.lightBar.danger:active,
.nc-button.lightBar-top.danger:active {
  @apply opacity-100
  bg-white dark:bg-black border-red-400 dark:border-red-400;
}

/* lightBar reset */
.nc-button.lightBar,
.nc-button.lightBar-top {
  @apply bg-white dark:bg-black;
}

/* nc-button-inner-text */
.nc-button-inner-text {
  @apply inline-block min-w-max text-lg
  text-gray-800 dark:text-gray-100
  transition-all;
}

.nc-button.success .nc-button-inner-text,
.nc-button.info .nc-button-inner-text,
.nc-button.warning .nc-button-inner-text,
.nc-button.danger .nc-button-inner-text {
  @apply text-gray-50;
}

.nc-button.lightBar.success .nc-button-inner-text,
.nc-button.lightBar-top.success .nc-button-inner-text {
  @apply text-green-400;
}
.nc-button.lightBar.info .nc-button-inner-text,
.nc-button.lightBar-top.info .nc-button-inner-text {
  @apply text-purple-400;
}
.nc-button.lightBar.warning .nc-button-inner-text,
.nc-button.lightBar-top.warning .nc-button-inner-text {
  @apply text-yellow-400;
}
.nc-button.lightBar.danger .nc-button-inner-text,
.nc-button.lightBar-top.danger .nc-button-inner-text {
  @apply text-red-400;
}

/* nc-button-line */
.nc-button.lightBar .nc-button-line,
.nc-button.lightBar-top .nc-button-line {
  @apply absolute inline-block min-w-full h-1 bottom-0;
}

.nc-button.lightBar-top .nc-button-line {
  @apply top-0;
}

.nc-button.lightBar .nc-button-line,
.nc-button.lightBar-top .nc-button-line {
  @apply bg-blue-300;
}
.nc-button.lightBar:active .nc-button-line,
.nc-button.lightBar-top:active .nc-button-line {
  @apply bg-blue-400;
}

.nc-button.lightBar.success .nc-button-line,
.nc-button.lightBar-top.success .nc-button-line {
  @apply bg-green-300;
}
.nc-button.lightBar.success:active .nc-button-line,
.nc-button.lightBar-top.success:active .nc-button-line {
  @apply bg-green-400;
}

.nc-button.lightBar.info .nc-button-line,
.nc-button.lightBar-top.info .nc-button-line {
  @apply bg-purple-300;
}
.nc-button.lightBar.info:active .nc-button-line,
.nc-button.lightBar-top.info:active .nc-button-line {
  @apply bg-purple-400;
}

.nc-button.lightBar.warning .nc-button-line,
.nc-button.lightBar-top.warning .nc-button-line {
  @apply bg-yellow-300;
}
.nc-button.lightBar.warning:active .nc-button-line,
.nc-button.lightBar-top.warning:active .nc-button-line {
  @apply bg-yellow-400;
}

.nc-button.lightBar.danger .nc-button-line,
.nc-button.lightBar-top.danger .nc-button-line {
  @apply bg-red-300;
}
.nc-button.lightBar.danger:active .nc-button-line,
.nc-button.lightBar-top.danger:active .nc-button-line {
  @apply bg-red-400;
}

/* Disabled Button */
.nc-button.disabled {
  @apply opacity-60
  select-none cursor-not-allowed;
}
.nc-button.disabled:active,
.nc-button.disabled:hover {
  @apply border-gray-200 dark:border-gray-600 bg-white dark:bg-black text-gray-800 dark:text-gray-100;
}
.nc-button.lightBar.disabled:active .nc-button-line,
.nc-button.lightBar-top.disabled:active .nc-button-line {
  @apply bg-blue-300;
}
.nc-button.disabled:active .nc-button-inner-text,
.nc-button.disabled:hover .nc-button-inner-text {
  @apply text-gray-800 dark:text-gray-100;
}

.nc-button.disabled.success:active,
.nc-button.disabled.success:hover {
  @apply bg-green-400 dark:bg-green-500 border-green-300 dark:border-gray-400 text-gray-100
  opacity-60;
}
.nc-button.lightBar.disabled.success:active,
.nc-button.lightBar.disabled.success:hover,
.nc-button.lightBar-top.disabled.success:active,
.nc-button.lightBar-top.disabled.success:hover {
  @apply bg-white dark:bg-black border-green-300 dark:border-green-400 text-red-400
  opacity-60;
}
.nc-button.lightBar.disabled.success:active .nc-button-line,
.nc-button.lightBar-top.disabled.success:active .nc-button-line {
  @apply bg-green-300;
}
.nc-button.disabled.info:active,
.nc-button.disabled.info:hover {
  @apply bg-purple-400 dark:bg-purple-500 border-purple-300 dark:border-purple-400 text-gray-100
  opacity-60;
}
.nc-button.lightBar.disabled.info:active,
.nc-button.lightBar.disabled.info:hover,
.nc-button.lightBar-top.disabled.info:active,
.nc-button.lightBar-top.disabled.info:hover {
  @apply bg-white dark:bg-black border-purple-300 dark:border-purple-400 text-purple-400
  opacity-60;
}
.nc-button.lightBar.disabled.info:active .nc-button-line,
.nc-button.lightBar-top.disabled.info:active .nc-button-line {
  @apply bg-purple-300;
}
.nc-button.disabled.warning:active,
.nc-button.disabled.warning:hover {
  @apply bg-yellow-400 dark:bg-yellow-500 border-yellow-300 dark:border-yellow-400 text-gray-100
  opacity-60;
}
.nc-button.lightBar.disabled.warning:active,
.nc-button.lightBar.disabled.warning:hover,
.nc-button.lightBar-top.disabled.warning:active,
.nc-button.lightBar-top.disabled.warning:hover {
  @apply bg-white dark:bg-black border-yellow-300 dark:border-yellow-400 text-yellow-400
  opacity-60;
}
.nc-button.lightBar.disabled.warning:active .nc-button-line,
.nc-button.lightBar-top.disabled.warning:active .nc-button-line {
  @apply bg-yellow-300;
}
.nc-button.disabled.danger:active,
.nc-button.disabled.danger:hover {
  @apply bg-red-400 dark:bg-red-500 border-red-300 dark:border-red-400 text-gray-100
  opacity-60;
}
.nc-button.lightBar.disabled.danger:active,
.nc-button.lightBar.disabled.danger:hover,
.nc-button.lightBar-top.disabled.danger:active,
.nc-button.lightBar-top.disabled.danger:hover {
  @apply bg-white dark:bg-black border-red-300 dark:border-red-400 text-red-400
  opacity-60;
}
.nc-button.lightBar.disabled.danger:active .nc-button-line,
.nc-button.lightBar-top.disabled.danger:active .nc-button-line {
  @apply bg-red-300;
}

.nc-button.disabled.success:active .nc-button-inner-text,
.nc-button.disabled.success:hover .nc-button-inner-text,
.nc-button.disabled.info:active .nc-button-inner-text,
.nc-button.disabled.info:hover .nc-button-inner-text,
.nc-button.disabled.warning:active .nc-button-inner-text,
.nc-button.disabled.warning:hover .nc-button-inner-text,
.nc-button.disabled.danger:active .nc-button-inner-text,
.nc-button.disabled.danger:hover .nc-button-inner-text {
  @apply text-gray-100;
}
.nc-button.lightBar.disabled.success:hover .nc-button-inner-text,
.nc-button.lightBar-top.disabled.success:hover .nc-button-inner-text,
.nc-button.lightBar.disabled.success:active .nc-button-inner-text,
.nc-button.lightBar-top.disabled.success:active .nc-button-inner-text {
  @apply text-green-400;
}
.nc-button.lightBar.disabled.info:hover .nc-button-inner-text,
.nc-button.lightBar-top.disabled.info:hover .nc-button-inner-text,
.nc-button.lightBar.disabled.info:active .nc-button-inner-text,
.nc-button.lightBar-top.disabled.info:active .nc-button-inner-text {
  @apply text-purple-400;
}
.nc-button.lightBar.disabled.warning:hover .nc-button-inner-text,
.nc-button.lightBar-top.disabled.warning:hover .nc-button-inner-text,
.nc-button.lightBar.disabled.warning:active .nc-button-inner-text,
.nc-button.lightBar-top.disabled.warning:active .nc-button-inner-text {
  @apply text-yellow-400;
}
.nc-button.lightBar.disabled.danger:hover .nc-button-inner-text,
.nc-button.lightBar-top.disabled.danger:hover .nc-button-inner-text,
.nc-button.lightBar.disabled.danger:active .nc-button-inner-text,
.nc-button.lightBar-top.disabled.danger:active .nc-button-inner-text {
  @apply text-red-400;
}
</style>