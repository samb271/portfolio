<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { readingTime, type Post } from '@/content'

defineProps<{ posts: Post[] }>()
</script>

<template>
  <p v-if="!posts.length" class="text-mute">
    <span class="text-line-strong">$</span> ls<br />
    <span>(Empty — first post incoming)</span>
  </p>
  <ul v-else class="flex flex-col">
    <li v-for="post in posts" :key="post.slug" class="[&:first-child>a]:pt-0 [&:last-child>a]:pb-0">
      <RouterLink :to="{ name: 'post', params: { slug: post.slug } }" class="group grid gap-x-6 gap-y-1 py-4 sm:grid-cols-[7rem_1fr_auto]">
        <span class="text-xs text-mute sm:pt-1 sm:text-sm">{{ post.date }}</span>
        <span>
          <span class="text-fg transition-colors group-hover:text-accent">
            <span class="text-mute group-hover:text-accent">&gt; </span>{{ post.title }}
          </span>
          <span v-if="post.draft" class="ml-2 text-xs text-accent">[Draft]</span>
          <span v-if="post.summary" class="mt-1 block text-sm text-mute">{{ post.summary }}</span>
        </span>
        <span class="hidden text-xs text-mute sm:block sm:pt-1">{{ readingTime(post) }}</span>
      </RouterLink>
    </li>
  </ul>
</template>
