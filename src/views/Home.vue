<template>
  <b-container>
    <b-row align-v="center" align-h="center">
      <ADMSCard v-for="card in displayCards" :key="card.ID" :name="card.Name" :desc="card.Area"> </ADMSCard>
      <!-- <ADMSCard> </ADMSCard> -->
      <!-- <ADMSCard> </ADMSCard> -->
      <!-- <ADMSCard> </ADMSCard> -->
    </b-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      pills
      @input="paginate(currentPage)"
      >
    </b-pagination>
  </b-container>
</template>

<script>
// @ is an alias to /src
  import ADMSCard from "@/components/ADMSCard.vue";
export default {
  name: "Home",

  components: {
    ADMSCard: ADMSCard
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      cards: [],
      displayCards: [],
      currentPage: 1,
      rows: 1,
      perPage: 9
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch("adms2.json");
      const val = await res.json();
      this.cards = val;
      this.displayCards = val.slice(0,this.perPage);
      this.rows = this.cards.length;
      console.log(val);
    },
    paginate(currentPage){
    const start = (currentPage-1) * this.perPage;
    this.displayCards = this.cards.slice(start, start+ this.perPage)
    }
  }
};
</script>
