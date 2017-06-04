<template>
    <div class="NavBar">
        <div class="NavBar-title">
            Photo-Stack
        </div>
        <div className="NavBar-links">
        </div>
        <div class="NavBar-links" data-reactid="16">
            <a class="NavBar-link NavBar-link--selected active" href="/featured/popular" data-reactid="17">
                <span data-reactid="18">Most Popular</span>
            </a>
            <a class="NavBar-link" href="/featured/highest_rated" data-reactid="19">
                <span data-reactid="20">Highest Rated</span>
            </a>
            <a class="NavBar-link" href="/featured/upcoming" data-reactid="21">
                <span data-reactid="22">Upcoming</span>
            </a>
            <a class="NavBar-link" href="/featured/editors" data-reactid="23">
                <span data-reactid="24">Editors picks</span>
            </a>
            <a class="NavBar-link" href="/featured/fresh_today" data-reactid="25">
                <span data-reactid="26">Fresh Today</span>
            </a>
            <a class="NavBar-link" href="/featured/fresh_yesterday" data-reactid="27">
                <span data-reactid="28">Fresh Yesterday</span>
            </a>
            <a class="NavBar-link" href="/featured/fresh_week" data-reactid="29">
                <span data-reactid="30">Fresh This Week</span>
            </a>
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
$color-secondary: #53A0FD;
$color-border: #CCC;
$color-background: #EAEAEA;

.NavBar {
    position: relative;
    margin-bottom: 2rem;
}

.NavBar-title {
    text-align: left;
}

@media screen and (min-device-width: 481px) {
    .NavBar-title {
        text-align: center;
    }
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
        display: block;
        width: 0;
        height: 2px;
        margin: .25rem auto;

        content: '';

        background-color: transparent;
        transition: all .15s;
    }
}

.NavBar-link--selected {
    color: $color-secondary;

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
</style>
