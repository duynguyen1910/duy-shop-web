import { createStore } from "vuex";
import categories from "./modules/categories";
import products from "./modules/products";
import users from "./modules/users";
import cart from "./modules/cart";
import order from "./modules/order";

export default createStore({
  modules: {
    categories,
    products,
    users,
    cart,
    order
  },
});
