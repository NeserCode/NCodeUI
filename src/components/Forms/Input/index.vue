<template>
  <div class="nc-input">
    <input type="text" v-model="inputValue" />
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, toRefs, watch } from 'vue'

const $props = defineProps({
  modelValue: {
    type: [String, Number]
  }
})
const $emit = defineEmits(['update:modelValue'])

const { modelValue } = toRefs($props)

const inputValue = ref(null)

watch(inputValue, () => {
  handleChangeInputValue()
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
</style>