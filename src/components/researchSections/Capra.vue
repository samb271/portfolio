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

          <Text title="Machine Learning Developper">
            Spearheaded the pose prediction project, currently working on end-to-end parameterization with RL.
          </Text>
        </div>
      </div>
    </div>
  </div>
</template>