import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUserGroup, faServer, faCalendarDays, faSquarePollVertical, faGear } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";


library.add(faUserGroup, faServer, faCalendarDays, faSquarePollVertical, faGear, faBell);
Vue.component("font-awesome-icon", FontAwesomeIcon);
