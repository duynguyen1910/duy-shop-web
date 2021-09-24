import api from "../../assets/api";

const cartModule = {
  state: {
    cart: [],
    message: {},
  },
  getters: {
    cart: (state) => state.cart,
    getMessage: (state) => state.message,
  },
  actions: {
    addToCart: async (state, product) => {
      console.log(product);
      try {
        if (window.localStorage.getItem("token")) {
          await api.addToCart(product);
          state.dispatch("getCart");
        }
      } catch (error) {
        console.log(error);
      }
    },
    getCart: async ({ commit }) => {
      try {
        if (window.localStorage.getItem("token")) {
          const { data } = await api.getCart();
          commit("SET_CART", data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    deleteCart: async ({ commit }, id) => {
      try {
        const { data } = await api.deleteCart(id);
        commit("SET_MESSAGE", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_CART: (state, productList) => {
      state.cart = productList;
    },
    SET_MESSAGE: (state, message) => {
      state.message = message;
    },
  },
};

export default cartModule;
