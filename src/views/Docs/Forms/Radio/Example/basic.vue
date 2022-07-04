<template>
  <viewBox :code="code">
    <nc-radio-group>
      <nc-radio id="radio1" name="g1">单选1</nc-radio>
      <nc-radio id="radio2" name="g1">单选2</nc-radio>
      <nc-radio id="radio3" name="g2">单选3</nc-radio>
      <nc-radio id="radio4" name="g2">单选4</nc-radio>
    </nc-radio-group>
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcRadio from '@/components/Forms/Radio/index.vue'
import NcRadioGroup from '@/components/Forms/Radio/group.vue'

import { ref } from 'vue'

const code = ref(
  `<template>
    <nc-radio id="radio1" name="g1">单选1</nc-radio>
    <nc-radio id="radio2" name="g1">单选2</nc-radio>
    <nc-radio id="radio3" name="g2">单选3</nc-radio>
    <nc-radio id="radio4" name="g2">单选4</nc-radio>
</template>

<script>
import { ref } from 'vue'

</` + 'script>'
)
</script>