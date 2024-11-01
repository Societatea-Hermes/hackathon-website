<template>
  <main>
    <Navbar />
    <div class="container">
      <img src="./assets/imgs/cet.jpg" alt="Graphic" />
    </div>
  </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import useSponsors from './composables/useSponsors'

const { sponsors } = useSponsors()
console.log(sponsors)
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem;
}
</style>
