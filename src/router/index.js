import Vue from "vue";
import VueRouter from "vue-router";
import Report from "../views/Report.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/report",
        name: "Report",
        component: Report,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASEURL,
    routes,
});

export default router;