import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/base.css";
import Vue3Lottie from "vue3-lottie";

const app = createApp(App);

app.use(Vue3Lottie);
app.use(router);

app.mount("#app");
