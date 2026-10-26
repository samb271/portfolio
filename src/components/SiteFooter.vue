<script setup lang="ts">
import { site } from '@/content'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-32 border-t border-line">
    <div class="mx-auto flex max-w-6xl flex-col gap-3 px-5 pb-32 pt-8 text-xs text-mute sm:flex-row sm:items-center sm:justify-between md:px-10">
      <p>{{ site.name.toLowerCase() }} &copy; {{ year }} <span class="text-line-strong">//</span> {{ site.headline }}</p>
      <p class="flex gap-4">
        <a :href="`mailto:${site.email}`" class="hover:text-accent">email</a>
        <a v-for="l in site.links" :key="l.url" :href="l.url" target="_blank" rel="noopener" class="hover:text-accent">{{ l.label }}</a>
      </p>
    </div>
  </footer>
</template>
