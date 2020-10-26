import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";
import router from "../router";


Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
