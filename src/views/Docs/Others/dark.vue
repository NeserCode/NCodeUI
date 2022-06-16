<template>
  <div class="dark">
    <headTitle :level="1">暗黑模式</headTitle>
    <para
      >NCodeUI
      组件库在编写时已经为您内置了一款与默认样式相对应的暗黑主题样式</para
    >
  </div>
</template>

<script setup>
import headTitle from '@/components/Native/HeadTitle/index.vue'
import para from '@/components/Native/Para/index.vue'
</script>

<style scoped lang="postcss">
.dark {
  @apply flex flex-col w-full h-full py-4 px-6;
}
</style>