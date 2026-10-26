<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { site, posts } from '@/content'
import SectionHeading from '@/components/SectionHeading.vue'
import BlogExplorer from '@/components/BlogExplorer.vue'
</script>

<template>
  <main class="mx-auto max-w-6xl px-5 pt-32 md:px-10">
    <RouterLink to="/" class="text-sm text-mute transition-colors hover:text-accent">$ cd ~</RouterLink>
    <div class="mt-8">
      <SectionHeading index="--" id="blog" :title="site.sections.blog.title" :intro="site.sections.blog.intro" />
    </div>
    <BlogExplorer :posts="posts" />
  </main>
</template>
