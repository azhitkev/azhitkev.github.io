import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadFonts } from "./plugins/webfontloader";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faCopy } from "@fortawesome/free-regular-svg-icons";

library.add(faCopy);

loadFonts();

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount("#app");
