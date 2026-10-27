<script setup lang="ts">
import { site } from '@/content'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-32 border-t border-line">
    <div class="mx-auto flex max-w-6xl flex-col gap-3 px-5 pb-32 pt-8 text-xs text-mute sm:flex-row sm:items-center sm:justify-between md:px-10">
      <p>{{ site.name }} &copy; {{ year }} <span class="text-line-strong">//</span> {{ site.headline }}</p>
      <p class="flex flex-wrap gap-x-5 gap-y-1">
        <a :href="`mailto:${site.email}`" class="link">Email</a>
        <a v-if="site.scholar" :href="site.scholar" target="_blank" rel="noopener" class="link">Scholar</a>
        <a v-for="l in site.links" :key="l.url" :href="l.url" target="_blank" rel="noopener" class="link">{{ l.label }}</a>
      </p>
    </div>
  </footer>
</template>
