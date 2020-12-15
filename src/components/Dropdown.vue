<template>
  <div style="margin:auto; display:flex;">
    <b-dropdown id="dropdown-1" text="Purpose" class="m-md-2 dropdown">
      <!-- <b-dropdown-item>Facial Recognition</b-dropdown-item> -->
      <div>
        <b-form-checkbox-group
          v-model="selected"
          :options="purposeFilters"
          class="mb-3"
          value-field="name"
          text-field="item"
          disabled-field="notEnabled"
          @change="updateSelected"
        >
        </b-form-checkbox-group>
      </div>
      <b-dropdown-divider></b-dropdown-divider>
      <div>
        Selected: <strong>{{ selected }}</strong>
      </div>
      <!-- <b-dropdown-item active>Crime Data Analysis</b-dropdown-item> -->
      <!-- <b-dropdown-item disabled>Sentiment Analysis</b-dropdown-item> -->
    </b-dropdown>

    <b-dropdown id="dropdown-1" text="Area" class="m-md-2 dropdown">
      <div>
        <b-form-checkbox-group
          v-model="selected"
          :options="areaFilters"
          class="mb-3"
          value-field="name"
          text-field="item"
          disabled-field="notEnabled"
          @change="updateSelected"
        >
        </b-form-checkbox-group>
      </div>
      <b-dropdown-divider></b-dropdown-divider>
      <div>
        Selected: <strong>{{ selected }}</strong>
      </div>
    </b-dropdown>

    <b-dropdown id="dropdown-1" text="Issue" class="m-md-2 dropdown">
      <div>
        <b-form-checkbox-group
          v-model="selected"
          :options="issueFilters"
          class="mb-3"
          value-field="name"
          text-field="item"
          disabled-field="notEnabled"
          @change="updateSelected"
        >
        </b-form-checkbox-group>
      </div>
      <b-dropdown-divider></b-dropdown-divider>
      <div>
        Selected: <strong>{{ selected }}</strong>
      </div>
    </b-dropdown>

    <b-dropdown id="dropdown-1" text="Algorithm" class="m-md-2 dropdown">
      <div>
        <b-form-checkbox-group
          v-model="selected"
          :options="algorithmFilters"
          class="mb-3"
          value-field="name"
          text-field="item"
          disabled-field="notEnabled"
          @change="updateSelected"
        >
        </b-form-checkbox-group>
      </div>
      <b-dropdown-divider></b-dropdown-divider>
      <div>
        Selected: <strong>{{ selected }}</strong>
      </div>
    </b-dropdown>

    <b-dropdown id="dropdown-1" text="Location" class="m-md-2 dropdown">
      <div>
        <b-form-checkbox-group
          v-model="selected"
          :options="locationFilters"
          class="mb-3"
          value-field="name"
          text-field="item"
          disabled-field="notEnabled"
          @change="updateSelected"
        >
        </b-form-checkbox-group>
      </div>
      <b-dropdown-divider></b-dropdown-divider>
      <div>
        Selected: <strong>{{ selected }}</strong>
      </div>
    </b-dropdown>
  </div>
</template>

<script>
import DataFrame from "dataframe-js";
export default {
  props: ["name", "desc", "nme"],
  data() {
    return {
      filterDict: [],
      selected: [],
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
          item: "Policing and Surveillance",
          name: { Area: "Policing and Surveillance" }
        },
        {
          item: "Welfare",
          name: { Area: "Welfare" }
        },
        {
          item: "Health",
          name: { Area: "Health" }
        },
        {
          item: "Taxation",
          name: { Area: "Taxation" }
        }
      ],
      issueFilters: [
        {
          item: "Cisco",
          name: { Issue: "Cisco" }
        },
        {
          item: "Innefu",
          name: { Issue: "Innefu" }
        },
        {
          item: "Staqu",
          name: { Issue: "Staqu" }
        },
        {
          item: "Clearview",
          name: { Issue: "Clearview" }
        }
      ],
      algorithmFilters: [
        {
          item: "Machine Learning",
          name: { Algorithm: "Machine Learning" }
        },
        {
          item: "Defuplication",
          name: { Algorithm: "Defuplication" }
        },
        {
          item: "Matching Algorithm",
          name: { Algorithm: "Matching Algorithm" }
        },
        {
          item: "Predictive Analysis",
          name: { Algorithm: "Predictive Analysis" }
        }
      ],
      locationFilters: [
        {
          item: "Delhi",
          name: { Location: "Delhi" }
        },
        {
          item: "Mumbai",
          name: { Location: "Mumbai" }
        },
        {
          item: "Kolkata",
          name: { Location: "Kolkata" }
        },
        { item: "Chennai", name: { Location: "Chennai" } }
      ]
    };
  },
  methods: {
    updateSelected() {
      let s = JSON.parse(JSON.stringify(this.selected));
      var d = [];
      console.log(Object.values(s));
      for (let i = 0; i < s.length; i++) {
        let v = Object.values(s[i]).[0];
        let k = Object.keys(s[i]).[0];
        console.log(k);
        let o = {filterCriteria: k, filterOption: v};
        console.log(o);
        d.push(o);
        // console.log(d);
      }
      this.constructFilterDF(d);
    },
    constructFilterDF(data) {
      const x = new DataFrame(data, ["filterCriteria", "filterOption"]);
      x.show();
    }
  }
};
</script>

<style lang="scss" scoped></style>
