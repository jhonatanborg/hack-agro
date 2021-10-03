import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: { name: 'company' }
  },
  {
    path: "/empresa",
    name: "company",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/company/index.vue"),
  },
  {
    path: "/movimentacao",
    name: "moviments",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/moviments/index.vue"),
  },
  {
    path: "/insumos",
    name: "insumos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/insumos/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
