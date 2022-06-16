<template>
  <div class="main">
    <div class="aside">
      <nc-scrollbar>
        <div class="asideContainer" ref="aside">
          <span
            :class="initNodeClass(index)"
            v-for="(i, index) in docs"
            :key="i"
            @click="handleActiveItem(index, $event)"
          >
            {{ `${i.title}` }}
          </span>
        </div>
      </nc-scrollbar>
    </div>
    <div class="view">
      <nc-scrollbar>
        <router-view></router-view>
      </nc-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import NcScrollbar from '@/components/Basic/Scrollbar/index.vue'
const $router = useRouter()
const $route = useRoute()

var activedId = ref(1)
var aside = ref(null)
var docs = ref([
  {
    title: '总览',
    type: 'title'
  },
  {
    title: 'Docs',
    type: 'node',
    path: '/docs'
  },
  {
    title: 'Dark',
    type: 'node',
    path: '/docs/dark'
  },
  {
    title: '基础',
    type: 'title'
  },
  {
    title: 'Nc-Button',
    type: 'node',
    path: '/docs/basic/button'
  },
  {
    title: 'Nc-Link',
    type: 'node',
    path: '/docs/basic/link'
  },
  {
    title: 'Nc-Scrollbar',
    type: 'node',
    path: '/docs/basic/scrollbar'
  },
  {
    title: '表单',
    type: 'title'
  },
  {
    title: 'Nc-Checkbox',
    type: 'node',
    path: '/docs/forms/checkbox'
  },
  {
    title: 'Nc-Datepicker',
    type: 'node',
    path: '/docs/forms/datepicker'
  },
  {
    title: 'Nc-Form',
    type: 'node',
    path: '/docs/forms/form'
  },
  {
    title: 'Nc-Input',
    type: 'node',
    path: '/docs/forms/input'
  },
  {
    title: 'Nc-Radio',
    type: 'node',
    path: '/docs/forms/radio'
  },
  {
    title: 'Nc-Select',
    type: 'node',
    path: '/docs/forms/select'
  },
  {
    title: 'Nc-Slider',
    type: 'node',
    path: '/docs/forms/slider'
  },
  {
    title: 'Nc-Switch',
    type: 'node',
    path: '/docs/forms/switch'
  }
])

watch($route, () => {
  if ($route.params.pathMatch) console.log($route.params.pathMatch)
  if ($route.name === 'Docs') initActiveItem(1)
  docs.value.forEach((element, index) => {
    if (element.path === $route.path) initActiveItem(index)
  })
})

onMounted(() => {
  initActiveItem(1)
})

function handleActiveItem (id, e) {
  if (id !== activedId.value && docs.value[id].type !== 'title' && e.target) {
    e.target.classList.add('active')
    aside.value.children[activedId.value].classList.remove('active')
    activedId.value = id

    $router.push({ path: docs.value[id].path })
  }
}

function initActiveItem (id) {
  if (activedId.value !== id) {
    aside.value.children[activedId.value].classList.remove('active')
    activedId.value = id
  }
  if (aside.value.children[id]) aside.value.children[id].classList.add('active')
  else console.log('Aside 元素数为零')
}

function initNodeClass (id) {
  return docs.value[id].type === 'node' ? 'asideItem' : 'asideTitle'
}
</script>

<style scoped lang="postcss">
.main {
  @apply flex
  bg-gray-100 dark:bg-gray-800
  transition-all;
}

/* Aside */
.aside {
  @apply flex flex-col w-48
  bg-gray-200 dark:bg-gray-600
  overflow-auto;
}
.asideContainer {
  @apply w-full h-full p-4;
}

/* Aside Item */
.asideItem {
  @apply flex justify-center items-center text-lg font-semibold w-full p-3 py-4 my-2 rounded-xl
  hover:bg-gray-100 dark:hover:bg-gray-500 hover:shadow-md
  transition-all select-none;
}
.asideItem.active {
  @apply bg-gray-100 dark:bg-gray-500 shadow-md;
}

/* Aside Title */
.asideTitle {
  @apply flex items-center font-semibold text-xl my-2
  select-none;
}

/* View */
.view {
  @apply relative
  overflow-y-auto overflow-x-hidden;
}

/* Calc Value */
.main {
  height: calc(100vh - 5rem);
}
.view {
  width: calc(100vw - 12rem);
  height: calc(100vh - 5rem);
}

/* srcollbar reset */
.aside::-webkit-scrollbar {
  display: none;
}
.view::-webkit-scrollbar {
  display: none;
}
</style>