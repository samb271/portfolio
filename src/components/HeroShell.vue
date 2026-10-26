<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { site } from '@/content'
import { prefersReducedMotion } from '@/composables/useShuffle'
import ShellWindow from './ShellWindow.vue'
import ShuffleText from './ShuffleText.vue'
import { scrollToSection } from '@/composables/scrollToSection'

const sections = [
  { id: 'work', label: 'work/' },
  { id: 'research', label: 'research/' },
  { id: 'involvement', label: 'involvement/' },
  { id: 'play', label: 'play/' },
  { id: 'blog', label: 'blog/' },
]

// Boot sequence: prompt lines fade in one after another. Their space is
// reserved from the start so the window never resizes. Short on purpose,
// a visitor should never wait on it.
const STEPS = 3
const shown = ref(0)
const booting = ref(true)
const spinner = ref('|')
let timers: ReturnType<typeof setTimeout>[] = []
let spin: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  if (prefersReducedMotion()) {
    shown.value = STEPS
    booting.value = false
    return
  }
  const frames = ['|', '/', '-', '\\']
  let f = 0
  spin = setInterval(() => (spinner.value = frames[++f % frames.length]), 90)
  timers.push(setTimeout(() => { booting.value = false; clearInterval(spin) }, 650))
  for (let i = 1; i <= STEPS; i++) timers.push(setTimeout(() => (shown.value = i), 650 + i * 170))
})

// Hidden blocks keep their space (invisible), then fade in.
const reveal = (step: number) =>
  `transition-[opacity,visibility] duration-300 ${shown.value >= step ? 'visible opacity-100' : 'invisible opacity-0'}`

onBeforeUnmount(() => {
  timers.forEach(clearTimeout)
  clearInterval(spin)
})
</script>

<template>
  <section class="flex min-h-[100svh] items-center py-24" aria-label="introduction">
    <ShellWindow class="w-full" :title="`${site.handle} :: ~/home`" meta="v1.0">
      <div class="py-2 md:py-6">
        <ShuffleText as="h1" :text="site.name.toLowerCase()" on="mount" class="font-display text-5xl text-fg sm:text-6xl lg:text-8xl" />
        <ShuffleText as="p" :text="site.headline" on="mount" :delay="380" class="mt-3 text-lg text-dim md:text-2xl" />
      </div>

      <div class="-mx-4 mt-6 border-t border-line px-4 pt-5 text-sm md:-mx-6 md:px-6" aria-live="polite">
        <p v-if="booting" class="text-mute">{{ spinner }} loading profile...</p>
        <p v-else class="text-mute">[ok] profile loaded</p>

        <div :class="['mt-4', reveal(1)]">
          <p><span class="text-mute">$</span> cat about.txt</p>
          <p class="max-w-2xl text-dim">{{ site.intro }}</p>
        </div>

        <div :class="['mt-4', reveal(2)]">
          <p><span class="text-mute">$</span> ls</p>
          <p class="flex flex-wrap gap-x-5 gap-y-1">
            <a v-for="s in sections" :key="s.id" :href="`#${s.id}`" class="text-dim transition-colors hover:text-accent" @click="scrollToSection($event, s.id)">{{ s.label }}</a>
          </p>
        </div>

        <div :class="['mt-4', reveal(3)]">
          <p><span class="text-mute">$</span> contact</p>
          <p class="flex flex-wrap gap-x-5 gap-y-1">
            <a :href="`mailto:${site.email}`" class="link">{{ site.email }}</a>
            <a v-if="site.scholar" :href="site.scholar" target="_blank" rel="noopener" class="link">scholar</a>
            <a v-for="l in site.links" :key="l.url" :href="l.url" target="_blank" rel="noopener" class="link">{{ l.label }}</a>
          </p>
        </div>

      </div>
    </ShellWindow>
  </section>
</template>
