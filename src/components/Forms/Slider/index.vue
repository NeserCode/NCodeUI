<template>
  <div class="nc-slider">
    <input
      class="nc-slider-body"
      type="range"
      v-model="rangeCount"
      ref="slider"
      :max="max"
      :min="min"
      :step="step"
    />
    <span class="nc-slider-thumb" ref="thumb">
      <span v-for="i in max / step" class="stop" :key="i"></span>
    </span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, toRefs, watch } from 'vue'

const $emit = defineEmits(['update:modelValue'])
const $props = defineProps({
  modelValue: {
    type: Number,
    default: () => 0
  },
  max: {
    type: Number,
    default: () => 100
  },
  min: {
    type: Number,
    default: () => 0
  },
  step: {
    type: Number,
    default: () => 1
  }
})
const { modelValue, max, min, step } = toRefs($props)
const rangeCount = ref(0)

const slider = ref(null)
const thumb = ref(null)

watch(modelValue, () => {
  initModelvalue()
})
watch(rangeCount, () => {
  handleChangeModelvalue()
  handleChangeThumbProcess()
})

function handleChangeModelvalue () {
  $emit('update:modelValue', Number(rangeCount.value))
}
function initModelvalue () {
  rangeCount.value = modelValue.value
}

// function initThumbStop () {}
function handleChangeThumbProcess () {
  thumb.value.style.width = `${rangeCount.value}%`
}
</script>

<style lang="postcss" scoped>
.nc-slider {
  @apply relative inline-flex flex-col items-start min-w-min px-2;
}

/* Reset Style */
.nc-slider-body {
  @apply appearance-none outline-none;
}
.nc-slider-body::-webkit-slider-runnable-track {
  @apply appearance-none h-1 rounded-full
  bg-gray-500;
}
.nc-slider-body::-webkit-slider-thumb {
  @apply appearance-none block w-4 h-4 rounded-full
  bg-blue-600
    transform -translate-y-1.5 z-10;
}

/* Runnable Style */
.nc-slider-thumb {
  @apply block h-1
  bg-blue-400
  pointer-events-none transform -translate-y-full z-20;
}
</style>