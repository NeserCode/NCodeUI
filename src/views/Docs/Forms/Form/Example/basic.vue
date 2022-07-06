<template>
  <viewBox :code="code">
    <nc-form>
      <nc-form-item>
        <nc-input
          v-model="frameName"
          :id="frameNameInputId"
          placeholder="框架名称"
          movable="left"
          :minlength="10"
        />
      </nc-form-item>
    </nc-form>
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcForm from '@/components/Forms/Form/index.vue'
import NcFormItem from '@/components/Forms/Form/item.vue'
import NcInput from '@/components/Forms/Input/index.vue'

import { ref } from 'vue'
const frameName = ref('')
const frameNameInputId = ref('form-input-frameName')

const code = ref(
  `<template>
    <nc-datepicker v-model="t" />
</template>

<script setup>
  import { ref } from 'vue'

  const t = ref(new Date(2022, 0, 1))
<` + '/script>'
)
</script>

<style lang="postcss" scoped>
</style>