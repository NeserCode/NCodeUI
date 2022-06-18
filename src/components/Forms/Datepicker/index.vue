<template>
  <div class="nc-datepicker">
    <span
      class="nc-outerSelect"
      v-show="!isDatePanelShow"
      @click="handleDatePanelShow"
      >{{ pickerPlaceholder }}</span
    >
    <span class="datePanel" v-show="isDatePanelShow">
      <span
        class="dateWeekdayFormat"
        v-for="weekdayFormat in dateWeekdayFormat"
        :key="weekdayFormat"
        >{{ weekdayFormat }}</span
      >
      <span class="dateDays" v-for="day in dateContent" :key="day">
        {{ day }}
      </span>
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const pickerPlaceholder = ref('选择日期')
const dateContent = ref([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30
])
const dateWeekdayFormat = ref(['一', '二', '三', '四', '五', '六', '七'])
const isDatePanelShow = ref(false)

function handleDatePanelShow () {
  isDatePanelShow.value = !isDatePanelShow.value
}
</script>

<style scoped lang="postcss">
.nc-datepicker {
  @apply inline-flex;
}

.nc-outerSelect {
  @apply relative inline-flex items-center min-w-min px-4 py-2 border-2 rounded;
}

/* Date Panel */
.datePanel {
  @apply flex flex-wrap w-44;
}

/* Format Style */
.datePanel .dateWeekdayFormat {
  @apply inline-flex justify-center items-center w-6 h-6 font-semibold
  hover:bg-gray-200 dark:hover:bg-gray-600
  select-none cursor-pointer;
}
.datePanel .dateDays {
  @apply inline-flex justify-center items-center w-6 h-6 font-thin
  hover:bg-gray-200 dark:hover:bg-gray-600
  select-none cursor-pointer;
}
</style>