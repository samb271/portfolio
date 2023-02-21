<script setup lang="ts">

const props = defineProps({
  centered: Boolean,
})

</script>

<template>
  <div v-if="centered" class="min-h-screen grid place-content-center bg-slate-700">
    <slot></slot>
  </div>
  <div v-else class="min-h-screen bg-slate-700">
    <slot></slot>
  </div>
</template>