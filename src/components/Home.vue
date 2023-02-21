<script setup lang="ts">

</script>

<template>
  <div class="text-slate-100 h-screen grid grid-cols-3">
    <div class="grid grid-rows-1 place-items-center fade-in opacity-0">
      <p>Projects</p>
      <RouterLink :to="{name: 'projects'}" class="grid place-items-center border-l aspect-square rounded-full w-32 hover:rotate-180 transition duration-300 fixed"></RouterLink>
    </div>
    <div class="grid grid-rows-3 place-items-center">
      <div class="grid place-items-center fade-in opacity-0">
        <p>Reach me</p>
        <RouterLink :to="{name: 'reach'}" class="border-t aspect-square rounded-full w-32 hover:rotate-180 transition duration-300 fixed"></RouterLink>
      </div>
      <div class="">Hi! Welcome to my portfolio.</div>
      <div class="grid place-items-center fade-in opacity-0">
        <p>Hobbies</p>
        <RouterLink :to="{name: 'hobbies'}" class="border-b aspect-square rounded-full w-32 hover:rotate-180 transition duration-300 fixed"></RouterLink>
      </div>
    </div>
    <div class="grid grid-rows-1 place-items-center fade-in opacity-0">
        <p>CV</p>
        <RouterLink :to="{name: 'cv'}" class="grid place-items-center border-r aspect-square rounded-full w-32 hover:rotate-180 transition duration-300 fixed"></RouterLink>
    </div>
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
