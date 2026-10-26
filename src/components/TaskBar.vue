<script setup lang="ts">
import { useActiveSection } from '@/composables/useActiveSection'
import ShuffleText from './ShuffleText.vue'

const items = ['work', 'research', 'involvement', 'play', 'blog']
const active = useActiveSection(items)
</script>

<template>
  <nav
    class="fixed bottom-4 left-1/2 z-50 flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-1 overflow-x-auto border border-line-strong bg-panel p-1.5 text-xs shadow-[0_12px_40px_rgba(0,0,0,0.6)] sm:bottom-8 sm:text-sm"
    aria-label="sections"
  >
    <a
      v-for="item in items"
      :key="item"
      :href="`#${item}`"
      :aria-current="active === item ? 'location' : undefined"
      :class="[
        'shrink-0 px-2 py-1 transition-colors sm:px-3.5',
        active === item ? 'bg-panel-raised text-accent' : 'text-mute hover:text-fg',
      ]"
    >
      <ShuffleText :text="active === item ? `[${item}]` : item" on="hover" />
    </a>
  </nav>
</template>
