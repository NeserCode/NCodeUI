<template>
  <div class="nc-datepicker">
    <span
      class="nc-outerSelect"
      v-show="!isDatePanelShow"
      @click="handleDatePanelShow"
      >{{ modelValue.toLocaleDateString() ?? pickerPlaceholder }}</span
    >
    <span class="datePanel" v-show="isDatePanelShow">
      <span class="dateSelection">
        <span class="year">
          <span class="reduce" @click="handleReduceYear">-</span>
          <span class="yearText">{{ yearString }}</span>
          <span class="increase" @click="handleIncreaseYear">+</span>
        </span>
        <span class="month">
          <span class="reduce" @click="handleReduceMonth">-</span>
          <span class="monthText">{{ monthString }}</span>
          <span class="increase" @click="handleIncreaseMonth">+</span>
        </span>
      </span>
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
        @click="handleSelectDay(day)"
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

const yearString = computed(() => modelValue.value.getFullYear())
const monthString = computed(() => modelValue.value.getMonth() + 1)

const $emit = defineEmits(['update:modelValue'])

const $props = defineProps({
  modelValue: {
    type: Object,
    default: () => new Date()
  }
})
const { modelValue } = toRefs($props)

onBeforeMount(() => {})

function handleChangeModelValue (year, month, day) {
  $emit('update:modelValue', new Date(year, month, day))
}

function handleIncreaseMonth () {
  handleChangeModelValue(
    modelValue.value.getFullYear(),
    modelValue.value.getMonth() + 1,
    modelValue.value.getDate()
  )
}
function handleReduceMonth () {
  handleChangeModelValue(
    modelValue.value.getFullYear(),
    modelValue.value.getMonth() - 1,
    modelValue.value.getDate()
  )
}
function handleIncreaseYear () {
  handleChangeModelValue(
    modelValue.value.getFullYear() + 1,
    modelValue.value.getMonth(),
    modelValue.value.getDate()
  )
}
function handleReduceYear () {
  handleChangeModelValue(
    modelValue.value.getFullYear() - 1,
    modelValue.value.getMonth(),
    modelValue.value.getDate()
  )
}
function handleSelectDay (day) {
  handleChangeModelValue(
    modelValue.value.getFullYear(),
    modelValue.value.getMonth(),
    day
  )
  handleDatePanelShow()
}

function handleDatePanelShow () {
  isDatePanelShow.value = !isDatePanelShow.value
}

function getLastMonthRest () {
  const arr = []

  const limit = getMonthDays(
    modelValue.value.getFullYear(),
    modelValue.value.getMonth() === 11 ? 0 : modelValue.value.getMonth()
  )

  const currentMonthFirstDay = new Date(
    modelValue.value.getFullYear(),
    modelValue.value.getMonth(),
    1
  )
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
  let number = 0
  const currentMonthLastDay = new Date(
    modelValue.value.getFullYear(),
    modelValue.value.getMonth(),
    getMonthDays(
      modelValue.value.getFullYear(),
      modelValue.value.getMonth() + 1
    )
  )

  number = 7 - currentMonthLastDay.getDay()
  return number
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

/* Date Selection Style */
.datePanel .dateSelection {
  @apply inline-flex justify-evenly items-center w-full h-6 mb-2;
}
.datePanel .dateSelection .year,
.datePanel .dateSelection .month {
  @apply inline-flex items-center;
}
.datePanel .dateSelection .reduce,
.datePanel .dateSelection .increase {
  @apply inline-flex justify-center items-center w-4 mx-2
  hover:bg-gray-200 dark:hover:bg-gray-800
  select-none box-border;
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