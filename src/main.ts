import "./bootstrap.js";
import * as Vue from "vue"
import App from "./App.vue";
import router from "./routes";

new Vue({
    el: "#application",
    router,
    render: h => h(App),
});
