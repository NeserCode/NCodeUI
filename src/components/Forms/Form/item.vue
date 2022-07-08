<template>
  <div :class="['nc-form-item', align, size]">
    <slot />
  </div>
</template>

<script setup>
import { defineProps, toRefs, inject } from 'vue'
import { FormGroupKey } from '@/tokens/form.js'

const $props = defineProps({
  align: {
    type: String,
    validator: (value) => ['left', 'center', 'right'].includes(value),
    default: 'center'
  }
})
const { align } = toRefs($props)

const { size } = inject(FormGroupKey, undefined)
</script>

<style lang="postcss" scoped>
.nc-form-item {
  @apply flex items-center w-full h-full;
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

/* Size Style */
.nc-form-item.large {
  @apply py-4;
}
.nc-form-item.normal {
  @apply py-2;
}
.nc-form-item.small {
  @apply py-1;
}
</style>