<template>
  <div class="nc-radio-group">
    <slot />
  </div>
</template>

<script setup>
import { useSlots } from 'vue'

const slots = useSlots()
console.log(slots.default()[0])
</script>

<style lang="postcss" scoped>
</style>