<template>
  <main>
    <Navbar />
  </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import useSponsors from './composables/useSponsors'

const { sponsors } = useSponsors()
console.log(sponsors)
</script>

<style scoped></style>
