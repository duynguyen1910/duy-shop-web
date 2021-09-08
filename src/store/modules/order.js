import api from "../../assets/api";

const orderModule = {
  state: {
    productOrdered: [],
  },
  getters: {
    getProductOrdered: (state) => state.productOrdered,
  },
  actions: {
    addOrder: async (cart) => {
      await api.addOrder(cart);
    },
    productOrdered: ({ commit }, {cart, total}) => {
      console.log(total, cart)
      commit("SET_PRODUCT_ORDERED", cart);
    },
  },
  mutations: {
    SET_PRODUCT_ORDERED: (state, cart) => {
      state.productOrdered = cart;
    },
  },
};
export default orderModule;
