<script setup lang="ts">
import ShuffleText from './ShuffleText.vue'

defineProps<{ index: string; id: string; title: string; intro?: string }>()
</script>

<template>
  <header class="mb-8 md:mb-12">
    <p class="text-xs text-mute">{{ index }} <span class="text-line-strong">//</span> ~/{{ id }}</p>
    <ShuffleText as="h2" :text="title.toLowerCase()" class="mt-2 text-3xl font-medium tracking-tight text-fg md:text-5xl" />
    <p v-if="intro" class="mt-4 max-w-2xl text-dim">{{ intro }}</p>
  </header>
</template>
