<script setup lang="ts">
import Title from './Title.vue';
import Section from './Section.vue';
import Pill from './Pill.vue'
import Text from './Text.vue';
</script>

<template>
  <div class="border">
    <Title>Work</Title>

    <!-- PHS -->

    <Section time="2020 - 2023">Powerhealth Solutions</Section>
    <div class="border border-white flex">
      <Pill border-color="border-[#42B883]" color="bg-[#143929]">Vue 3</Pill>
      <Pill border-color="border-[#ED8A80]" color="bg-[#55312D]">Feathers</Pill>
      <Pill border-color="border-[#3178C6]" color="bg-[#122C49]">Typescript</Pill>
      <Pill border-color="border-[#E1CB00]" color="bg-[#453E00]">MSSQL</Pill>
    </div>
    <div class="flex pb-8">
      <span>
        <Text title="Full stack developper" year="2022">Developed a file submission application allowing medical
          establishments to submit financial and clinical
          data
          online. Respects the government of Québec’s CRIM safety standards and implements a user hierarchy with different
          permissions.</Text>
        <Text title="QA" year="2021">Implemented automatized testing for a web app using Cypress, a Javascript framework.
          Developed SQL scripts and queries for data extraction, analysis and validation.</Text>
        <Text title="Documentation" year="2020">Oversaw and produced the documentation of all new PHS products under the
          specifications and standards of the
          Ministry of Health.</Text>
      </span>
    </div>

    <!-- NERON -->

    <Section time="2020 - 2023">Cycle Néron</Section>
    <div class="border border-white flex">
      <Pill border-color="border-[#00C7FF]" color="bg-[#003443]">Photoshop</Pill>
    </div>
    <div class="flex">
      <span>
        <Text title="Sales representative" year="2019">Created content for all social media platforms tied to the company.
          Sales agent specialized in the management of new inventory.</Text>
      </span>
    </div>
  </div>
</template>