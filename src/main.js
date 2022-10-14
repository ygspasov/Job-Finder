import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearchDollar } from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import "./assets/tailwind.css";

library.add(faSearchDollar);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
