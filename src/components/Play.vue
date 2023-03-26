<script setup lang="ts">
import Title from './Title.vue';
import Section from './Section.vue';
import Text from './Text.vue';
import Pill from './Pill.vue';
</script>

<template>
  <Title>Play</Title>

  <Text>Time off the computer is just as important to me as time on the computer. Here are a few things I like to do to
    keep my mind fresh.
  </Text>

  <Section time="2013 - Current">Music</Section>
  <div class="flex">
    <Pill border-color="border-[#7DFFFF]" color="bg-[#1F4242]">Ableton</Pill>
  </div>
  <div class="xl:flex pb-8">
    <span>
      <Text>Music is one of the pillars of my life. My father can’t go a minute without listening to one of his countless
        records, and so growing up I was constantly being exposed to all different types of sound. Around my teens,
        curiosity got the best of me and I decided to give music production a shot. It gradually evolved into me releasing
        electronic music with labels from all around the world.</Text>
    </span>
    <div class="xl:-translate-y-32 xl:mt-0 mt-16 xl:pl-[7.5vw] flex flex-row img-container w-full xl:max-w-2xl justify-between">
      <img src="../assets/jpg/clovis.jpg" alt="clovis" class="w-56 z-10">
      <img src="../assets/jpg/fcukRemix.jpg" alt="fcukRemix" class=" w-56 xl:absolute z-20 xl:translate-x-[8vw] xl:translate-y-[100px]">
      <img src="../assets/jpg/sumer.jpg" alt="sumer" class="w-56 xl:absolute z-30 xl:translate-x-[16vw] xl:translate-y-[200px]">
      <img src="../assets/jpg/scablands.jpg" alt="scablands" class="w-56 xl:absolute z-40 xl:translate-x-[24vw] xl:translate-y-[300px]">
    </div>
  </div>

  <Section time="2011 - Current">Cyclig</Section>
  <div class="flex">
    <Pill border-color="border-[#026E00]" color="bg-[#012600]">Node.js</Pill>
    <Pill border-color="border-[#3178C6]" color="bg-[#122C49]">Typescript</Pill>
    <Pill border-color="border-[#A9A9A9]" color="bg-[#373737]">Express</Pill>
  </div>
  <div class="flex pb-8">
    <span>
      <Text>I'm most likely more agile on two wheels than I am on two feet. I started riding mountain bikes at 14 years
        old,
      </Text>
      <img src="../assets/jpg/cycling.jpg" alt="cycling" class="w-1/2">
    </span>
  </div>
</template>

