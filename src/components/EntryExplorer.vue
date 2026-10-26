<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Entry } from '@/content'
import FileList from './FileList.vue'
import ShellWindow from './ShellWindow.vue'
import ShuffleText from './ShuffleText.vue'
import TagList from './TagList.vue'

const props = defineProps<{ dir: string; entries: Entry[] }>()

const selected = ref(props.entries[0]?.slug ?? '')
const entry = computed(() => props.entries.find((e) => e.slug === selected.value))
const items = computed(() => props.entries.map((e) => ({ id: e.slug, label: (e.short || e.title).toLowerCase() })))
</script>

<template>
  <div class="flex flex-col gap-6 md:flex-row md:gap-10">
    <FileList v-model="selected" :dir="dir" :items="items" />

    <ShellWindow v-if="entry" :key="entry.slug" class="min-w-0 grow" :title="`~/${dir}/${entry.slug}.md`" :meta="entry.period?.toLowerCase()">
      <div class="max-w-3xl">
          <h3 class="text-xl uppercase text-fg md:text-2xl">
            <a v-if="entry.url" :href="entry.url" target="_blank" rel="noopener" class="link">
              <ShuffleText :text="entry.title" on="mount" :delay="0" />
            </a>
            <ShuffleText v-else :text="entry.title" on="mount" :delay="0" />
          </h3>

          <TagList :tags="entry.tags" class="mt-4" />

          <div v-if="entry.body" class="prose mt-6" v-html="entry.body" />

          <article v-for="role in entry.roles" :key="role.title" class="mt-8">
            <p class="flex flex-wrap items-baseline gap-x-3 text-fg">
              <span class="text-mute">$</span>
              <span>{{ role.title }}</span>
              <span v-if="role.year" class="text-xs text-mute">[{{ role.year }}]</span>
            </p>
            <div class="prose mt-3" v-html="role.body" />
          </article>
      </div>
    </ShellWindow>
  </div>
</template>
