<template>
  <viewBox :code="code">
    <div class="placeContainer">
      <nc-scrollbar vertival horizontal>
        <span v-for="i in 20" :key="i">{{ i }}</span>
      </nc-scrollbar>
    </div>
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcScrollbar from '@/components/Basic/Scrollbar/index.vue'

import { ref } from 'vue'

const code = ref(`<template>
    <div class="placeContainer">
      <nc-scrollbar vertival horizontal>
        <span v-for="i in 20" :key="i">{{ i }}</span>
      </nc-scrollbar>
    </div>
</template>

<style lang="postcss" scoped>
.placeContainer {
  @apply relative w-40 h-64 mx-auto;
}
.placeContainer span {
  @apply block w-64 text-center my-2
  bg-blue-300;
}
</style>`)
</script>

<style lang="postcss" scoped>
.placeContainer {
  @apply relative w-40 h-64 mx-auto;
}
.placeContainer span {
  @apply block w-64 text-center my-2
  bg-blue-300;
}
</style>