<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '../src/components/Header.vue'
</script>

<template>
  <div class="background">
    <Header></Header>
    <RouterView />
  </div>
</template>

<style scoped>
.background {
  background-color: #334155;
}
</style>


