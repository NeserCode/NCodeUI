<template>
  <div class="viewBox">
    <div class="assetsContainer" v-show="!isCodeShow"><slot></slot></div>
    <div class="codeContainer" v-show="isCodeShow">
      <highlightjs autodetect :code="code" :lang="lang" />
    </div>
    <span :class="['codeToggle', codeShowClass]" @click="toggleCodeShow">
      <span class="sc">代码</span>
      /
      <span class="se">示例</span>
    </span>
  </div>
</template>

<script setup>
import { defineProps, toRefs, ref, computed } from 'vue'

const $props = defineProps({
  code: String,
  lang: {
    type: String,
    defalut: () => 'html'
  }
})

const { code, lang } = toRefs($props)
const isCodeShow = ref(false)

const codeShowClass = computed(() => (isCodeShow.value ? 'codeShow' : null))

function toggleCodeShow () {
  isCodeShow.value = !isCodeShow.value
}
</script>

<style scoped lang="postcss">
.viewBox {
  @apply relative flex flex-col w-full px-8 py-12 mx-auto my-4 border-2 rounded
  border-gray-300 dark:border-gray-700 bg-white dark:bg-black;
}

/* Assets Container */
.assetsContainer {
  @apply flex justify-evenly w-full;
}

/* Code Container */
.codeContainer {
  @apply w-full h-full;
}

/* Code Toggle */
.codeToggle {
  @apply absolute inline-block w-max -top-px -right-px py-2 px-4 border font-thin text-xs
  bg-transparent border-gray-300 dark:border-gray-700
  opacity-75 hover:opacity-90 cursor-pointer select-none;
}
.codeToggle .se {
  @apply font-semibold;
}
.codeToggle.codeShow .se {
  @apply font-thin;
}
.codeToggle.codeShow .sc {
  @apply font-semibold;
}
</style>