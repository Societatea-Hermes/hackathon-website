<template>
  <HackathonTitle />
  <div class="custom-background">
    <div v-if="!started" id="countdown">
      {{ daysLeft }} days {{ hoursLeft }} hours {{ minutesLeft }} minutes
      {{ secondsLeft }} seconds
      <br />
      left to register 👇
    </div>
    <div v-else id="countdown">Registrations are closed</div>
    <div v-if="readRules" class="register">
      <a
        href="https://forms.gle/bdvqUCCQPwJjnBtQ8"
        target="_blank"
        class="register"
        >Register here</a
      >
    </div>
    <div class="rules">
      But first, read the
      <a
        @click="readRules = true"
        href="https://docs.google.com/document/d/1ueOw2xgyv_ji8mdC8MzdOqY7B8Wv8-iWg2WjjzadDZo"
        target="_blank"
        class="rules"
        >rules</a
      >
    </div>
  </div>
</template>

<script setup>
import { getBackground } from '@/composables/useBackground'
import HackathonTitle from '../components/HackathonTitle.vue'
import { getGradient } from '@/composables/useGradient'
import { ref } from 'vue'
import { useCountdown } from '@/composables/useCountdown'

const backgroundColor = getGradient()
const backgroundImage = getBackground()

const readRules = ref(false)

const targetDate = new Date('Nov 12, 2024 23:59:00')
const { started, daysLeft, hoursLeft, minutesLeft, secondsLeft } =
  useCountdown(targetDate)
</script>

<style scoped>
.custom-background {
  background-image: v-bind('backgroundImage');
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
  color: transparent;
  background: v-bind('backgroundColor');
  background-clip: text;
  text-align: center;
  margin-block: 50px;
}

/* Media queries for smaller screens */
@media (max-width: 650px) {
  div.register {
    font-size: 2.2rem;
    margin-block: 30px;
  }
  div.rules {
    font-size: 1rem;
  }
  #countdown {
    font-size: 2rem;
  }
  div.rules {
    font-size: 1.2rem;
  }
  div.register {
    font-size: 2.5rem;
  }
}
</style>
