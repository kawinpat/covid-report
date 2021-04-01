const state = {
    date: [],
};
const getters = {
    getDate(state) {
        return state.date;
    },
};
const mutations = {
    keepDate(state, date) {
        state.date = date;
        return state.date;
    },
};
const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
};