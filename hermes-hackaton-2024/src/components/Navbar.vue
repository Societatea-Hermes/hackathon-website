<template>
  <h1>Navbar</h1>
  <nav>
    <ul>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
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
</style>
