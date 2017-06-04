<template>
  <div id="app">
    <div id="content">
      <div className="Page">
        <div className="Page-header">
          <navbar></navbar>
        </div>
        <div className="Page-body">
        <featured></featured>
        </div>
        <div className="Page-footer">
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
$color-secondary: #53A0FD;
$color-border: #CCC;
$color-background: #EAEAEA;

$font-family: "Helvetica Neue",
sans-serif;
$font-size: 16px;


html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  color: $color-primary;
  background: $color-white;

  font-size: $font-size;
  font-family: $font-family;
  font-weight: 300;
}

html,
body,
#root {
  height: 100%;
}

a {
  color: $color-secondary;
}

h1 {
  font-weight: 300;
  text-align: center;
}

.Page {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100%;
  margin: 0 auto;
  padding: 1rem;
}

.Page-body {
  flex: 1;
}

.Page {
  padding: 2rem;
}

.Thumbnail {
  box-sizing: border-box;
  min-width: 8rem;
  min-height: 8rem;

  border: 1px solid;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  transition: filter .25s;
  width: 300px;
  height: 300px;
}

.ThumbnailCollection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .Thumbnail {

    flex: 1;
    flex-basis: 8rem;

    &:nth-child(5n) {
      flex-basis: 14rem;
      ;
    }

    &:nth-child(2n+1) {
      flex-basis: 10rem;
      ;
    }

    &:nth-child(7n+4) {
      flex-basis: 20rem;
      min-height: 12rem;
    }

    &:hover {
      opacity: .9;
    }
  }
}
</style>
