<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" sm="12">
        <v-card class="text-center" color="#1c2f49" tile>
          <div style="width: 100%">
            <v-col class="pt-8 d-flex justify-center" cols="12">
              <v-avatar class="Avatar" size="150">
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
            <h2 class="lsHeadtxt txtDel">
              ABOUT ME
            </h2>
          </v-card-title>
          <v-card-text class="mt-4 px-1">
            <p class="txtCon">
              <strong>Hello, my name is Kawinpat</strong>
            </p>
            <p class="mt-4 paragraph txtP">
              Extremely motivated to constantly develop my skills and grow
              professionally. I am confident in my ability to grow up with ideas
              for solve problems immediately.
            </p>
          </v-card-text>

          <v-row class="px-1">
            <v-col cols="12" md="6" sm="6" class="pa-0">
              <v-card-title class="headCard">
                <h2 class="lsHeadtxt txtDel">
                  CONTACT
                </h2>
              </v-card-title>
              <v-card-text class="mt-4 px-4">
                <v-card-actions
                  v-for="(val, index) in contact"
                  :key="index"
                  class="pa-0"
                >
                  <v-btn class="mr-2" fab x-small dark depressed>
                    <v-icon size="20" class="material-icons">
                      {{ val.icon }}
                    </v-icon>
                  </v-btn>
                  <p class="my-2 txtProfile">
                    {{ val.title }}
                  </p>
                </v-card-actions>
              </v-card-text>
            </v-col>
            <v-col cols="12" md="6" sm="6" class="pa-0">
              <v-card-title class="headCard">
                <h2 class="lsHeadtxt txtDel">
                  EDUCATION
                </h2>
              </v-card-title>
              <v-card-text class="mt-4 px-4">
                <v-card-actions class="pa-0">
                  <p class="my-2 txtProfile">
                    Suan sunandha Rajabhat University
                  </p>
                </v-card-actions>
                <v-card-actions class="pa-0">
                  <p class="ma-0 mt-3 txtProfile">
                    Bachelor Degree
                  </p>
                </v-card-actions>
                <v-card-actions class="pa-0">
                  <p class="txtProfile">
                    in Information Technology, 2021
                  </p>
                </v-card-actions>
              </v-card-text>
            </v-col>
          </v-row>

          <v-row class="px-1">
            <v-col cols="12" md="8" sm="6" class="pa-0">
              <v-card-title class="headCard">
                <h2 class="lsHeadtxt txtDel">
                  SKILLS
                </h2>
              </v-card-title>
              <v-card-text class="mt-4 px-4">
                <v-row class="px-3">
                  <v-col cols="12" md="6" class="pa-0 mt-6">
                    <h3>INTERMEDIATE</h3>
                    <v-list-item
                      v-for="(val, index) in intermediate"
                      :key="index"
                      class="px-0"
                    >
                      <v-list-item-icon class="mr-0">
                        <v-icon size="15" color="black">
                          fiber_manual_record
                        </v-icon>
                      </v-list-item-icon>

                      <v-list-item-content class="py-0">
                        <v-list-item-title class="txtProfile">
                          {{ val.title }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                  <v-col cols="12" md="6" sm="6" class="pa-0 mt-6">
                    <h3>BEGINNER</h3>
                    <v-list-item
                      v-for="(val, index) in beginner"
                      :key="index"
                      class="px-0"
                    >
                      <v-list-item-icon class="mr-0">
                        <v-icon size="15" color="black">
                          fiber_manual_record
                        </v-icon>
                      </v-list-item-icon>

                      <v-list-item-content class="py-0">
                        <v-list-item-title class="txtProfile">
                          {{ val.title }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-col>
            <v-col cols="12" md="4" sm="6" class="pa-0">
              <v-card-title class="headCard">
                <h2 class="lsHeadtxt txtDel">
                  LANGUAGE
                </h2>
              </v-card-title>
              <v-card-text
                v-for="(val, index) in language"
                :key="index"
                :class="index == 1 ? 'mt-0 px-4' : 'mt-4 px-4 pb-0'"
              >
                <v-card-actions class="pa-0">
                  <p class="my-2 txtProfile">
                    {{ val.title }}
                  </p>
                </v-card-actions>
                <v-rating
                  :value="val.point"
                  readonly
                  background-color="warning"
                  color="warning"
                  size="25"
                ></v-rating>
              </v-card-text>
            </v-col>
          </v-row>

          <v-row class="px-1">
            <v-col cols="12" md="4" sm="6" class="pa-0">
              <v-card-title class="headCard">
                <h2 class="lsHeadtxt txtDel">
                  WORK EXPERIENCE
                </h2>
              </v-card-title>
              <v-card-text class="mt-4 px-4">
                <v-card-actions
                  v-for="(val, index) in language"
                  :key="index"
                  class="pa-0"
                >
                  <p class="my-2 txtProfile">
                    {{ val.title }}
                  </p>
                </v-card-actions>
              </v-card-text>
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
  data() {
    return {
      rating: 5,
      contact: [
        {
          title:
            "12/246 Majaroen rd, Pruksatown Village, Bangkok, Thailand, 10160",
          icon: "place",
        },
        {
          title: "kawinpat.ra@gmail.com",
          icon: "email",
        },
        {
          title: "093-751-4400",
          icon: "call",
        },
      ],
      language: [
        { title: "Native Thai", point: 5 },
        { title: "Good English", point: 3 },
      ],
      intermediate: [
        { title: "Website with Vue.js" },
        { title: "JavaScript" },
        { title: "RESTful API with Node.js" },
        { title: "MongoDB & MySQL" },
        { title: "HTML & CSS" },
        { title: "Bootstrap" },
        { title: "Figma" },
        { title: "Git" },
      ],
      beginner: [
        { title: "AWS | EC2" },
        { title: "Nuxt.js" },
        { title: "React.js" },
        { title: "Test with jest" },
        { title: "Scenario Test UAT" },
      ],
    };
  },
};
</script>

<style scoped>
.lsItemTxt {
  font-size: 18px;
}

.txtDel {
  color: #03989e;
  border-bottom: 5px solid #03989e;
}

.cardDetail {
  padding: 20px 40px 40px 40px;
}

.txtCon {
  font-size: 21px;
}

.txtP {
  font-size: 18px;
}

.txtProfile {
  font-size: 18px;
}

@media screen and (min-width: 280px) and (max-width: 599px) {
  .cardDetail {
    padding: 10px;
  }
  .lsHeadtxt {
    font-size: 25px;
  }
  .txtDel {
    font-size: 25px;
  }
  .txtCon {
    font-size: 18px;
  }
  .txtProfile {
    font-size: 14px;
  }
  .txtP {
    font-size: 14px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1024px) {
  .lsHeadtxt {
    font-size: 25px;
  }
  .txtDel {
    font-size: 25px;
  }
  .txtCon {
    font-size: 18px;
  }
  .txtProfile {
    font-size: 14px;
  }
  .txtP {
    font-size: 14px;
  }
}

@media screen and (max-width: 959px) {
}

@media screen and (min-width: 960px) and (max-width: 1264px) {
  .lsHeadtxt {
    font-size: 25px;
  }
}

@media screen and (min-width: 1265px) {
}

@media screen and (min-width: 1024px) and (max-width: 1277px) {
  .lsHeadtxt {
    font-size: 25px;
  }
  .lsHeadtxt {
    font-size: 25px;
  }
  .txtDel {
    font-size: 25px;
  }
  .txtCon {
    font-size: 20px;
  }
  .txtProfile {
    font-size: 16px;
  }
  .txtP {
    font-size: 16px;
  }
}
</style>
