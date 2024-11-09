<template>
  <HackathonTitle />
  <main>
      <HackathonDescription />
  </main>
  <section id="sponsors">
    <h2 id="sponsor_title">Our Sponsors</h2>
    <div id="sponsor_lists">
      <SponsorList shadow="var(--sponsor-shadow-powered_by)" :sponsors="powered_by"></SponsorList>
      <SponsorList shadow="var(--sponsor-shadow-gold)" :sponsors="gold"></SponsorList>
      <SponsorList shadow="var(--sponsor-shadow-silver)" :sponsors="silver"></SponsorList>
      <SponsorList shadow="var(--sponsor-shadow-bronze)" :sponsors="bronze"></SponsorList>
      <SponsorList :sponsors="normal"></SponsorList>
  </div>
  </section>

</template>

<script setup>
import HackathonTitle from '../components/HackathonTitle.vue';
import HackathonDescription from '@/components/HackathonDescription.vue';
import { getBackground } from '@/composables/useBackground';
import { getGradient } from '@/composables/useGradient';
import SponsorList from '../components/SponsorList.vue';
import useSponsors  from '@/composables/useSponsors';

const backgroundImage = getBackground();
const backgroundColor = getGradient();
const { powered_by, gold, silver, bronze, normal } = useSponsors();

</script>

<style scoped>
#sponsor_title {
  font-size: 2rem;
  background: v-bind('backgroundColor');
  background-clip: text;
  color: transparent;
  text-align: center;
  margin-block: 10px;
  width: 100%;
}

#sponsor_lists {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-inline: 5%;
  padding-block: 50px;
  background-image: v-bind('backgroundImage');
  background-size: 100% 100%;
}

main {
  background-image: v-bind('backgroundImage');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
}


</style>
