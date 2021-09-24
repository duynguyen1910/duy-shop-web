import axios from "axios";
import { API } from "./config";

let http = axios.create({
  baseURL: API,
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  },
});

export default {
  refreshApi: () => {
    http = axios.create({
      baseURL: API,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    });
  },
  requestRegister: (user) => {
    return http.post("user/register", user);
  },
  requestLogin: (user) => {
    return http.post("user/login", user);
  },
  getAllCategories: () => {
    return http.get("category");
  },
  getCategoryBySlug: (categorySlug) => {
    return http.get(`category/${categorySlug}`);
  },
  getProductByCategories: (categoryId) => {
    return http.get(`product-by-category/${categoryId}`);
  },
  getProductBySlug: (productSlug) => {
    return http.get(`product/${productSlug}`);
  },
  addToCart: (product) => {
    return http.post("cart", product);
  },
  getCart: () => {
    return http.get("cart");
  },
  deleteCart: (id) => {
    return http.delete(`cart/${id}`);
  },
  addOrder: (cart) => {
    return http.post("order", cart);
  },
  getMyOrder: () => {
    return http.get("order");
  },
};
