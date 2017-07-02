<template>
    <div class="PhotoMeta">
        <photoattribution v-if="photo.id" :user="this.data"></photoattribution>
        <photocreatedat v-if="photo.id" :createdat="photo.dates.taken"></photocreatedat>
        <photorating v-if="photo.id" :rating="photo.views"></photorating>
    </div>
</template>

<script>

import photoattribution from "./PhotoAttribution";
import photocreatedat from "./PhotoCreatedAt"
import photorating from "./PhotoRating"


export default {
    name: 'photo-meta',
    props: ['photo'],
    data() {
        return {
            data: this.$props.photo
        }
    },
    computed: {
        setData() {
            this.data = this.photo
            return this.data;
        }
    },
    components: { photoattribution, photocreatedat, photorating },
}
</script>

<style lang="scss">
.PhotoMeta {
    display: flex;
    margin-bottom: 1rem;
    font-size: 12px;
    font-weight: 400;
    color: #ccc;
}
</style>

