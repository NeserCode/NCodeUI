<template>
  <div class="nc-scrollbar">
    <div class="container" ref="container">
      <div
        class="scrollContent"
        @mouseenter="handleShow"
        @mouseleave="handleHidden"
        @scroll="handleScroll"
        ref="content"
      >
        <div class="horizontal" ref="xthumb" v-show="horizontal && showH">
          <span
            class="horCell"
            @mousedown="handleBarHold($event)"
            ref="xbar"
          ></span>
        </div>
        <div class="vertical" ref="ythumb" v-show="vertical && showV">
          <span
            class="verCell"
            ref="ybar"
            @mousedown="handleBarHold($event)"
          ></span>
        </div>
        <div ref="realContent"><slot></slot></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  onMounted,
  onActivated,
  onBeforeUnmount,
  defineProps,
  ref,
  toRefs,
  watch
} from 'vue'
import { useRoute } from 'vue-router'

const container = ref(null)
const content = ref(null)
const realContent = ref(null)
const xthumb = ref(null)
const xbar = ref(null)
const ythumb = ref(null)
const ybar = ref(null)

const scrollYRate = ref(0)
const scrollXRate = ref(0)
const scrollBarHeight = ref(0)
const scrollBarWidth = ref(0)
const offsetThumbX = ref(0)
const offsetThumbY = ref(0)
const showH = ref(true)
const showV = ref(true)
const isBarHold = ref(false)
const resizeObserver = ref({})
const prevY = ref(0)
const prevX = ref(0)
const limit = ref({
  xmin: null,
  xmax: null,
  ymin: null,
  ymax: null,
  xsmin: null,
  xsmax: null,
  ysmin: null,
  ysmax: null,
  radixX: null,
  radixY: null
})

const $route = useRoute()

watch(scrollYRate, () => {
  ybar.value.style.top = scrollYRate.value + 'px'
  ythumb.value.style.height = content.value.scrollHeight + 'px'
})

watch(scrollXRate, () => {
  xbar.value.style.left = scrollXRate.value + 'px'
  xthumb.value.style.width = content.value.scrollWidth + 'px'
})

watch(scrollBarHeight, () => {
  ybar.value.style.height = scrollBarHeight.value + 'px'
})

watch(scrollBarWidth, () => {
  xbar.value.style.width = scrollBarWidth.value + 'px'
})

watch(offsetThumbY, () => {
  ythumb.value.style.left = offsetThumbY.value + 'px'
  xthumb.value.style.top = offsetThumbX.value + 'px'
})

watch(offsetThumbX, () => {
  xthumb.value.style.top = offsetThumbX.value + 'px'
  ythumb.value.style.left = offsetThumbY.value + 'px'
})

watch($route, () => {
  content.value.scrollTop = 0
  content.value.scrollLeft = 0
  ybar.value.style.top = 0
  xbar.value.style.left = 0
  showH.value = false
  showV.value = false
})

onMounted(() => {
  resizeObserver.value = new ResizeObserver(() => {
    ythumb.value.style.height = '0px'
    xthumb.value.style.width = '0px'
    initBars()
  })
  resizeObserver.value.observe(ythumb.value.nextElementSibling)
})
onActivated(() => {
  initBars()
})
onBeforeUnmount(() => {
  resizeObserver.value.disconnect()
})
const $props = defineProps({
  horizontal: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: true
  }
})
const { horizontal, vertical } = toRefs($props)

function handleScroll () {
  const offsetW = content.value.offsetWidth
  const scrollW = content.value.scrollWidth
  const scrollLeft = content.value.scrollLeft
  const offsetH = content.value.offsetHeight
  const scrollH = content.value.scrollHeight
  const scrollTop = content.value.scrollTop
  if (vertical.value) {
    scrollBarHeight.value = (offsetH / scrollH) * offsetH
    limit.value.ymax = offsetH - scrollBarHeight.value
    limit.value.radixY = (scrollH - offsetH) / limit.value.ymax
    scrollYRate.value = scrollTop + scrollTop / limit.value.radixY
    showV.value = !(scrollH <= offsetH)
  }
  if (horizontal.value) {
    scrollBarWidth.value = (offsetW / scrollW) * offsetW
    limit.value.xmax = offsetW - scrollBarWidth.value
    limit.value.radixX = (scrollW - offsetW) / limit.value.xmax
    scrollXRate.value = scrollLeft + scrollLeft / limit.value.radixX
    showH.value = !(scrollW <= offsetW)
  }
  offsetThumbY.value = scrollLeft + offsetW - ythumb.value.offsetWidth
  offsetThumbX.value = scrollTop + offsetH - xthumb.value.offsetHeight
}

