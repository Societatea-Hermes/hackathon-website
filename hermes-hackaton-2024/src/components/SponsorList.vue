<template>
    <div class="sponsor-list">
        <div class="sponsor" v-for="sponsor in props.sponsors" :key="sponsor.id" >
            <a :href="sponsor.websiteUrl" target="_blank">
                <img :src="sponsor.logo" :alt="sponsor.name">
            </a>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    sponsors: {
        type: Array,
    }
})


</script>

<style scoped>

    img {
        width: auto;
        height: 100px;
        max-width: 300px;
        object-fit: contain;
    }

    .sponsor-list {
        display: flex;
        flex-wrap: wrap;
        width: fit-content;
        margin-left: 5%;
        margin-right: 5%;
        justify-content: center;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        box-shadow: 3px 3px 3px 10px rgba(0, 0, 0, 0.7);
        margin-block: 50px;
    }

    .sponsor {
        margin: 0;
        padding: 20px;
    }

</style>