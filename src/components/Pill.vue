<script setup lang="ts">

const { borderColor, color } = defineProps({
  borderColor: {
    type: String
  }, 
  color: {
    type: String
  }
})

</script>

<template>
  <div :class="['text-base border-2 h-10 min-w-fit px-4 mt-4 mr-6 grid place-items-center rounded-full text-text-primary', borderColor, color]">
    <slot></slot>
  </div>
</template>