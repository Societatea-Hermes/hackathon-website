<template>
  <div class="custom-background">
  <div>
    <p class="centered-text-register gradient-text-green">
      ARCADE GUARDIANS:
    </p>
  </div>
  <div>
    <p class="centered-text-register gradient-text-green">
      RETRO GAMES MEET CYBERSECURITY
    </p>
  </div>
  <div class="sponsor-info">
    <p class="sponsor-text">Sponsored by:</p>
    <img src="../assets/imgs/cloudflight_logo_blue.png" alt="Sponsor Logo" class="sponsor-logo">
  </div>
  <p class="subtext">
    Hacking the past to secure the future
    </p>
  </div>
</template>

<style scoped>
body {
  margin: 0; /* Remove default body margin */
  padding: 0; /* Remove default body padding */
  display: flex; /* Enable flexbox */
  flex-direction: column; /* Stack children vertically */
  height: 100vh; /* Full viewport height */
}

.custom-background {
  background-image: url('../assets/imgs/background_green.jpg');
  background-size: 100% auto; /* Ensures width fits */
  background-repeat: repeat-y; /* Repeat vertically */
  background-position: center top; /* Align at the top */
  flex-grow: 1; /* Allow it to grow and fill space */
  display: flex; /* Enable flexbox for the background */
  flex-direction: column; /* Stack children vertically */
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
}

.centered-text-register {
  text-align: center;
  font-size: 50px;
}

.gradient-text-green {
  background: linear-gradient(to bottom, #6822E5 0%, #62A1F0 20%, #31AF34 100%);
  -webkit-background-clip: text;
  color: transparent;
}

.subtext {
  text-align: center;
  font-size: 20px;
  color: #62A1F0;
  margin-top: 100px;
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
  background: linear-gradient(to bottom, #6822E5 0%, #62A1F0 20%, #31AF34 100%);
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
