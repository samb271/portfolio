<script setup lang="ts">

</script>

<template>
  <div class="text-slate-100 h-screen grid grid-cols-3">
    <div class="grid grid-rows-1 place-items-center">Projects</div>
    <div class="grid grid-rows-3 place-items-center">
      <div class="">Reach me</div>
      <div>Hi! Welcome to my portfolio.</div>
      <div>Hobbies</div>
    </div>
    <div class="grid grid-rows-1 place-items-center">CV</div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fade-in {
  animation-name: fade-in;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;
}

</style>
