<template>
    <div class="sponsor-list-wrapper">
        <div class="sponsor-list">
            <div class="sponsor" v-for="sponsor in props.sponsors" :key="sponsor.id" >
                <a :href="sponsor.websiteUrl" target="_blank">
                    <img :src="sponsor.logo" :alt="sponsor.name">
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    shadow: {
        type: String,
        default: 'var(--sponsor-shadow-default)'
    },
    sponsors: {
        type: Array,
    }
})
</script>

<style scoped>
    img {
        width: auto;
        height: 100px;
        max-width: 200px;
        object-fit: contain;
    }

    .sponsor-list {
        display: flex;
        flex-wrap: wrap;
        width: fit-content;
        margin-inline: 10px;
        justify-content: center;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        box-shadow: v-bind('props.shadow');
        margin-block: 20px;
    }

    .sponsor-list-wrapper {
        margin-inline: auto;
    }
    .sponsor {
        margin: 0;
        padding: 20px;
    }

</style>