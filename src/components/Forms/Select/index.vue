<template>
  <div class="nc-select">
    <span class="nc-select-body" @click="toggleShow">
      {{ selectedString }}
    </span>
    <span class="nc-select-items" v-show="isSelectionsShow">
      <span class="nc-select-item" v-for="item in items" :key="item">{{
        item
      }}</span>
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
const $emit = defineEmits('update:modelValue')

const selectedValue = ref(null)
const isSelectionsShow = ref(false)

const selectedString = computed(() =>
  modelValue.value === null
    ? 'UnChecked'
    : items.value.find((item) => item === modelValue.value).toString()
)

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

function initItemType () {
  if (items.value.length === 0) console.log('items is empty')
  else console.log(typeof items.value[0])
}

// function toggleSelections () {
//   if (isSelectionsShow.value) {
//     isSelectionsShow.value = false
//     document.removeEventListener('click', toggleShow())
//   } else {
//     isSelectionsShow.value = true
//     document.addEventListener('click', toggleShow())
//   }
// }

function toggleShow () {
  isSelectionsShow.value = !isSelectionsShow.value
}

initItemType()
</script>

<style lang="postcss" scoped>
.nc-select {
  @apply inline-flex flex-col shadow;
}

/* Select Body */
.nc-select-body {
  @apply inline-flex justify-center items-center border border-b-4 min-w-max rounded-t-sm
  border-gray-400 dark:border-gray-600
  box-border cursor-pointer;
}

/* Items Container */
.nc-select-items {
  @apply flex flex-col w-full min-w-max border
  border-gray-400 dark:border-gray-600
  box-border;
}

/* Item Style */
.nc-select-items .nc-select-item {
  @apply flex flex-row items-center px-4;
}
</style>