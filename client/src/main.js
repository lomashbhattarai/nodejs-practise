import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router'
import routes from './routes/routes'
Vue.use(VueRouter)


const axios = require('axios');
axios.defaults.headers.authorization = localStorage.token;
Vue.prototype.axios = axios;
window.axios = axios;

import Vuex from 'vuex';
import store from './store/store';

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
