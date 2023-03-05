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
  <div class="text-base border-2 border-[borderColor] bg-[color] h-10 w-fit px-4 grid place-items-center rounded-full">
    <slot></slot>
  </div>
</template>