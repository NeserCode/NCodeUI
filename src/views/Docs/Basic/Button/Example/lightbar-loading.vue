<template>
  <viewBox :code="code">
    <nc-button btnStyle="lightBar" :loading="isLoading" @click="toggleLoading"
      >默认样式</nc-button
    >
    <nc-button
      meaning="success"
      btnStyle="lightBar"
      :loading="isLoading"
      loadingText="Clicking"
      @click="toggleLoading"
      >点击</nc-button
    >
    <nc-button
      meaning="info"
      btnStyle="lightBar-top"
      :loading="isLoading"
      @click="toggleLoading"
      >按钮</nc-button
    >
    <nc-button
      meaning="warning"
      btnStyle="lightBar"
      :loading="isLoading"
      @click="toggleLoading"
      disabled
      >开启</nc-button
    >
    <nc-button
      meaning="danger"
      btnStyle="lightBar-top"
      :loading="isLoading"
      @click="toggleLoading"
      >Loading</nc-button
    >
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcButton from '@/components/Basic/Button/index.vue'

import { ref } from 'vue'

const code = ref(
  `<template>
    <nc-button btnStyle="lightBar" :loading="isLoading" @click="toggleLoading">默认样式</nc-button>
    <nc-button meaning="success" btnStyle="lightBar" :loading="isLoading" loadingText="Clicking" @click="toggleLoading">点击</nc-button>
    <nc-button meaning="info" btnStyle="lightBar-top" :loading="isLoading" @click="toggleLoading">按钮</nc-button>
    <nc-button meaning="warning" btnStyle="lightBar" :loading="isLoading" @click="toggleLoading" disabled>开启</nc-button>
    <nc-button meaning="danger" btnStyle="lightBar-top" :loading="isLoading" @click="toggleLoading">Loading</nc-button>
</template>

<script>
import { ref } from 'vue'

var isLoading = ref(false)

function toggleLoading () {
  if (!isLoading.value) {
    isLoading.value = true
    setTimeout(() => {
      if (isLoading.value) isLoading.value = false
    }, 3000)
  }
}
</` + 'script>'
)
var isLoading = ref(false)

function toggleLoading () {
  if (!isLoading.value) {
    isLoading.value = true
    setTimeout(() => {
      if (isLoading.value) isLoading.value = false
    }, 3000)
  }
}
</script>

<style lang="postcss" scoped>
.viewBox .nc-button {
  @apply m-4;
}
</style>