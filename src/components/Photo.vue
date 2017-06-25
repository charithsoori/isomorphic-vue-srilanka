<template>
    <a>
        <img class="image" :src="getPhotoUrl">
        </image>
    </a>
</template>


<script>
export default {
    props: ['data'],
    name: 'photo',
    data() {
        return {
            photo: this.data
        }
    },
    computed: {
        getPhotoUrl() {
            if (this.data.id)
                var image = `https://farm${this.data.farm}.staticflickr.com/${this.data.server}/${this.data.id}_${this.data.secret}.jpg`;
            return image;
        }
    },
};
</script>

<style>
.image {
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    height: auto
}
</style>
