import { useRoute, useRouter } from 'vue-router'

export const useScrollTo = (path, scrollToId) => {
  const route = useRoute()
  const router = useRouter()

  const scrollTo = event => {
    event.preventDefault()
    if (route.path !== path) {
      router.push(path).then(() => {
        const sponsorsSection = document.querySelector(scrollToId)
        if (sponsorsSection) {
          sponsorsSection.scrollIntoView({ behavior: 'smooth' })
        }
      })
    } else {
      const sponsorsSection = document.querySelector(scrollToId)
      if (sponsorsSection) {
        sponsorsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return { scrollTo }
}
