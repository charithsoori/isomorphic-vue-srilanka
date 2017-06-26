<template>
    <div class="loader-holder">
        <input type="text" name="fname" :value="doubleValue">
        <br>
        <div class="loader">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return { value: 5 }
    },
    computed: {
        doubleValue: {
            get() {
                //this function will determine what is displayed in the input
                return this.value * 2;
            },
            set(newVal) {
                //this function will run whenever the input changes
                this.value = newVal / 2;
            }
        }
    }
}
</script>
<style>
.loader-holder {
    position: fixed;
    z-index: 999;
    height: 2em;
    width: 2em;
    overflow: show;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0
}

.loader {
    border: 16px solid #f3f3f3;
    /* Light grey */
    border-top: 16px solid #3498db;
    /* Blue */
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>


