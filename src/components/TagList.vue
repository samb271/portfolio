<script setup lang="ts">
defineProps<{ tags?: string[] }>()
</script>

<template>
  <ul v-if="tags?.length" class="flex flex-wrap gap-2 text-xs" aria-label="tools">
    <li
      v-for="tag in tags"
      :key="tag"
      class="border border-line px-2 py-0.5 text-mute"
    >
      {{ tag }}
    </li>
  </ul>
</template>
