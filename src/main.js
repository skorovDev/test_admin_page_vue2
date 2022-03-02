import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import "bootstrap/scss/bootstrap-reboot.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "./assets/css/main.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faAddressCard)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  store,
  render: (h) => h(App)
}).$mount("#app");
