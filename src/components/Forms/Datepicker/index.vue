<template>
  <div class="nc-datepicker">
    <span
      class="nc-outerSelect"
      v-show="!isDatePanelShow"
      @click="handleDatePanelShow"
      >{{ modelValue.toLocaleDateString() ?? pickerPlaceholder }}</span
    >
    <span
      class="datePanel"
      v-show="isDatePanelShow"
      @click="handleChangeModelValue"
    >
      <span
        class="dateWeekdayFormat"
        v-for="weekdayFormat in dateWeekdayFormat"
        :key="weekdayFormat"
        >{{ weekdayFormat }}</span
      >
      <span class="restDays" v-for="rest in dateLastMonthRest" :key="rest">{{
        rest
      }}</span>
      <span
        class="dateDays"
        v-for="day in dateTotalContent"
        :key="day"
        @click="handleDatePanelShow"
      >
        {{ day }}
      </span>
      <span class="nextDays" v-for="next in dateNextMonthRest" :key="next">{{
        next
      }}</span>
    </span>
  </div>
</template>

<script setup>
import {
  defineEmits,
  defineProps,
  toRefs,
  ref,
  computed,
  onBeforeMount
} from 'vue'

const pickerPlaceholder = ref('选择日期')
const dateWeekdayFormat = ref(['一', '二', '三', '四', '五', '六', '七'])
const isDatePanelShow = ref(false)

const dateTotalContent = computed(() =>
  getMonthDays(modelValue.value.getFullYear(), modelValue.value.getMonth() + 1)
)
const dateLastMonthRest = computed(() => getLastMonthRest())
const dateNextMonthRest = computed(() => getNextMonthRest())

const $emit = defineEmits(['update:modelValue'])

const $props = defineProps({
  modelValue: {
    type: Object,
    default: () => new Date()
  }
})
const { modelValue } = toRefs($props)

onBeforeMount(() => {
  console.log('当月', getCurrentDayinMonth())
})

function handleChangeModelValue () {
  $emit('update:modelValue', modelValue.value)
}

function handleDatePanelShow () {
  isDatePanelShow.value = !isDatePanelShow.value
}

function getLastMonthRest () {
  const t = modelValue.value
  const arr = []

  const limit = getMonthDays(
    t.getFullYear(),
    t.getMonth() === 11 ? 0 : t.getMonth()
  )

  const currentMonthFirstDay = new Date(t.getFullYear(), t.getMonth(), 1)
  for (
    let i = 0;
    i <
    (currentMonthFirstDay.getDay() === 0
      ? 6
      : currentMonthFirstDay.getDay() - 1);
    i++
  ) {
    arr.unshift(limit - i)
  }
  return arr
}
function getNextMonthRest () {
  const t = modelValue.value
  let number = 0
  const currentMonthLastDay = new Date(
    t.getFullYear(),
    t.getMonth(),
    getMonthDays(t.getFullYear(), t.getMonth() + 1)
  )

  number = 7 - currentMonthLastDay.getDay()
  return number
}
function getCurrentDayinMonth (s) {
  return s
    ? new Date(
      modelValue.value.getFullYear(),
      modelValue.value.getMonth(),
      s ?? 0
    ).getDate()
    : modelValue.value.getDate()
}
function getMonthDays (year, month) {
  return new Date(year, month, 0).getDate()
}
</script>

<style scoped lang="postcss">
.nc-datepicker {
  @apply inline-flex;
}

.nc-outerSelect {
  @apply relative inline-flex items-center min-w-min px-4 py-2 border-2 rounded
  text-gray-400 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:text-blue-300
  hover:border-blue-400 dark:hover:border-blue-500 dark:hover:text-blue-400
  cursor-pointer select-none transition-all;
}

/* Date Panel */
.datePanel {
  @apply flex flex-wrap w-52 p-4 border-2 rounded-sm
  border-gray-300 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500
  transition-all;
}

/* Format Style */
.datePanel .dateWeekdayFormat {
  @apply inline-flex justify-center items-center w-6 h-6 pb-1.5 pt-0.5 border-b font-semibold text-xs
  border-gray-300 dark:border-gray-600
  select-none cursor-pointer;
}
.datePanel .dateDays {
  @apply inline-flex justify-center items-center w-6 h-6 font-thin
  hover:bg-gray-200 dark:hover:bg-gray-600
  select-none cursor-pointer;
}
.datePanel .restDays {
  @apply inline-flex justify-center items-center w-6 h-6 font-thin opacity-60
  bg-gray-100 dark:bg-gray-800
  select-none cursor-pointer;
}
.datePanel .nextDays {
  @apply inline-flex justify-center items-center w-6 h-6 font-thin opacity-60
  bg-gray-100 dark:bg-gray-800
  select-none cursor-pointer;
}
</style>