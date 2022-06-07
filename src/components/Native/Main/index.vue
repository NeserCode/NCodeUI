<template>
  <div class="main">
    <div class="aside">
      <span class="asideItem" v-for="i in 118" :key="i">{{
        `Example Title ${i}`
      }}</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="postcss">
.main {
  @apply flex
bg-gray-100 dark:bg-gray-800
  transition-all;
}
/* Aside */
.aside {
  @apply flex flex-col lg:w-1/6 sm:w-48 xs:w-24 p-4
  bg-gray-200 dark:bg-gray-600
  overflow-auto;
}
/* Aside Item */
.asideItem {
  @apply flex justify-center items-center text-lg font-semibold w-full py-3 my-2 rounded-xl
  hover:bg-gray-100 dark:hover:bg-gray-500 hover:shadow-md
  transition-all select-none;
}

/* Calc Value */
.main {
  height: calc(100vh - 5rem);
}
</style>