<template>
  <div :class="['nc-form-item', align]">
    <slot />
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'

const $props = defineProps({
  align: {
    type: String,
    validator: (value) => ['left', 'center', 'right'].includes(value),
    default: 'center'
  }
})
const { align } = toRefs($props)
</script>

<style lang="postcss" scoped>
.nc-form-item {
  @apply flex items-center w-full h-full py-2;
}

/* Align Style */
.nc-form-item.center {
  @apply justify-center;
}
.nc-form-item.left {
  @apply justify-start;
}
.nc-form-item.right {
  @apply justify-end;
}
</style>