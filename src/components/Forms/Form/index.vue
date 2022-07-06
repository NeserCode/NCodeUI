<template>
  <form class="nc-form">
    <slot />
  </form>
</template>

<script setup>
</script>

<style lang="postcss" scoped>
.nc-form {
  @apply flex flex-col items-center justify-center w-full h-full;
}
</style>