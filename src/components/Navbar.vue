<script setup lang="ts">

</script>

<template>
  <div id="navbar" class="navbar z-50 fixed bottom-10 h-12 w-full max-w-sm flex rounded-full">
    <a href="#work" class="w-28 mx-2 my-2 hover:bg-navbar-contrast active:bg-navbar-contrast hover:text-navbar-textSelected transition cursor-pointer text-xl text-center rounded-full grid place-items-center">Work</a>
    <a href="#projects" class="w-28 mx-2 my-2 text-xl text-center grid place-items-center rounded-full hover:bg-navbar-contrast active:bg-navbar-contrast hover:text-navbar-textSelected transition cursor-pointer">Projects</a>
    <a href="#play" class="w-28 mx-2 my-2 text-xl text-center grid place-items-center hover:bg-navbar-contrast active:bg-navbar-contrast hover:text-navbar-textSelected transition cursor-pointer rounded-full">Play</a>
  </div>
</template>

<style scoped>
.navbar{
  background-color: #D9D9D9;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>