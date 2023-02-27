<script setup lang="ts">

const props = defineProps({
  centered: Boolean,
})

</script>

<template>
  <div v-if="centered" class="min-h-screen grid place-content-center background">
    <slot></slot>
  </div>
  <div v-else class="min-h-screen pt-12 background">
    <slot></slot>
  </div>
</template>

<style scoped>
.background{
  background-color: #334155;
}
</style>