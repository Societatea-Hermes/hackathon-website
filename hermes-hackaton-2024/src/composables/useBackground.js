import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const image_set = {
    '/about': '/imgs/background_purple.jpg',
    '/register': '/imgs/background_green.jpg',
    '/': '/imgs/background.jpg',
  }

export const getBackground = () => {
  const route = useRoute()
  const page_background = ref('')
  watch(
    () => route.path,
    page => {
        page_background.value = `url(${image_set[page]})`
    },
    { immediate: true }
  )
  return page_background
}
