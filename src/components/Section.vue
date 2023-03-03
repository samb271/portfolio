<script setup lang="ts">
const { time } = defineProps({
  time: {
    type: String
  }
})
</script>

<template>
  <p class="section text-4xl text-white flex border">
    <slot></slot>
    <p v-if="time" class="text-lg pl-3">{{ time }}</p>
  </p>
</template>

<style scoped>
.section{
  font-family: "Parabole Text";
}
</style>