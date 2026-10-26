<script setup lang="ts">
import { site, work, publications, involvement, play, posts } from '@/content'
import HeroShell from '@/components/HeroShell.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import EntryExplorer from '@/components/EntryExplorer.vue'
import PublicationList from '@/components/PublicationList.vue'
import PlayList from '@/components/PlayList.vue'
import BlogExplorer from '@/components/BlogExplorer.vue'
import TaskBar from '@/components/TaskBar.vue'

const s = site.sections
</script>

<template>
  <main class="mx-auto max-w-6xl px-5 md:px-10">
    <HeroShell />

    <section id="work" class="pt-16">
      <SectionHeading index="01" id="work" :title="s.work.title" :intro="s.work.intro" />
      <EntryExplorer dir="work" :entries="work" />
    </section>

    <section id="research" class="pt-32">
      <SectionHeading index="02" id="research" :title="s.research.title" :intro="s.research.intro" />
      <PublicationList :publications="publications" />
    </section>

    <section id="involvement" class="pt-32">
      <SectionHeading index="03" id="involvement" :title="s.involvement.title" :intro="s.involvement.intro" />
      <EntryExplorer dir="involvement" :entries="involvement" />
    </section>

    <section id="play" class="pt-32">
      <SectionHeading index="04" id="play" :title="s.play.title" :intro="s.play.intro" />
      <PlayList :hobbies="play" />
    </section>

    <section id="blog" class="pt-32">
      <SectionHeading index="05" id="blog" :title="s.blog.title" :intro="s.blog.intro" />
      <BlogExplorer :posts="posts" />
    </section>
  </main>

  <TaskBar />
</template>
