
<template>
  <HackathonTitle />
  <div class="custom-background">
    <div>
      <p class="description-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>

<script setup>
import HackathonTitle from '../components/HackathonTitle.vue';
</script>

<style scoped>
body {
  margin: 0; /* Remove default body margin */
  padding: 0; /* Remove default body padding */
  display: flex; /* Enable flexbox */
  flex-direction: column; /* Stack children vertically */
  height: 100vh; /* Full viewport height */
}

.custom-background {
  background-image: url('/imgs/background.jpg'); 
  background-size: 100% 100%; /* Ensures width fits */
  background-repeat: repeat-y; /* Repeat vertically */
  background-position: top; /* Align at the top */
  flex-grow: 1; /* Allow it to grow and fill space */
  display: flex; /* Enable flexbox for the background */
  flex-direction: column; /* Stack children vertically */
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
}

.centered-text-home {
  text-align: center;
  font-size: 50px;
}

.gradient-text-blue {
  background: linear-gradient(to bottom, #6822E5 0%, #62A1F0 60%, #CF29C7 100%);
  -webkit-background-clip: text;
  color: transparent;
}

.subtext {
  text-align: center;
  font-size: 20px;
  color: #62A1F0;
  margin-top: 100px;
}

.description-text {
  font-size: 20px;
  color: #62A1F0;
  margin-top: 400px;
  margin-left: 20%;
  margin-right: 20%;
}

.sponsor-info {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  margin-right: 150px;
}

.sponsor-text {
  font-size: 20px;
  background: linear-gradient(to bottom, #6822E5 0%, #62A1F0 60%, #CF29C7 100%);
  -webkit-background-clip: text;
  color: transparent;
  margin-right: 10px;
}

.sponsor-logo {
  height: 30px;
  width: auto;
  vertical-align: middle;
}
</style>