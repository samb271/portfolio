<script setup lang="ts">
import Title from '../Title.vue';
import Section from '../Section.vue';
import Pill from '../Pill.vue'
import Text from '../Text.vue';
</script>

<template>
  <Title id="work" class="mt-8">Work</Title>

  <Section time="2020 - 2023">Powerhealth Solutions</Section>

  <div class="flex xl:flex-row gap-16 flex-col pb-8">
    <div class="grow pr-8">

      <div class="flex">
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
    <div class="grow max-w-6xl h-fit my-auto">
      <img src="../../assets/png/ssel_group.png" alt="" class="object-scale-down">
    </div>

  </div>

  <Section time="2019">Cycle Néron</Section>
  <div class="flex">
    <Pill border-color="border-[#00C7FF]" color="bg-[#003443]">Photoshop</Pill>
  </div>
  <div class="flex">
    <span>
      <Text title="Sales representative">Created content for all social media platforms tied to the company.
        Sales agent specialized in the management of new inventory.</Text>
    </span>
  </div>
</template>