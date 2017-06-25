<template>
    <div class="NavBar">
        <div class="NavBar-title">
            <span class="webtitle">
                <img class="flag" src="../public/icon/slflag.png" alt="Sri Lanka Flag" width="50"> Sri Lanka</span>
        </div>
        <div className="NavBar-links">
        </div>
        <div class="NavBar-links" data-reactid="16">
            <router-link class="NavBar-link" to="/cat/beach" data-reactid="29">
                <span data-reactid="30">beach</span>
            </router-link>
            <router-link class="NavBar-link" to="/cat/lepord" data-reactid="17">
                <span data-reactid="18">Leopards</span>
            </router-link>
            <router-link class="NavBar-link" to="/cat/elephants" data-reactid="19">
                <span data-reactid="20">Elephants</span>
            </router-link>
            <router-link class="NavBar-link" to="/cat/sinharaja" data-reactid="21">
                <span data-reactid="22">Sinharaja</span>
            </router-link>
            <router-link class="NavBar-link" to="/cat/bear" data-reactid="23">
                <span data-reactid="24">Sloth Bear</span>
            </router-link>
            <router-link class="NavBar-link" to="/cat/birds" data-reactid="25">
                <span data-reactid="26">Birds</span>
            </router-link>
            <router-link class="NavBar-link" to="/cat/knuckles" data-reactid="27">
                <span data-reactid="28">knuckles</span>
            </router-link>
    
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
};
</script>


<style lang="scss">
$color-white: #FFF;
$color-black: #000;
$color-primary: #000;
$color-secondary: #000;
$color-border: #CCC;
$color-background: #EAEAEA;

.NavBar {
    position: relative;
    margin: 0rem 0rem 2rem 0rem;
}

.NavBar-title {
    text-align: left;
}


.NavBar-links {
    overflow: auto;
    margin-top: 1rem;

    white-space: nowrap;
    text-align: center;
}

.NavBar-link {
    position: relative;
    display: inline-block;
    padding: .75rem;
    color: inherit;

    font-weight: 300;
    font-size: .875rem;

    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        opacity: .75;
    }

    &:first-child {
        padding-left: 0;
    }

    &:last-child {
        padding-right: 0;
    }

    &:after {

        width: 0;
        height: 2px;
        margin: .25rem auto;

        content: '';

        background-color: transparent;
        transition: all .15s;
    }
}

.router-link-active {
    color: $color-secondary;
    font-weight: 700;

    &:after {
        width: 100%;
        background-color: currentColor;
    }
}

.NavBar-locales {
    position: absolute;
    right: 0;
    top: 0;
}

.webtitle {
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
}
</style>
