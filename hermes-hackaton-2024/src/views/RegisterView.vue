<template>
  <HackathonTitle />
  <div class="custom-background">
  </div>
</template>

<script setup>
import HackathonTitle from '../components/HackathonTitle.vue';

</script>

<style scoped>

.custom-background {
  background-image: url('/imgs/background_green.jpg');
  background-size: 100% auto; /* Ensures width fits */
  background-repeat: repeat-y; /* Repeat vertically */
  background-position: center top; /* Align at the top */
  flex-grow: 1; /* Allow it to grow and fill space */
  display: flex; /* Enable flexbox for the background */
  flex-direction: column; /* Stack children vertically */
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
}

</style>