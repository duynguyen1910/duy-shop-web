import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("../layouts/auth"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("../layouts/default"))
  );
  app.component(
    "policy-layout",
    defineAsyncComponent(() => import("../layouts/policy"))
  );
  app.config.globalProperties.$filters = {
    filterMoney: (money) => {
      if (money) return money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
      return 0;
    },
  };
}
