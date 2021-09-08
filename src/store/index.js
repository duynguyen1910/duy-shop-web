import { createStore } from "vuex";
import categorys from "./modules/categorys";

export default createStore({
  modules: {
    categorys,
  },
});
