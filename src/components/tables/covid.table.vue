<template>
  <div>
    <v-card class="mt-6">
      <v-card-title>
        <h3 class="titletxt">
          Table Report
          <div class="ml-4 primary--text">Date: {{ this.dateSelect }}</div>
        </h3>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-select
            v-model="dateSelect"
            :items="this.getDate"
            label="date"
            solo
            hide-details
            hide-selected
            menu-props="auto"
          ></v-select>
        </v-col>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="this.dataTable"
        :search="search"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        @page-count="pageCount = $event"
      >
        <template v-slot:[`item.province`]="{ item }">
          {{ item.province ? item.province : "-" }}
        </template>
        <template v-slot:[`item.cases`]="{ item }">
          {{ item.cases ? item.cases : "0" }}
        </template>
        <template v-slot:[`item.deaths`]="{ item }">
          {{ item.deaths ? item.deaths : "0" }}
        </template>
        <template v-slot:[`item.recovered`]="{ item }">
          {{ item.recovered ? item.recovered : "0" }}
        </template>
      </v-data-table>
    </v-card>
    <div class="text-center mt-5 mb-10">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "covidTable",
  data() {
    return {
      dataTable: [],
      finalDataTable: [],
      dateSelect: null,
      dateFind: null,
      search: "",
      page: 1,
      pageCount: 0,
      itemsPerPage: 15,
      headers: [
        {
          text: "Country",
          align: "start",
          value: "country",
        },
        { text: "province", value: "province" },
        { text: "Cases today", value: "cases" },
        { text: "Deaths today", value: "deaths" },
        { text: "Recovered today", value: "recovered" },
      ],
      date: [],
    };
  },
  mounted() {
    this.dateSelect = this.getDate[0];
  },
  watch: {
    dateSelect: function() {
      if (this.dateSelect) {
        this.onFilter(this.dateSelect);
      } else {
        this.onFilter(this.dateFormat(new Date()));
      }
    },
  },
  computed: {
    ...mapGetters(["getDate"]),
  },
  methods: {
    ...mapMutations(["keepDataTable"]),
    async onFilter(date) {
      if (date) {
        let dateSelect = date;
        let currentDate = this.dateFormat(new Date());

        let ds = dateSelect.split("/");
        let cd = currentDate.split("/");

        var from = new Date(ds[2], parseInt(ds[1]) - 1, ds[0]);
        var to = new Date(cd[2], parseInt(cd[1]) - 1, cd[0]);

        let fineBetweenDate = this.dateRange(from, to);
        
        let sum = fineBetweenDate.length - 1;

        this.dateFind = this.dateFindFormat(dateSelect);
        this.dataTable = await this.$restApi.get(`historical?lastdays=${sum}`);

        for (let i = 0; i < this.dataTable.length; i++) {
          let casesObj = this.dataTable[i].timeline.cases;
          let deathsObj = this.dataTable[i].timeline.deaths;
          let recoveredObj = this.dataTable[i].timeline.recovered;
          for (let c in casesObj) {
            if (this.dateFind == c) {
              this.dataTable[i].cases = casesObj[c];
            }
          }
          for (let d in deathsObj) {
            if (this.dateFind == d) {
              this.dataTable[i].deaths = deathsObj[d];
            }
          }
          for (let r in recoveredObj) {
            if (this.dateFind == r) {
              this.dataTable[i].recovered = recoveredObj[r];
            }
          }
        }
      }
    },
  },
};
</script>

<style scoped>
div
  >>> .theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  background-color: #3949ab;
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-align: center !important;
}

div >>> .v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
  font-size: 16px;
  font-weight: bold;
  text-align: center !important;
}

div.v-data-table >>> label.v-label.theme--light {
  color: white !important;
}

div >>> .titletxt {
  display: flex !important;
}

@media screen and (min-width: 320px) and (max-width: 320px) {
  div >>> .titletxt {
    font-size: 20px;
  }
}

@media screen and (min-width: 375px) and (max-width: 414px) {
  div >>> .titletxt {
    font-size: 23px;
  }
}
</style>
