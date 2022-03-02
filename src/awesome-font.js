import Vue from "vue";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {faUserFriends, faUserGroup} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-regular-svg-icons'



library.add(faUserFriends, faUserGroup, faBell)
Vue.component('font-awesome-icon', FontAwesomeIcon)
