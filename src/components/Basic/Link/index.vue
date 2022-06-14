<template>
  <span :class="['nc-link', meaning]">
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
  }
})

const { href, target, disabled, meaning } = toRefs($props)
const hrefString = computed(() => (disabled.value ? null : href.value ?? null))
</script>

<style lang="postcss" scoped>
/* Init Style */
.nc-link {
  @apply inline-block py-0.5 border-b
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
  @apply text-blue-400 border-blue-300;
}

.nc-link.success:hover {
  @apply text-green-400 border-green-300;
}
.nc-link.info:hover {
  @apply text-purple-400 border-purple-300;
}
.nc-link.warning:hover {
  @apply text-yellow-400 border-yellow-300;
}
.nc-link.danger:hover {
  @apply text-red-400 border-red-300;
}
</style>