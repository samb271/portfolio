<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Hobby } from '@/content'
import FileList from './FileList.vue'
import ShellWindow from './ShellWindow.vue'
import ShuffleText from './ShuffleText.vue'
import TagList from './TagList.vue'

const props = defineProps<{ hobbies: Hobby[] }>()

const selected = ref(props.hobbies[0]?.slug ?? '')
const hobby = computed(() => props.hobbies.find((h) => h.slug === selected.value))
const items = computed(() => props.hobbies.map((h) => ({ id: h.slug, label: h.title.toLowerCase() })))
</script>

<template>
  <div class="flex flex-col gap-6 md:flex-row md:gap-10">
    <FileList v-model="selected" dir="play" :items="items" />

    <ShellWindow v-if="hobby" :key="hobby.slug" class="min-w-0 grow" :title="`~/play/${hobby.slug}.md`" :meta="hobby.period?.toLowerCase()">
      <div class="max-w-3xl">
        <ShuffleText as="h3" :text="hobby.title" on="mount" :delay="0" class="text-xl uppercase text-fg md:text-2xl" />
        <TagList :tags="hobby.tags" class="mt-4" />
        <div class="prose mt-6" v-html="hobby.body" />
      </div>

      <figure v-if="hobby.image" class="mt-8 max-w-3xl">
        <img :src="hobby.image" :alt="hobby.title" class="w-full border border-line" loading="lazy" />
        <figcaption v-if="hobby.credit" class="mt-2 text-xs text-mute">{{ hobby.credit }}</figcaption>
      </figure>

      <ul v-if="hobby.releases?.length" class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <li v-for="release in hobby.releases" :key="release.link">
          <a :href="release.link" target="_blank" rel="noopener" class="no-arrow group block">
            <img
              :src="release.cover"
              :alt="release.title"
              class="aspect-square w-full border border-line object-cover transition-colors duration-300 group-hover:border-accent"
              loading="lazy"
            />
            <span class="mt-2 block truncate text-xs text-mute transition-colors group-hover:text-accent">
              {{ release.title.toLowerCase() }} <span aria-hidden="true">&#x2197;&#xFE0E;</span>
            </span>
          </a>
        </li>
      </ul>
    </ShellWindow>
  </div>
</template>
