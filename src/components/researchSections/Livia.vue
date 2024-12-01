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
          <Section time="2024 - Current"><a href="https://www.etsmtl.ca/en/labs/livia">LIVIA</a></Section>

          <Text title="Undergraduate research student">
            <i>Supervised by Dr. Christian Desrosiers</i><br><br>
            Researching and developing novel test time training methods to improve the performance of vision models under domain shift.<br><br>
            Studying the effect of recurrence in vision models for improved efficiency.<br><br>
            Participating to the weekly progress report meetings, where I update the PhD students on my work and participate in the brainstorm sessions.
          </Text>
        </div>
      </div>
    </div>
  </div>
</template>