<template>
  <main>
    <NavigationBar />
    <RouterView />
  </main>
</template>

<script setup>
import NavigationBar from './components/NavigationBar.vue'
import useSponsors from './composables/useSponsors'
import { RouterView } from 'vue-router'

const { sponsors } = useSponsors()
console.log(sponsors)
</script>

<style scoped></style>
