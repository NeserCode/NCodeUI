<template>
  <div class="nc-radio">
    <input type="radio" :id="id" :name="name" />
    <label class="text" :for="id"><slot></slot></label>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'

const $props = defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const { id, name } = toRefs($props)
</script>

<style lang="postcss" scoped>
</style>