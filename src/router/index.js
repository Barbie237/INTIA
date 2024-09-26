import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/Homepage.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/homepage",
            name: "Homepage",
            component: HomePage,
        },
        {
            path: "/clients",
            name: "Clients",
            component: () => import("../components/Clients.vue"),
        },
        {
            path: "/assurances",
            name: "Assurances",
            component: () => import("../components/Assurances.vue"),
        },
         
    ],
});
 
 
export default router;
