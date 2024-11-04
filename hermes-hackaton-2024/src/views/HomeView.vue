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
  <section id="#sponsors">
      <SponsorList :sponsors="powered_by"></SponsorList>
      <SponsorList :sponsors="gold.concat(silver).concat(powered_by)"></SponsorList>
      <SponsorList :sponsors="silver"></SponsorList>
      <SponsorList :sponsors="bronze"></SponsorList>
      <SponsorList :sponsors="normal"></SponsorList>
    </section>

</template>

<script setup>
import HackathonTitle from '../components/HackathonTitle.vue';
import SponsorList from '../components/SponsorList.vue';
import useSponsors  from '@/composables/useSponsors';

const { powered_by, gold, silver, bronze, normal } = useSponsors();

</script>

<style scoped>
.custom-background {
  background-image: url('/imgs/background.jpg');
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
