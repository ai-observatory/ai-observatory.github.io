<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
    </div>
    <router-view/>

    <div
      style="
        display: flex;
        padding-top: 20px;
        padding-bottom: 10px;
        flex-direction: column;
        align-items: center;
      "
    >
      <div class="">
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
          ><img
            alt="Creative Commons License"
            style="border-width: 0"
            src="https://i.creativecommons.org/l/by/4.0/88x31.png"
        /></a>
      </div>

      <div class="">
        This work is licensed under a
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
          >Creative Commons Attribution 4.0 International License</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    Header: Header,
  },
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
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500;600&display=swap"); // Raleway
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"); // Open Sans
@import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Inline+Text:wght@700&display=swap"); // Big Shoulders Inline Text

$primary: #000000;
// #fff5dc, #e7a201, #72cb79, #f95d23, #ffffff, #6eb5ef
body {
  background-color: #fff5dc;

  // background-blend-mode: luminosity;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  margin: auto;
  color: #2c3e50;
  font-size: 20px;
  max-width: 940px;
  position: relative;
  background-image: url("../public/margin.png");
  background-repeat: repeat-y;
  background-position: -100px 200px;
  padding: 0px 20px;
}

p,
h1,
h2,
h3,
h4 {
  padding-left: 10px;
  padding-right: 10px;
}

h1,
h2,
h3,
h4 {
  font-family: "Raleway", sans-serif;
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
  // margin-top: 20px;
  // margin-bottom: 20px;
  // width: 100%;
  // margin: auto !important;
  padding: 15px;
  background-color: #072c00;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/%3E%3C/svg%3E");
}

strong {
  color: #f95d23;
}

a {
  position: relative;
  overflow: hidden;
  text-decoration: none;
  // color: #72cb79;
  color: #3e6b41;
  &:hover {
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
.modal-body {
  background-color: #25408f;
  color: #fff5dc;
}
.modal-header {
  background-color: #25408f;
}
.modal-class {
  border: none;
}

blockquote {
  // font: 14px/22px normal helvetica, sans-serif;
  font-size: 26px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 150px;
  padding-left: 15px;
  border-left: 5px solid #e7a201;
}
.data-modal-button {
  background-color: #fff5dc;
  color: #2c3e50;
}

.modal-button-container {
  display: flex;
  justify-content: center;
  margin: 20px 0px;
}

.footnotes {
  font-size: 12px;
}

.header-big {
  font-family: "Big Shoulders Inline Text", cursive;
  font-weight: 700;
  font-size: 7rem;
}

.img-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 1081px) and (orientation: portrait) {
  blockquote {
    margin-left: 10px;
  }

  .header-big {
    font-size: 4rem;
  }
  .img-flex {
    flex-direction: column;
  }
}
</style>
