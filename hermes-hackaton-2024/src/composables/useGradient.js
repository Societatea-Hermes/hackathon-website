// src/composables/useGradient.js
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const color_set = {
  '/about': ['#6c86e7', '#cf29c7', '#62a1ef'],
  '/register': ['#6822E5', '#62A1F0', '#31AF34'],
  '/': ['#6822E5', '#62A1F0', '#CF29C7'],
}

const updateScrollbarGradient = colors => {
  document.documentElement.style.setProperty(
    '--scrollbar-gradient',
    `linear-gradient(to bottom, ${colors[0]} 0%, ${colors[1]} 40%, ${colors[2]} 100%)`,
  )
}

const updateNavbarGradient = colors => {
  document.documentElement.style.setProperty(
    '--navbar-gradient',
    `linear-gradient(to bottom, ${colors[0]} 0%, ${colors[1]} 40%, ${colors[2]} 100%)`,
  )
}

export const useGradient = () => {
  const route = useRoute()

  watch(
    () => route.path,
    page => {
      const colors = color_set[page] || color_set['/']
      updateScrollbarGradient(colors)
      updateNavbarGradient(colors)
    },
    { immediate: true },
  )
}
