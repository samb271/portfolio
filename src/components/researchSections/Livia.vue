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
            Supervised by Christian Desrosiers<br><br>
            Weekly presentations on my advancements at Zebra to the rest of the graduate students.<br><br>
            Studying domain shift, continual learning and bio-plausible learning.
          </Text>
        </div>
      </div>
    </div>
  </div>
</template>