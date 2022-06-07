<template>
  <div class="main">
    <div ref="aside" class="aside">
      <span
        class="asideItem"
        v-for="(i, index) in docs"
        :key="i"
        @click="handleActiveItem(index, $event)"
      >
        {{ `${i.title}` }}
      </span>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()

var activedId = ref(0)
var aside = ref(null)
var docs = ref([
  {
    title: 'Nc-Button',
    pathName: 'Docs-Basic-Button'
  },
  {
    title: 'Nc-Link',
    pathName: 'Docs-Basic-Link'
  }
])

onMounted(() => {
  initActiveItem()
})

function handleActiveItem (id, e) {
  if (id !== activedId.value && e) {
    e.target.classList.add('active')
    aside.value.children[activedId.value].classList.remove('active')
    activedId.value = id

    $router.push({ name: docs.value[id].pathName })
  }
}

function initActiveItem () {
  if (aside.value.children[0]) aside.value.children[0].classList.add('active')
  else console.log('Aside 元素数为零')
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
  @apply flex flex-col w-48 p-4
  bg-gray-200 dark:bg-gray-600
  overflow-auto;
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

/* View */
.view {
  @apply bg-gray-500;
}

/* Calc Value */
.main {
  height: calc(100vh - 5rem);
}
.view {
  width: calc(100vw - 12rem);
  height: calc(100vh - 5rem);
}

/* srcoll reset */
.aside::-webkit-scrollbar {
  display: none;
}
</style>