<template>
  <div>
    <b-col>
      <b-card
        :title="name"
        img-src="https://loremflickr.com/640/360"
        img-alt="info"
        tag="article"
        style="max-width:20rem"
        class="mb-2 dark-card"
        footer="this is a footer"
      >
        <b-card-text>
          {{ desc }}
        </b-card-text>
        <b-button variant="secondary"> Details </b-button>
      </b-card>
    </b-col>
    <!-- <button class="btn btn-primary"> test </button> -->
  </div>
</template>

<script>
export default {
  props: ["name", "desc"]
};
</script>

<style lang="scss" scoped>
.dark-card {
  background-color: #000000;
}
</style>
