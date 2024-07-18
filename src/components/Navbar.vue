<script setup lang="ts">
import NavbarItem from './NavbarItem.vue';
import { useWorkVisibilityStore } from '@/stores/workVisibility';
import { useProjectsVisibilityStore } from '@/stores/projectsVisibility';
import { usePlayVisibilityStore } from '@/stores/playVisibility';
import { useResearchVisibilityStore } from '@/stores/researchVisibility';
import { watch } from 'vue';

const workVisibilityStore = useWorkVisibilityStore();
const researchVisibilityStore = useResearchVisibilityStore();
const projectsVisibilityStore = useProjectsVisibilityStore();
const playVisibilityStore = usePlayVisibilityStore();




</script>

<template>
  <div id="navbar" class="navbar z-50 fixed sm:bottom-10 bottom-5 sm:w-fit w-3/4 px-2 flex sm:gap-2 gap-1 justify-center rounded-full">
    <NavbarItem :active="workVisibilityStore.getVisibility && !researchVisibilityStore.getVisibility" link="#work">Work</NavbarItem>
    <NavbarItem :active="researchVisibilityStore.getVisibility && !projectsVisibilityStore.getVisibility" link="#research">Research</NavbarItem>
    <NavbarItem :active="projectsVisibilityStore.getVisibility && !playVisibilityStore.getVisibility" link="#projects">Projects</NavbarItem>
    <NavbarItem :active="playVisibilityStore.getVisibility" link="#play">Play</NavbarItem>
  </div>
</template>

<style scoped>
.navbar{
  background-color: #D9D9D9E0;
  backdrop-filter: blur(2px);
  left: 50%;
  transform: translate(-50%, 0);
}
</style>