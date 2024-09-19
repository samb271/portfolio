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
  <div class="fixed w-full xl:px-48 lg:px-24 px-6 sm:text-base text-xs pt-2 text-text-primary bg-background header z-50" id="header">
    <div class="sm:h-12 h-10 flex place-items-center">
      <div>
        <p class="min-w-max font-paraboleText">Samuel Barbeau</p>
      </div>

      <div class="grow mx-4" id="avatarContainer">
        <img src="../assets/svg/samb.svg" class="relative sm:h-6 h-5" id="avatar">
      </div>

      <div>
        <div class="flex flex-row">
          <a href="mailto:samuelpbarbeau@gmail.com">Contact</a>
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