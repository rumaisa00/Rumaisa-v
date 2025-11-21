import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // your router file
import "./style.css"; // updated style import

createApp(App).use(router).mount("#app");
