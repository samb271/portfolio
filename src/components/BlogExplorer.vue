<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Post } from '@/content'
import FileList from './FileList.vue'
import ShellWindow from './ShellWindow.vue'
import PostList from './PostList.vue'

const props = defineProps<{ posts: Post[] }>()

const year = (p: Post) => String(p.date).slice(0, 4)
const years = computed(() => {
  const list = [...new Set(props.posts.map(year))]
  // Before the first post, still show this year's folder (empty).
  return list.length ? list : [String(new Date().getFullYear())]
})

const selected = ref(years.value[0])
const visible = computed(() => props.posts.filter((p) => year(p) === selected.value))
const items = computed(() => years.value.map((y) => ({ id: y, label: `${y}/` })))
</script>

<template>
  <div class="flex flex-col gap-6 md:flex-row md:gap-10">
    <FileList v-model="selected" dir="blog" :items="items" />

    <ShellWindow class="min-w-0 grow" :title="`~/blog/${selected}/`" :meta="`${visible.length} ${visible.length === 1 ? 'post' : 'posts'}`">
      <PostList :posts="visible" />
    </ShellWindow>
  </div>
</template>
