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

import "material-design-icons-iconfont/dist/material-design-icons.css";

import apiService from "../services/apiService";
Vue.prototype.$restApi = apiService;

Vue.mixin({
    methods: {
        dateFormat(date) {
            if (date) {
                let date_ob = new Date(date);
                let day = date_ob.getDate();
                let month = date_ob.getMonth() + 1;
                let year = date_ob.getFullYear().toString();
                date_ob = `${day}/${month}/${year}`;
                return date_ob;
            }
        },
        dateFindFormat(date) {
            if (date) {
                let date_ob = date.split("/");
                let day = date_ob[0];
                let month = date_ob[1];
                let year = date_ob[2].slice(-2);
                date_ob = `${month}/${day}/${year}`;
                return date_ob;
            }
        },
        dateRange(start, end) {
            var range = [];
            for (
                let unix = start.getTime(); unix <= end.getTime(); unix += 86400000
            ) {
                console.log(unix);
                let thisDay = new Date(unix);
                range.push(thisDay);
            }
            return range;
        },
    },
});

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");