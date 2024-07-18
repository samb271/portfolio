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
    <Title id="research">Research / Implications</Title>
  </div>

  <Text>
    I am fascinated by the brains ability to form a question and learn from the answer. I believe somewhere behind that curiosity lies the understanding of intellingence.
  </Text>

  <div class="flex flex-col md:flex-row mt-20 gap-12" ref="target">
    <TabGroup class="z-0">
      <TabList ref="tabGroup" class="flex flex-col gap-3 rounded-lg bg-[#273141] pl-5 pr-8 py-5 h-min min-w-36 md:sticky">
        <Tab class="focus:outline-none focus:ring-0 text-left" v-slot="{ selected }">
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
.sticky {
  position: -webkit-sticky;
  /* Safari */
  position: sticky;
  top: 87px;
  /* Adjust as needed */
}
</style>