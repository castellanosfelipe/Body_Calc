import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/imc",
    name: "imc",
    component: () => import("../views/imc.vue"),
  },
  {
    path: "/Grasa-Corporal",
    name: "Grasa-Corporal",
    component: () => import("../views/Grasa-Corporal.vue"),
  },
  {
    path: "/Calorias-Diarias",
    name: "Calorias-Diarias",
    component: () => import("../views/Calorias-Diarias.vue"),
  },
  {
    path: "/Macros-Diarios",
    name: "Macros-Diarios",
    component: () => import("../views/Macros-Diarios.vue"),
  },
  /*  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about"  "../views/About.vue"),
  } */
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
