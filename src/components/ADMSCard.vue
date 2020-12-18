<template>
  <div>
    <b-col>
      <b-card
        :img-src="getImgUrl(imgsrc)"
        img-alt="Icon"
        img-top
        tag="article"
        style="max-width:17rem; height:500px; font-size:13px; border: none"
        class="mb-4"
      >
        <b-card-text style="padding:0">
          <div style="padding-bottom:15px">
            <span> <strong>Name:</strong> </span> {{ name }}
          </div>
          <div
            class=""
            style="display:grid; grid-template-columns:1fr 1fr; grid-gap:1px"
          >
            <div>
              <span> <strong>Year:</strong> </span> {{ year }}
            </div>
            <div>
              <span> <strong>Area:</strong> </span> {{ area }}
            </div>
            <div>
              <span> <strong>Jurisdiction:</strong> </span> {{ jurisdiction }}
            </div>
            <div>
              <span> <strong>Purpose:</strong> </span> {{ purpose }}
            </div>
          </div>
        </b-card-text>

        <div>
          <b-button
            class="modal-button"
            v-b-modal="'card-details'"
            squared
            variant="dark"
            v-on:click="modalClick"
            :value="id"
            >More</b-button
          >
        </div>
      </b-card>
    </b-col>
    <!-- <button class="btn btn-primary"> test </button> -->
  </div>
</template>

<script>
export default {
  props: ["name", "area", "year", "jurisdiction", "purpose", "id", "imgsrc"],
  methods: {
    modalClick() {
      this.$emit("card-callback", this.id);
    },
    getImgUrl(img) {
      var images = require.context("../../public/", false, /\.png$/);
      return images("./" + img + ".png");
    }
  }
};
</script>

<style lang="scss" scoped>
.dark-card {
  background-color: #000000;
}
</style>
