<template>
    <span class="ratings"> views {{rating}}</span>
</template>

<script>
export default {
    props: ['rating'],
    name: 'photo-rating'
}
</script>
<style>
.ratings {
    color: #bbb;
    font-weight: 500;
    padding-left: 5px;
}
</style>
