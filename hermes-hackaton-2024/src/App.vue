<template>
  <main>
    <NavigationBar />
    <RouterView />
    <ContactFooter />
  </main>
</template>

<script setup>
import NavigationBar from './components/NavigationBar.vue'
import ContactFooter from './components/ContactFooter.vue'
import useSponsors from './composables/useSponsors'
import { RouterView } from 'vue-router'

const { sponsors } = useSponsors()
console.log(sponsors)
</script>

<style scoped></style>
