import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import "bootstrap/scss/bootstrap-reboot.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "./assets/css/main.scss";

import "./awesome-font";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
