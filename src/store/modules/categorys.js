import api from "../../assets/api";

const categorysModule = {
  state: {
    categorys: [],
  },
  getters: {
    categorys: (state) => state.categorys,
  },
  actions: {
    getAllCategogys: async ({ commit }) => {
      try {
        const { data } = await api.getAllCategogys();
        commit("SET_CATEGOGY", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_CATEGOGY: (state, category) => {
      state.categorys = category;
    },
  },
};

export default categorysModule;
