<template>
  <div>
    <h1 style="padding-top:20px">The Legal, Institutional and Technical Architecture of ADMS in India</h1>
    <b-tabs content-class="mt-3">
      <Context1></Context1>
      <Context2></Context2>
      <Context3></Context3>
    </b-tabs>
  </div>
</template>

<script>
import Context1 from "@/components/Context-Tab-1.vue";
import Context2 from "@/components/Context-Tab-2.vue";
import Context3 from "@/components/Context-Tab-3.vue";

export default {
  name: "Home",

  components: {
    Context1: Context1,
    Context2: Context2,
    Context3: Context3
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
