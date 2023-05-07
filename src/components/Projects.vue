<script setup lang="ts">
import Title from './Title.vue';
import Section from './Section.vue';
import Pill from './Pill.vue';
import Text from './Text.vue';
</script>

<template>
  <Title>Projects</Title>

  <div class="grid grid-cols-2 gap-16">

    <div>
      <Section time="2022">Lines of Action</Section>
      <div class="flex">
        <Pill border-color="border-[#ED8B00]" color="bg-[#502F00]">Java</Pill>
      </div>
      <div class="flex">
        <span>
          <Text>Programmed a computer player for the Lines Of Action game utilizing the Minimax algorithm with Alpha-beta
            pruning. I learned the importance of memory management and optimization as we we’re asked to perform a move in
            under five seconds. Alongside the move evaluation function, a whole logic of tree building and board
            displaying
            had to be conceived.</Text>
        </span>
      </div>
    </div>

    <div>
      <Section time="2022">Unee</Section>
      <div class="flex">
        <Pill border-color="border-[#026E00]" color="bg-[#012600]">Node.js</Pill>
        <Pill border-color="border-[#3178C6]" color="bg-[#122C49]">Typescript</Pill>
        <Pill border-color="border-[#A9A9A9]" color="bg-[#373737]">Express</Pill>
      </div>
      <div class="flex">
        <span>
          <Text>Built a student portal for a fictive university. Students could login and look at their schedules, pick
            classes and see their teacher’s profile. Teachers could add or remove classes from their semesters, create
            assignments and give out quizzes. It was my first experience building a front-end from the ground up and
            taught
            me the
            workings of session controllers, specifically how to properly move data from the backend to the frontend.
          </Text>
        </span>
      </div>
    </div>

    <div>
      <Section time="2022">Dungeon Slayer</Section>
      <div class="flex">
        <Pill border-color="border-[#C74C00]" color="bg-[#3E1800]">Rust</Pill>
      </div>
      <div class="flex">
        <span>
          <Text>Built a student portal for a fictive university. Students could login and look at their schedules, pick
            classes and see their teacher’s profile. Teachers could add or remove classes from their semesters, create
            assignments and give out quizzes. It was my first experience building a front-end from the ground up and
            taught
            me the
            workings of session controllers, specifically how to properly move data from the backend to the frontend.
          </Text>
        </span>
      </div>
    </div>




  </div>
</template>