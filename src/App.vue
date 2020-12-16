<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    Header: Header
  }
};
</script>

<style lang="scss">
:root {
  --blue: #007bff;
  --primary: #000000;
}
@import "assets/custom-vars.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;600&display=swap');  // Raleway
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap'); // Open Sans

$primary: #000000;
// #fff5dc, #e7a201, #72cb79, #f95d23, #ffffff, #6eb5ef
body {
  background-color: #fff5dc;
}
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  margin: auto;
  color: #2c3e50;
  // color: #f95d23;
  font-size: 20px;
  max-width: 940px;
  border: 1px solid #000000;
}

p,
h1,
h2,
h3 {
  padding-left: 10px;
  padding-right: 10px;
}

h1,h2,h3{
  font-family: 'Raleway', sans-serif;
}

#nav {
  a {
    color: #fff5dc;

    &.router-link-exact-active {
      color: #fff5dc;
    }
  }
}
.modal-button {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  background-color: black;
}
strong {
  color: #f95d23;
}

a {
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: #72cb79;
  &:hover{
    color: #6eb5ef;
  }
  &::after {
    content: "";
    background: rgba(#6eb5ef, 0.25);
    position: absolute;
    left: 6px;
    bottom: -3px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    z-index: -1;
    transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
  }
  &:hover:after {
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 100%;
  }
}
.modal-body{
   background-color: #fff5dc;
}
.modal-header{
  background-color: #000000;
}
</style>
