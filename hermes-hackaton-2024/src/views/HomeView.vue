<template>
  <HackathonTitle />
  <div class="custom-background">
    <div>
      <p class="description-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <section id="#sponsors">
      <ul>
        <li>S1</li>
        <li>S2</li>
        <li>S3</li>
      </ul>
    </section>
  </div>
  <!-- <SponsorList /> -->
</template>

<script setup>
import HackathonTitle from '../components/HackathonTitle.vue';
import SponsorList from '../components/SponsorList.vue';
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.custom-background {
  background-image: url('/imgs/background.jpg');
  background-size: 100% 100%;
  background-repeat: repeat-y;
  background-position: top;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.centered-text-home {
  text-align: center;
  font-size: 50px;
}

.gradient-text-blue {
  background: linear-gradient(to bottom, #6822e5 0%, #62a1f0 60%, #cf29c7 100%);
  -webkit-background-clip: text;
  color: transparent;
}

.subtext {
  text-align: center;
  font-size: 20px;
  color: #62a1f0;
  margin-top: 100px;
}

.description-text {
  font-size: 20px;
  color: #62a1f0;
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
  background: linear-gradient(to bottom, #6822e5 0%, #62a1f0 60%, #cf29c7 100%);
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
