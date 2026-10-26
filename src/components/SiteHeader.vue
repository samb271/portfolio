<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { site } from '@/content'

// Reuses the GitHub entry from the links list in site.yaml.
const github = site.links.find((l) => l.label.toLowerCase() === 'github')

// Scroll progress, 0..1. Drives the avatar along the track like a load bar.
const progress = ref(0)

function update() {
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
}

onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
})
const percent = computed(() => String(Math.round(progress.value * 100)).padStart(3, '0'))
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg">
    <div class="mx-auto flex h-[var(--header-h)] max-w-6xl items-center gap-3 px-4 text-sm sm:gap-4 sm:px-5 md:px-10">
      <RouterLink to="/" class="shrink-0 text-fg transition-colors hover:text-accent">
        {{ site.name.toLowerCase() }}
      </RouterLink>

      <div class="relative mx-2 hidden h-6 grow sm:block" aria-hidden="true">
        <div class="absolute inset-x-0 top-1/2 border-t border-dashed border-[#1e1e1e]" />
        <img
          src="/uploads/samb.svg"
          alt=""
          class="absolute top-0 h-6"
          :style="{ left: `calc(${progress} * (100% - 1.25rem))` }"
        />
      </div>
      <span class="hidden w-10 text-right text-xs text-mute sm:block" aria-hidden="true">{{ percent }}%</span>

      <nav class="header-nav ml-auto flex items-center gap-1.5 sm:ml-0 sm:gap-3">
        <a v-if="site.scholar" :href="site.scholar" target="_blank" rel="noopener" class="btn max-sm:px-2">scholar</a>
        <a v-if="github" :href="github.url" target="_blank" rel="noopener" class="btn max-sm:px-2">github</a>
        <a :href="`mailto:${site.email}`" class="btn max-sm:px-2">contact</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* No room for the external-link arrows on small phones. */
@media (max-width: 639px) {
  /* !important: main.css loads after component styles and would win the tie. */
  .header-nav a::after {
    display: none !important;
  }
}
</style>
