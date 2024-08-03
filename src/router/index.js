import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return { top: 0, behavior: "smooth" }
    },
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("../views/Home.vue")
        },
        {
            path: "/List",
            name: "List",
            component: () => import("../views/List.vue")
        },
        {
            path: "/Noting",
            name: "Noting",
            component: () => import("../views/Noting.vue")
        },
        {
            path: "/Setting",
            name: "Setting",
            component: () => import ("../views/Setting.vue")
        }
    ]
})

export default router;