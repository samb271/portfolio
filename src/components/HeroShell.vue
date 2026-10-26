<script setup lang="ts">
import { site } from '@/content'
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

const contactItems = [
  { label: site.email, href: `mailto:${site.email}`, external: false },
  ...(site.scholar ? [{ label: 'scholar', href: site.scholar, external: true }] : []),
  ...site.links.map((l) => ({ label: l.label, href: l.url, external: true })),
]

// Load effect: the whole box appears at once as scrambled glyphs, and every
// character settles at a random moment within DECODE_MS (a "diffusion"
// decode). Same glyph effect as on hover. Layout is fixed from the start.
const DECODE_MS = 1100
const decode = { on: 'mount' as const, delay: 100, spread: DECODE_MS }
</script>

<template>
  <section class="flex min-h-[100svh] items-center py-24" aria-label="introduction">
    <ShellWindow class="w-full" :title="`${site.handle} :: ~/home`" meta="v1.0">
      <div class="py-2 md:py-6">
        <ShuffleText as="h1" :text="site.name.toLowerCase()" v-bind="decode" class="text-4xl font-medium tracking-tight text-fg sm:text-5xl lg:text-7xl" />
        <ShuffleText as="p" :text="site.headline" v-bind="decode" class="mt-3 text-lg text-dim md:text-2xl" />
      </div>

      <div class="-mx-4 mt-6 border-t border-line px-4 pt-5 text-sm md:-mx-6 md:px-6">
        <ShuffleText as="p" text="[ok] profile loaded" v-bind="decode" class="text-mute" />

        <div class="mt-4">
          <p><span class="text-mute">$</span> <ShuffleText text="cat about.txt" v-bind="decode" /></p>
          <ShuffleText as="p" :text="site.intro" v-bind="decode" class="max-w-2xl text-dim" />
        </div>

        <div class="mt-4">
          <p><span class="text-mute">$</span> <ShuffleText text="ls" v-bind="decode" /></p>
          <p class="flex flex-wrap gap-x-5 gap-y-1">
            <a
              v-for="s in sections"
              :key="s.id"
              :href="`#${s.id}`"
              class="text-dim transition-colors hover:text-accent"
              @click="scrollToSection($event, s.id)"
            ><ShuffleText :text="s.label" v-bind="decode" /></a>
          </p>
        </div>

        <div class="mt-4">
          <p><span class="text-mute">$</span> <ShuffleText text="contact" v-bind="decode" /></p>
          <p class="flex flex-wrap gap-x-5 gap-y-1">
            <a
              v-for="c in contactItems"
              :key="c.href"
              :href="c.href"
              :target="c.external ? '_blank' : undefined"
              :rel="c.external ? 'noopener' : undefined"
              class="link"
            ><ShuffleText :text="c.label" v-bind="decode" /></a>
          </p>
        </div>
      </div>
    </ShellWindow>
  </section>
</template>
