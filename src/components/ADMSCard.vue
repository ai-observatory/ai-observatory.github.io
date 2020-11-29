<template>
  <div>

    <b-col>
      <b-card
        :title="name"
        img-src="https://dummyimage.com/640x360/fff/aaa"
        img-alt="info"
        tag="article"
        style="max-width:20rem"
        class="mb-2"
        footer="this is a footer"
        >
        <b-card-text>
          Lorem
        </b-card-text>
        <b-button variant="secondary"> Apply </b-button>
      </b-card>
    </b-col>
    <!-- <button class="btn btn-primary"> test </button> -->
  </div>
</template>

<script>
export default{
  props : ["name"]
};
</script>

<style lang="scss" scoped>

</style>
