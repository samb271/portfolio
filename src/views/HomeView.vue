<script setup lang="ts">
import Home from '../components/app/Home.vue'
import Page from '../components/Page.vue'
import Container from '@/components/Container.vue';
import Work from '@/components/app/Work.vue';
import Projects from '@/components/app/Projects.vue';
import Research from '@/components/app/Research.vue'
import Play from '@/components/app/Play.vue';
</script>

<template>
  <main>
    <Page>
      <Container>
        <Home />
        <Work />
        <Research />
        <Projects />
        <Play />
      </Container>
    </Page>
  </main>
</template>
