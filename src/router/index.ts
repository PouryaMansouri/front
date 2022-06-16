import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/core/services/JwtService";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/main",
        component: () => import("@/layout/Layout.vue"),
        children: [
            {
                path: "/cart",
                name: "cart",
                component: () => import("@/views/app/Cart.vue"),
            },
            {
                path: "/product",
                name: "product",
                component: () => import("@/views/app/Product.vue"),
            },
        ],
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/authentication/Login.vue"),
    },
    {
        // the 404 route, when none of the above matches
        path: "/404",
        name: "404",
        component: () => import("@/views/Error404.vue"),
    },
    {
        path: "/500",
        name: "500",
        component: () => import("@/views/Error500.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(() => {
    store.dispatch(Actions.VERIFY_AUTH, { token: JwtService.getToken() });

    // Scroll page to top on every route change
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

export default router;
