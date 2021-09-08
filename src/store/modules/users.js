import api from "../../assets/api";

const usersModule = {
  state: {
    messageRegisterSuccess: {},
    messageLoginFailed: {},
    userData: [],
    isAuth: false,
  },
  getters: {
    getMessageRegisterSuccess: (state) => state.messageRegisterSuccess,
    getMessageLoginFailed: (state) => state.messageLoginFailed,
    getUserData: (state) => state.userData,
    getAuth: (state) => state.isAuth,
  },
  actions: {
    requestRegister: async ({ commit }, user) => {
      try {
        const { data } = await api.requestRegister(user);
        commit("SET_MESSAGE_REGISTER_SUCCESS", data);
      } catch (error) {
        console.log(error);
      }
    },
    requestLogin: async ({ commit }, user) => {
      try {
        const { data } = await api.requestLogin(user);
        if (data && data.token) {
          window.localStorage.setItem("token", data.token);
          window.localStorage.setItem("email", data.email);
          window.localStorage.setItem("fullName", data.fullName);
          window.localStorage.setItem("role", data.role);
          commit("SET_AUTH", true);
          api.refreshApi();
        } else {
          commit("SET_MESSAGE_LOGIN_FAILED", data);
        }
        commit("SET_USER_DATA", data);
      } catch (error) {
        console.log(error);
      }
    },
    setAuth: ({ commit }, data) => {
      commit("SET_AUTH", data);
    },
  },
  mutations: {
    SET_MESSAGE_REGISTER_SUCCESS: (state, message) => {
      state.messageRegisterSuccess = message;
    },
    SET_MESSAGE_LOGIN_FAILED: (state, message) => {
      state.messageLoginFailed = message;
    },
    SET_USER_DATA: (state, userData) => {
      state.userData = userData;
    },
    SET_AUTH: (state, auth) => {
      state.isAuth = auth;
    },
  },
};

export default usersModule;
