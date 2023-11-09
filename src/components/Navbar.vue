<script setup lang="ts">
import NavbarItem from './NavbarItem.vue';
</script>

<template>
  <div id="navbar" class="navbar z-50 fixed bottom-10 w-fit px-2 flex gap-2 justify-center rounded-full">
    <NavbarItem link="#work">Work</NavbarItem>
    <NavbarItem link="#projects">Projects</NavbarItem>
    <NavbarItem link="#play">Play</NavbarItem>
    <NavbarItem link="mailto:samuelpbarbeau@gmail.com">Contact</NavbarItem>
  </div>
</template>

<style scoped>
.navbar{
  background-color: #D9D9D9E0;
  backdrop-filter: blur(2px);
  left: 50%;
  transform: translate(-50%, 0);
}
</style>