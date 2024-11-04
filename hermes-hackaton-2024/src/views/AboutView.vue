<template>
  <HackathonTitle />
  <div class="timeline-container">
    <h2 class="about-section-header">Timeline (16-17 November)</h2>
    <div class="timeline">
      <div v-for="day in timeline" :key="day.day">
        <div class="day">{{ day.day }}</div>
        <div
          class="timeline-item"
          v-for="(event, index) in day.timeline"
          :key="index"
          :class="{
            current: isCurrentActivity(
              day.date,
              event,
              day.timeline[index + 1],
            ),
          }"
        >
          <div class="time">{{ event.time }}</div>
          <div class="activity">{{ event.description }}</div>
        </div>
      </div>
    </div>
    <div class="guests-container">
      <h2 class="about-section-header">Guests</h2>
    </div>
  </div>
</template>

<script setup>
import { getBackground } from '@/composables/useBackground'
import HackathonTitle from '../components/HackathonTitle.vue'
import { ref } from 'vue'
import useTimeline from '@/composables/useTimeline'

const backgroundImage = getBackground()

const { timelineArr } = useTimeline()
const timeline = ref(timelineArr)

const isCurrentActivity = (date, event, nextEvent) => {
  const now = new Date()
  const eventStart = new Date(`${date}T${event.time}`)
  const eventEnd = nextEvent
    ? new Date(`${date}T${nextEvent.time}`)
    : new Date(eventStart.getTime() + 60 * 60000)
  return now >= eventStart && now < eventEnd
}
</script>

<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: v-bind('backgroundImage');
  background-size: 100% 100%;
  background-repeat: repeat-y;
  color: white;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.about-section-header {
  font-size: 1.5em;
  color: var(--light-blue);
  text-align: left;
}

.timeline {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10rem;
  row-gap: 1.5rem;
  color: var(--light-blue);
  max-width: 800px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 3px 3px 3px 10px rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
}

.day {
  text-align: center;
  font-size: 2rem;
  background: linear-gradient(to bottom, #6822e5 0%, #62a1f0 60%, #cf29c7 100%);
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 1rem;
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 8px;
  align-items: center;
  box-sizing: border-box;
}

.timeline-item.current .activity {
  color: green;
}

.time {
  font-weight: bold;
  white-space: nowrap;
}

.activity {
  color: var(--magenta);
  word-break: break-word;
}

.guests-container {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 930px) {
  .timeline {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
  .timeline-item {
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
  }
}

@media only screen and (max-width: 650px) {
  .timeline {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
  .timeline-item {
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
  }
}
</style>
