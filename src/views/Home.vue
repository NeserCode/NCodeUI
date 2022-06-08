<template>
  <div class="home">
    <span>当你来到这个页面时，意味着你当前访问的路径出现故障或不存在:</span>
    <span>{{ pathCatch.join("/") }}</span>
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
  @apply flex justify-center w-full h-full;
}
</style>