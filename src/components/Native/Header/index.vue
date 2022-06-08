<template>
  <div class="header">
    <div class="left">
      <span class="logo" @click="handleBackDocs">NCodeUI</span>
      <span class="colorScheme" @click="ToggleDark">
        <span class="obj">{{ !isDark ? "☀" : "🌙" }}</span>
        <span class="text">{{ `${!isDark ? "日" : "夜"}间模式` }}</span>
      </span>
    </div>
    <div class="right">
      <span class="links" @click="openExtraLinks(uiLink)">⭐Github</span>
      <span class="links" @click="openExtraLinks(authorLink)">👨作者</span>
    </div>
  </div>
</template>

<script setup>
import { watch, onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const $router = useRouter()
const $route = useRoute()

var isDark = ref(false)
const uiLink = 'http://github.com/NeserCode/NCodeUI'
const authorLink = 'http://github.com/NeserCode'

onBeforeMount(() => {
  isDark.value = Boolean(localStorage.getItem('theme'))
})

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

function openExtraLinks (u) {
  if (u) window.open(new URL(u), '_blank')
  else return 0
}

function handleBackDocs () {
  if ($route.name !== 'Home') $router.push({ name: 'Docs' })
}
</script>

<style scoped lang="postcss">
.header {
  @apply flex justify-between items-center w-full h-20 px-4
  sticky top-0 border-b box-border
bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-500
  transition select-none z-10;
}

.left,
.right {
  @apply flex justify-center items-center w-auto;
}

/* left area */
.logo {
  @apply inline-block font-mono font-thin text-2xl mx-4;
}
.colorScheme {
  @apply flex items-center px-2 h-12 rounded-full
  hover:bg-gray-300 dark:hover:bg-gray-900
  transition-all cursor-pointer;
}
.colorScheme .obj {
  @apply flex justify-center items-center w-12 h-12 rounded-full;
}
.colorScheme .text {
  @apply w-0 font-thin
  whitespace-nowrap overflow-hidden transition-all;
}
.colorScheme:hover .text {
  @apply w-full;
}

/* right area */
.links {
  @apply inline-block font-mono font-thin py-px mx-2 border-b
  border-gray-700 dark:border-gray-100 opacity-75 hover:opacity-100
  transition-all cursor-pointer;
}
</style>
