import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import VueCarousel from './components/Carousel/index.js'
import App from './components/App'
import router from './router'
import store from './store'
import "./style.css"
Vue.use(VueCarousel);

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
