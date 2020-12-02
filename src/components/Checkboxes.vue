<template>
  <div>
    <b-form-checkbox-group
      v-model="selected"
      :options="filters"
      class="mb-3"
      value-field="name"
      text-field="item"
      disabled-field="notEnabled"
    ></b-form-checkbox-group>
    <div class="mt-3">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.makingFilter();
  },

  data() {
    return {
      filterDict: [],
      selected: [],
      filters: [
        {
          item: "Facial Recognition",
          name: { Purpose: "Facial Recognition" }
        },
        {
          item: "Social Media Surveillance",
          name: { Purpose: "Social Media Surveillance" }
        },
        {
          item: "Predicting Policing",
          name: { Purpose: "Predicting Policing" }
        },
        {
          item: "Sentiment Analysis",
          name: { Purpose: "Sentiment Analysis" }
        }
      ]
    };
  },
  methods: {
    makingFilter() {
      console.log(this.selected);
      console.log(this.filters[0]["name"]["Purpose"]);
    }
  }
};
</script>
