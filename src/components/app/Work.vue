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
const tabGroup = ref<HTMLElement | null>(null);
const headerHeight = ref(0);
const sectionTop = ref(0);
const sectionHeight = ref(0);

watch(targetIsVisible, () => {
  workVisibilityStore.toggle()
})

const selectedTab = ref("Zebra");

function setSelectedTab(tab: string) {
  selectedTab.value = tab
}

onMounted(() => {
  const header = document.getElementById('header'); // Adjust the selector to your actual header
  if (header) {
    headerHeight.value = header.clientHeight;
  }

  if (target.value) {
    const rect = target.value.getBoundingClientRect();
    sectionTop.value = rect.top + window.scrollY;
    sectionHeight.value = rect.height;
  }

  window.addEventListener('scroll', handleScroll);
});

function handleScroll() {
  const scrollTop = window.scrollY;
  const offsetTop = sectionTop.value;
  const offsetBottom = offsetTop + sectionHeight.value;

  if (tabGroup.value) {
    if (scrollTop >= offsetTop - headerHeight.value && scrollTop < offsetBottom - tabGroup.value.clientHeight) {
      tabGroup.value.style.position = 'fixed';
      tabGroup.value.style.top = `${headerHeight.value}px`;
    } else {
      tabGroup.value.style.position = 'absolute';
      tabGroup.value.style.top = scrollTop >= offsetBottom - tabGroup.value.clientHeight
        ? `${offsetBottom - sectionTop.value - tabGroup.value.clientHeight}px`
        : '0px';
    }
  }
}
</script>

<template>
  <div>
    <Title id="work" class="mt-8 mb-20">Work</Title>

    <div class="flex flex-col md:flex-row gap-12" ref="target">
      
      <TabGroup class="z-0">
        <TabList class="flex flex-col gap-3 rounded-lg bg-[#273141] pl-5 pr-8 py-5 min-w-36 h-min md:sticky">
          <Tab class="focus:outline-none focus:ring-0 text-left" v-slot="{ selected }">
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
        <Section time="2020 - 2024">PowerHealth CA</Section>

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
              <br><br>Supervisors can overview the status and history of all submitted files. Implements a user hierarchy for
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
        <Section time="2024 - Current">Zebra</Section>

        <div class="flex xl:flex-row flex-col">
          <div>
            <PillContainer>
              <Pill border-color="border-[#42B883]" color="bg-[#143929]">Pytorch</Pill>
              <Pill border-color="border-[#ED8A80]" color="bg-[#502E2B]">Tensorflow</Pill>
              <Pill border-color="border-[#3178C6]" color="bg-[#122C49]">Linux</Pill>
            </PillContainer>

            <Text title="Machine Learning Research Intern" year="2024">Researched the domain gap between real and
              synthetic
              data for efficient training of machine learning algorithms.<br><br>
              Through extensive litterature reviews, proposed multiple generative models such as StyleGAN3,
              LayoutDiffusion,
              ControlNet and Dall-E 2 for the fine-tuning of various object detectors. All of the explored architectures
              were
              first re-trained on all layers and then fine-tuned using LoRA<br><br>
              Designed and implemented an image captioning pipeline using BLIP and Llama2 for the fine-tuning of CLIP
              (used
              for Dall-E 2).<br><br>
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

.sticky {
  position: -webkit-sticky;
  /* Safari */
  position: sticky;
  top: 87px;
  /* Adjust as needed */
}
</style>