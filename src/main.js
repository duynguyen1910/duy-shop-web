import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style/tailwind.css"
import "./assets/style/global.css"
import { registerGlobalComponents } from "./utils/import"

const app = createApp(App)

registerGlobalComponents(app)

app.use(store);
app.use(router);
app.mount("#app");

