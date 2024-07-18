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
  <div :class="['lg:text-md md:text-sm text-xs border-2 lg:h-9 h-8 min-w-fit lg:px-4 px-3 mt-4 grid place-items-center rounded-full text-text-primary', borderColor, color]">
    <slot></slot>
  </div>
</template>