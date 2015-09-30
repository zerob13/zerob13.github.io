import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(vueResource)
Vue.use(VueRouter)
const router = new VueRouter()
const App = Vue.extend(require('./app.vue'))
router.start(App, '#app')
