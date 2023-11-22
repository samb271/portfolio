<script setup lang="ts">
import Title from '../Title.vue';
import Section from '../Section.vue';
import Pill from '../Pill.vue'
import Text from '../Text.vue';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useWorkVisibilityStore } from '@/stores/workVisibility';

const workVisibilityStore = useWorkVisibilityStore();
const target = ref(null)
const targetIsVisible = useElementVisibility(target)

watch(targetIsVisible, () => {
  workVisibilityStore.toggle()
}) 

</script>

<template>
  <div ref="target">
    <Title id="work" class="mt-8 mb-20">Work</Title>

    <Section time="2020 - 2023">Powerhealth Solutions</Section>

    <div class="flex xl:flex-row gap-16 flex-col">
      <div class="grow">

        <div class="flex lg:gap-6 gap-3">
          <Pill border-color="border-[#42B883]" color="bg-[#143929]">Vue 3</Pill>
          <Pill border-color="border-[#ED8A80]" color="bg-[#502E2B]">Feathers</Pill>
          <Pill border-color="border-[#3178C6]" color="bg-[#122C49]">Typescript</Pill>
          <Pill border-color="border-[#E1CB00]" color="bg-[#453E00]">MSSQL</Pill>
        </div>

        <Text title="Full stack developper" year="2022">Designed, developed and documented a file submission application
          allowing medical
          establishments to submit financial and clinical
          data
          online. Respects the government of Québec’s CRIM safety standards and implements a user hierarchy for the
          management of restricted collaborator groups. Uses Azure for file upload.</Text>
        <Text title="QA" year="2021">Implemented automatized testing for a web app using Cypress.
          Developed SQL scripts and queries for data extraction, analysis and validation.</Text>
        <Text title="Documentation" year="2020">Oversaw and produced the documentation of all new PHS products under the
          specifications and standards of the
          Ministry of Health.</Text>
      </div>
      <div class="grow max-w-7xl -mx-6 my-auto">
        <Carousel>
          <Slide key="1">
            <img src="../../assets/ssel/ssel_dashboard.png" alt="" class="object-scale-down">
          </Slide>
          <Slide key="2">
            <img src="../../assets/ssel/ssel_establishment_detail.png" alt="" class="object-scale-down">
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>


      </div>

    </div>
  </div>


  <!-- <Section time="2019">Cycle Néron</Section>
  <div class="flex">
    <Pill border-color="border-[#00C7FF]" color="bg-[#003443]">Photoshop</Pill>
  </div>
  <div class="flex">
    <span>
      <Text title="Sales representative">Created content for all social media platforms tied to the company.
        Sales agent specialized in the management of new inventory.</Text>
    </span>
  </div> -->
</template>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 20px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>