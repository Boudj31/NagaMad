
import Vue from 'vue';
import axios from "axios";
import App from './App.vue';
import router from './routes';
import i18n from './i18n';
import 'leaflet/dist/leaflet.css';


Vue.config.productionTip = false

//Vue.prototype.$http = axios

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
