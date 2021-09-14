import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import PrivacyPolicy from "../components/PrivacyPolicy.vue";
import TermOfService from "../components/TermOfService.vue";
import Product from "../views/Products.vue";
import Categories from "../views/Categories.vue";
import Cart from "../views/Cart.vue";
import Order from "../views/Order.vue";
import Purchase from "../views/Purchase.vue";

const routes = [
  // {
  //   path: "*",
  //   name: "Error404",
  //   component: Error404,
  // },
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
    path: "/categories/:slug",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/products/:slug",
    name: "Product",
    component: Product,
  },
  {
    path: "/cart",
    name: "Cart",
    meta: {
      layout: "auth",
    },
    component: Cart,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "/purchase",
    name: "Purchase",
    component: Purchase,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((from, to, next) => {
  if (window.localStorage.getItem("token")) {
    store.dispatch("setAuth", true);
  }
  if (from.name === "Cart" && !store.state.users.isAuth) {
    return next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
