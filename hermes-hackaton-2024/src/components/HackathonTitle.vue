<template>
  <div id="title">
    <p class="title_text">ARCADE GUARDIANS:</p>
    <p class="title_text">RETRO GAMES MEET CYBERSECURITY</p>
    <div class="sponsor-info">
      <span class="sponsor-text">Sponsored by:</span>
      <a target="_blank" href="https://www.cloudflight.io/"
        ><img
          src="../assets/imgs/cloudflight_logo_blue.png"
          alt="Sponsor Logo"
          class="sponsor-logo"
      /></a>
    </div>
    <p class="motto">Hacking the past to secure the future</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const color_set = {
  '/about': ['#6c86e7', '#cf29c7', '#62a1ef'],
  '/register': ['#6822E5', '#62A1F0', '#31AF34'],
  '/': ['#6822E5', '#62A1F0', '#CF29C7'],
}
const image_set = {
  '/about': '/imgs/background_purple.jpg',
  '/register': '/imgs/background_green.jpg',
  '/': '/imgs/background.jpg',
}

const backgroundColor = `linear-gradient(to bottom, ${color_set[route.path][0]} 0%, ${color_set[route.path][1]} 40%, ${color_set[route.path][2]} 100%)`
const backgroundImage = `url(${image_set[route.path]})`
</script>

<style scoped>
#title {
  padding-top: 20px;
  padding-bottom: 10px;
  background-image: v-bind('backgroundImage');
  background-size: 100% 100%;
  background-repeat: repeat-y;
}
.title_text {
  text-align: center;
  font-size: 3rem;
  background: v-bind('backgroundColor');
  background-clip: text;
  color: transparent;
  margin: 0;
}

.motto {
  text-align: center;
  font-size: 1.2rem;
  background: v-bind('backgroundColor');
  background-clip: text;
  color: rgba(0, 0, 0, 0.3);
  margin-top: 100px;
}

.sponsor-info {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  margin-right: 10%;
}

.sponsor-text {
  font-size: 1.3rem;
  background: v-bind('backgroundColor');
  background-clip: text;
  color: transparent;
  margin-right: 10px;
}

.sponsor-logo {
  height: 30px;
  width: auto;
  vertical-align: middle;
}

@media only screen and (max-width: 650px) {
  .title_text {
    font-size: 2rem;
  }
  .motto {
    font-size: 0.8rem;
    margin-top: 50px;
  }
  .sponsor-text {
    font-size: 0.9rem;
  }
  .sponsor-logo {
    height: 20px;
  }
}
</style>
