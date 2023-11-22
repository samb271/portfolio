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
  <a :href="link" :class="['w-28 px-4 py-1 my-2 text-lg text-center rounded-full hover:bg-navbar-contrast hover:text-text-secondary transition cursor-pointer', active ? 'bg-navbar-contrast text-text-secondary' : '']">
    <slot></slot>
  </a>
</template>