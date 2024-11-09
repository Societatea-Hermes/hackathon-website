import { ref, onMounted, onUnmounted } from 'vue'

export function useCountdown(targetDate) {
  const started = ref(false)
  const daysLeft = ref(0)
  const hoursLeft = ref(0)
  const minutesLeft = ref(0)
  const secondsLeft = ref(0)

  let timeout

  const updateCountdown = () => {
    const timeLeft = targetDate.getTime() - new Date().getTime()

    daysLeft.value = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    hoursLeft.value = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    minutesLeft.value = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    secondsLeft.value = Math.floor((timeLeft % (1000 * 60)) / 1000)

    if (timeLeft < 0) {
      clearInterval(timeout)
      started.value = true
    }
  }

  onMounted(() => {
    timeout = setInterval(updateCountdown, 1000)
  })

  onUnmounted(() => {
    clearInterval(timeout)
  })

  return { started, daysLeft, hoursLeft, minutesLeft, secondsLeft }
}
