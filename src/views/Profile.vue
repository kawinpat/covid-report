<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" sm="12">
        <v-card class="text-center" color="#1c2f49" tile>
          <div style="width: 100%">
            <v-col class="pt-8 d-flex justify-center" cols="12">
              <v-avatar class="Avatar" size="200">
                <v-img src="@/assets/pro.jpg"></v-img>
              </v-avatar>
              <v-avatar class="AvatarS" size="150">
                <v-img src="@/assets/pro.jpg"></v-img>
              </v-avatar>
            </v-col>
            <v-list-item class="" dark>
              <v-list-item-content>
                <v-list-item-title class="title">
                  <h1 class="lsHeadtxt">KAWINPAT</h1>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <p class="lsItemTxt">RAWEEPORNPISARN</p>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="9" sm="12">
        <v-card class="cardDetail" tile>
          <v-card-title class="px-1">
            <h2
              class="lsHeadtxt txtDel"
              style="border-bottom:5px solid #03989e"
            >
              ABOUT ME
            </h2>
          </v-card-title>
          <v-card-text class="mt-4 px-1">
            <p class="txtCon">
              <strong>Hello, my name is Kawinpat</strong>
            </p>
            <p class="mt-4 txtCon ">
              Extremely motivated to constantly develop my skills and grow
              professionally. I am confident in my ability to grow up with ideas
              for solve problems immediately.
            </p>
          </v-card-text>
          <v-row class="px-1">
            <v-col cols="12" md="6" sm="6" class="pa-0">
              <v-card-title class="headCard">
                <h2
                  class="lsHeadtxt txtDel"
                  style="border-bottom:5px solid #03989e"
                >
                  CONTACT
                </h2>
              </v-card-title>
              <v-card-text class="mt-4 px-4">
                <v-icon class="material-icons">
                  mdi-place
                </v-icon>
                <p class="mt-4 txtCon ">
                  Extremely motivated to constantly develop my skills and grow
                  professionally. I am confident in my ability to grow up with
                  ideas for solve problems immediately.
                </p>
              </v-card-text>
            </v-col>
            <v-col cols="12" md="6" sm="6" class="pa-0">
              <v-card-title class="headCard">
                <h2
                  class="lsHeadtxt txtDel"
                  style="border-bottom:5px solid #03989e"
                >
                  EDUCOTION
                </h2>
              </v-card-title>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "proflie",
  computed: {
    BGStyle() {
      return {
        // backgroundSize: "cover",
        backgroundPositionY: "30%",
        Opacity: "100%",
      };
    },
  },
};
</script>

<style scoped>
.lsItemTxt {
  font-size: 18px;
}

.txtDel {
  color: #03989e;
}

.cardDetail {
  padding: 20px 50px 50px 50px;
}

.txtCon {
  font-size: 21px;
}
@media screen and (min-width: 280px) and (max-width: 599px) {
  .AvatarS {
    display: none !important;
  }
  .cardDetail {
    padding: 10px;
  }
}

@media screen and (min-width: 600px) {
}

@media screen and (max-width: 959px) {
  .AvatarS {
    display: none !important;
  }
}

@media screen and (min-width: 960px) and (max-width: 1264px) {
  .Avatar {
    display: none !important;
  }

  .lsHeadtxt {
    font-size: 30px;
    margin: 0 0 0 0px !important;
  }
}

@media screen and (min-width: 1265px) {
  .AvatarS {
    display: none !important;
  }
}
</style>
