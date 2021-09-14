import api from "../../assets/api";

const orderModule = {
  state: {
    productOrdered: {},
  },
  getters: {
    getProductOrdered: (state) => state.productOrdered,
  },
  actions: {
    addOrder: async (state ,cart) => {
      try {
        await api.addOrder(cart);
      } catch (error) {
        console.log(error);
      }
    },
    productOrdered: ({ commit }, { cart, total }) => {
      commit("SET_PRODUCT_ORDERED", { cart, total });
    },
  },
  mutations: {
    SET_PRODUCT_ORDERED: (state, cart) => {
      state.productOrdered = cart;
    },
  },
};
export default orderModule;
