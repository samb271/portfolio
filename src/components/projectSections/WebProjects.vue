<script setup lang="ts">
import Title from '../Title.vue';
import Section from '../Section.vue';
import Pill from '../Pill.vue';
import Text from '../Text.vue';
import { ref } from 'vue';

const isAgePredictionVisible = ref(true);


</script>

<template>
  <div class="flex">

    <div class="flex flex-col gap-8">

      <div class="flex border-b-2 border-[#D0D0D030] pb-8">
        <div class="">
          <Section time="2022">Webflix</Section>
          <div class="flex lg:gap-6 gap-3">
            <Pill border-color="border-[#026E00]" color="bg-[#012600]">Node.js</Pill>
            <Pill border-color="border-[#702CF4]" color="bg-[#271055]">Bootstrap</Pill>
            <Pill border-color="border-[#C74634]" color="bg-[#3A3632]">Oracle</Pill>
          </div>
          <div class="flex">
            <span>
              <Text>Designed and implemented an Oracle database to feed a costum made front-end with information on Hollywood movies, actors, producers and more.
                
              </Text>
            </span>
          </div>
        </div>
      </div>

      <div class="flex pb-8">
        <div class="">
          <Section time="2022">Unee</Section>
          <div class="flex lg:gap-6 gap-3">
            <Pill border-color="border-[#026E00]" color="bg-[#012600]">Node.js</Pill>
            <Pill border-color="border-[#702CF4]" color="bg-[#271055]">Bootstrap</Pill>
            <Pill border-color="border-[#A9A9A9]" color="bg-[#373737]">Express</Pill>
          </div>
          <div class="flex">
            <span>
              <Text>Built a student portal for a fictive university. Students could login and look at their schedules,
                pick classes and see their teacher’s profile. Teachers could add or remove classes from their semesters,
                create
                assignments and give out quizzes.
              </Text>
            </span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>