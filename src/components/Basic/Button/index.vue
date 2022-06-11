<template>
  <div :class="['nc-button']">
    <button :class="['nc-button-body']">
      <span :class="['nc-button-inner-text']"><slot></slot></span>
    </button>
  </div>
</template>

<script setup>
</script>

<style scoped lang="postcss">
.nc-button {
  @apply inline-flex justify-center items-center max-w-min rounded-md
  cursor-pointer overflow-hidden box-border;
}

/* nc-button-inner-text */
.nc-button-inner-text {
  @apply inline-block min-w-max text-lg
  text-gray-800 dark:text-gray-100
  transition-all;
}

/* nc-button-body */
.nc-button-body {
  @apply inline-flex justify-center items-center py-1.5 px-5 w-full h-full border-2 rounded-md
  border-gray-200 dark:border-gray-600 bg-white dark:bg-black
  transition-all;
}
.nc-button-body:hover {
  @apply opacity-90
  bg-gray-50 dark:bg-gray-900 border-blue-300;
}
.nc-button-body:focus .nc-button-inner-text {
  @apply text-blue-500;
}
.nc-button-body:hover .nc-button-inner-text {
  @apply text-blue-500;
}
.nc-button-body:active {
  @apply opacity-100
  bg-gray-50 border-blue-500;
}
</style>