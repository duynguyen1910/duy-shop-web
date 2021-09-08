import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PrivacyPolicy from "../components/PrivacyPolicy.vue";
import TermOfService from "../components/TermOfService.vue";
import Products from "../views/Products.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    meta: {
      layout: "policy",
    },
    component: PrivacyPolicy,
  },
  {
    path: "/term-of-service",
    name: "TermOfService",
    meta: {
      layout: "policy",
    },
    component: TermOfService,
  },
  {
    path: "/product",
    name: "Products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
