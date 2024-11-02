<template>
  <div>
    <div>
      <p class="centered-text-register gradient-text-purple">
        ARCADE GUARDIANS:
      </p>
    </div>
    <div>
      <p class="centered-text-register gradient-text-purple">
        RETRO GAMES MEET CYBERSECURITY
      </p>
    </div>
    <p class="subtext gradient-text-purple">
      Hacking the past to secure the future
    </p>

    <h2>Timeline</h2>
    <div class="timeline">
      <div class="timeline-item" v-for="(event, index) in timeline" :key="index">
        <div class="date">{{ event.date }}</div>
        <div class="time">{{ event.time }}</div>
        <div class="activity">{{ event.description }}</div>
      </div>
    </div>

    <h2>Guests</h2>

  </div>
</template>

<script>
export default {
  data() {
    return {
      eventTitle1: "Arcade Guardians:",
      eventTitle2: "Retro Games Meet Cybersecurity",
      eventMotto: "Hacking the past to secure the future",
      timeline: [
        { date: "Day 1", time: "09:00 AM", description: "Deschidere" },
        { date: "", time: "10:30 AM", description: "mentorat" },
        { date: "", time: "01:00 PM", description: "prezentare" },
        { date: "", time: "03:00 PM", description: "papa whatever" },
        { date: "Day 2", time: "09:00 AM", description: "Activitate 1" },
        { date: "", time: "10:30 AM", description: "Activitate 2" },
        { date: "", time: "01:00 PM", description: "Activitate 3" },
        { date: "", time: "03:00 PM", description: "Activitate 4" },
        { date: "", time: "05:00 PM", description: "Activitate 5" },
      ],
      guests: [
        { name: "giuco", role: "juriu" },
        { name: "bradu", role: "mentor" },
        { name: "teo", role: "mama la copii" },
      ],
    };
  },
};
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
  color: #62A1F0;
  margin-bottom: 1rem;
  text-align: right;
}

h2 {
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  margin-left: 1rem;
  font-size: 1.5em;
  color: #62A1F0;
  text-align: left;
}

.centered-text-register {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: white;
  text-align: center;
}

.gradient-text-purple {
  background: linear-gradient(to bottom, #6C86E7 0%, #CF29C7 20%, #62A1EF 100%);
  -webkit-background-clip: text;
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
  color: #62A1F0;
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
