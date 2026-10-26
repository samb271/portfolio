import { computed, onBeforeUnmount, ref, unref, watch, type Ref } from 'vue'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+-='
const FRAME_MS = 36

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Glyph-shuffle effect from the sam.os shell: characters scramble, then settle
 * one by one. `reveal()` animates the whole string, `scramble(i)` one character.
 */
export function useShuffle(source: Ref<string> | string, startSettled = false) {
  const text = computed(() => unref(source))
  const reduced = prefersReducedMotion()

  // Until revealed, show blanks so monospace layout doesn't jump.
  // `startSettled` shows the text right away (hover-only usage).
  const chars = ref<string[]>(
    reduced || startSettled ? text.value.split('') : text.value.split('').map((char) => (char === ' ' ? ' ' : '\u00a0'))
  )
  let settleAt: number[] = []
  let timer: ReturnType<typeof setInterval> | undefined

  // A timer rather than requestAnimationFrame, so text always settles
  // (background tabs, crawlers and screenshot tools don't run rAF).
  function paint() {
    const now = performance.now()
    let pending = false
    chars.value = text.value.split('').map((char, i) => {
      if (char === ' ' || now >= (settleAt[i] ?? 0)) return char
      pending = true
      return randomGlyph()
    })
    if (!pending) stop()
  }

  function stop() {
    clearInterval(timer)
    timer = undefined
  }

  function run() {
    if (!timer) timer = setInterval(paint, FRAME_MS)
  }

  /**
   * Scramble everything, then settle each character.
   * `spread` > 0: every character settles at a random moment within that many
   * ms (a "diffusion" decode, no reading order). Otherwise it settles roughly
   * left to right.
   */
  function reveal(baseDelay = 220, spread = 0) {
    if (reduced) {
      chars.value = text.value.split('')
      return
    }
    const now = performance.now()
    const step = Math.min(18, 700 / Math.max(1, text.value.length))
    settleAt = text.value
      .split('')
      .map((_, i) => now + baseDelay + (spread > 0 ? Math.random() * spread : Math.random() * 260 + i * step))
    run()
  }

  function scramble(index: number) {
    if (reduced || text.value[index] === ' ' || text.value[index] === undefined) return
    settleAt[index] = performance.now() + 140 + Math.random() * 170
    run()
  }

  watch(text, () => reveal(0))

  onBeforeUnmount(stop)

  return { chars, reveal, scramble }
}
