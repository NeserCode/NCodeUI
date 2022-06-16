<template>
  <span class="para"><slot></slot></span>
</template>

<script setup>
</script>

<style scoped lang="postcss">
.para {
  @apply inline-flex items-center p-4 text-base;
}

/* format */
.para {
  text-indent: 4ch;
}
.para::selection {
  @apply bg-yellow-300 dark:bg-green-300 text-gray-900 dark:text-gray-700;
}
</style>