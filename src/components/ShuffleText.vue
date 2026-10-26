<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, toRef } from 'vue'
import { useShuffle } from '@/composables/useShuffle'

const props = withDefaults(
  defineProps<{
    text: string
    as?: string
    /** `mount`: animate immediately. `visible`: animate the first time it scrolls into view. */
    on?: 'mount' | 'visible'
    delay?: number
    hover?: boolean
  }>(),
  { as: 'span', on: 'visible', delay: 220, hover: true }
)

const { chars, reveal, scramble } = useShuffle(toRef(props, 'text'))

// Group characters by word so lines only wrap between words.
const words = computed(() => {
  let start = 0
  return props.text.split(' ').map((word) => {
    const span = { start, length: word.length }
    start += word.length + 1
    return span
  })
})

const root = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (props.on === 'mount' || !('IntersectionObserver' in window) || !root.value) {
    reveal(props.delay)
    return
  }
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      reveal(props.delay)
      observer?.disconnect()
    },
    { rootMargin: '0px 0px -8% 0px' }
  )
  observer.observe(root.value)
})

onBeforeUnmount(() => observer?.disconnect())

function onHover(index: number) {
  if (props.hover) scramble(index)
}
</script>

<template>
  <component :is="as" ref="root">
    <span class="sr-only">{{ text }}</span>
    <span aria-hidden="true">
      <template v-for="(word, w) in words" :key="w"><span class="whitespace-nowrap"><span
            v-for="k in word.length"
            :key="k"
            class="cell"
            @mouseenter="onHover(word.start + k - 1)"
          ><span class="ghost">{{ text[word.start + k - 1] }}</span><span>{{ chars[word.start + k - 1] }}</span></span></span>{{ w < words.length - 1 ? ' ' : '' }}</template>
    </span>
  </component>
</template>

<style scoped>
/* Each character cell keeps the width of its final glyph, so proportional
   fonts don't jitter while scrambling. The invisible "ghost" sets the width. */
.cell {
  display: inline-grid;
  cursor: default;
}
.cell > * {
  grid-area: 1 / 1;
  text-align: center;
}
.ghost {
  visibility: hidden;
  user-select: none;
}
</style>
