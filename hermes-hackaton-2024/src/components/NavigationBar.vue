<template>
  <nav class="navbar">
    <div class="logo-cont">
      <img
        class="logo-img"
        src="../assets/imgs/hackathon-logo.svg"
        alt="Hackaton logo"
      />
    </div>
    <div class="navbar-btns-cont">
        <RouterLink class="nav-link" to="/about">About</RouterLink>
        <RouterLink class="nav-link" to="/register">Register</RouterLink>
        <a href="#sponsors" class="nav-link">Sponsors</a>
        <a href="#contact" class="nav-link">Contact</a>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
nav {
  background-color: #333;
  color: white;
}

.navbar {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

.logo-cont {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-grow: 1;
  max-height: 70px;
}

.logo-img {
  height: 300%;
  width: auto;
}

.navbar-btns-cont {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

/* .nav-link {
  color: black;
  font-weight: bold;
  font-size: medium;
  align-self: center;
} */

.nav-link {
  margin-left: 1rem;
  margin-right: 1rem;
  width: 130px;
  height: 60px;
  padding-top: 10px;
  justify-content: center;
  background: url('../assets/imgs/nav-unpressed.svg') no-repeat;
  background-size: contain;
  background-position: bottom;
}

.nav-link:hover {
  background: url('../assets/imgs/nav-pressed.svg') center no-repeat;
  background-size: contain;
  background-position: bottom;
  padding-top: 20px;
  height: 50px;
}

.nav-link:active {
  background: url('../assets/imgs/nav-pressed.svg') center no-repeat;
  background-size: contain;
  background-position: bottom;
  padding-top: 20px;
  height: 50px;
}
</style>
