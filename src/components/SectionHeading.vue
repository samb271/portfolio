<script setup lang="ts">
import ShuffleText from './ShuffleText.vue'

defineProps<{ index: string; id: string; title: string; intro?: string }>()
</script>

<!-- No wrapper element: the title must be a direct child of its <section>
     so it stays stuck for the whole section, not just this block. -->
<template>
  <p class="text-xs text-mute">{{ index }} <span class="text-line-strong">//</span> ~/{{ id }}</p>
  <ShuffleText as="h2" :text="title.toLowerCase()" class="sticky-heading text-3xl font-medium tracking-tight text-fg md:text-5xl" />
  <p v-if="intro" class="mt-2 max-w-2xl text-dim">{{ intro }}</p>
  <div class="mb-8 md:mb-12" />
</template>

<style scoped>
.sticky-heading {
  position: sticky;
  top: var(--header-h);
  z-index: 20;
  height: var(--heading-h);
  display: flex;
  align-items: center;
  line-height: 1;
  background: var(--bg);
  /* Extend the background edge to edge without changing layout. */
  box-shadow: 0 0 0 100vmax var(--bg);
  clip-path: inset(0 -100vmax);
}
</style>
