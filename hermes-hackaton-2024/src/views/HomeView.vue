<template>
  <HackathonTitle />
  <div class="custom-background">
    <div>
      <p class="description-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
  <section id="sponsors">
    <h2 id="sponsor_title">Our Sponsors</h2>
    <div id="sponsor_lists">
      <SponsorList shadow="var(--sponsor-shadow-powered_by)" :sponsors="powered_by"></SponsorList>
      <SponsorList shadow="var(--sponsor-shadow-gold)" :sponsors="gold"></SponsorList>
      <SponsorList shadow="var(--sponsor-shadow-silver)" :sponsors="silver"></SponsorList>
      <SponsorList shadow="var(--sponsor-shadow-bronze)" :sponsors="bronze"></SponsorList>
      <SponsorList :sponsors="normal.concat(gold, silver, bronze, powered_by, normal, gold, silver, bronze)"></SponsorList>
  </div>
  </section>

</template>

<script setup>
import HackathonTitle from '../components/HackathonTitle.vue';
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


.custom-background {
  background-image: v-bind('backgroundImage');
  background-size: 100% 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.description-text {
  font-size: 20px;
  color: #62a1f0;
  margin-top: 400px;
  margin-left: 20%;
  margin-right: 20%;
}

</style>
