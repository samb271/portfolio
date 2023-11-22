<script setup lang="ts">

</script>

<template>
  <div class="home flex flex-col gap-6 justify-center">
    <p class="lg:text-8xl md:text-6xl text-5xl w-full max-w-7xl welcomeTitle tracking-tight">Hi! I'm <span class="sam">Sam</span>, Montreal based <span class="bg-titlePill rounded-[40px] px-6">software</span> engineer.</p>
    <p class="welcomeSubtext lg:text-3xl text-xl lg:mt-24">Welcome to my portfolio</p>
  </div>
</template>

<style scoped>
.welcomeTitle{
  color: white;
  font-family: "Parabole Text";
  line-height: 120px;
  /* letter-spacing: -3px; */
}

.welcomeSubtext{
  color: #D0D0D0;
  font-family: "Parabole Text";
  line-height: 120px;
}

.sam{
  font-family: "Parabole Display";
}

.home{
  height: calc(100vh - 64px);
}

@media (max-width: 1024px) {
  .welcomeTitle{
  color: white;
  font-family: "Parabole Text";
  line-height: 90px;
  /* letter-spacing: -3px; */
}
}

@media (max-width: 768px) {
  .welcomeTitle{
  color: white;
  font-family: "Parabole Text";
  line-height: 60px;
  /* letter-spacing: -3px; */
}
}

</style>
