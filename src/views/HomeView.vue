<script setup lang="ts">
import Home from '../components/Home.vue'
import Page from '../components/Page.vue'
import Container from '@/components/Container.vue';
import Work from '@/components/Work.vue';
import Projects from '@/components/Projects.vue';
</script>

<template>
  <main>
    <Page>
      <Container>
        <Home />
        <Work />
        <div class="h-40"></div>
        <Projects />
        <Fun />
      </Container>
    </Page>
  </main>
</template>
