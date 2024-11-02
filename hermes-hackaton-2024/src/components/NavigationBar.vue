<template>
  <nav>
    <ul>
      <div class="nav-link-container">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
      </div>
      <div class="nav-link-container">
        <RouterLink class="nav-link" to="/about">About</RouterLink>
      </div>
      <div class="nav-link-container">
        <RouterLink class="nav-link" to="/register">Register</RouterLink>
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

a {
  color: white;
  text-decoration: none;
}

.nav-link {
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.nav-link-container {
  background-color: var(--magenta);
}
</style>
