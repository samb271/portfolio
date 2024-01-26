<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '../src/components/Header.vue'
import Navbar from '../src/components/Navbar.vue'
</script>

<template>
  <div class="background">
    <Header></Header>
    <RouterView />
    <Navbar/>
  </div>
</template>

<style>
.background {
  background-color: #334155;
}
</style>


