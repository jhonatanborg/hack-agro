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
    children: [
      {
        path: "/lista-de-empresas",
        name: "company",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/company/ListCompany.vue"),
      },
      {
        path: "/cadastrar-empresa",
        name: "form-company",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/company/FormCompany.vue"),
      },
      {
        path: "/detalhes-empresa/:id",
        name: "details-company",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/company/Details.vue"),
      },
      {
        path: "/detalhes-empresa/supplies/:id",
        name: "supplies-details",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/company/Supplies.vue"),
      }
    ]
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
    redirect: { name: 'list-suplies' },

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/insumos/index.vue"),
    children: [
      {
        path: "/lista-de-insumos",
        name: "list-suplies",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/insumos/ListSupplies.vue"),
      },
      {
        path: "/cadastrar-empresa",
        name: "form-suplies",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/insumos/FormSupplies.vue"),
      },
      {
        path: "/detalhes-empresa/supplies/:id",
        name: "details-supplies",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/insumos/Details.vue"),
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
