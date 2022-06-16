<template>
  <div class="home">
    <span class="mainFont">404</span>
    <span class="explain">
      <span>你访问的路径没有被找到</span>
      <span>{{ pathCatch.join("/") }}</span>
    </span>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
const $route = useRoute()

var pathCatch = ref('/')

onBeforeMount(() => {
  pathCatch.value = $route.params.pathMatch ?? '/'
})
</script>

<style scoped lang="postcss">
.home {
  @apply flex flex-col justify-center items-center w-full h-full;
}

/* 404 Style */
.mainFont {
  @apply font-mono font-black text-9xl
  text-gray-800 dark:text-gray-100
  select-none;
}

/* Explain Text */
.explain {
  @apply inline-block my-4 font-thin text-xs
  text-gray-700 dark:text-gray-200;
}
.explain span {
  @apply block text-center leading-8;
}

.explain span:last-child {
  @apply block font-normal text-center leading-4;
}
</style>