<script setup lang="ts">

const { title } = defineProps({
  title: {
    type: String
  },
  year: {
    type: String
  }
})

</script>

<template>
  <div class="text-text-secondary text-lg max-w-3xl mt-10">
    <div v-if="title" class="text-text-primary pb-4 flex flex-row items-center text-2xl">
      <p>{{ title }}</p>
      <div v-if="year" class="bg-text-primary w-2 h-2 rounded-full mt-1.5 mx-2.5"></div>
      <p>{{ year }}</p>
    </div>
    <slot></slot>
  </div>
</template>