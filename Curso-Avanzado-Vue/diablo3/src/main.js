// Paquetes npm
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// Archivos locales de nuestra App
import App from './App.vue'
import router from './router'
import store from './store'

// CSS global
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

// Instancia principal de Vue
new Vue({
  router,
  store,
  methods: {
    // Nuestra función
    init() {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  // Hook created
  created() {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
