<script setup lang="ts">
import Title from '../Title.vue';
import Section from '../Section.vue';
import Text from '../Text.vue';
import Pill from '../Pill.vue';
</script>

<template>
  <Title id="play">Play</Title>

  <Text>Time off the computer is just as important to me as time on the computer. Here are a few things I like to do to
    keep my mind fresh.
  </Text>

  <Section time="2013 - Current">Music</Section>
  <div class="flex">
    <Pill border-color="border-[#7DFFFF]" color="bg-[#1F4242]">Ableton</Pill>
  </div>
  <div class="gap-16">
    <Text>Music has always held a special place in my heart. Growing up, my dad's record collection introduced me to a
      wide variety of sounds. When I was a teenager, I decided to try my hand at music production. A few years later, I
      was able to release my own tracks through various record labels across the world.</Text>
    <div class="mt-16 mx-auto flex flex-row gap-8 w-full">
      <a href="https://gobekli.bandcamp.com/album/clovis" class="grow">
        <img src="../../assets/jpg/clovis.jpg" alt="clovis" class="">
      </a>
      <a href="https://causalchain.bandcamp.com/track/fcuk-gobekli-remix" class="grow">
        <img src="../../assets/jpg/fcukRemix.jpg" alt="fcukRemix" class="z-20">
      </a>
      <a href="https://causalchain.bandcamp.com/track/gobekli-sumer" class="grow">
        <img src="../../assets/jpg/sumer.jpg" alt="sumer" class="z-30">
      </a>
      <a href="https://cloudcore.bandcamp.com/album/scablands" class="grow">
        <img src="../../assets/jpg/scablands.jpg" alt="scablands" class="z-40">
      </a>
    </div>
  </div>

  <Section time="2011 - Current">Cyclig</Section>

  <div class="flex flex-col pb-8">
    <Text>I'm most likely more agile on two wheels than I am on two feet. I started riding mountain bikes at 14 years
      old and it didn't take long for me to take an interest in racing. I participated in provincial cups until an
      injury led me to leave the competitive scene behind. It has since been my way of keeping my physical and mental
      health in check, in addition to nurturing my connection with nature. More recently, I've also gotten into road
      cycling. In 2019, I took part in the "Défi Bonneville": 400km over 2 days to raise money for children sports
      programs in impoverished neighborhoods.
    </Text>

    <div class="mt-16 grid place-content-center">
      <img src="../../assets/jpg/cycling.jpg" alt="cycling">
    </div>
  </div>
</template>

