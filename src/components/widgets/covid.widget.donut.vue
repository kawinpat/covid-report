<template>
  <v-col cols="12" md="5" xm="5">
    <v-card class="py-4">
      <div class="cardHeader">
        <h2>
          {{
            type == "all" ? "Covid Chart Report" : "Today Covid Chart Report"
          }}
        </h2>
      </div>
      <div class="pos-relative">
        <CovidChart
          :height="250"
          :type="type"
        ></CovidChart>
      </div>
    </v-card>
  </v-col>
</template>

<script lang="js">
import CovidChart from "../charts/covid.chart.donut.js";
export default {
  name: "CovidWidget",
  components: { CovidChart },
  props: ["type"],
};
</script>
<style scoped>
div >>> .cardHeader {
  position: relative;
  padding: 1rem 1.25rem;
  padding-top: 0rem !important;
  border-bottom: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

@media screen and (min-width: 320px) and (max-width: 1920px) {
  div >>> .cardHeader {
    display: inline-block;
  }
}
</style>
