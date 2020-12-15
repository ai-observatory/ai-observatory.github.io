<template>
  <div>
    <div>
      <b-form-checkbox-group
        v-model="purposeSelected"
        :options="purposeFilters"
        class="mb-3"
        value-field="name"
        text-field="item"
        disabled-field="notEnabled"
      ></b-form-checkbox-group>
      <div class="mt-3">
        Selected: <strong>{{ purposeSelected }}</strong>
      </div>
    </div>

    <div>
      <b-form-checkbox-group
        v-model="areaSelected"
        :options="areaFilters"
        class="mb-3"
        value-field="name"
        text-field="item"
        disabled-field="notEnabled"
      ></b-form-checkbox-group>
      <div class="mt-3">
        Selected: <strong>{{ areaSelected }}</strong>
      </div>
    </div>

    <div>
      <b-form-checkbox-group
        v-model="issueSelected"
        :options="issueFilters"
        class="mb-3"
        value-field="name"
        text-field="item"
        disabled-field="notEnabled"
      ></b-form-checkbox-group>
      <div class="mt-3">
        Selected: <strong>{{ issueSelected }}</strong>
      </div>
    </div>

    <div>
      <b-form-checkbox-group
        v-model="algorithmSelected"
        :options="algorithmFilters"
        class="mb-3"
        value-field="name"
        text-field="item"
        disabled-field="notEnabled"
      ></b-form-checkbox-group>
      <div class="mt-3">
        Selected: <strong>{{ algorithmSelected }}</strong>
      </div>
    </div>

    <div>
      <b-form-checkbox-group
        v-model="locationSelected"
        :options="locationFilters"
        class="mb-3"
        value-field="name"
        text-field="item"
        disabled-field="notEnabled"
      ></b-form-checkbox-group>
      <div class="mt-3">
        Selected: <strong>{{ locationSelected }}</strong>
      </div>
    </div>

    <div>
      <b-form-checkbox-group
        v-model="yearSelected"
        :options="yearFilters"
        class="mb-3"
        value-field="name"
        text-field="item"
        disabled-field="notEnabled"
      ></b-form-checkbox-group>
      <div class="mt-3">
        Selected: <strong>{{ yearSelected }}</strong>
      </div>
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
      purposeSelected: [],
      areaSelected: [],
      issueSelected: [],
      algorithmSelected: [],
      locationSelected: [],
      yearSelected: [],
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
      ],
      areaFilters: [
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
      ],
      issueFilters: [
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
      ],
      algorithmFilters: [
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
      ],
      locationFilters: [
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
      ],
      yearFilters: [
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
