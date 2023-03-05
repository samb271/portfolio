<script setup lang="ts">
import Title from './Title.vue';
import Section from './Section.vue';
import Pill from './Pill.vue'
</script>

<template>
  <div class="border h-screen">
    <Title>Work</Title>
    <Section time="2020 - 2023">Powerhealth Solutions</Section>
    <div class="border border-white">
      <Pill border-color="#42B883" color="#143929">Vue 3</Pill>
    </div>
  </div>
</template>