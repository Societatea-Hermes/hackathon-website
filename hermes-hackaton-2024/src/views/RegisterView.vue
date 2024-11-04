<template>
  <HackathonTitle />
  <div class="custom-background">
    <div v-if="!started" id="countdown">
      {{daysLeft}} days {{hoursLeft}} hours {{minutesLeft}} minutes {{secondsLeft}} seconds
      <br>
      left to register 👇
    </div>
    <div v-else id="countdown">
      Registrations are closed
    </div>
    <div v-if="readRules" class="register">
      <a href="https://forms.gle/bdvqUCCQPwJjnBtQ8" target="_blank" class="register">Register here</a>
    </div>
    <div class="rules">
      But first, read the <a @click="readRules=true" href="https://docs.google.com/document/d/1ueOw2xgyv_ji8mdC8MzdOqY7B8Wv8-iWg2WjjzadDZo" target="_blank" class="rules">rules</a>
    </div>
  </div>
</template>

<script setup>
import HackathonTitle from '../components/HackathonTitle.vue'
import { getGradient } from '@/composables/useGradient';
import { ref } from 'vue'


const backgroundColor = getGradient();
const started = ref(false)
const readRules = ref(false)

const daysLeft = ref(0)
const hoursLeft = ref(0)
const minutesLeft = ref(0)
const secondsLeft = ref(0)

const countDownDate = new Date("Nov 12, 2024 23:59:00").getTime();
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
.custom-background {
  background-image: url('/imgs/background_green.jpg');
  background-size: 100% 100%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#countdown {
    font-size: 2rem;
    color: var(--light-blue);
    text-align: center;
    margin-block: 100px;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7);
}
div.rules {
  font-size: 1.5rem;
  color: var(--light-blue);
  text-align: center;
  margin-block: 100px;
}
a.rules {
  color: var(--light-blue);
  text-decoration: underline;
}

div.register {
  font-size: 3rem;
  color:transparent;
  background: v-bind('backgroundColor');
  background-clip: text;
  text-align: center;
  margin-block: 100px;
}

</style>