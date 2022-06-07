<template>
  <div id="nCode">
    <Header />
    <Main />
    <div class="footer"></div>
  </div>
</template>

<script setup>
import Header from '@/components/Native/Header/index.vue'
import Main from '@/components/Native/Main/index.vue'
</script>

<style scoped lang="postcss">
#nCode {
  @apply w-full;
}
</style>

<style lang="postcss">
html,
body {
  @apply p-0 m-0 text-gray-900
  dark:text-gray-50;
}
</style>
