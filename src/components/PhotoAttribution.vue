<template>
    <span>
        <img src="../public/icon/camera.png" width="14">
        <a style="color:#ccc">{{user.realname}} </a>
    </span>
</template>

<script>
export default {
    props: ['user'],
    name: 'photo-attribution'
}
</script>

<style>
.username {
    color: #000;
    text-decoration: none;
}
</style>
