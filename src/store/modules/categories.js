import api from "../../assets/api";

const categoriesModule = {
  state: {
    categories: [],
    categoriesBySlug: {},
  },
  getters: {
    categories: (state) => state.categories,
    categoriesBySlug: (state) => state.categoriesBySlug,
  },
  actions: {
    getAllCategories: async ({ commit }) => {
      try {
        const { data } = await api.getAllCategories();
        commit("SET_CATEGOGY", data);
      } catch (error) {
        console.log(error);
      }
    },
    getCategoryBySlug: async ({ commit }, categorySlug) => {
      try {
        const { data } = await api.getCategoryBySlug(categorySlug);
        commit("SET_CATEGOGY_BY_SLUG", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_CATEGOGY: (state, category) => {
      state.categories = category;
    },
    SET_CATEGOGY_BY_SLUG: (state, categoryBySlug) => {
      state.categoriesBySlug = categoryBySlug;
    },
  },
};

export default categoriesModule;
