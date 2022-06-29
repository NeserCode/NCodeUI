<template>
  <viewBox :code="code">
    <nc-select v-model="usage" :items="i" unchecked-text="🙄 未选择" />
    <nc-select v-model="usage" :items="i" />
  </viewBox>
</template>

<script setup>
import viewBox from '@/components/Native/ViewBox/index.vue'
import NcSelect from '@/components/Forms/Select/index.vue'

import { ref } from 'vue'

const code = ref(
  `<template>
    <nc-select v-model="usage" :items="i" unchecked-text="🙄 未选择" />
    <nc-select v-model="usage" :items="i" />
</template>

<script setup>
import { ref } from 'vue'

const usage = ref('')
const i = ref(['北京', '武汉', '上海', '杭州', '深圳', '广东', '长沙'])
<` + '/script>'
)
const usage = ref('')
const i = ref([
  '北京 City Park',
  '武汉 City Park',
  '上海 City Park',
  '杭州 City Park',
  '深圳 City Park',
  '广东 City Park',
  '长沙 City Park'
])
</script>