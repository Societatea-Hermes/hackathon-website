<template>
  <nav>
    <ul class="navbar">
      <div class="nav-link-container">
        <RouterLink class="nav-link" to="/about">About</RouterLink>
      </div>
      <div class="nav-link-container">
        <RouterLink class="nav-link" to="/register">Register</RouterLink>
      </div>
      <div class="nav-link-container">
        <a href="#sponsors" class="nav-link">Sponsors</a>
      </div>
      <div class="nav-link-container">
        <a href="#contact" class="nav-link">Contact</a>
      </div>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
nav {
  background-color: #333;
  color: white;
  padding: 1rem;
}

ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
}

.navbar {
  display: flex;
  justify-content: space-around;
  list-style: none;
}

.nav-link {
  color: black;
  font-weight: bold;
  font-size: xx-large;
  align-self: center;
  margin-bottom: 30px;
}

.nav-link-container {
  width: 300px;
  height: 200px;
  justify-content: center;
  display: flex;
  background: url('../assets/imgs/nav-unpressed.svg') center no-repeat;
}

.nav-link-container:hover {
  background: url('../assets/imgs/nav-pressed.svg') center no-repeat;
}

.nav-link-container:active {
  background: url('../assets/imgs/nav-pressed.svg') center no-repeat;
}
</style>
