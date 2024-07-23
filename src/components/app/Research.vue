<script setup lang="ts">
import Title from '../Title.vue';
import Text from '../Text.vue';
import { TabGroup, TabList, Tab } from '@headlessui/vue';
import { ref, onMounted } from 'vue';
import Livia from '../researchSections/Livia.vue'
import Capra from '../researchSections/Capra.vue'
import { useElementVisibility } from '@vueuse/core'
import { useResearchVisibilityStore } from '@/stores/researchVisibility';
import { watch } from "vue"

const target = ref<HTMLElement | null>(null);
const tabGroup = ref<HTMLElement | null>(null);
const headerHeight = ref(0);
const sectionTop = ref(0);
const sectionHeight = ref(0);
const researchVisibilityStore = useResearchVisibilityStore();
const targetIsVisible = useElementVisibility(target)

watch(targetIsVisible, () => {
  researchVisibilityStore.toggle()
})

const selectedTab = ref('LIVIA');

function setSelectedTab(tab: string) {
  selectedTab.value = tab;
}
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-8 justify-between mt-40">
    <Title id="research">Research / Implications</Title>
  </div>

  <Text>
    I am fascinated by the brains ability to form a question and learn from the answer. I believe somewhere behind that curiosity lies the understanding of intellingence.
  </Text>

  <div class="flex flex-col md:flex-row mt-12 md:mt-20 gap-8 md:gap-12" ref="target">
    <TabGroup class="z-0">
      <TabList ref="tabGroup" class="menu flex md:flex-col md:gap-3 gap-5 rounded-lg bg-[#273141F2] pl-5 pr-8 py-3 sm:py-5 min-w-36 h-min sticky top-[65px] sm:top-[75px] md:top-[87px]">
        <Tab class="max-md:border-r max-md:pr-5 focus:outline-none focus:ring-0 text-left" v-slot="{ selected }">
          <button @click="setSelectedTab('LIVIA')" :class="[selected ? 'text-text-primary' : 'text-[#D0D0D0]']">
            LIVIA
          </button>
        </Tab>
        <Tab class="focus:outline-none focus:ring-0 text-left" v-slot="{ selected }">
          <button @click="setSelectedTab('Capra')" :class="[selected ? 'text-text-primary' : 'text-[#D0D0D0]']">
            Capra
          </button>
        </Tab>
      </TabList>
    </TabGroup>
    <div>
      <div class="flex flex-col">
        <div v-if="selectedTab === 'LIVIA'">
          <Livia/>
        </div>
        <div v-if="selectedTab === 'Capra'">
          <Capra/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.menu {
  backdrop-filter: blur(2px);
}
</style>