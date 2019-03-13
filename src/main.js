import Vue from "vue";
import App from "./app.vue";
import router from "./router";

import {a} from "./router"
console.log(a);
new Vue({
  el: "#app",
  router: router,
  template: "<App></App>",
  components: {
    App: App
  }
})