<template>
  <div :class="['nc-radio', checkedString]">
    <input
      type="radio"
      class="nc-radio-body"
      :id="id"
      :name="name"
      :checked="checkedValue"
    />
    <label class="nc-radio-label" :for="id"><slot></slot></label>
  </div>
</template>

<script setup>
import { ref, defineProps, toRefs, defineEmits, computed, watch } from 'vue'

const $props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const { id, name, modelValue } = toRefs($props)

const $emit = defineEmits(['update:modelValue'])

const checkedString = computed(() => (checkedValue.value ? 'checked' : null))

const checkedValue = ref(false)

watch(checkedValue, () => {
  handleChangeCheckedValue()
})
watch(modelValue, () => {
  initModelValue()
})

function initModelValue () {
  checkedValue.value = modelValue.value
}
function handleChangeCheckedValue () {
  $emit('update:modelValue', checkedValue.value)
}

initModelValue()
</script>

<style lang="postcss" scoped>
.nc-radio {
  @apply inline-flex items-center justify-center;
}

.nc-radio-body {
  @apply inline-flex justify-center items-center w-3 h-3;
}

.nc-radio-label {
  @apply inline-flex items-center justify-center px-1.5
  select-none;
}
</style>