<script setup lang="ts">
const { time } = defineProps({
  time: {
    type: String
  }
})
</script>

<template>
  <p class="font-paraboleText lg:text-4xl md:text-3xl text-2xl text-text-primary flex transition duration-300">
  <div class="">
    <slot></slot>
  </div>
  <p v-if="time" class="lg:text-lg text-sm pl-3 font-paraboleText">{{ time }}</p>
  </p>
</template>