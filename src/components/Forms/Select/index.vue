<template>
  <div :class="['nc-select', activeString, disabledClass]">
    <div class="nc-select-main">
      <span class="nc-select-body" @click="toggleShow">
        {{ selectedString }}
      </span>
    </div>
    <span class="nc-select-items">
      <span
        :class="[
          'nc-select-item',
          selectedClass(item),
          disabledItemClass(item),
        ]"
        v-for="(item, index) in items"
        :key="item.id ?? item"
        tabindex="1"
        @click="handleChangeSelection(item, index)"
        >{{ item.bound ?? item }}&nbsp;
        <span>{{ selectedIconString(item) }}</span>
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
  uncheckedText: {
    type: String,
    default: () => 'Unchecked'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const { modelValue, items, uncheckedText, disabled } = toRefs($props)
const $emit = defineEmits(['update:modelValue'])

const selectedValue = ref(null)
const isSelectionsShow = ref(false)

const isOptionTyped = computed(() => typeof items.value[0] === 'object')
const disabledClass = computed(() => (disabled.value ? 'disabled' : null))
const disabledItemClass = computed(
  () => (item) => item.disabled ? 'disabledItem' : null
)
const activeString = computed(() => (isSelectionsShow.value ? 'active' : null))
const selectedString = computed(() => {
  return isOptionTyped.value
    ? (items.value.find((item) => item.bound === modelValue.value).disabled
      ? null
      : items.value.find((item) => item.bound === modelValue.value).bound) ??
        (uncheckedText.value.length === 0 ? 'Unchecked' : uncheckedText.value)
    : items.value.find((item) => item === modelValue.value) ??
        (uncheckedText.value.length === 0 ? 'Unchecked' : uncheckedText.value)
})
const selectedIconString = computed(
  () => (item) =>
    selectedString.value === (isOptionTyped.value ? item.bound : item)
      ? '•'
      : null
)
const selectedClass = computed(
  () => (item) =>
    selectedString.value === (isOptionTyped.value ? item.bound : item)
      ? 'selected'
      : null
)
const computedHeight = computed(() => items.value.length * 24)

watch(modelValue, () => {
  initModelvalue()
})
watch(selectedValue, () => {
  handleChangeModelvalue()
})

function initModelvalue () {
  if (isOptionTyped.value) {
    if (
      items.value.findIndex((item) => item.bound === modelValue.value) !== -1 &&
      items.value.find((item) => item.bound === modelValue.value).disabled
    ) {
      selectedValue.value = uncheckedText.value
    } else selectedValue.value = modelValue.value
  } else selectedValue.value = modelValue.value
}
function handleChangeModelvalue () {
  $emit('update:modelValue', selectedValue.value)
}

function handleChangeSelection (item, index) {
  if (isOptionTyped.value) {
    if (!items.value[index].disabled) {
      selectedValue.value = isOptionTyped.value ? item.bound : item
    }
  } else selectedValue.value = isOptionTyped.value ? item.bound : item

  toggleShow(true)
}

function toggleShow (val) {
  if (disabled.value) return 0
  if (typeof val === 'boolean') isSelectionsShow.value = val
  isSelectionsShow.value = !isSelectionsShow.value
}
</script>

<style lang="postcss" scoped>
.nc-select {
  @apply relative flex flex-col justify-center w-auto mr-6 z-0 overflow-ellipsis;
}

/* Select Body */
.nc-select-main {
  @apply overflow-hidden whitespace-nowrap overflow-ellipsis;
}
.nc-select-body {
  @apply relative flex items-center border px-2 border-b-4 border-r-0
  border-gray-400 dark:border-gray-600
  transition-all cursor-pointer box-border select-none z-20 overflow-ellipsis;
}
.nc-select .nc-select-icon {
  @apply absolute inline-flex justify-center items-center h-full left-full top-0 border border-l-0 border-b-4 opacity-100 px-1.5
  border-gray-400 dark:border-gray-600
  transition-all;
}
.nc-select .nc-select-icon .selection {
  @apply w-2 h-2 border-t border-r
  border-gray-600
  transition-all transform rotate-135 -translate-y-0.5 origin-center;
}
.nc-select:hover .nc-select-icon .selection {
  @apply rotate-45 translate-y-0;
}

/* Items Container */
.nc-select-items {
  @apply absolute inline-flex flex-col w-full h-0 top-full left-0 min-w-max
  bg-white dark:bg-gray-900
  transition-all overflow-hidden;
}

/* Item Style */
.nc-select-items .nc-select-item {
  @apply flex flex-row items-center px-2
  hover:bg-gray-200 dark:hover:bg-gray-700 bg-white dark:bg-gray-900
  cursor-pointer select-none;
}
.nc-select-items .nc-select-item.selected {
  @apply text-blue-400;
}

/* Active Style */
.nc-select.active .nc-select-body,
.nc-select.active .nc-select-icon {
  @apply border-blue-300;
}
.nc-select.active .nc-select-item {
  @apply border-gray-400 dark:border-gray-600
  z-10;
}
.nc-select.active .nc-select-items {
  @apply max-h-28 border
  border-gray-400 dark:border-gray-600
  overflow-x-hidden overflow-y-auto z-10;
  height: v-bind("computedHeight");
}
.nc-select.active .nc-select-icon .selection {
  @apply translate-y-0.5 rotate-315;
}

/* Disabled Style */
.nc-select.disabled {
  @apply opacity-60;
}
.nc-select.disabled,
.nc-select.disabled .nc-select-body {
  @apply cursor-not-allowed;
}
.nc-select.disabled:hover .nc-select-icon .selection {
  @apply rotate-135 -translate-y-0.5;
}
.nc-select-items .nc-select-item.disabledItem {
  @apply hover:bg-white dark:hover:bg-gray-900
  opacity-60 cursor-not-allowed;
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