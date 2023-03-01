<script setup lang="ts">
import Home from '../components/Home.vue'
import Page from '../components/Page.vue'
import Container from '@/components/Container.vue';
import Work from '@/components/Work.vue';
</script>

<template>
  <main>
    <Page>
      <Container>
        <Home />
        <Work />
        <Projects />
        <Fun />
      </Container>
    </Page>
  </main>
</template>
