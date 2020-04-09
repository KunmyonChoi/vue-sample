import 'core-js/stable';
import CoreuiVue from '@coreui/vue';
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(CoreuiVue);

new Vue({
  render: h => h(App)
}).$mount("#app");
