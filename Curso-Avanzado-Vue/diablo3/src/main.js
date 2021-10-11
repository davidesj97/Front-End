// Paquetes npm
import Vue from 'vue'

// BootstrapVue
import './plugins/bootstrapVue'

// Vue Font-Awesome
import './plugins/fontAwesome'

// Archivos locales de nuestra App
import App from './App.vue'
import router from './router'
import store from './store'

// CSS global
import '@/assets/css/main.styl'

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
