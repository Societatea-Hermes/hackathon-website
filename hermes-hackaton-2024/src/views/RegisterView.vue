<template>
  <HackathonTitle />
  <div class="custom-background">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nostrum
      veniam reiciendis ullam quia maxime magnam, laborum ex eaque, illum
      architecto? Modi voluptatem labore enim nesciunt velit ad porro
      laudantium?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quam
      laboriosam dolorum fuga a amet. Explicabo id maxime accusantium similique
      aperiam eaque amet consequatur? Doloremque maiores eligendi dolorum.
      Repellendus, quo!
    </p>
  </div>
</template>

<script setup>
import HackathonTitle from '../components/HackathonTitle.vue'
</script>

<style scoped>
.custom-background {
  background-image: url('/imgs/background_green.jpg');
  background-size: 100% auto; 
  background-repeat: repeat-y;
  background-position: center top; 
  flex-grow: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
