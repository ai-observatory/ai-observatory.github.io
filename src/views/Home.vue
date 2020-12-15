<template>
  <b-container>
    <Landing></Landing>
  </b-container>
</template>

<script>
import Landing from "@/components/Landing-Content.vue";
// const dfd = require("danfojs-node");
// import { DataFrame } from "danfojs-node";
//import { Series } from "danfojs/dist/core/series";
import DataFrame from "dataframe-js";

export default {
  name: "Home",

  components: {
    Landing: Landing
  },
  data() {
    return { df: [] };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      console.log("hi");
      this.df = await DataFrame.fromJSON("adms_array.json");
      this.df.select("Area", "Purpose").show();
      this.df.distinct("Purpose").show();
    }
  }
};
</script>
