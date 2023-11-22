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
  <template v-if="year">
    <div class="text-text-secondary text-lg max-w-2xl mt-10">
      <div v-if="title" class="text-text-primary pb-4 flex flex-row items-center lg:text-2xl text-xl">
        <p>{{ title }}</p>
        <div class="bg-text-secondary w-1.5 h-1.5 rounded-sm mt-1 mx-2.5"></div>
        <p>{{ year }}</p>
      </div>
      <slot></slot>
    </div>
  </template>
  <template v-else>
    <div class="text-text-secondary lg:text-lg text-md max-w-3xl mt-6">
      <div v-if="title" class="text-text-primary pb-4 flex flex-row items-center text-2xl">
        <p>{{ title }}</p>
      </div>
      <slot></slot>
    </div>
  </template>
</template>