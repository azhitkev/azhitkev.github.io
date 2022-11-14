import { createApp } from "vue";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadFonts } from "./plugins/webfontloader";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(faCopy);
library.add(faFacebookSquare, faInstagram, faTwitter, faLinkedin);

loadFonts();

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBE0Uc-gUn3BKnoGUQTTodtgNSE0atrHWk",
    },
  })
  .use(router)
  .use(store)
  .mount("#app");
