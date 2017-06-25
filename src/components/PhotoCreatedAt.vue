<template>
    <span style="padding-left:5px;">  {{formattedDate}} ({{relativeTime}})</span>
</template>

<script>
import moment from 'moment'

export default {
    props: ['createdat'],
    name: 'photo-created',
    computed:{
        formattedDate (){
            return moment(this.createdat).format("MMM Do YYYY");
        },
        relativeTime(){
            return moment(this.createdat).startOf('day').fromNow();
        }
    }
}
</script>
