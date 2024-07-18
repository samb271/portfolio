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

    <div class="flex flex-col gap-8 w-full">
      <div class="flex flex-col xl:flex-row justify-between gap-16">
        <div>
          <Section time="2024">
            <button @click="isAgePredictionVisible = !isAgePredictionVisible">
              Pose prediction
            </button>
          </Section>
          <div v-if="isAgePredictionVisible">
            <div class="flex lg:gap-6 gap-3">
              <Pill border-color="border-[#D00002]" color="bg-[#470001]">Keras</Pill>
              <Pill border-color="border-[#517ac6]" color="bg-[#162135]">ROS</Pill>
            </div>
            <div class="flex">
              <span>
                <Text>
                  Implemented a deep learning based pose detection algorithm to enable visual command interpretation for Club Capra's autonomous robot.
                  <br><br>The underlying model is designed around a fine-tuned YOLOv8 as the feature extractor with a custom classification head. 
                  <br><br>The robot acheived 98% accuracy and competed in the 2024 edition of European Land Robot Trial in Germany.
                </Text>
              </span>
            </div>
          </div>
        </div>
        <div v-if="isAgePredictionVisible" class="grow max-h-fit flex flex-col items-center my-auto">
          <img class="max-w-lg" src="../../assets/gif/pose_detection.gif" alt="">
          <div class="mt-3 text-text-secondary lg:text-base text-xs">
            Pose detection
          </div>
        </div>
      </div>
    </div>
  </div>
</template>