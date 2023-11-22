<script setup lang="ts">
import Title from '../Title.vue';
import Section from '../Section.vue';
import Text from '../Text.vue';
import Pill from '../Pill.vue';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import { ref, watch } from 'vue';
import { useElementVisibility } from '@vueuse/core'
import { usePlayVisibilityStore } from '@/stores/playVisibility';

const playVisibilityStore = usePlayVisibilityStore();
const target = ref(null)
const targetIsVisible = useElementVisibility(target)

watch(targetIsVisible, () => {
  playVisibilityStore.toggle()
})

const releases = ref([
  { src: 'sumer', link: 'https://causalchain.bandcamp.com/track/gobekli-sumer', alt: 'sumer' },
  { src: 'scablands', link: 'https://cloudcore.bandcamp.com/album/scablands', alt: 'scablands' },
  { src: 'fcukRemix', link: 'https://causalchain.bandcamp.com/track/fcuk-gobekli-remix', alt: 'fcukRemix' },
  { src: 'clovis', link: 'https://gobekli.bandcamp.com/album/clovis', alt: 'clovis' },
  { src: 'likeRainbow', link: 'https://soundcloud.com/samb271/like-a-rainbow?si=2790a1457f1a48758b0c00438549aa08&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', alt: 'likeRainbow' },
  { src: 'dontStop', link: 'https://gobekli.bandcamp.com/album/dont-stop-stop-stop-stop-stop-stop-stop-stop-stop', alt: 'dontStop' },
  { src: 'leo', link: 'https://cloudcore.bandcamp.com/album/leo', alt: 'leo' }]);

const getImageUrl = (id: string) => {
  return new URL(`../../assets/music/${id}.jpg`, import.meta.url).href;
};

</script>


<template>
  <div ref="target" class="mt-40">
    <Title id="play">Play</Title>

    <Text>Time off the computer is just as important to me as time on the computer. Here are a few things I like to do to
      keep my mind fresh.
    </Text>

    <div class="flex flex-col gap-16 mt-16">
      <div>
        <Section time="2013 - Current">Music</Section>
        <div class="flex">
          <Pill border-color="border-[#7DFFFF]" color="bg-[#1F4242]">Ableton</Pill>
        </div>
        <div class="gap-16">
          <Text>Via various aliases, I've released music on record labels across the globe, grossing tens of thousand of streams. I've also organized and played in multiple concerts.</Text>

          <div class="-mx-16">
            <div class="mt-16 flex flex-row gap-8 gap-6 mx-auto">
              <Carousel :items-to-show="4" :transition="500" :autoplay="4000" :wrap-around="true"
                :pauseAutoplayOnHover="true">
                <Slide v-for="release, index in releases" :key="index">
                  <a :href="release.link">
                    <img :src="getImageUrl(release.src)" :alt="release.alt">
                  </a>
                </Slide>
                <template #addons>
                  <Navigation />
                  <Pagination />
                </template>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Section time="2011 - Current">Cyclig</Section>

        <div class="flex flex-col xl:flex-row gap-16 pb-8">
          <Text>I'm most likely more agile on two wheels than I am on two feet. I started riding mountain bikes at 14
            years
            old and it didn't take long for me to take an interest in racing. I participated in provincial cups until an
            injury led me to leave the competitive scene behind. It has since been my way of keeping my physical and
            mental
            health in check, in addition to nurturing my connection with nature.
          </Text>

          <div class="grow">
            <img src="../../assets/cycling/cycling.jpg" alt="cycling" class="max-w-3xl mx-auto w-full">
          </div>
        </div>
      </div>
    </div>




  </div>
</template>

