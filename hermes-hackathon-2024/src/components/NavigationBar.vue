<template>
  <nav class="navbar">
    <div class="logo-cont">
      <RouterLink to="/" class="logo-link">
        <img
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
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { getGradient } from '@/composables/useGradient'
import { useScrollTo } from '@/composables/useScrollTo'
import { updateCssVariable } from '@/utils'

const { scrollTo } = useScrollTo('/', '#sponsors')
const page_gradient = getGradient()

watch(page_gradient, () => {
  updateCssVariable('scrollbar-gradient', page_gradient.value)
})

const visible = ref(true)
</script>

<style scoped>
.navbar {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background: v-bind('page_gradient');
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

.navbar-btns-cont.visible {
  display: flex;
  flex-direction: row;
  align-items: center;
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
  .nav-link {
    margin-inline: 15px;
  }

  .navbar-btns-cont {
    margin-top: 30px;
    display: none;
  }
  .navbar-btns-cont.visible {
    margin-top: 30px;
    display: flex;
  }
  .toggle {
    margin-top: 30px;
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }
}

@media only screen and (max-width: 650px) {
  .nav-link {
    width: 80px;
    height: 30px;
    font-size: 0.6rem;
    margin-inline: 5px;
  }
  .nav-link-active {
    height: 30px;
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
  .navbar-btns-cont.visible {
    margin-top: 10px;
  }
  .toggle {
    margin-top: 10px;
  }
}
</style>
