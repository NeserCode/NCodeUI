<template>
  <div class="nc-button">
    <button class="nc-button-body">
      <span class="nc-button-inner-text"><slot></slot></span>
    </button>
  </div>
</template>

<script setup>
</script>

<style scoped lang="postcss">
.nc-button {
  @apply inline-flex justify-center items-center max-w-min
  bg-blue-500
  rounded-md cursor-pointer;
}

/* nc-button-body */
.nc-button-body {
  @apply py-1.5 px-5 w-full h-full;
}

/* nc-button-inner-text */
.nc-button-inner-text {
  @apply text-lg
  text-gray-50;
}
</style>