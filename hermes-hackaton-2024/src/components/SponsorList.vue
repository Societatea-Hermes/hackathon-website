<template>
    <div id="sponsors">
        <ul>
            <li v-for="sponsor in sponsors" :key="sponsor.id">
                <img :src="sponsor.logo" :alt="sponsor.name">
            </li>
        </ul>
    </div>
</template>

<script setup>
import useSponsors from '../composables/useSponsors'

const { sponsors } = useSponsors()



</script>

<style scoped>
    img {
        width: auto;
        height: 100px;
    }

    #sponsors {
        background-image: v-bind('backgroundImage');
        background-size: 100% 100%; 
    }
</style>