<script setup lang="ts">
// Sticky "directory listing" used as the tab menu in every home page section.
import ShuffleText from './ShuffleText.vue'

defineProps<{ dir: string; items: { id: string; label: string }[]; modelValue: string }>()
defineEmits<{ 'update:modelValue': [id: string] }>()
</script>

<template>
  <nav
    class="z-10 h-min border border-line bg-panel text-sm backdrop-blur md:sticky md:top-[calc(var(--header-h)+1.5rem)] md:w-48 md:shrink-0"
    :aria-label="dir"
  >
    <ShuffleText as="p" :text="`~/${dir}`" on="hover" class="border-b border-line px-3.5 py-2 text-xs text-mute" />
    <ul class="flex gap-1 overflow-x-auto p-2 md:flex-col md:gap-0.5">
      <li v-for="item in items" :key="item.id" class="shrink-0">
        <button
          type="button"
          :aria-current="item.id === modelValue ? 'true' : undefined"
          :class="[
            'w-full px-2 py-1 text-left transition-colors',
            item.id === modelValue ? 'bg-panel-raised text-accent' : 'text-mute hover:text-fg',
          ]"
          @click="$emit('update:modelValue', item.id)"
        >
          <span class="inline-block w-3">{{ item.id === modelValue ? '>' : '' }}</span><ShuffleText :text="item.label" on="hover" />
        </button>
      </li>
    </ul>
  </nav>
</template>
