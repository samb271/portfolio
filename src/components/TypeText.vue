<script setup lang="ts">
// Text being "typed": the first `count` characters are visible, the rest keep
// their space but stay invisible, so the layout never shifts while typing.
// `caret` shows a block cursor in place of the next character. In a monospace
// font it has the same width, so it needs no positioning (which Safari draws
// inconsistently for zero-width inline boxes).
defineProps<{ text: string; count: number; caret?: boolean }>()
</script>

<template>
  <span class="sr-only">{{ text }}</span>
  <span aria-hidden="true">{{ text.slice(0, count) }}<span v-if="caret" class="text-dim">&#x2588;</span><span class="invisible">{{ text.slice(caret ? count + 1 : count) }}</span></span>
</template>
