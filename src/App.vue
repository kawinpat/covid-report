<template>
  <v-app>
    <v-app-bar app class="d-flex justify-center" color="indigo darken-3" dark>
      <h1>
        Covid-19 Report
      </h1>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
