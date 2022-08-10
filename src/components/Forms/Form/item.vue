<template>
  <div :class="['nc-form-item', alignClass, sizeClass]">
    <slot />
  </div>
</template>

<script setup>
import { defineProps, toRefs, inject, computed } from 'vue'
import { FormGroupKey } from '@/tokens/form.js'

const $props = defineProps({
  size: {
    type: String,
    validator: (value) => ['large', 'normal', 'small'].includes(value)
  },
  align: {
    type: String,
    validator: (value) => ['left', 'center', 'right'].includes(value)
  }
})
const { size, align } = toRefs($props)

const { size: FormGroupSize, align: FormGroupAlign } = inject(
  FormGroupKey,
  undefined
)

const alignClass = computed(() => {
  return FormGroupAlign !== undefined ? FormGroupAlign : align.value
})
const sizeClass = computed(() => {
  return FormGroupAlign !== undefined ? FormGroupSize : size.value
})
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