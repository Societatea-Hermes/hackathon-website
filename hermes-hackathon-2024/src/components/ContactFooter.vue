<template>
  <footer>
    <div id="contact">
      <div>
        Social links:
        <ul>
          <li>
            <a href="https://www.facebook.com/hermeshackathon">
              <span class="fa fa-brands fa-facebook fa-xl"></span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hermes.hackathon/">
              <span class="fa fa-brands fa-instagram fa-xl"></span>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@societateahermes/">
              <span class="fa fa-brands fa-tiktok fa-xl"></span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/societatea-hermes/">
              <span class="fa fa-brands fa-linkedin fa-xl"></span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        Email:
        <p>
          <a href="mailto:contact@societatea-hermes.ro">
            contact@societatea-hermes.ro
          </a>
        </p>
      </div>
      <div>
        Address:
        <address>
          <p>
            Cantina Hașdeu, Complex Studențesc Hașdeu, Strada Bogdan Petriceicu
            Hașdeu 45, Cluj-Napoca
          </p>
        </address>
      </div>
    </div>
    <hr />
    <div class="copyright">
      Copyright Societatea Hermes {{ new Date().getFullYear() }} | All Rights
      Reserved
    </div>
  </footer>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const image_set = {
  '/about': '/imgs/background_purple.jpg',
  '/register': '/imgs/background_green.jpg',
  '/': '/imgs/background.jpg',
}

const backgroundImage = ref(`url(${image_set['/']})`)

watch(
  () => route.path,
  page => {
    backgroundImage.value = `url(${image_set[page]})`
  },
)
</script>

<style scoped>
footer {
  background-image: v-bind('backgroundImage');
  background-size: 100% 100%; /* Ensures width fits */
  background-repeat: repeat-y; /* Repeat vertically */
  background-position: top; /* Align at the top */
}

#contact {
  display: grid;
  grid-template-columns: 25% 40% 25%;
  margin-left: 5%;
  margin-right: 5%;
  justify-content: space-around;
  text-align: center;
  color: white;
}
#contact ul {
  padding-left: 0;
}
#contact li {
  list-style-type: none;
  display: inline;
  padding-left: 5px;
  padding-right: 5px;
}
#contact a:link {
  color: white;
}
#contact a:visited {
  color: white;
}
#contact a:hover {
  color: var(--purple);
}
#contact div {
  margin: 1rem;
}
#contact address {
  white-space: pre-wrap;
}
.copyright {
  text-align: center;
  color: white;
  padding-bottom: 20px;
  padding-top: 20px;
}
@media only screen and (max-width: 700px) {
  #contact {
    grid-template-columns: 90%;
  }
}
</style>
