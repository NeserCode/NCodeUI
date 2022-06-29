<template>
  <div class="nc-input">
    <input
      :class="['nc-input-origin']"
      :type="type"
      v-model="inputValue"
      placeholder=" "
      :autocomplete="autocomplete"
      :spellcheck="spellcheck"
    />
    <label for="">{{ placeholder }}</label>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, toRefs, watch } from 'vue'

const $props = defineProps({
  modelValue: {
    type: [String, Number]
  },
  type: {
    default: () => 'text'
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
  }
})
const $emit = defineEmits(['update:modelValue'])

const { modelValue, placeholder, type, autocomplete, spellcheck } =
  toRefs($props)

const inputValue = ref(null)

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
  @apply inline-flex justify-center items-center shadow-md;
}

/* Real Input Style */
.nc-input-origin {
  @apply inline-block border-2 py-1.5 px-2 rounded
  border-gray-400 dark:border-gray-700 bg-gray-50 dark:bg-gray-900
  outline-none transition-all;
}
.nc-input-origin:focus {
  @apply border-blue-300;
}
</style>