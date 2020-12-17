<template>
  <b-container class="dropdown-container">
    <Dropdown ref="child"></Dropdown>
  </b-container>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";

export default {
  name: "Home",

  components: {
    Dropdown: Dropdown,
  },
};
</script>

<style lang="scss" scoped>
.dropdown-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
