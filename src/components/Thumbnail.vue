<template>
        <!--{{image.url}}-->
        <!--<a v-for="image in images" class="Thumbnail" href="#" :style="{'background-image': 'url(' + image.url + ')' }">
        </a>-->
           <a  class="Thumbnail" href="#" :style="{'background-image': 'url(' + backgroundImage.url + ')' }">
        </a>
</template>

<script>
export default {
    name: "thumbnail",
    props:['image'],
    data() {
        return {
            backgroundImage:this.image
        }
    },
}
</script>

<style >
.Thumbnail {
    box-sizing: border-box;
    min-width: 8rem;
    min-height: 8rem;

    border: 1px solid;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    transition: filter .25s;
    width: 300px;
    height: 300px;
}
</style>
