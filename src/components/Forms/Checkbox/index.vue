<template>
  <div class="nc-checkbox">
    <input
      type="checkbox"
      name="checkbox"
      class="nc-checkbox-body"
      ref="checkbox"
      @change="$emit('update:checked', checked)"
    />
    <span class="nc-checkbox-label">示例文字</span>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'
const $props = defineProps({
  checked: {
    type: Boolean,
    default: false
  }
})
const { checked } = toRefs($props)
</script>

<style lang="postcss" scoped>
.nc-checkbox {
  @apply inline-flex justify-center items-center min-w-max;
}

/* Checkbox Body */
.nc-checkbox .nc-checkbox-body {
  @apply inline-block h-full min-w-min mr-2;
}

/* Checkbox label */
.nc-checkbox .nc-checkbox-label {
  @apply inline-block h-full min-w-min font-light
  select-none;
}
</style>