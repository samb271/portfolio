<script setup lang="ts">
import { TabGroup, TabList, Tab } from '@headlessui/vue'

</script>

<template>
  <TabGroup class="z-0">
    <TabList class="flex flex-col gap-3 rounded-lg bg-[#273141] pl-5 pr-8 py-5 min-w-36 h-min sticky">
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
</template>