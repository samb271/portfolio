<script setup lang="ts">
import Section from '../Section.vue';
import Pill from '../Pill.vue';
import Text from '../Text.vue';
import { ref } from 'vue';

const isAgePredictionVisible = ref(true);

</script>

<template>
  <div class="flex">

    <div class="flex flex-col gap-8 w-full">
      <div class="flex flex-col xl:flex-row justify-between gap-16">
        <div>
          <Section time="2024 - Current"><a href="https://www.clubcapra.com">Club Capra</a></Section>

          <Text title="Head of AI team">
            Currently building Shepherd, a computer vision pipeline and world modeling system that enables our robot to understand and reason about its environment. 
            The system integrates state-of-the-art models, including CLIP, FastSAM, YOLOWorld, BLIP, and LLama. 
            Future capabilities will include RL-based self-navigation, with plans to compete in the 2025 European Robotics Hackathon (Enrich) in Austria.<br><br>
            Designed and implemented a pose detection algorithm to enable visual command interpretation. Built on a fine-tuned YOLOv8 with a custom classification head, 
            the algorithm achieved 99% accuracy and competed in the 2024 European Land Robot Trial in Germany. This marked the club’s 
            first in-house implementation of artificial intelligence.
          </Text>
        </div>
      </div>
    </div>
  </div>
</template>