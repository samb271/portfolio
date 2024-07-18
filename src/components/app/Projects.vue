<script setup lang="ts">
import Title from '../Title.vue';
import Section from '../Section.vue';
import Pill from '../Pill.vue';
import Text from '../Text.vue';
import { TabGroup, TabList, Tab } from '@headlessui/vue';
import { ref, watch, onMounted } from 'vue';
import aiProjects from '../projectSections/AiProjects.vue';
import Capra from '../projectSections/Capra.vue'
import webProjects from '../projectSections/WebProjects.vue';
import { useElementVisibility } from '@vueuse/core';
import { useProjectsVisibilityStore } from '@/stores/projectsVisibility';

const projectsVisibilityStore = useProjectsVisibilityStore();
const target = ref<HTMLElement | null>(null);
const tabGroup = ref<HTMLElement | null>(null);
const headerHeight = ref(0);
const sectionTop = ref(0);
const sectionHeight = ref(0);

const targetIsVisible = useElementVisibility(target);

watch(targetIsVisible, () => {
  projectsVisibilityStore.toggle();
});

const selectedTab = ref('AI');

function setSelectedTab(tab: string) {
  selectedTab.value = tab;
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
  <div class="flex flex-col lg:flex-row gap-8 justify-between mt-40">
    <Title id="projects">Projects</Title>
  </div>

  <div class="flex flex-col md:flex-row mt-20 gap-12" ref="target">
    <TabGroup class="z-0">
      <TabList ref="tabGroup" class="flex flex-col gap-3 rounded-lg bg-[#273141] pl-5 pr-8 py-5 h-min min-w-36 md:sticky">
        <Tab class="focus:outline-none focus:ring-0 text-left" v-slot="{ selected }">
          <button @click="setSelectedTab('AI')" :class="[selected ? 'text-text-primary' : 'text-[#D0D0D0]']">
            AI
          </button>
        </Tab>
        <Tab class="focus:outline-none focus:ring-0 text-left" v-slot="{ selected }">
          <button @click="setSelectedTab('Web')" :class="[selected ? 'text-text-primary' : 'text-[#D0D0D0]']">
            Web
          </button>
        </Tab>
        <Tab class="focus:outline-none focus:ring-0 text-left" v-slot="{ selected }">
          <button @click="setSelectedTab('Other')" :class="[selected ? 'text-text-primary' : 'text-[#D0D0D0]']">
            Other
          </button>
        </Tab>
      </TabList>
    </TabGroup>
    <div class="grow">
      <div class="flex flex-col">
        <div v-if="selectedTab === 'AI'">
          <aiProjects />
        </div>
        <div v-if="selectedTab === 'Web'">
          <webProjects />
        </div>
        <div v-if="selectedTab === 'Other'">
          <Section time="2022">Gobekli</Section>
          <div class="flex">
            <Pill border-color="border-[#C74C00]" color="bg-[#3E1800]">Rust</Pill>
          </div>
          <div class="flex">
            <span>
              <Text>
                Introduced myself to rust by building a simple 2D game engine where the player is tasked with
                exploring the rooms of Gobekli Tepe.
              </Text>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.sticky {
  position: -webkit-sticky;
  /* Safari */
  position: sticky;
  top: 87px;
  /* Adjust as needed */
}
</style>