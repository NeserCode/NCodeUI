<template>
  <div :class="['nc-switch', activeClass, disabledClass, roundClass]">
    <span
      class="nc-switch-inactive-text"
      v-if="!innerMode && inactiveText && activeText"
      >{{ inactiveText }}</span
    >
    <div class="nc-switch-container" @click="toggleActiveStatus">
      <span class="nc-switch-body"></span>
      <span class="nc-switch-text" v-if="innerMode">{{
        computedStatusText
      }}</span>
    </div>
    <span
      class="nc-switch-active-text"
      v-if="!innerMode && inactiveText && activeText"
      >{{ activeText }}</span
    >
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, toRefs, computed, watch } from 'vue'
const isActived = ref(false)

const $emit = defineEmits(['update:modelValue'])
const $props = defineProps({
  modelValue: {
    type: Boolean,
    default: () => false
  },
  activeText: {
    type: String
  },
  inactiveText: {
    type: String
  },
  innerMode: {
    type: Boolean,
    default: () => false
  },
  roundMode: {
    type: Boolean,
    default: () => false
  },
  disabled: {
    type: Boolean,
    default: () => false
  }
})
const { modelValue, activeText, inactiveText, innerMode, roundMode, disabled } =
  toRefs($props)

const computedStatusText = computed(() =>
  activeText.value && inactiveText.value
    ? isActived.value
      ? activeText.value
      : inactiveText.value
    : null
)
const activeClass = computed(() => (isActived.value ? 'actived' : null))
const disabledClass = computed(() => (disabled.value ? 'disabled' : null))
const roundClass = computed(() => (roundMode.value ? 'round' : null))

watch(modelValue, () => {
  initActiveStatus()
})

function toggleActiveStatus () {
  if (disabled.value) return 0
  else {
    isActived.value = !isActived.value
    $emit('update:modelValue', isActived.value)
  }
}

function initActiveStatus () {
  isActived.value = modelValue.value
}

initActiveStatus()
</script>

<style lang="postcss" scoped>
.nc-switch {
  @apply inline-flex justify-center items-center h-full
  select-none;
}

/* Switch Style */
.nc-switch .nc-switch-container {
  @apply relative inline-block min-w-min w-16 h-8 p-1
  bg-gray-300
  transition-all;
}
.nc-switch .nc-switch-container .nc-switch-body {
  @apply inline-block w-6 h-6
    bg-white
    transition-all transform translate-x-0;
}
.nc-switch .nc-switch-container .nc-switch-text {
  @apply absolute inline-block min-w-min top-1 right-0.5 text-xs font-semibold leading-6
  text-gray-50
  transition-all transform -translate-x-1.5;
}
.nc-switch .nc-switch-inactive-text,
.nc-switch .nc-switch-active-text {
  @apply inline-block px-2 min-w-min
  text-gray-300;
}
.nc-switch .nc-switch-inactive-text {
  @apply text-blue-300;
}

/* Switch Active Style */
.nc-switch.actived .nc-switch-container .nc-switch-body {
  @apply translate-x-8;
}
.nc-switch.actived .nc-switch-container {
  @apply bg-blue-300;
}
.nc-switch.actived .nc-switch-container .nc-switch-text {
  @apply left-0.5
  text-gray-200
  transform translate-x-1.5;
}
.nc-switch.actived .nc-switch-inactive-text {
  @apply text-gray-300;
}
.nc-switch.actived .nc-switch-active-text {
  @apply text-blue-300;
}

/* Disabled Style */
.nc-switch.disabled {
  @apply opacity-60 cursor-not-allowed;
}

/* Rounded Style */
.nc-switch.round .nc-switch-container {
  @apply rounded-full;
}
.nc-switch.round .nc-switch-container .nc-switch-body {
  @apply rounded-full;
}
</style>