<template>
  <v-container>
    <v-row class="rowChart">
      <CovidWidget :type="'all'"/>
      <CovidWidget :type="'today'"/>
    </v-row>
    <v-row class="rowChart">
      <v-col cols="12" md="10">
        <div class="titletxt">
          <p style="color:red; margin: 20px 0px -20px 0px;">*data table will be updated for the last 2 days.</p>
        </div>
        <CovidTable />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import CovidWidget from "@/components/widgets/covid.widget.vue";
import CovidTable from "@/components/tables/covid.table.vue";
export default {
  name: "Report",
  components: { CovidWidget, CovidTable },
  data() {
    return {
      dataTable: null,
      shiftDate: [],
    };
  },
  beforeMount() {
    this.onSetDate();
  },
  methods: {
    ...mapMutations(["keepDate", "keepDataTable"]),
    onSetDate() {
      try {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        for (let i = 0; i < 31; i++) {
          this.shiftDate.push(
            this.dateFormat(currentDate.setDate(currentDate.getDate() - 1))
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.keepDate(this.shiftDate);
      }
    },
  },
};
</script>
<style scoped>
.rowChart {
  display: flex;
  justify-content: center;
}

@media screen and (min-width: 320px) and (max-width: 375px) {
  .titletxt {
    font-size: 14px;
  }
}
</style>
