<template>
  <div :class="['nc-slider', disabledClass]">
    <input
      class="nc-slider-body"
      type="range"
      v-model="rangeCount"
      ref="slider"
      :max="max"
      :min="min"
      :step="step"
      :disabled="disabled"
    />
    <span class="nc-slider-thumb" ref="thumb"></span>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmits,
  ref,
  toRefs,
  watch,
  computed,
  nextTick
} from 'vue'

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
  },
  disabled: {
    type: Boolean,
    default: () => false
  }
})
const { modelValue, max, min, step, disabled } = toRefs($props)
const disabledClass = computed(() => (disabled.value ? 'disabled' : ''))
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
  thumb.value.style.width = `${
    ((rangeCount.value - min.value) / (max.value - min.value)) * 100
  }%`
}

function initDefaultValue () {
  nextTick(() => {
    $emit('update:modelValue', Number(min.value ?? 0))
  })
}

initDefaultValue()
</script>

<style lang="postcss" scoped>
.nc-slider {
  @apply relative inline-flex flex-col items-start min-w-min px-2;
}

/* Reset Style */
.nc-slider-body {
  @apply appearance-none outline-none rounded-full;
}
.nc-slider-body::-webkit-slider-runnable-track {
  @apply appearance-none h-1 rounded-full
  bg-gray-500;
}
.nc-slider-body::-webkit-slider-thumb {
  @apply appearance-none block w-4 h-4 rounded-full
  bg-blue-400
    transform -translate-y-1.5 z-10;
  cursor: -webkit-grab;
}
.nc-slider-body::-webkit-slider-thumb:hover {
  @apply scale-105 transition-all transform -translate-y-1.5;
}
.nc-slider-body::-webkit-slider-thumb:focus,
.nc-slider-body::-webkit-slider-thumb:active {
  cursor: -webkit-grabbing;
}

/* Runnable Style */
.nc-slider-thumb {
  @apply inline-block h-1 float-none rounded-full
  bg-blue-400
  pointer-events-none transform -translate-y-full;
}

/* Disabled Style */
.nc-slider.disabled {
  @apply opacity-60 cursor-not-allowed;
}
.nc-slider.disabled .nc-slider-body::-webkit-slider-thumb,
.nc-slider.disabled .nc-slider-body::-webkit-slider-thumb:focus,
.nc-slider.disabled .nc-slider-body::-webkit-slider-thumb:active {
  @apply cursor-not-allowed;
}
</style>