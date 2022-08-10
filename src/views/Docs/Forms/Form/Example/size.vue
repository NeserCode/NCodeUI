<template>
  <viewBox :code="code">
    <nc-form @submit.prevent="logForm" align="center" :size="formSize">
      <nc-form-item>
        <nc-input
          v-model="frame.name"
          :id="frameNameInputId"
          placeholder="框架名称"
          movable="up"
          :minlength="4"
          clearable
          required
        />
      </nc-form-item>
      <nc-form-item>
        <nc-input
          v-model="frame.id"
          :id="frameNumberInputId"
          placeholder="框架编号"
          movable="up"
          :minlength="4"
          required
        />
      </nc-form-item>
      <nc-form-item>
        <nc-input
          type="tel"
          v-model="frame.id"
          :id="frameNumberInputId"
          placeholder="新增框架编号(横向拓展)"
          movable="left"
          clearable
        />
      </nc-form-item>
      <nc-form-item>
        <nc-button type="submit" size="small">提交</nc-button>
      </nc-form-item>
      <nc-form-item>
        <span></span>
        <nc-select v-model="formSize" :items="formSizeSet" />
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
import NcSelect from '@/components/Forms/Select/index.vue'

import { ref } from 'vue'
const frame = ref({
  name: '',
  id: ''
})
const formSize = ref('normal')
const formSizeSet = ref([
  {
    id: 1,
    bound: 'normal'
  },
  {
    id: 2,
    bound: 'small'
  },
  {
    id: 3,
    bound: 'large'
  }
])
const frameNameInputId = ref('form-input-frameName')
const frameNumberInputId = ref('form-input-frameNumber')

function logForm (e) {
  console.log(e, frame.value)
}

const code = ref(
  `<template>
    <nc-form @submit.prevent="logForm">
      <nc-form-item>
        <nc-input
          v-model="frame.name"
          :id="frameNameInputId"
          placeholder="框架名称"
          movable="left"
          :minlength="4"
          clearable
          required
        />
      </nc-form-item>
      <nc-form-item>
        <nc-input
          v-model="frame.id"
          :id="frameNumberInputId"
          placeholder="框架编号"
          movable="left"
          :minlength="4"
          required
        />
      </nc-form-item>
      <nc-form-item>
        <nc-input
          type="tel"
          v-model="frame.id"
          :id="frameNumberInputId"
          placeholder="新增框架编号(横向拓展)"
          movable="left"
          clearable
        />
      </nc-form-item>
      <nc-form-item>
        <nc-button type="sumbit" size="small">提交</nc-button>
      </nc-form-item>
    </nc-form>
</template>

<script setup>
import { ref } from 'vue'
const frame = ref({
  name: '',
  id: ''
})
const frameNameInputId = ref('form-input-frameName')
const frameNumberInputId = ref('form-input-frameNumber')

function logForm (e) {
  console.log(e, frame.value)
}
<` + '/script>'
)
</script>

<style lang="postcss" scoped>
</style>