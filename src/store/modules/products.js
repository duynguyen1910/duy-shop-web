import api from "../../assets/api";

const productsModule = {
  state: {
    products: [],
    productBySlug: {},
  },
  getters: {
    products: (state) => state.products,
    productBySlug: (state) => state.productBySlug,
  },
  actions: {
    getProductByCategories: async ({ commit }, categoryId) => {
      try {
        const { data } = await api.getProductByCategories(categoryId);
        commit("SET_PRODUCT_BY_CATEGORIES", data);
      } catch (error) {
        console.log(error);
      }
    },
    getProductBySlug: async ({ commit }, productSlug) => {
      try {
        const { data } = await api.getProductBySlug(productSlug);
        commit("SET_PRODUCT_BY_SLUG", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_PRODUCT_BY_CATEGORIES: (state, product) => {
      state.products = product;
    },
    SET_PRODUCT_BY_SLUG: (state, product) => {
      state.productBySlug = product;
    },
  },
};

export default productsModule;
