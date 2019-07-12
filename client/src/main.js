import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router'
import bookDetail from './components/book-detail.vue'
const Foo = { template: '<div>foo</div>' }
Vue.use(VueRouter)
const routes = [
  {
    path:'/',
    component: Foo
  },
  {
    path:'/book',
    component: bookDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
