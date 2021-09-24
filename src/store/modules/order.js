import api from "../../assets/api";

const orderModule = {
  state: {
    productOrdered: {},
    myOrder: [],
  },
  getters: {
    getProductOrdered: (state) => state.productOrdered,
    getMyOrder: (state) => state.myOrder,
  },
  actions: {
    addOrder: async (state, cart) => {
      try {
        await api.addOrder(cart);
      } catch (error) {
        console.log(error);
      }
    },
    productOrdered: ({ commit }, { cart, total }) => {
      commit("SET_PRODUCT_ORDERED", { cart, total });
    },
    myOrder: async ({ commit }) => {
      try {
        const { data } = await api.getMyOrder();
        commit("SET_MY_ORDER", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_PRODUCT_ORDERED: (state, cart) => {
      state.productOrdered = cart;
    },
    SET_MY_ORDER: (state, order) => {
      state.myOrder = order;
    },
  },
};
export default orderModule;
