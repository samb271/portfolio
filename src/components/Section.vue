<script setup lang="ts">
const { time } = defineProps({
  time: {
    type: String
  }
})
</script>

<template>
  <p class="section lg:text-4xl md:text-3xl text-2xl text-text-primary flex transition duration-300">
  <div class="">
    <slot></slot>
  </div>
  <p v-if="time" class="lg:text-lg text-sm pl-3">{{ time }}</p>
  </p>
</template>

<style scoped>
.section {
  font-family: "Parabole Text";
}
</style>