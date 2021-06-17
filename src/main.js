import Vue from 'vue'
//import axios from "axios";
import './axios';
import App from './App.vue'
import router from './routes'
import store from "@/vuex";
//import 'leaflet/dist/leaflet.css';


Vue.config.productionTip = false

//Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
