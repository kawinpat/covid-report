<template>
  <v-app>
    <v-app-bar app color="indigo darken-3" dark>
      <div class="d-flex" style="width: 100%; height: 100%;">
        <v-row justify="end">
          <v-col cols="12" md="7" sm="12" class="colHeader">
            <h1 class="header">
              {{
                this.$route.path == "/report" ? "Covid-19 Report" : "My Profile"
              }}
            </h1>

            <v-btn
              class="hidden-sm-and-down"
              :to="this.$route.path == '/report' ? '/profile' : '/report'"
              color="primary"
            >
              {{ this.$route.path == "/report" ? "My Profile" : "Report" }}
            </v-btn>

            <v-btn
              class="btnApp"
              :to="this.$route.path == '/report' ? '/profile' : '/report'"
              color="primary"
            >
              {{ this.$route.path == "/report" ? "My Profile" : "Report" }}
            </v-btn>

            <v-btn
              class="hidden-sm-and-up"
              :to="this.$route.path == '/report' ? '/profile' : '/report'"
              icon
            >
              <v-icon>{{
                this.$route.path == "/report"
                  ? "mdi-account-circle"
                  : "mdi-chart-areaspline"
              }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  beforeMount() {
    this.$router.push({ path: "/report" }).catch((err) => err);
  },
};
</script>
<style scoped>
div >>> .colHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (min-width: 320px) and (max-width: 599px) {
  div >>> .header {
    font-size: 25px !important;
  }

  div >>> .colHeader {
    justify-content: space-between;
  }

  .btnApp {
    display: none !important;
  }
}

@media screen and (min-width: 959px) {
  .btnApp {
    display: none !important;
  }
}
</style>
