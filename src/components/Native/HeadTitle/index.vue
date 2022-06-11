<template>
  <span class="headTitle" :id="nodeLink">
    <a :class="['titleNode', haneleLevelClass()]" :href="'#' + nodeLink">#</a>
    <span :class="['titleText', haneleLevelClass()]" ref="textContent"
      ><slot></slot
    ></span>
  </span>
</template>

<script setup>
import { ref, toRefs, onMounted, defineProps, nextTick } from 'vue'

const $props = defineProps({
  level: Number
})

const { level } = toRefs($props)
var textContent = ref(null)
var nodeLink = ref('')

onMounted(() => {
  nodeLink.value = textContent.value.textContent
})

nextTick(() => {
  handleThrowRename(nodeLink.value)
})

function haneleLevelClass () {
  return `levelTitle${level.value}`
}

function handleThrowRename (s) {
  if (document.querySelectorAll(`#${s}`).length > 1) {
    console.warn(
      `Note that in this page you have multiple components (Native: headTitle) with the same title, which will affect the location of the anchor points on the page. The repeat title: ${s}`
    )
  }
}
</script>

<style scoped lang="postcss">
.headTitle {
  @apply inline-flex items-center py-4;
}

/* Title Level Class */
.levelTitle1 {
  @apply text-4xl;
}
.levelTitle2 {
  @apply text-3xl;
}
.levelTitle3 {
  @apply text-2xl;
}
.levelTitle4 {
  @apply text-xl;
}

/* Node Link */
.titleNode {
  @apply inline-flex items-center w-0 h-full mx-2
  hover:text-blue-300
  overflow-hidden transition-all select-none;
}

/* Title Text */
.titleText {
  @apply inline-flex font-semibold;
}

/* Handle Hover Hidden */
.headTitle:hover .titleNode.levelTitle1 {
  @apply w-8;
}
.headTitle:hover .titleNode.levelTitle2 {
  @apply w-6;
}
.headTitle:hover .titleNode.levelTitle3 {
  @apply w-5;
}
.headTitle:hover .titleNode.levelTitle4 {
  @apply w-4;
}
</style>