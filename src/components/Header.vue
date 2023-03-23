<script setup lang="ts">
import Container from './Container.vue';
</script>

<template>
  <div class="fixed w-full md:px-16 px-8 pt-2 text-text-primary bg-background header">
    <div class="h-12 flex justify-between place-items-center">
      <div class="flex flex-row">
        <p class="mr-4 min-w-max">Samuel Barbeau</p>
        <img src="../assets/svg/samb.svg" class="h-7">
      </div>
      <div class="flex flex-row">
        <a href="#">Engish</a>
        <p class="px-2">/</p>
        <a href="#">Français</a>
      </div>
    </div>
    <div class="border-b border-white"></div>
  </div>
</template>

<style scoped>
.header{
  font-family: "Parabole Text";
}
</style>