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
  text-indent: 2ch;
}
</style>