<template>
  <viewBox :code="code">
    <nc-radio-group v-model="radio1" name="disabled1" disabled>
      <nc-radio id="d1radio1" label="单选1" value="a" />
      <nc-radio id="d1radio2" label="单选2" value="b" />
      <nc-radio id="d1radio3" label="单选3" value="c" />
      <nc-radio id="d1radio4" label="单选4" value="d" />
    </nc-radio-group>
    <nc-radio-group v-model="radio1" name="disabled2">
      <nc-radio id="d2radio1" label="单选1" value="a" />
      <nc-radio id="d2radio2" label="单选2" value="b" disabled />
      <nc-radio id="d2radio3" label="单选3" value="c" />
      <nc-radio id="d2radio4" label="单选4" value="d" />
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
    <nc-radio-group v-model="radio1" name="disabled1" disabled>
      <nc-radio id="d1radio1" label="单选1" value="a" />
      <nc-radio id="d1radio2" label="单选2" value="b" />
      <nc-radio id="d1radio3" label="单选3" value="c" />
      <nc-radio id="d1radio4" label="单选4" value="d" />
    </nc-radio-group>
    <nc-radio-group v-model="radio1" name="disabled2">
      <nc-radio id="d2radio1" label="单选1" value="a" />
      <nc-radio id="d2radio2" label="单选2" value="b" disabled />
      <nc-radio id="d2radio3" label="单选3" value="c" />
      <nc-radio id="d2radio4" label="单选4" value="d" />
    </nc-radio-group>
</template>

<script>
import { ref } from 'vue'

const radio1 = ref('a')
</` +
    `script>

<style lang="postcss" scoped>

</style>`
)
</script>

<style lang="postcss" scoped>
.nc-radio-group {
  @apply mx-4;
}
</style>