<script setup lang="ts">

const props = defineProps({
  centered: Boolean,
})

</script>

<template>
  <div v-if="centered" class="min-h-screen grid place-content-center">
    <slot></slot>
  </div>
  <div v-else class="min-h-screen pt-14">
    <slot></slot>
  </div>
</template>