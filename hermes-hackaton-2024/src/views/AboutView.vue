<template>
  <HackathonTitle />
  <HackathonTimeline />
  <div class="guests-container">
    <h2 class="about-section-header">Guests</h2>
  </div>
</template>

<script setup>
import HackathonTitle from '../components/HackathonTitle.vue'
import HackathonTimeline from '../components/HackathonTimeline.vue'

</script>

<style scoped>
.guests-container {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
