<template>
  <viewBox :code="code">
    <nc-radio-group v-model="radio1" name="bordered" radioStyle="bordered">
      <nc-radio id="borderedRadio1" label="单选1" value="a" size="large" />
      <nc-radio id="borderedRadio2" label="单选2" value="b" size="normal" />
      <nc-radio id="borderedRadio3" value="c" size="small">单选3</nc-radio>
      <nc-radio id="borderedRadio4" label="单选4" value="d" size="mini" />
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
    <nc-radio-group v-model="radio1" name="bordered" radioStyle="bordered">
      <nc-radio id="borderedRadio1" label="单选1" value="a" size="large" />
      <nc-radio id="borderedRadio2" label="单选2" value="b" size="normal" />
      <nc-radio id="borderedRadio3" value="c" size="small">单选3</nc-radio>
      <nc-radio id="borderedRadio4" label="单选4" value="d" size="mini" />
    </nc-radio-group>
</template>

<script>
import { ref } from 'vue'

const radio1 = ref('a')
</` +
    `script>

<style lang="postcss" scoped>
.nc-radio {
  @apply mx-2;
}
</style>`
)
</script>

<style lang="postcss" scoped>
.nc-radio {
  @apply mx-2;
}
</style>