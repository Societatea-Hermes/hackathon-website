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
import useGuests from './composables/useGuests'
import { RouterView } from 'vue-router'

const { sponsors } = useSponsors()
const { guests } = useGuests()
console.log(sponsors, guests)
</script>

<style scoped></style>
