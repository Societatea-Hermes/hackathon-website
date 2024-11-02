<template>
  <main class="">
    <Navbar />
    <RouterView />
    <div class="container">
      <img
        @mouseover="makeGlitch"
        class="glitch"
        src="./assets/imgs/cet.jpg"
        alt="Graphic"
      />
    </div>
  </main>
</template>

<script setup>
import { PowerGlitch } from 'powerglitch'
import Navbar from './components/Navbar.vue'
import useSponsors from './composables/useSponsors'
import { RouterView } from 'vue-router'

const { sponsors } = useSponsors()
console.log(sponsors)

const makeGlitch = () => {
  PowerGlitch.glitch('.glitch')
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem;
}
</style>
