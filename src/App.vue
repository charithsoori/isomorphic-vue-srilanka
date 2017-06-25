<template>
    <div id="app">
        <div id="content">
            <div class="Page">
                <div className="Page-header">
                    <navbar></navbar>
                </div>
                <div class="Page-body">
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                </div>
                <div class="Page-footer">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from './components/Navbar';
import featured from './components/Featured';


export default {
    name: 'app',
    components: {
        navbar, featured
    },
}
</script>

<style lang="scss">
$color-white: #FFF;
$color-black: #000;
$color-primary: #000;
$color-secondary: #000;
$color-border: #CCC;
$color-background: #EAEAEA;

$font-family: 'Poppins',
sans-serif;
$font-size: 16px;


html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
    color: $color-primary;
    background: $color-white;

    font-size: $font-size;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
}

html,
body,
#root {
    height: 100%;
}

a {
    color: #fff;
}

h1 {
    font-weight: 700;
}

.Page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 100%;
    margin: 0 auto;
    padding: 1rem;
    max-width: 60rem;
    padding: 2rem;
}

.Page-body {
    flex: 1;
}

</style>
