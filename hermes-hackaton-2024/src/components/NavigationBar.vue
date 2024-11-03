<template>
  <nav class="navbar" :class="{ visible: visible }">
    <div class="logo-cont" :class="{ visible: visible }">
      <RouterLink to="/" class="logo-link"
        ><img
          class="logo-img"
          src="../assets/imgs/hackathon-logo.svg"
          alt="Hackaton logo"
        />
      </RouterLink>
    </div>
    <div class="navbar-btns-cont" :class="{ visible: visible }">
      <RouterLink active-class="nav-link-active" class="nav-link" to="/about"
        >About</RouterLink
      >
      <RouterLink active-class="nav-link-active" class="nav-link" to="/register"
        >Register</RouterLink
      >
      <a class="nav-link" @click="scrollTo">Sponsors</a>
      <RouterLink class="nav-link" to="#contact">Contact</RouterLink>
    </div>
    <div @click="visible = !visible" class="toggle">
      <div v-if="visible">
        <span class="fa-solid fa-arrow-up"></span>
      </div>
      <div v-else>
        <span class="fa-solid fa-bars"></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useGradient } from '@/composables/useGradient'
import { useScrollTo } from '@/composables/useScrollTo'

useGradient()
const { scrollTo } = useScrollTo('/', '#sponsors')
</script>

<style scoped>
.navbar {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background: var(--navbar-gradient);
  /* position: sticky;
  top: 0;
  z-index: 1000; */
}

.toggle {
  display: none;
  z-index: 1;
}

.logo-cont {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-grow: 1;
  max-height: 70px;
}

.logo-link {
  width: 130px;
  height: 60px;
}

.logo-img {
  height: 400%;
  width: auto;
  margin-top: -80px;
}

.navbar-btns-cont {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.nav-link {
  margin-inline: 15px;
  width: 130px;
  height: 60px;
  padding-top: 10px;
  justify-content: center;
  background: url('../assets/imgs/nav-unpressed.svg') no-repeat;
  background-size: contain;
  background-position: bottom;
  text-decoration: none;
  color: black;
}

.nav-link:hover {
  background: url('../assets/imgs/nav-pressed.svg') center no-repeat;
  background-size: contain;
  background-position: bottom;
  padding-top: 20px;
  height: 50px;
}

.nav-link-active {
  background: url('../assets/imgs/nav-pressed.svg') center no-repeat;
  background-size: contain;
  background-position: bottom;
  padding-top: 20px;
  height: 50px;
}

@media only screen and (max-width: 930px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;
  }
  .navbar:not(.visible) {
    height: auto;
    background: transparent;
    position: fixed;
  }

  .navbar-btns-cont {
    margin-top: 20px;
  }
  .navbar-btns-cont:not(.visible),
  .logo-cont:not(.visible) {
    display: none;
  }

  .toggle {
    width: 100%;
    display: block;
    font-size: 1.5rem;
  }

  .toggle div {
    margin: 0;
    max-width: fit-content;
    margin-inline: auto;
    cursor: pointer;
  }
}

@media only screen and (max-width: 650px) {
  .nav-link {
    width: 80px;
    height: 40px;
    font-size: 0.6rem;
    margin-inline: 5px;
  }
  .nav-link:hover {
    height: 30px;
  }
  .logo-link {
    width: 100px;
    height: 40px;
  }
  .logo-img {
    height: 300%;
    width: auto;
    margin-top: -40px;
  }
}
</style>
