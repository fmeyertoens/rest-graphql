import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Events from "./views/Events.vue";

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/events",
            name: "events",
            component: Events,
        },
        {
            path: "/logs",
            name: "logs",
            component: () => import("./views/Logs.vue"),
        },
    ],
});
