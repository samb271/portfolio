<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { prefersReducedMotion, randomGlyph } from '@/composables/useShuffle'

// Multi-line ASCII art that scales to its container's width. On load it
// diffuses in: each character starts blank, appears at a random moment within
// `spread` ms as a brief scramble, then settles. On hover, the characters
// around the cursor scramble. Rendered as one text node per frame, so it
// stays cheap even with ~2k characters.
const props = withDefaults(defineProps<{ lines: string[]; delay?: number; spread?: number }>(), {
  delay: 100,
  spread: 1800,
})

const emit = defineEmits<{ done: [] }>()

const FRAME_MS = 36
let loaded = false
const source = props.lines.join('\n')
const rows = props.lines.length
const cols = Math.max(...props.lines.map((l) => l.length))
const reduced = prefersReducedMotion()

// Until the decode starts, show the art's footprint as blanks.
const blank = source.replace(/[^\n]/g, ' ')
const display = ref(reduced ? source : blank)
let appearAt: number[] = []
let settleAt: number[] = []
let timer: ReturnType<typeof setInterval> | undefined

function paint() {
  const now = performance.now()
  let pending = false
  let out = ''
  for (let i = 0; i < source.length; i++) {
    const char = source[i]
    if (char === ' ' || char === '\n' || now >= (settleAt[i] ?? 0)) out += char
    else if (now < (appearAt[i] ?? 0)) {
      out += ' '
      pending = true
    } else {
      out += randomGlyph()
      pending = true
    }
  }
  display.value = out
  if (!pending) {
    clearInterval(timer)
    timer = undefined
    if (!loaded) {
      loaded = true
      emit('done')
    }
  }
}
const run = () => {
  if (!timer) timer = setInterval(paint, FRAME_MS)
}

onMounted(() => {
  if (reduced) {
    loaded = true
    emit('done')
    return
  }
  const now = performance.now()
  appearAt = [...source].map(() => now + props.delay + Math.random() * props.spread)
  settleAt = appearAt.map((t) => t + 150 + Math.random() * 250)
  run()
})

// Size the text so the widest line fills the container exactly, using the
// glyph width the browser actually rendered (the CSS rule is only an estimate).
let resize: ResizeObserver | undefined
function fit() {
  const el = pre.value
  const available = el?.parentElement?.clientWidth ?? 0
  if (!el || !available) return // hidden variant: nothing to measure
  el.style.fontSize = '100px'
  const natural = el.scrollWidth
  if (natural) el.style.fontSize = `${(100 * available) / natural}px`
}
onMounted(() => {
  fit()
  resize = new ResizeObserver(fit)
  if (pre.value?.parentElement) resize.observe(pre.value.parentElement)
  document.fonts?.ready.then(fit)
})

onBeforeUnmount(() => {
  clearInterval(timer)
  resize?.disconnect()
})

// Hover: scramble a small patch of characters under the cursor.
const pre = ref<HTMLElement | null>(null)
const lineStart = computed(() => {
  const starts: number[] = []
  let i = 0
  for (const line of props.lines) {
    starts.push(i)
    i += line.length + 1
  }
  return starts
})
function onMove(event: MouseEvent) {
  if (reduced || !loaded || !pre.value) return // no hover until the load finishes
  const box = pre.value.getBoundingClientRect()
  const col = Math.floor(((event.clientX - box.left) / box.width) * cols)
  const row = Math.floor(((event.clientY - box.top) / box.height) * rows)
  const now = performance.now()
  for (let r = row - 1; r <= row + 1; r++) {
    if (r < 0 || r >= rows) continue
    for (let c = col - 2; c <= col + 2; c++) {
      if (c < 0 || c >= props.lines[r].length || props.lines[r][c] === ' ') continue
      settleAt[lineStart.value[r] + c] = Math.max(settleAt[lineStart.value[r] + c] ?? 0, now + 140 + Math.random() * 170)
    }
  }
  run()
}
</script>

<template>
  <div class="ascii-box">
    <pre ref="pre" class="ascii" :style="{ '--cols': cols }" aria-hidden="true" @mousemove="onMove">{{ display }}</pre>
  </div>
</template>

<style scoped>
.ascii-box {
  container-type: inline-size;
}
.ascii {
  margin: 0;
  line-height: 1;
  letter-spacing: 0;
  /* JetBrains Mono ligatures would merge runs like == or -> into one glyph. */
  font-variant-ligatures: none;
  font-feature-settings: 'liga' 0, 'calt' 0;
  white-space: pre;
  overflow: hidden;
  cursor: default;
  user-select: none;
  /* JetBrains Mono glyphs are 0.6em wide: size the font so `cols` characters
     fill the container exactly. The vw line is a fallback for old browsers. */
  font-size: calc((100vw - 6rem) / (var(--cols) * 0.6));
  font-size: calc(100cqw / (var(--cols) * 0.6));
}
</style>
