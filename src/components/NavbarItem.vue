<script setup lang="ts">

const { link } = defineProps({
  link: {
    type: String
  },
  active: {
    type: Boolean,
  }
})

</script>

<template>
  <a :href="link" :class="['w-28 sm:px-4 px-2 py-1 my-2 sm:text-lg text-sm text-center rounded-full hover:bg-navbar-contrast hover:text-text-secondary transition cursor-pointer', active ? 'bg-navbar-contrast text-text-secondary' : '']">
    <slot></slot>
  </a>
</template>