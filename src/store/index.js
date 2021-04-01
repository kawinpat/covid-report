import Vue from "vue";
import Vuex from "vuex";
import covidModule from "./modules/covid"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        covidModule,
    },
});