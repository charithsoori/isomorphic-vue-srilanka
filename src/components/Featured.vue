<template>
    <div>
        <div class="ThumbnailCollection">
            <thumbnail v-for="photo in getImages" :image="photo" :key="photo.id"></thumbnail>
        </div>
    </div>
</template>

<script>
import thumbnail from './Thumbnail';

export default {
    name: 'featured',
    props: ['page'],
    components: {
        thumbnail
    },
    created() {
        this.fetchData();
    },
    computed: {
        getImages() {
            this.photos = this.$store.getters.getFeaturedPhotos;
            return this.photos.photo;
        }
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            this.$store.dispatch('FETCH_FEATURED_IMAGES');
        }
    }
};
</script>

<style lang="scss">
.ThumbnailCollection {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .Thumbnail {

        flex: 1;
        flex-basis: 8rem;

        &:nth-child(5n) {
            flex-basis: 14rem;
            ;
        }

        &:nth-child(2n+1) {
            flex-basis: 10rem;
            ;
        }

        &:nth-child(7n+4) {
            flex-basis: 20rem;
            min-height: 12rem;
        }

        &:hover {
            opacity: .9;
        }
    }
}

</style>
