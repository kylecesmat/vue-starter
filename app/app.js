import Vue from 'vue'
import VueRouter from 'vue-router'
import route from './routes'

require('./style.scss');

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: false
})
route(router)

const App = Vue.extend(require('./app.vue'))

router.start(App, '#app')
