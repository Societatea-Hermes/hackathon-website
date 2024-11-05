<template>
  <section id="guests">
    <div class="arcade">
      <img
        class="guest"
        :src="guests[guest_index].picture"
        :alt="guests[guest_index].name"
      />
      <img class="machine" src="../assets/imgs/arcade.png" alt="arcade" />
      <div class="title">Choose your fighter</div>
    </div>
  </section>
</template>

<script setup>
import useGuests from '../composables/useGuests'
import { ref } from 'vue'
const { guests } = useGuests()
const guest_index = ref(1)
</script>

<style scoped>
.arcade .guest {
  width: 17rem;
  height: 17rem;
  margin-top: 7rem;
  margin-left: 8rem;
  margin-right: -26rem;
}
.arcade .machine {
  height: 35rem;
  width: 35rem;
  margin-right: -23rem;
}
.arcade .title {
  font-size: 2rem;
  margin-top: 3rem;
}

.arcade {
  width: min-content;
  display: flex;
}

.guests {
  width: min-content;
  text-align: center;
  vertical-align: middle;
}
</style>
