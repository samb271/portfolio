<script setup lang="ts">

</script>

<template>
  <div id="navbar" class="navbar z-50 fixed bottom-10 w-fit px-2 flex gap-2 justify-center rounded-full">
    <a href="#work" class="w-28 px-4 py-1 my-2 hover:bg-navbar-contrast active:bg-navbar-contrast hover:text-text-secondary transition cursor-pointer text-lg text-center rounded-full">Work</a>
    <a href="#projects" class="w-28 px-4 py-1 my-2 text-lg text-center rounded-full hover:bg-navbar-contrast active:bg-navbar-contrast hover:text-text-secondary transition cursor-pointer">Projects</a>
    <a href="#play" class="w-28 px-4 py-1 my-2 text-lg text-center hover:bg-navbar-contrast active:bg-navbar-contrast hover:text-text-secondary transition cursor-pointer rounded-full">Play</a>
    <a href="mailto:samuelpbarbeau@gmail.com" class="w-28 px-4 py-1 my-2 text-lg text-center hover:bg-navbar-contrast active:bg-navbar-contrast hover:text-text-secondary transition cursor-pointer rounded-full">Contact</a>
  </div>
</template>

<style scoped>
.navbar{
  background-color: #D9D9D9;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>