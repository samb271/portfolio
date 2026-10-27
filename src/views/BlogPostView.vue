<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import { site, posts, readingTime } from '@/content'
import ShuffleText from '@/components/ShuffleText.vue'
import TagList from '@/components/TagList.vue'

const props = defineProps<{ slug: string }>()
const post = computed(() => posts.find((p) => p.slug === props.slug))

watchEffect(() => {
  document.title = post.value ? `${post.value.title} — ${site.name}` : `Not found — ${site.name}`
})
</script>

<template>
  <main class="mx-auto max-w-3xl px-5 pt-32 md:px-10">
    <RouterLink to="/blog" class="text-sm text-mute transition-colors hover:text-accent">$ cd ..</RouterLink>

    <article v-if="post" class="mt-10">
      <header class="border-b border-line pb-8">
        <p class="text-xs text-mute">
          {{ post.date }} <span class="text-line-strong">//</span> {{ readingTime(post) }}
          <span v-if="post.draft" class="ml-2 text-accent">[Draft]</span>
        </p>
        <ShuffleText as="h1" :text="post.title" on="mount" class="mt-3 text-3xl font-medium tracking-tight text-fg md:text-5xl" />
        <p v-if="post.summary" class="mt-4 text-dim">{{ post.summary }}</p>
        <TagList :tags="post.tags" class="mt-5" />
      </header>
      <div class="prose mt-10 text-[15px] leading-8 md:text-base" v-html="post.body" />
    </article>

    <div v-else class="mt-10 text-dim">
      <p><span class="text-mute">$</span> cat {{ slug }}.md</p>
      <p>cat: {{ slug }}.md: no such file or directory</p>
    </div>
  </main>
</template>
