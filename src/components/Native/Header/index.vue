<template>
  <div class="header">
    <button @click="ToggleDark">Dark</button>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
var isDark = ref(false)

watch(isDark, () => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

function ToggleDark () {
  if (!isDark.value) localStorage.setItem('theme', 'dark')
  else localStorage.removeItem('theme')

  isDark.value = !isDark.value
}
</script>

<style scoped lang="postcss">
.header {
  @apply h-12 bg-green-200 dark:bg-gray-200;
}
</style>
