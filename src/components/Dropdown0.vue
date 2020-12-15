<template>
  <div>
    <b-dropdown id="dropdown-1" :text="name" class="m-md-2 dropdown">
      <!-- <b-dropdown-item>Facial Recognition</b-dropdown-item> -->
      <div>
        <b-form-checkbox-group
          v-model="purposeSelected"
          :options="purposeFilters"
          class="mb-3"
          value-field="name"
          text-field="item"
          disabled-field="notEnabled"
        >
        </b-form-checkbox-group>
      </div>
      
      <b-dropdown-divider></b-dropdown-divider>
      <!-- <b-dropdown-item active>Crime Data Analysis</b-dropdown-item> -->
      <!-- <b-dropdown-item disabled>Sentiment Analysis</b-dropdown-item> -->
    </b-dropdown>
  </div>
</template>

<script>
export default {
  props: ["name", "desc"],
  data() {
    return {
      filterDict: [],
      selected: [],
      purposeSelected: [],
      purposeFilters: [
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
  }
};
</script>

<style lang="scss" scoped></style>
