<script setup lang="ts">

</script>

<template>
  <div class="home flex flex-col gap-6 justify-center">
    <p class="text-8xl w-full max-w-7xl welcomeTitle">Hi! I'm <span class="sam">Sam</span>, Montreal based <span class="bg-titlePill rounded-[40px] px-6">software</span> engineer.</p>
    <p class="welcomeSubtext text-3xl mt-24">Welcome to my portfolio</p>
  </div>
</template>

<style scoped>
.welcomeTitle{
  color: white;
  font-family: "Parabole Text";
  line-height: 120px;
  letter-spacing: -3px;
}

.welcomeSubtext{
  color: white;
  font-family: "Parabole Text";
  line-height: 120px;
}

.sam{
  font-family: "Parabole Display";
}

.home{
  height: calc(100vh - 64px);
}

</style>
