<template>
  <span :class="['nc-link', meaning, disabledClass, underlineClass]">
    <a :href="hrefString" :target="target" :disabled="disabled"
      ><slot></slot
    ></a>
  </span>
</template>

<script setup>
import { defineProps, toRefs, computed } from 'vue'

const $props = defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  meaning: {
    type: String,
    default: null
  },
  underline: {
    type: Boolean,
    default: true
  }
})

const { href, target, disabled, meaning, underline } = toRefs($props)
const hrefString = computed(() => (disabled.value ? null : href.value ?? null))
const disabledClass = computed(() => (disabled.value ? 'disabled' : null))
const underlineClass = computed(() => (underline.value ? null : 'no-underline'))
</script>

<style lang="postcss" scoped>
/* Init Style */
.nc-link {
  @apply relative inline-block py-0.5 border-b
  border-transparent
  transition-all cursor-pointer;
}

.nc-link.success {
  @apply text-green-500;
}
.nc-link.info {
  @apply text-purple-500;
}
.nc-link.warning {
  @apply text-yellow-500;
}
.nc-link.danger {
  @apply text-red-500;
}

/* Hover Style */
.nc-link:hover {
  @apply text-blue-400;
}
.nc-link:hover::after {
  content: " ";
  @apply absolute inline-block w-full h-px bottom-0 left-0
  bg-blue-300;
}

.nc-link.success:hover {
  @apply text-green-400;
}
.nc-link.success:hover::after {
  @apply bg-green-300;
}
.nc-link.info:hover {
  @apply text-purple-400;
}
.nc-link.info:hover::after {
  @apply bg-purple-300;
}
.nc-link.warning:hover {
  @apply text-yellow-400;
}
.nc-link.warning:hover::after {
  @apply bg-yellow-300;
}
.nc-link.danger:hover {
  @apply text-red-400;
}
.nc-link.danger:hover::after {
  @apply bg-red-300;
}

.nc-link.no-underline:hover::after {
  @apply bg-transparent;
}

/* Disabled Style */
.nc-link.disabled {
  @apply opacity-60 border-none cursor-not-allowed;
}
.nc-link.disabled:hover {
  @apply text-gray-800 dark:text-gray-100;
}
.nc-link.disabled:hover::after {
  @apply bg-transparent;
}

.nc-link.disabled.success:hover {
  @apply text-green-500;
}
.nc-link.disabled.info:hover {
  @apply text-purple-500;
}
.nc-link.disabled.warning:hover {
  @apply text-yellow-500;
}
.nc-link.disabled.danger:hover {
  @apply text-red-500;
}
</style>