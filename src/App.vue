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

<style>
.background {
  background-color: #334155;
}

@font-face {
  font-family: "Parabole Display";
  src: local("Parabole"),
    url(./assets/fonts/Parabole/ParaboleTrial-DisplayRegular.otf);
}

@font-face {
  font-family: "Parabole Text";
  src: local("Parabole"),
    url(./assets/fonts/Parabole/ParaboleTrial-TextRegular.otf);
}
</style>


