<template>
  <HackathonTitle />
  <div>
    <h2>Timeline</h2>
    <div class="timeline">
      <div
        class="timeline-item"
        v-for="(event, index) in timeline"
        :key="index"
      >
        <div class="date">{{ event.date }}</div>
        <div class="time">{{ event.time }}</div>
        <div class="activity">{{ event.description }}</div>
      </div>
    </div>
    <h2>Guests</h2>
    <GuestArcade />
  </div>
</template>

<script setup>
import GuestArcade from '../components/GuestArcade.vue'
import HackathonTitle from '../components/HackathonTitle.vue'
</script>

<script>
export default {
  data() {
    return {
      eventTitle1: 'Arcade Guardians:',
      eventTitle2: 'Retro Games Meet Cybersecurity',
      eventMotto: 'Hacking the past to secure the future',
      timeline: [
        { date: 'Day 1', time: '09:00', description: 'Welcome' },
        { date: '', time: '10:00', description: 'Presentation' },
        { date: '', time: '11:30', description: 'Brainstorming' },
        { date: '', time: '12:00', description: 'CODING' },
        { date: '', time: '14:00', description: 'Lunch' },
        { date: '', time: '16:00', description: 'Mentoring' },
        { date: '', time: '19:00', description: 'Private Mentoring' },
        { date: '', time: '21:00', description: 'Dinner' },
        { date: '', time: '00:00', description: 'Activities' },
        { date: 'Day 2', time: '08:00', description: 'Energizer' },
        { date: '', time: '09:00', description: 'Breakfast' },
        { date: '', time: '11:00', description: 'Mentoring' },
        { date: '', time: '14:00', description: 'STOP CODE' },
        { date: '', time: '14:00', description: 'Lunch Break' },
        { date: '', time: '15:00', description: 'Demo' },
        { date: '', time: '15:30', description: 'Presentations' },
        { date: '', time: '17:30', description: 'Awards' },
      ],
      guests: [
        { name: 'giuco', role: 'juriu' },
        { name: 'bradu', role: 'mentor' },
        { name: 'teo', role: 'mama la copii' },
      ],
    }
  },
}
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #000;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: white;
  text-align: center;
}

.motto {
  font-size: 1.5rem;
  font-style: italic;
  color: #62a1f0;
  margin-bottom: 1rem;
  text-align: right;
}

h2 {
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  margin-left: 1rem;
  font-size: 1.5em;
  color: #62a1f0;
  text-align: left;
}

.centered-text-register {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: white;
  text-align: center;
}

.gradient-text-purple {
  background: linear-gradient(to bottom, #6c86e7 0%, #cf29c7 20%, #62a1ef 100%);
  background-clip: text;
  color: transparent;
}

.subtext {
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 1rem;
  text-align: center;
}

.timeline {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  column-gap: 10rem;
  row-gap: 1.5rem;
  color: #62a1f0;
  max-width: 800px;
  width: 100%;
}

.timeline-item {
  display: contents;
}

.date {
  font-weight: bold;
  text-align: center;
}

.time {
  font-weight: bold;
  text-align: center;
}
</style>
