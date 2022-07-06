<template>
  <viewBox :code="code">
    <nc-form @submit.prevent="log">
      <nc-form-item>
        <nc-input
          v-model="frameName"
          :id="frameNameInputId"
          placeholder="框架名称"
          movable="left"
          :minlength="4"
          auto-hidden
          required
        />
      </nc-form-item>
      <nc-form-item>
        <nc-input
          v-model="frameVersion"
          :id="frameVersionInputId"
          placeholder="框架版本号"
          movable="left"
          :minlength="4"
          auto-hidden
          required
        />
      </nc-form-item>
      <nc-form-item>
        <nc-button type="sumbit" size="small">提交</nc-button>
      </nc-form-item>
    </nc-form>
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcForm from '@/components/Forms/Form/index.vue'
import NcFormItem from '@/components/Forms/Form/item.vue'
import NcInput from '@/components/Forms/Input/index.vue'
import NcButton from '@/components/Basic/Button/index.vue'

import { ref } from 'vue'
const frameName = ref('')
const frameNameInputId = ref('form-input-frameName')
const frameVersion = ref('')
const frameVersionInputId = ref('form-input-frameVersion')

function log () {
  console.log('submit')
}

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