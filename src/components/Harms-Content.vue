<template>
  <div>
    <h1>Unpacking Algorithmic Harms</h1>
    <b-tabs content-class="my-3">
      <Harms1></Harms1>
      <Harms2></Harms2>
      <Harms3></Harms3>
      <Harms4></Harms4>
    </b-tabs>
  </div>
</template>

<script>
import Harms1 from "@/components/Harms-Tab-1.vue";
import Harms2 from "@/components/Harms-Tab-2.vue";
import Harms3 from "@/components/Harms-Tab-3.vue";
import Harms4 from "@/components/Harms-Tab-4.vue";
export default {
  name: "Home",

  components: {
    Harms1: Harms1,
    Harms2: Harms2,
    Harms3: Harms3,
    Harms4: Harms4
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
