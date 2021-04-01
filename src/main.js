import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "vue-loading-overlay";

Vue.config.productionTip = false;

// Axios
Vue.use(VueAxios, axios);

// Loading Overay
Vue.use(Loading);
import "vue-loading-overlay/dist/vue-loading.css";

import apiService from "../services/apiService";
Vue.prototype.$restApi = apiService;

Vue.mixin({
    methods: {
        dateFormat(date) {
            if (date) {
                let date_ob = new Date(date);
                let day = date_ob.getDate()
                let month = date_ob.getMonth() + 1
                let year = date_ob
                    .getFullYear()
                    .toString().slice(-2)
                date_ob = `${day}/${month}/${year}`;
                return date_ob;
            }
        },
        dateFindFormat(date) {
            if (date) {
                let date_ob = date.split("/");
                let day = date_ob[0]
                let month = date_ob[1]
                let year = date_ob[2]
                date_ob = `${month}/${day}/${year}`;
                return date_ob;
            }
        },
        getOwnProperty(Obj) {
            let result = [];
            for (let key in Obj) {
                if (Object.prototype.hasOwnProperty.call(Obj, key)) {
                    result.push({
                        date: key,
                        cases: null,
                        deaths: null,
                        recovered: null,
                        country: null,
                        province: null,
                    });
                }
            }
            return result;
        },
        getValue(Obj) {
            let result = [];
            for (let key in Obj) {
                if (Object.prototype.hasOwnProperty.call(Obj, key)) {
                    result.push(Obj[key]);
                }
            }
            return result;
        },
        getArrayValue(data, type) {
            let result = [];
            for (let i = 0; i < data.length; i++) {
                if (type == "country") {
                    result.push(data[i].country);
                } else {
                    result.push(data[i].province);
                }
            }
            return result;
        },
    },
});

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");