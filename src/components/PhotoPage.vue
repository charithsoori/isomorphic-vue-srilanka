<template v-if="!this.photodata.id">
    <div>
        <h1>{{photodata.title._content}}</h1>
        <photo :data="getPhoto"></photo>
        <photometa :photo="getPhoto"></photometa>
    </div>
</template>

<script>
import photo from "./Photo"
import photometa from "./PhotoMeta"

export default {
    name: "photo-page",
    components: { photo, photometa },
    props: ['photo_id'],
    data() {
        return {
            photodata: {
                title: {
                    _content: ''
                }
            },
        }
    },
    computed: {
        getPhoto() {
            if (this.$store.getters.getPhoto.id) {
                this.photodata = this.$store.getters.getPhoto;
            }
            return this.photodata;
        }
    },
    created() {
        this.fetchData();
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            this.$store.dispatch('FETCH_PHOTO');
        }
    }
}
</script>
<style>

</style>






