<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { site, type Publication } from '@/content'
import ShellWindow from './ShellWindow.vue'
import FileList from './FileList.vue'

const props = defineProps<{ publications: Publication[] }>()

const year = (p: Publication) => String(p.date).slice(0, 4)
const featured = computed(() => props.publications.filter((p) => p.featured))
const byYear = computed(() => {
  const groups = new Map<string, Publication[]>()
  for (const p of props.publications) groups.set(year(p), [...(groups.get(year(p)) ?? []), p])
  return groups
})
const years = computed(() => [...byYear.value.keys()])
const selectedYear = ref(years.value[0] ?? '')
const visible = computed(() => byYear.value.get(selectedYear.value) ?? [])
const items = computed(() => years.value.map((y) => ({ id: y, label: `${y}/` })))

const clean = (author: string) => author.replace(/\*$/, '').trim()
const isMe = (author: string) => clean(author) === site.name
const hasEqual = (p: Publication) => p.authors.some((a) => a.endsWith('*'))

function links(p: Publication) {
  const out = []
  if (p.arxiv) {
    out.push({ label: 'arxiv', url: `https://arxiv.org/abs/${p.arxiv}` })
    out.push({ label: 'pdf', url: `https://arxiv.org/pdf/${p.arxiv}` })
  }
  return [...out, ...(p.links ?? [])]
}

function bibtex(p: Publication) {
  if (p.bibtex) return p.bibtex.trim()
  const first = clean(p.authors[0] ?? 'anon').split(' ').pop()!.toLowerCase()
  const word = p.title.split(/[^A-Za-z0-9]+/).find((w) => w.length > 2)?.toLowerCase() ?? ''
  const fields: [string, string][] = [
    ['title', p.title],
    ['author', p.authors.map(clean).join(' and ')],
    p.arxiv ? ['journal', `arXiv preprint arXiv:${p.arxiv}`] : ['booktitle', p.venue],
    ['year', year(p)],
  ]
  const kind = p.arxiv && p.tag === 'preprint' ? 'article' : 'inproceedings'
  return `@${kind}{${first}${year(p)}${word},\n${fields.map(([k, v]) => `  ${k} = {${v}}`).join(',\n')}\n}`
}

const open = reactive<Record<string, 'abstract' | 'bibtex' | undefined>>({})
const copied = reactive<Record<string, boolean>>({})

function toggle(slug: string, panel: 'abstract' | 'bibtex') {
  open[slug] = open[slug] === panel ? undefined : panel
}

async function copy(p: Publication) {
  try {
    await navigator.clipboard.writeText(bibtex(p))
    copied[p.slug] = true
    setTimeout(() => (copied[p.slug] = false), 1500)
  } catch {
    // Clipboard blocked: the BibTeX stays visible for manual copy.
  }
}
</script>

<template>
  <div class="flex flex-col gap-14">
    <!-- Featured: what a skimming visitor should see first -->
    <div v-if="featured.length" class="flex flex-col gap-6">
      <ShellWindow v-for="p in featured" :key="p.slug" :title="`~/research/featured/${p.slug}.md`" :meta="p.tag.toLowerCase()">
        <h3 class="text-lg text-fg md:text-xl">{{ p.title }}</h3>
        <p class="mt-2 text-sm text-mute">
          <template v-for="(a, i) in p.authors" :key="a"><span :class="isMe(a) ? 'text-fg underline decoration-line-strong underline-offset-4' : ''">{{ a }}</span>{{ i < p.authors.length - 1 ? ', ' : '' }}</template>
        </p>
        <p v-if="p.tldr" class="mt-4 max-w-3xl text-dim"><span class="text-mute">tl;dr</span> {{ p.tldr }}</p>
        <p class="mt-5 flex flex-wrap gap-2">
          <a v-for="l in links(p)" :key="l.url" :href="l.url" target="_blank" rel="noopener" class="btn">{{ l.label }}</a>
        </p>
      </ShellWindow>
    </div>

    <!-- All papers, one tab per year -->
    <div class="flex flex-col gap-6 md:flex-row md:gap-10">
      <FileList v-model="selectedYear" dir="research" :items="items" />

      <ShellWindow class="min-w-0 grow" :title="`~/research/${selectedYear}/`" :meta="`${visible.length} ${visible.length === 1 ? 'paper' : 'papers'}`">
        <ul>
          <li v-for="p in visible" :key="p.slug" class="grid gap-x-6 gap-y-2 py-5 first:pt-0 last:pb-0 lg:grid-cols-[8.5rem_1fr]">
            <span class="h-min w-fit border border-line px-2 py-0.5 text-xs lowercase text-mute lg:mt-0.5">{{ p.tag }}</span>
            <div class="min-w-0">
              <p class="text-fg">{{ p.title }}</p>
              <p class="mt-1 text-sm text-mute">
                <template v-for="(a, i) in p.authors" :key="a"><span :class="isMe(a) ? 'text-fg underline decoration-line-strong underline-offset-4' : ''">{{ a }}</span>{{ i < p.authors.length - 1 ? ', ' : '' }}</template>
              </p>
              <p class="mt-1 text-xs text-mute">
                {{ p.venue }}<span v-if="hasEqual(p)">{{ ' ' }}<span class="text-line-strong">//</span> * equal contribution</span>
              </p>

              <p class="mt-3 flex flex-wrap gap-2 text-xs">
                <a v-for="l in links(p)" :key="l.url" :href="l.url" target="_blank" rel="noopener" class="btn">{{ l.label }}</a>
                <button v-if="p.body" type="button" :class="['btn', { 'is-active': open[p.slug] === 'abstract' }]" :aria-expanded="open[p.slug] === 'abstract'" @click="toggle(p.slug, 'abstract')">
                  {{ open[p.slug] === 'abstract' ? '-' : '+' }} abstract
                </button>
                <button type="button" :class="['btn', { 'is-active': open[p.slug] === 'bibtex' }]" :aria-expanded="open[p.slug] === 'bibtex'" @click="toggle(p.slug, 'bibtex')">
                  {{ open[p.slug] === 'bibtex' ? '-' : '+' }} bibtex
                </button>
              </p>

              <div v-if="open[p.slug] === 'abstract'" class="prose mt-4 max-w-3xl text-sm" v-html="p.body" />
              <div v-if="open[p.slug] === 'bibtex'" class="mt-4 max-w-3xl">
                <pre class="overflow-x-auto border border-line bg-panel p-4 text-xs text-dim">{{ bibtex(p) }}</pre>
                <button type="button" class="btn mt-2 text-xs" @click="copy(p)">{{ copied[p.slug] ? 'copied' : 'copy' }}</button>
              </div>
            </div>
          </li>
        </ul>
      </ShellWindow>
    </div>
  </div>
</template>
