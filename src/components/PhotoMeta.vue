<template>
    <div class="PhotoMeta">
        <div class="col-4 justify-content-md-start">
            <photoattribution v-if="photo.id" :user="photo.owner"></photoattribution>
            <photocreatedat  v-if="photo.id" :createdat="photo.dates.taken"></photocreatedat>
        </div>
        <div class="col-4 justify-content-md-end">
            <photorating  v-if="photo.id" :rating="photo.views"></photorating>
        </div>
    </div>
</template>

<script>

import photoattribution from "./PhotoAttribution";
import photocreatedat from "./PhotoCreatedAt"
import photorating from "./PhotoRating"


export default {
    name: 'photo-meta',
    props: ['photo'],
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
    padding-top: 12px;
}
</style>

