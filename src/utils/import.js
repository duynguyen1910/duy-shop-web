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
      if (money) return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return 0;
    },
  };
}
