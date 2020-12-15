<template>
  <b-container class="dropdown-container">
    <Dropdown ref="child"></Dropdown>
    <button type="button" name="button" @click="clicked"></button>
    <!-- <Dropdown
      v-for="card in purpose"
      :key="card"
      :name="card"
      :desc="card"
    ></Dropdown> -->
    <b-row align-v="center" align-h="center">
      <Card
        v-for="card in displayCards"
        :key="card.ID"
        :name="card.Name"
        :desc="card.Area"
      >
      </Card>
    </b-row>
  </b-container>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";
import Card from "@/components/ADMSCard.vue";
import DataFrame from "dataframe-js";

export default {
  name: "Home",

  components: {
    Dropdown: Dropdown,
    Card: Card
  },
  // df is total database
  // purpose needs to be list
  // display cards should be the filtered df
  data() {
    return { df: [], purpose: [], area: [], displayCards: [] };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.df = await DataFrame.fromJSON("adms_array.json");
      this.df.select("Area", "Purpose").show();
      // translating to list
      this.purpose = this.df.distinct("Purpose").toArray();
      this.purpose = this.df.listColumns();
      // this.area = this.df.distinct("Area").toDict();
      // this.area = this.df.listColumns();
      this.displayCards = this.df.distinct("Purpose").toCollection();
      console.log(this.displayCards);
    },
    clicked() {
      // var obj = Object.assign({}, this.$refs.child.selected);
      // console.log(this.$refs.child.selected);
      
      var d = [];
      var c = [];
      for (let i = 0; i < this.$refs.child.selected.length; i++) {
        console.log(JSON.parse(JSON.stringify(this.$refs.child.selected[i])));
        let x = JSON.parse(JSON.stringify(this.$refs.child.selected[i]));
        d.push(Object.keys(x));
        c.push(Object.values(x));
        console.log(d);
      }
      const filters = new DataFrame(c, d);
      filters.show();
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
