<template>
<div v-if="!started" id="countdown">
    {{daysLeft}} days {{hoursLeft}} hours {{minutesLeft}} minutes {{secondsLeft}} seconds
    <br>
    until event starts
</div>
<div v-else id="countdown">
  Event has started
</div>
<p id="main-description">
hermes Hackathon is a 24-hour coding marathon in which a group of students collaborate
to create a desktop, mobile, or web application out of an idea.
<br /> 
<br />
This year's edition is focused on cybersecurity, but with a retro theme layered on top.
<br />
<br />
<br />
<br />
See you there 🫡.
</p>
<div class="location">
        <div>
          <h2> Where? At cloudflight </h2>
        </div>
        <div >
          <iframe
          class="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.070150678866!2d23.60821699770444!3d46.783222051125264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1cf33ffc9f%3A0xaa5a466482f38a60!2sCloudflight!5e0!3m2!1sen!2sro!4v1730724038551!5m2!1sen!2sro"
          title="Cloudflight Location" 
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
</template>

<script setup>
import { ref } from 'vue'

const started = ref(false)

const daysLeft = ref(0)
const hoursLeft = ref(0)
const minutesLeft = ref(0)
const secondsLeft = ref(0)


const countDownDate = new Date("Nov 16, 2024 09:00:00").getTime();
const timeout = setInterval(function() {
  const timeLeft = countDownDate - new Date().getTime();

  daysLeft.value = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  hoursLeft.value = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutesLeft.value = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  secondsLeft.value = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (timeLeft < 0) {
    clearInterval(timeout);
    started.value = true
  }
}, 1000);


</script>

<style scoped>
#main-description {
  font-size: 1.2rem;
  color: var(--light-blue);
  margin-inline: 20%;
  margin-block: 0;
  padding-block: 100px;
}
#countdown {
    font-size: 2rem;
    color: var(--light-blue);
    text-align: center;
    margin-block: 100px;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7);
}
.map {  
  border: 0;
  width: 500px;
  height: 300px;
  filter: grayscale(100%) sepia(100%) hue-rotate(0deg) invert(100%); 
}

.location {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-inline: auto;
  text-align: center;
  margin-bottom: 50px;
}

.location h2 {
  font-size: 2rem;
  color: var(--light-blue);
  text-align: center;
  margin-block: 50px;
} 

</style>

