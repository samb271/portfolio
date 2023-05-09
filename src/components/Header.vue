<script setup lang="ts">
import { computed, watch, ref } from 'vue';


const parentDivWidth = ref(0)
const avatarWidth = ref(0)
const maxLeftPosition = ref(0)
let avatar: HTMLElement | null;
var bodyHeight: number | undefined;

function calculateDimensions() {
  const parentDiv = document.getElementById('avatarContainer');
  if (parentDiv) {
    parentDivWidth.value = parentDiv.offsetWidth
  }

  avatar = document.getElementById('avatar');
  if (avatar) {
    avatarWidth.value = avatar.offsetWidth
  }

  bodyHeight = document.querySelector('body')?.scrollHeight

  maxLeftPosition.value = parentDivWidth.value - avatarWidth.value;
}

function repositionAvatar() {

  if (bodyHeight) {

    const progressPct = window.scrollY / bodyHeight

    const compensatedPct = ((progressPct * window.innerHeight) + window.scrollY) / bodyHeight

    const newLeftPosition = (compensatedPct * parentDivWidth.value);

    if (avatar && (newLeftPosition >= 0) && (newLeftPosition < maxLeftPosition.value)) {
      avatar.style.left = `${newLeftPosition}px`;
    }
  }
}

window.addEventListener('load', () => {
  calculateDimensions();
});

window.addEventListener('resize', () => {
  calculateDimensions();
  repositionAvatar();
});


window.addEventListener('scroll', () => {
  calculateDimensions();
  repositionAvatar();
});

</script>

<template>
  <div class="fixed w-full md:px-16 px-8 pt-2 text-text-primary bg-background header">
    <div class="h-12 flex place-items-center">
      <div>
        <p class="min-w-max">Samuel Barbeau</p>
      </div>

      <div class="grow mx-4" id="avatarContainer">
        <img src="../assets/svg/samb.svg" class="relative h-6" id="avatar">
      </div>

      <div>
        <div class="flex flex-row">
          <a href="#">English</a>
          <p class="px-2">/</p>
          <a href="#">Français</a>
        </div>
      </div>
    </div>
    <div class="border-b border-white"></div>
  </div>
</template>

<style scoped>
.header {
  font-family: "Parabole Text";
}
</style>