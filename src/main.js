import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "./assets/css/main.css";
import VueTailwind from "vue-tailwind";

Vue.config.productionTip = false;

const settings = {};

Vue.use(VueTailwind, settings);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
