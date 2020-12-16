<template>
  <div>
    <b-col>
      <b-card
        tag="article"
        style="max-width:17rem; height:400px; font-size:16px"
        class="mb-4"
        :footer="name"
      >
        <b-card-text style="padding:0">
          <p>
            <span> <strong>Year:</strong> </span> {{ year }}
          </p>
          <p>
            <span> <strong>Area:</strong> </span> {{ area }}
          </p>
          <p>
            <span> <strong>Jurisdiction:</strong> </span> {{ jurisdiction }}
          </p>
          <p>
            <span> <strong>Purpose:</strong> </span> {{ purpose }}
          </p>
        </b-card-text>

        <div>
          <b-button
            class="modal-button"
            v-b-modal="'card-details'"
            squared
            variant="dark"
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
  props: ["name", "area", "year", "jurisdiction", "purpose"]
};
</script>

<style lang="scss" scoped>
.dark-card {
  background-color: #000000;
}
</style>