function initBars () {
  const offsetW = content.value.offsetWidth
  const scrollW = content.value.scrollWidth
  const scrollTop = content.value.scrollTop
  const scrollLeft = content.value.scrollLeft
  const offsetH = content.value.offsetHeight
  const scrollH = content.value.scrollHeight
  limit.value.ysmin = 0
  limit.value.ysmax = scrollH - offsetH
  scrollBarHeight.value = (offsetH / scrollH) * offsetH
  limit.value.ymin = 0
  limit.value.ymax = offsetH - scrollBarHeight.value
  limit.value.radixY = (scrollH - offsetH) / limit.value.ymax
  limit.value.xsmin = 0
  limit.value.xsmax = scrollW - offsetW
  scrollBarWidth.value = (offsetW / scrollW) * offsetW
  limit.value.xmin = 0
  limit.value.xmax = offsetW - scrollBarWidth.value
  limit.value.radixX = (scrollW - offsetW) / limit.value.xmax
  showV.value = !(scrollH <= offsetH)
  showH.value = !(scrollW <= offsetW)
  if (vertical) scrollBarHeight.value = (offsetH / scrollH) * offsetH
  if (horizontal) scrollBarWidth.value = (offsetW / scrollW) * offsetW
  offsetThumbY.value = scrollLeft + offsetW - ythumb.value.offsetWidth
  offsetThumbX.value = scrollTop + offsetH - xthumb.value.offsetHeight
}

function handleShow () {
  if (!isBarHold.value) {
    ybar.value.style.transition = 'opacity ease-in-out 0.32s'
    xbar.value.style.transition = 'opacity ease-in-out 0.32s'
    ythumb.value.style.transition = 'opacity ease-in-out 0.32s'
    xthumb.value.style.transition = 'opacity ease-in-out 0.32s'
    ybar.value.style.opacity = '.3'
    xbar.value.style.opacity = '.3'
    ythumb.value.style.opacity = '.5'
    xthumb.value.style.opacity = '.5'
  }
}
function handleHidden () {
  if (!isBarHold.value) {
    ybar.value.style.transition = 'opacity ease-in-out 0.64s'
    xbar.value.style.transition = 'opacity ease-in-out 0.64s'
    ythumb.value.style.transition = 'opacity ease-in-out 0.64s'
    xthumb.value.style.transition = 'opacity ease-in-out 0.64s'
    ybar.value.style.opacity = '0'
    xbar.value.style.opacity = '0'
    ythumb.value.style.opacity = '0'
    xthumb.value.style.opacity = '0'
  }
}
function handleBarHold (e) {
  if (!isBarHold.value) {
    isBarHold.value = true
    e.target.style.transition = 'none'
    e.target.style.opacity = '0.45'
    prevY.value = e.pageY
    prevX.value = e.pageX
    document.onmousemove = (ev) => {
      if (vertical.value && e.target === ybar.value) {
        scrollYRate.value =
          content.value.scrollTop + content.value.scrollTop / limit.value.radixY
        content.value.scrollTop += (ev.pageY - prevY.value) * limit.value.radixY
        prevY.value = ev.pageY
      }
      if (horizontal.value && e.target === xbar.value) {
        scrollXRate.value =
          content.value.scrollLeft +
          content.value.scrollLeft / limit.value.radixX
        content.value.scrollLeft +=
          (ev.pageX - prevX.value) * limit.value.radixX
        prevX.value = ev.pageX
      }
    }
    document.onmouseup = () => {
      handleBarFree()
      prevY.value = null
      prevX.value = null
    }
  }
}
function handleBarFree () {
  if (isBarHold.value) {
    isBarHold.value = false
    ybar.value.style.transition = 'opacity ease-in-out 0.64s'
    ybar.value.style.opacity = '0.3'
    xbar.value.style.transition = 'opacity ease-in-out 0.64s'
    xbar.value.style.opacity = '0.3'
    document.onmouseup = null
    document.onmousemove = null
  }
}
</script>

<style lang="postcss">
.nc-scrollbar {
  @apply relative top-0 left-0 w-full h-full
  select-none;
}
.scrollContent {
  @apply relative w-full h-full overflow-scroll;
}
.nc-scrollbar div.container {
  @apply relative min-w-full min-h-full w-full h-full;
}
.nc-scrollbar div.container div.horizontal,
.nc-scrollbar div.container div.vertical {
  @apply absolute pointer-events-auto;
  z-index: 2011;
}
.nc-scrollbar div.container div.vertical {
  @apply right-0 top-0 w-3 h-full min-h-full;
}
.nc-scrollbar div.container div.horizontal {
  @apply left-0 bottom-0 h-3 w-full min-w-full;
}
.nc-scrollbar div.container div.horizontal span.horCell,
.nc-scrollbar div.container div.vertical span.verCell {
  transition: opacity ease-in-out 0.64s;
}
.nc-scrollbar div.container div.horizontal span.horCell,
.nc-scrollbar div.container div.vertical span.verCell {
  @apply relative block opacity-25;
}
.nc-scrollbar div.container div.horizontal span.horCell {
  @apply h-full min-h-full;
}
.nc-scrollbar div.container div.vertical span.verCell {
  @apply w-full min-w-full;
}

.horizontal,
.vertical {
  @apply bg-transparent;
}
span.horCell,
span.verCell {
  @apply bg-black dark:bg-white hover:opacity-60;
}

.scrollContent::-webkit-scrollbar {
  display: none;
}
</style>