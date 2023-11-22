<script setup lang="ts">
import Title from '../Title.vue';
import Section from '../Section.vue';
import Pill from '../Pill.vue';
import Text from '../Text.vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel, MenuButton } from '@headlessui/vue'
import { ref, watch } from 'vue';
import aiProjects from '../Projects/aiProjects.vue';
import { useElementVisibility } from '@vueuse/core'
import { useProjectsVisibilityStore } from '@/stores/projectsVisibility';
import webProjects from '../Projects/webProjects.vue';

const projectsVisibilityStore = useProjectsVisibilityStore();
const target = ref(null)
const targetIsVisible = useElementVisibility(target)

watch(targetIsVisible, () => {
  projectsVisibilityStore.toggle()
}) 

const selectedTab = ref("AI");

function setSelectedTab(tab: string) {
  selectedTab.value = tab
}
</script>

<template>
  <div class="flex justify-between mt-40">

    <Title id="projects">Projects</Title>

    <div class="my-auto">
      <TabGroup>
        <TabList class="flex gap-3 rounded-full bg-[#273141] px-3 py-2">
          <Tab class="focus:outline-none focus:ring-0" v-slot="{ selected }">
            <button @click="setSelectedTab('AI')"
              :class="['w-24 p-2 rounded-full font-xl', selected ? 'bg-[#E5E5E5] text-[#273141] shadow' : 'text-[#D0D0D0] hover:bg-white/[0.12] hover:text-white']">
              AI
            </button>
          </Tab>
          <Tab class="focus:outline-none focus:ring-0" v-slot="{ selected }">
            <button @click="setSelectedTab('Web')"
              :class="['w-24 p-2 rounded-full font-xl', selected ? 'bg-[#E5E5E5] text-[#273141] shadow' : 'text-[#D0D0D0] hover:bg-white/[0.12] hover:text-white']">
              Web
            </button>
          </Tab>
          <Tab class="focus:outline-none focus:ring-0" v-slot="{ selected }">
            <button @click="setSelectedTab('Other')"
              :class="['w-24 p-2 rounded-full font-xl', selected ? 'bg-[#E5E5E5] text-[#273141] shadow' : 'text-[#D0D0D0] hover:bg-white/[0.12] hover:text-white']">
              Other
            </button>
          </Tab>
        </TabList>
      </TabGroup>
    </div>

  </div>

  <div ref="target" class="flex flex-col">

    <div v-if="selectedTab === 'AI'">
      <aiProjects/>
    </div>

    <div v-if="selectedTab === 'Web'">
      <webProjects/>
    </div>

    <div v-if="selectedTab === 'Other'">
      <Section class="mt-20" time="2022">Gobekli</Section>
      <div class="flex">
        <Pill border-color="border-[#C74C00]" color="bg-[#3E1800]">Rust</Pill>
      </div>
      <div class="flex">
        <span>
          <Text>Introduced myself to rust by building a simple 2D game engine where the player is tasked with exploring the rooms of Gobekli Tepe.
          </Text>
        </span>
      </div>
    </div>
  </div>
</template>