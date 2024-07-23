<script setup lang="ts">
import Title from '../Title.vue';
import Section from '../Section.vue';
import Pill from '../Pill.vue'
import Text from '../Text.vue';
import PillContainer from '../PillContainer.vue';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'
import { ref, watch, onMounted } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useWorkVisibilityStore } from '@/stores/workVisibility';
import { TabGroup, TabList, Tab } from '@headlessui/vue'

const workVisibilityStore = useWorkVisibilityStore();
const target = ref<HTMLElement | null>(null);
const targetIsVisible = useElementVisibility(target)

watch(targetIsVisible, () => {
  workVisibilityStore.toggle()
})

const selectedTab = ref("Zebra");

function setSelectedTab(tab: string) {
  selectedTab.value = tab
}

</script>

<template>
  <div>
    <Title id="work" class="mt-8 mb-12 md:mb-20">Work</Title>

    <div class="flex flex-col md:flex-row gap-8 md:gap-12" ref="target">

      <TabGroup class="z-10">
        <TabList class="menu flex md:flex-col md:gap-3 gap-5 rounded-lg bg-[#273141F2] pl-5 pr-8 py-3 sm:py-5 min-w-36 h-min sticky top-[65px] sm:top-[75px] md:top-[87px]">
          <Tab class="focus:outline-none max-md:border-r border-[#D0D0D0] max-md:pr-5 focus:ring-0 text-left" v-slot="{ selected }">
            <button @click="setSelectedTab('Zebra')" :class="[selected ? 'text-text-primary' : 'text-[#D0D0D0]']">
              Zebra
            </button>
          </Tab>
          <Tab class="focus:outline-none focus:ring-0 text-left" v-slot="{ selected }">
            <button @click="setSelectedTab('PHS')" :class="[selected ? 'text-text-primary' : 'text-[#D0D0D0]']">
              Powerhealth
            </button>
          </Tab>
        </TabList>
      </TabGroup>

      <div v-if="selectedTab === 'PHS'">
        <Section time="2020 - 2024"><a href="https://www.powerhealthsolutions.com">PowerHealth CA</a></Section>

        <div class="flex xl:flex-row gap-16 flex-col">
          <div class="grow">

            <PillContainer>
              <Pill border-color="border-[#42B883]" color="bg-[#143929]">Vue 3</Pill>
              <Pill border-color="border-[#ED8A80]" color="bg-[#502E2B]">Feathers</Pill>
              <Pill border-color="border-[#3178C6]" color="bg-[#122C49]">Typescript</Pill>
              <Pill border-color="border-[#E1CB00]" color="bg-[#453E00]">MSSQL</Pill>
            </PillContainer>

            <Text title="Full stack developper" year="2022">Designed, developed and documented a file submission
              application
              allowing members of government medical establishments to submit financial and clinical data online.
              <br><br>Supervisors can overview the status and history of all submitted files. Implements a user
              hierarchy for
              the
              management of restricted collaborator groups specific to each establishment and department. Added a
              crucial layer of transparency to a system that was otherwise invisible to the client.</Text>
            <Text title="QA" year="2021">Implemented automatized testing for a web app using Cypress.
              Developed SQL scripts and queries for data extraction, analysis and validation.</Text>
            <Text title="Documentation" year="2020">Oversaw and produced the documentation of all new PHS products under
              the
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

      <div class="grow" v-if="selectedTab === 'Zebra'">
        <Section time="2024 - Current"><a href="https://www.zebra.com">Zebra</a></Section>

        <div class="flex xl:flex-row flex-col">
          <div>
            <PillContainer>
              <Pill border-color="border-[#42B883]" color="bg-[#143929]">Pytorch</Pill>
              <Pill border-color="border-[#ED8A80]" color="bg-[#502E2B]">Tensorflow</Pill>
              <Pill border-color="border-[#3178C6]" color="bg-[#122C49]">Linux</Pill>
            </PillContainer>

            <Text title="Machine Learning Research Intern" year="2024">
              Researched the domain gap between real and synthetic data for efficient training of machine learning
              algorithms.<br><br>

              Through extensive literature reviews, proposed multiple generative models, both diffusion based and
              adversarial,
              for the fine-tuning of various object detectors. All of the explored architectures were implemented and
              often
              modified for internal evaluation.<br><br>

              Designed and implemented an unsupervised image captioning pipeline for the fine-tuning of contrastive
              models.<br><br>

              Produced extensive reports of all results which were presented bi-monthly to the members of the Zebra RnD
              team.
            </Text>
          </div>
          <div class="max-xl:hidden grow flex justify-center my-auto">
            <img src="../../assets/zebra/zebra.png" alt="" class="object-scale-down max-h-48 xl:max-h-72">
          </div>
        </div>
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

.menu {
  backdrop-filter: blur(2px);
}

</style>