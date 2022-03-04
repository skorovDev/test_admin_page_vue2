import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faUserGroup,
  faServer,
  faCalendarDays,
  faSquarePollVertical,
  faGear,
  faMagnifyingGlass,
  faUserLarge,
  faAngleDown,
  faCirclePlus,
  faMessage,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(
  faUserGroup,
  faServer,
  faCalendarDays,
  faSquarePollVertical,
  faGear,
  faMagnifyingGlass,
  faEnvelope,
  faBell,
  faUserLarge,
  faAngleDown,
  faCirclePlus,
  faMessage,
  faPaperclip
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
