<template>
  <div :class="['nc-input', clearableClass]">
    <input
      :class="['nc-input-origin']"
      :type="type"
      :id="id"
      v-model="inputValue"
      placeholder=" "
      :autocomplete="autocomplete"
      :spellcheck="spellcheck"
    />
    <label class="nc-input-placeholder" :for="id">{{ placeholder }}</label>
    <span class="clearBtn" v-if="clearable">×</span>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, toRefs, watch, computed } from 'vue'

const $props = defineProps({
  modelValue: {
    type: [String, Number]
  },
  id: {
    type: String,
    required: true
  },
  type: {
    default: 'text'
  },
  placeholder: {
    type: String
  },
  autocomplete: {
    type: Boolean,
    default: false
  },
  spellcheck: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  }
})
const $emit = defineEmits(['update:modelValue'])

const {
  modelValue,
  placeholder,
  type,
  id,
  autocomplete,
  spellcheck,
  clearable
} = toRefs($props)

const inputValue = ref(null)

const clearableClass = computed(() => (clearable.value ? 'clearable' : null))

watch(inputValue, () => {
  if (modelValue.value === undefined) {
    inputValue.value = null
  } else handleChangeInputValue()
})
watch(modelValue, () => {
  initModelValue()
})

function initModelValue () {
  inputValue.value = modelValue.value
}
function handleChangeInputValue () {
  $emit('update:modelValue', inputValue.value)
}

initModelValue()
</script>

<style lang="postcss" scoped>
.nc-input {
  @apply relative inline-flex justify-center items-center;
}

/* Real Input Style */
.nc-input-origin {
  @apply inline-block border-2 py-1.5 px-2 rounded shadow-md
  border-gray-400 dark:border-gray-700 bg-gray-50 dark:bg-gray-900
  outline-none transition-all;
}
.nc-input-origin:focus {
  @apply border-blue-300;
}
.nc-input-origin:not(:focus) {
  @apply text-gray-500 dark:text-gray-300;
}

/* Placeholder Style */
.nc-input .nc-input-placeholder {
  @apply absolute inline-block left-3 py-1.5
  transition-all select-none opacity-100;
}
.nc-input
  .nc-input-origin:not(:focus):placeholder-shown
  ~ .nc-input-placeholder {
  @apply text-gray-300 dark:text-gray-400;
}
.nc-input .nc-input-origin:focus:placeholder-shown ~ .nc-input-placeholder {
  @apply text-gray-400 dark:text-gray-300;
}
.nc-input-origin:not(:placeholder-shown) ~ .nc-input-placeholder {
  @apply opacity-0;
}

/* Clear Button Style */
.nc-input .clearBtn {
  @apply absolute hidden justify-center items-center h-full px-2 right-0 top-0 text-lg font-bold
  hover:text-red-400
  select-none box-border cursor-pointer;
}
.nc-input .nc-input-origin:focus:not(:placeholder-shown) ~ .clearBtn {
  @apply inline-flex;
}
.nc-input.clearable .nc-input-origin:focus:not(:placeholder-shown) {
  @apply pr-6;
}
</style>