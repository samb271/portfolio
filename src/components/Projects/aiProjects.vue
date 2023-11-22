<script setup lang="ts">
import Title from '../Title.vue';
import Section from '../Section.vue';
import Pill from '../Pill.vue';
import Text from '../Text.vue';
import { ref } from 'vue';

const isAgePredictionVisible = ref(true);
const isEmotionPredictionVisible = ref(true);
const isPyCluesVisible = ref(true);
const isShapeRecognitionVisible = ref(false);
const isLinesOfActionVisible = ref(false);

</script>

<template>
  <div class="flex">

    <div class="flex flex-col gap-8 mt-20 w-full">
      <div class="flex flex-col xl:flex-row justify-between gap-16 border-b-2 border-[#D0D0D030] pb-8">
        <div>
          <Section time="2023">
            <button @click="isAgePredictionVisible = !isAgePredictionVisible">
              Age prediction
            </button>
          </Section>
          <div v-if="isAgePredictionVisible">
            <div class="flex lg:gap-6 gap-3">
              <Pill border-color="border-[#ffd343]" color="bg-[#44370D]">Python</Pill>
              <Pill border-color="border-[#D00002]" color="bg-[#470001]">Keras</Pill>
            </div>
            <div class="flex">
              <span>
                <Text>Implemented a CNN for an age prediction task using the FG-NET dataset. The continuous labels were
                  first categorized into age groups. After having pre-processed the raw images by
                  normalize brightness and adding contrast to exagerate the skin features, the resulting images were
                  augmented and fed into a CNN.
                </Text>
              </span>
            </div>
          </div>
        </div>
        <div v-if="isAgePredictionVisible" class="grow max-h-fit flex flex-col items-center">
          <img class="max-w-xs" src="../../assets/ai/agePrediction.png" alt="">
          <div class="mt-3 text-text-secondary">
            Age prediction
          </div>
        </div>
      </div>

      <div class="flex flex-col xl:flex-row justify-between gap-16 border-b-2 border-[#D0D0D030] pb-8">
        <div>
          <Section time="2023">
            <button @click="isEmotionPredictionVisible = !isEmotionPredictionVisible">
              Emotion prediction
            </button>
          </Section>
          <div v-if="isEmotionPredictionVisible">
            <div class="flex lg:gap-6 gap-3">
              <Pill border-color="border-[#ffd343]" color="bg-[#44370D]">Python</Pill>
            </div>
            <div class="flex">
              <span>
                <Text>Implemented a multilayer perceptron for an emotion prediction task using the FER dataset. After
                  having
                  pre-processed the raw images, the features were
                  extracted using Gabor filters. LDA was then used for dimensionality reduction. The final features were
                  fed
                  to the neural network.
                  Because of computing power limitations, only 2 Gabor filters could be applied to the training dataset
                  within reasonable execution times.
                  This led to 50% accuracy on the test dataset.</Text>
              </span>
            </div>
          </div>
        </div>
        <div v-if="isEmotionPredictionVisible" class="grow max-h-fit flex flex-col items-center my-auto">
          <img class="max-w-lg" src="../../assets/ai/emotionPrediction.png" alt="">
          <div class="mt-3 text-text-secondary">
            Emotion prediction
          </div>
        </div>
      </div>

      <div class="flex border-b-2 border-[#D0D0D030] pb-8">
        <div>
          <Section time="2023">
            <button @click="isPyCluesVisible = !isPyCluesVisible">
              pyClue
            </button>
          </Section>
          <div v-if="isPyCluesVisible">
            <div class="flex lg:gap-6 gap-3">
              <Pill border-color="border-[#ffd343]" color="bg-[#44370D]">Python</Pill>
            </div>
            <div class="flex">
              <span>
                <Text>Implemented a detective game using a basic linguistic inference model. The computer
                  acted as an agent that was initialized with a few starter facts and was tasked with searching a house
                  for
                  clues on a murder
                  case. As the agent made through the different rooms, they could ask the player questions such as
                  "Where was X suspect an hour before the murder?" via the CLI. After having accumulated enough clues, the
                  agent
                  was able to make a deduction and solve the case.</Text>
              </span>
            </div>
          </div>
        </div>
      </div>


      <div class="flex flex-col xl:flex-row justify-between gap-16 border-b-2 border-[#D0D0D030] pb-8">
        <div>
          <Section time="2023">
            <button @click="isShapeRecognitionVisible = !isShapeRecognitionVisible">
              Shape recognition
            </button>
          </Section>
          <div v-if="isShapeRecognitionVisible">
            <div class="flex lg:gap-6 gap-3">
              <Pill border-color="border-[#ffd343]" color="bg-[#44370D]">Python</Pill>
            </div>
            <div class="flex">
              <span>
                <Text>This project was my introduction to machine learning. I used the OpenCV library to extract the zones
                  of
                  interest and fed them in a mutlilayer perceptron, a KNN and an support vector machine, all of which were
                  implemented from scratch. For means of comparison, I also fed the raw images directly into a pyTorch
                  CNN.
                  This
                  acheived an accuracy varying between 90% and 95% depending on the model.
                </Text>
              </span>
            </div>
          </div>
        </div>
        <div v-if="isShapeRecognitionVisible" class="grow max-h-fit flex flex-col items-center my-auto">
          <img class="max-w-sm" src="../../assets/ai/shapeRecognitionOutline.png" alt="">
          <div class="mt-3 text-text-secondary">
            Shape recognition
          </div>
        </div>
      </div>

      <div>
        <Section time="2022">
          <button @click="isLinesOfActionVisible = !isLinesOfActionVisible">
            Lines of Action
          </button>
        </Section>
        <div v-if="isLinesOfActionVisible">
          <div class="flex lg:gap-6 gap-3">
            <Pill border-color="border-[#ED8B00]" color="bg-[#502F00]">Java</Pill>
          </div>
          <div class="flex">
            <span>
              <Text>Programmed a computer player for the Lines Of Action game utilizing the Minimax algorithm with
                Alpha-beta
                pruning. I learned the importance of memory management and optimization as we were asked to perform a move
                in
                under five seconds. Alongside the move evaluation function, a whole logic of tree building and board
                displaying
                had to be conceived.</Text>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>