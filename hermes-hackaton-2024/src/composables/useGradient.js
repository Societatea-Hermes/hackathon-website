import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const color_set = {
  '/about': ['#6c86e7', '#cf29c7', '#62a1ef'],
  '/register': ['#6822E5', '#62A1F0', '#31AF34'],
  '/': ['#6822E5', '#62A1F0', '#CF29C7'],
}

export const getGradient = () => {
  const route = useRoute()
  const page_gradient = ref('')
  watch(
    () => route.path,
    page => {
      page_gradient.value = `linear-gradient(to bottom, ${color_set[page][0]} 0%, ${color_set[page][1]} 40%, ${color_set[page][2]} 100%)`
    },
    { immediate: true }
  )
  return page_gradient
}
