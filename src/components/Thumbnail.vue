<template>
    <router-link class="Thumbnail" :to="'/photo/'+this.image.id" :style="{'background-image': 'url(' + getImageUrl+ ')' }">
    </router-link>
</template>

<script>
import router from 'vue-router';

export default {
    name: "thumbnail",
    props: ['image'],
    data() {
        return {
            backgroundImage: this.image
        }
    },
    computed: {
        getImageUrl() {
            var image = `https://farm${this.image.farm}.staticflickr.com/${this.image.server}/${this.image.id}_${this.image.secret}_c.jpg`;
            return image;
        }
    }
}
</script>

<style >
.Thumbnail {
    box-sizing: border-box;
    min-width: 8rem;
    min-height: 8rem;

    border: 3px solid;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    transition: filter .25s;
    width: 300px;
    height: 300px;
}
</style>
