<template>
    <div>
        <div class="ThumbnailCollection">
            <thumbnail v-for="image in images" :image="image"></thumbnail>
        </div>
    </div>
</template>

<script>
import thumbnail from './Thumbnail';

export default {
    name: 'featured',
    components: {
        thumbnail
    },
    data() {
        return {
            data:{url: 'https://static.pexels.com/photos/3247/nature-forest-industry-rails.jpg' },
            images: [
                { url: 'https://static.pexels.com/photos/3247/nature-forest-industry-rails.jpg' },
                { url: 'https://drscdn.500px.org/photo/214147391/m%3D900_k%3D1_a%3D1/df538f5d32815165be6ddeeff0014063' },
                { url: 'https://drscdn.500px.org/photo/214128261/m%3D900_k%3D1_a%3D1/1249ce21583dbd4f9780f06dbac199f2' },
                { url: 'https://drscdn.500px.org/photo/214147391/m%3D900_k%3D1_a%3D1/df538f5d32815165be6ddeeff0014063' },
            ]
        }
    }
};
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
