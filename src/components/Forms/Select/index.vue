<template>
  <div :class="['nc-select', activeString]">
    <span class="nc-select-body" @click="toggleShow">
      {{ selectedString }}
    </span>
    <span class="nc-select-items">
      <span
        :class="['nc-select-item', selectedString === item ? 'selected' : null]"
        v-for="item in items"
        :key="item"
        tabindex="1"
        @click="handleChangeSelection(item)"
        >{{ item }}&nbsp;
        <span>{{ selectedString === item ? "•" : null }}</span>
      </span>
    </span>
    <span class="nc-select-icon" @click="toggleShow">
      <span class="selection"></span>
    </span>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, toRefs, watch, computed } from 'vue'

const $props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null
  },
  items: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const { modelValue, items } = toRefs($props)
const $emit = defineEmits(['update:modelValue'])

const selectedValue = ref(null)
const isSelectionsShow = ref(false)

const selectedString = computed(() => {
  if (typeof items[0] === 'string') {
    return modelValue.value === null
      ? 'UnChecked'
      : items.value.find((item) => item === modelValue.value) ?? 'UnChecked'
  } else return modelValue.value === null ? 'UnChecked' : modelValue.value
})
const activeString = computed(() => (isSelectionsShow.value ? 'active' : null))

watch(modelValue, () => {
  initModelvalue()
})
watch(selectedValue, () => {
  handleChangeModelvalue()
})

function initModelvalue () {
  selectedValue.value = modelValue.value
}
function handleChangeModelvalue () {
  $emit('update:modelValue', selectedValue.value)
}

function handleChangeSelection (item) {
  selectedValue.value = item
  toggleShow()
}

function toggleShow () {
  isSelectionsShow.value = !isSelectionsShow.value
}
</script>

<style lang="postcss" scoped>
.nc-select {
  @apply relative inline-flex flex-col justify-center min-w-max;
}

/* Select Body */
.nc-select-body {
  @apply inline-flex justify-center items-center w-full border px-2 border-b-4 border-r-0
  border-gray-400 dark:border-gray-600
  transition-all cursor-pointer select-none;
}
.nc-select .nc-select-icon {
  @apply absolute inline-flex justify-center items-center h-full left-full top-0 border border-l-0 border-b-4 opacity-100 px-1.5
  border-gray-400 dark:border-gray-600
  transition-all;
}
.nc-select .nc-select-icon .selection {
  @apply w-2 h-2 border-t border-r transform rotate-135 -translate-y-0.5
  border-gray-600;
}

/* Items Container */
.nc-select-items {
  @apply absolute inline-flex flex-col w-full h-0 top-0 left-full min-w-max
  transition-all overflow-hidden;
}

/* Item Style */
.nc-select-items .nc-select-item {
  @apply flex flex-row items-center px-2
  hover:bg-gray-200 dark:hover:bg-gray-700 bg-white dark:bg-gray-900
  cursor-pointer select-none;
}

/* Active Style */
.nc-select.active .nc-select-body {
  @apply border-blue-300 border-r;
}
.nc-select.active .nc-select-items {
  @apply h-32 border
  border-gray-400 dark:border-gray-600
  overflow-x-hidden overflow-y-auto;
}
.nc-select.active .nc-select-icon {
  @apply opacity-0 pointer-events-none;
}

/* Reset Scrollbar */
.nc-select.active .nc-select-items::-webkit-scrollbar {
  @apply w-1;
}
.nc-select.active .nc-select-items::-webkit-scrollbar-track {
  @apply w-1;
}
.nc-select.active .nc-select-items::-webkit-scrollbar-thumb {
  @apply w-1
  bg-gray-300;
}
</style>