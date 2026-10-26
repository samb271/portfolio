<script setup lang="ts">
defineProps<{ title?: string; meta?: string }>()
</script>

<template>
  <div class="shell-window border border-line-strong bg-panel">
    <div class="flex items-center justify-between gap-4 border-b border-line px-3.5 py-2 text-xs text-mute">
      <span class="truncate"><slot name="title">{{ title }}</slot></span>
      <span class="shrink-0"><slot name="meta">{{ meta }}</slot></span>
    </div>
    <div class="p-4 md:p-6">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.shell-window {
  box-shadow: 0 0 0 1px var(--bg), 0 28px 60px rgba(0, 0, 0, 0.55);
}
</style>
