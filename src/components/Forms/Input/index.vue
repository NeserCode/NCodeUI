<template>
  <div :class="['nc-input', clearableClass, movableClass, moveHiddenClass]">
    <input
      :class="['nc-input-origin']"
      :type="type"
      :id="id"
      v-model="inputValue"
      placeholder=" "
      :autocomplete="autocomplete"
      :spellcheck="spellcheck"
      @focus="handleInputFocus(true)"
      @blur="handleInputFocus(false)"
      :max="max"
      :min="min"
      :maxlength="maxlength"
      :minlength="minlength"
      :step="step"
    />
    <label class="nc-input-placeholder" :for="id">{{ placeholder }}</label>
    <span class="clearBtn" v-if="clearable" @click="handleClearInputValue"
      >×</span
    >
  </div>
  <div class="nc-input-count" ref="count" v-if="showCount || showLimit">
    <span class="nc-input-count-string">{{ countString }}</span>
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
  },
  movable: {
    type: String
  },
  autoHidden: {
    type: Boolean,
    default: false
  },
  max: {
    type: Number
  },
  min: {
    type: Number
  },
  maxlength: {
    type: Number
  },
  minlength: {
    type: Number
  },
  step: {
    type: Number
  },
  showCount: {
    type: Boolean,
    default: false
  },
  showLimit: {
    type: Boolean,
    default: false
  }
})
const $emit = defineEmits(['update:modelValue', 'input'])

const {
  modelValue,
  placeholder,
  type,
  id,
  autocomplete,
  spellcheck,
  clearable,
  movable,
  autoHidden,
  max,
  min,
  maxlength,
  minlength,
  step,
  showCount,
  showLimit
} = toRefs($props)

const count = ref(null)

const inputValue = ref(null)

const clearableClass = computed(() => (clearable.value ? 'clearable' : null))
const movableClass = computed(() =>
  movable.value ? `move-${movable.value}` : null
)
const moveHiddenClass = computed(() =>
  autoHidden.value && movable ? 'auto-hidden' : null
)
const countString = computed(() => {
  if (showCount.value && !showLimit.value) {
    return inputValue.value ? inputValue.value.length : 0
  } else if (showCount.value && showLimit.value) {
    return `${inputValue.value ? inputValue.value.length : 0} / ${
      maxlength.value
    }`
  } else return null
})

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
function handleChangeInputValue (val) {
  $emit('update:modelValue', val ?? inputValue.value)
  $emit('input', val ?? inputValue.value)
}

function handleClearInputValue () {
  handleChangeInputValue('')
}

function handleInputFocus (va) {
  if (showCount.value || showLimit.value) {
    if (va) count.value.classList.add('actived')
    else count.value.classList.remove('actived')
  }
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
  @apply absolute inline-block px-3 left-0 py-1.5
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
.nc-input .nc-input-origin:focus:not(:placeholder-shown) ~ .clearBtn,
.nc-input .nc-input-origin ~ .clearBtn:hover {
  @apply inline-flex;
}
.nc-input.clearable .nc-input-origin:focus:not(:placeholder-shown) {
  @apply pr-6;
}

/* Movable Style */
/* Left */
.nc-input.move-left
  .nc-input-origin:not(:placeholder-shown)
  ~ .nc-input-placeholder {
  @apply transform -translate-x-full opacity-100;
}
.nc-input.move-left.auto-hidden
  .nc-input-origin:not(:focus):not(:placeholder-shown)
  ~ .nc-input-placeholder {
  @apply transform translate-x-0 opacity-0;
}
.nc-input.move-left .nc-input-origin:not(:placeholder-shown) {
  @apply transform translate-x-1;
}
.nc-input.move-left.auto-hidden
  .nc-input-origin:not(:focus):not(:placeholder-shown) {
  @apply transform translate-x-0;
}
.nc-input.move-left {
  @apply mx-1;
}
.nc-input.move-left.auto-hidden {
  @apply mx-0;
}
/* Up */
.nc-input.move-up
  .nc-input-origin:not(:placeholder-shown)
  ~ .nc-input-placeholder {
  @apply transform -translate-y-full opacity-100 inline-block pl-0;
}
.nc-input.move-up.auto-hidden
  .nc-input-origin:not(:focus):not(:placeholder-shown)
  ~ .nc-input-placeholder {
  @apply transform translate-y-0 opacity-0 px-3;
}
.nc-input.move-up .nc-input-origin:not(:placeholder-shown) {
  @apply transform translate-y-1;
}
.nc-input.move-up.auto-hidden
  .nc-input-origin:not(:focus):not(:placeholder-shown) {
  @apply transform translate-y-0;
}
.nc-input.move-up {
  @apply my-1;
}
.nc-input.move-up.auto-hidden {
  @apply my-0;
}

/* Count Style */
.nc-input-count {
  @apply inline-flex justify-center items-center top-0 py-1.5 px-2 text-xs
  pointer-events-none select-none transition-all opacity-0;
}
.nc-input.move-left.auto-hidden ~ .nc-input-count {
  @apply ml-1;
}
.nc-input.move-up.auto-hidden ~ .nc-input-count {
  @apply mt-1;
}
.nc-input-count.actived {
  @apply opacity-100;
}
</style>