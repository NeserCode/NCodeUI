<template>
  <form class="nc-form">
    <slot />
  </form>
</template>

<script setup>
import { defineProps, toRefs, provide, reactive } from "vue";
import { FormGroupKey } from "@/tokens/form.js";

const $props = defineProps({
  size: {
    type: String,
    validator: (value) => ["large", "normal", "small"].includes(value),
  },
  align: {
    type: String,
    validator: (value) => ["left", "center", "right"].includes(value),
  },
});

provide(
  FormGroupKey,
  reactive({
    ...toRefs($props),
  })
);
</script>

<style lang="postcss" scoped>
.nc-form {
  @apply flex flex-col items-center justify-center w-full h-full;
}
</style>
