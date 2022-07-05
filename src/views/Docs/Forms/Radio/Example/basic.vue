<template>
  <viewBox :code="code">
    <nc-radio-group v-model="radio1" name="basic">
      <nc-radio id="radio1" label="单选1" value="a" />
      <nc-radio id="radio2" label="单选2" value="b" />
      <nc-radio id="radio3" value="c">单选3</nc-radio>
      <nc-radio id="radio4" label="单选4" value="d" />
    </nc-radio-group>
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcRadio from '@/components/Forms/Radio/index.vue'
import NcRadioGroup from '@/components/Forms/Radio/group.vue'

import { ref } from 'vue'

const radio1 = ref('a')

const code = ref(
  `<template>
    <nc-radio-group v-model="radio1" name="basic">
      <nc-radio id="radio1" label="单选1" value="a" />
      <nc-radio id="radio2" label="单选2" value="b" />
      <nc-radio id="radio3" value="c">单选3</nc-radio>
      <nc-radio id="radio4" label="单选4" value="d" />
    </nc-radio-group>
</template>

<script>
import { ref } from 'vue'

const radio1 = ref('a')
</` + 'script>'
)
</script>