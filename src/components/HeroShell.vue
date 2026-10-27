<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { site } from '@/content'
import { prefersReducedMotion } from '@/composables/useShuffle'
import ShellWindow from './ShellWindow.vue'
import TypeText from './TypeText.vue'
import ShuffleText from './ShuffleText.vue'
import AsciiArt from './AsciiArt.vue'
import { nameWide, nameShort } from '@/content/asciiName'



// Terminal: a short spinner, then each command is typed out and its output
// prints instantly. Every character's space is reserved from the start, so
// nothing moves while it types.
// The name's diffusion is the loading time: the spinner runs until it settles
// (AsciiArt emits `done`), then the commands start.
const NAME_SPREAD_MS = 1260
const CMD_MS = 15 // per character, commands
const AFTER_CMD = 80 // pause before the output prints
const AFTER_OUT = 120 // pause before the next command

type Seg = { text: string; start: number; speed: number; end?: number }
let cursor = 150 // ms after loading, first command starts
function command(text: string): Seg {
  const s: Seg = { text, start: cursor, speed: CMD_MS }
  cursor += text.length * CMD_MS + AFTER_CMD
  s.end = cursor // cursor shows until the output prints
  return s
}
// Output prints all at once (speed 0), then a pause.
function outputs(texts: string[]): Seg[] {
  const segs = texts.map((text) => ({ text, start: cursor, speed: 0 }))
  cursor += AFTER_OUT
  return segs
}

const timeline = {
  cmdAbout: command('cat about.txt'),
  about: outputs([site.intro])[0],
}
const TOTAL = cursor

/** ms since loading finished (negative while loading). */
const elapsed = ref(-1)
const booting = ref(true)
const spinner = ref('|')
let tick: ReturnType<typeof setInterval> | undefined
let loadedAt = 0

const count = (s: Seg) => {
  if (elapsed.value < s.start) return 0
  if (s.speed === 0) return s.text.length
  return Math.min(s.text.length, Math.floor((elapsed.value - s.start) / s.speed))
}
const started = (s: Seg) => elapsed.value >= s.start
const caret = (s: Seg) => started(s) && elapsed.value < (s.end ?? 0)

onMounted(() => {
  if (prefersReducedMotion()) return // onNameLoaded fires right away
  const frames = ['|', '/', '-', '\\']
  const t0 = performance.now()
  tick = setInterval(() => {
    const now = performance.now()
    if (booting.value) {
      spinner.value = frames[Math.floor((now - t0) / 90) % frames.length]
      return
    }
    elapsed.value = now - loadedAt
    if (elapsed.value > TOTAL) clearInterval(tick)
  }, 16)
})

// Only the variant actually on screen (wide from 640px, short below) ends the loading.
function onNameLoaded(variant: 'wide' | 'short') {
  const wideShown = window.matchMedia('(min-width: 640px)').matches
  if (!booting.value || (variant === 'wide') !== wideShown) return
  booting.value = false
  loadedAt = performance.now()
  if (prefersReducedMotion()) elapsed.value = TOTAL
}

onBeforeUnmount(() => clearInterval(tick))
</script>

<template>
  <section class="flex min-h-[100svh] items-center py-24" aria-label="introduction">
    <ShellWindow class="w-full" :title="`${site.handle} :: ~/home`" meta="v1.0">
      <div class="py-2 md:py-6">
        <h1 class="sr-only">{{ site.name }}</h1>
        <!-- Name as ASCII art (Parabole letterforms): full name on wider screens, "sam b." on phones. -->
        <AsciiArt :lines="nameWide" :spread="NAME_SPREAD_MS" class="hidden text-fg sm:block" @done="onNameLoaded('wide')" />
        <AsciiArt :lines="nameShort" :spread="NAME_SPREAD_MS" class="text-fg sm:hidden" @done="onNameLoaded('short')" />
        <ShuffleText as="p" :text="site.headline" on="hover" class="mt-5 text-lg text-dim md:text-2xl" />
      </div>

      <div class="-mx-4 mt-6 border-t border-line px-4 pt-5 text-sm md:-mx-6 md:px-6">
        <p v-if="booting" class="text-mute">{{ spinner }} loading profile...</p>
        <p v-else class="text-mute">[ok] profile loaded</p>

        <div class="mt-4">
          <p :class="{ invisible: !started(timeline.cmdAbout) }"><span class="text-mute">$</span> <TypeText text="cat about.txt" :count="count(timeline.cmdAbout)" :caret="caret(timeline.cmdAbout)" /></p>
          <p class="max-w-2xl text-dim"><TypeText :text="site.intro" :count="count(timeline.about)" /></p>
        </div>
      </div>
    </ShellWindow>
  </section>
</template>
