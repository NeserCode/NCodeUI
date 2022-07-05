<template>
  <viewBox :code="code">
    <nc-radio-group v-model="radio1" name="g1">
      <nc-radio id="radio1" label="单选1" />
      <nc-radio id="radio2" label="单选2" />
      <nc-radio id="radio3" label="单选3" />
      <nc-radio id="radio4" label="单选4" />
    </nc-radio-group>
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcRadio from '@/components/Forms/Radio/index.vue'
import NcRadioGroup from '@/components/Forms/Radio/group.vue'

import { ref } from 'vue'

const radio1 = ref('单选1')

const code = ref(
  `<template>
    <nc-radio-group v-model="radio1" name="g1">
      <nc-radio id="radio1" label="单选1" />
      <nc-radio id="radio2" label="单选2" />
      <nc-radio id="radio3" label="单选3" />
      <nc-radio id="radio4" label="单选4" />
    </nc-radio-group>
</template>

<script>
import { ref } from 'vue'

const radio1 = ref('单选1')
</` + 'script>'
)
</script>