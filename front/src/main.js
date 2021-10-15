import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// BootstrapVue
import './plugins/bootstrapVue'

// GoogleMaps
import './plugins/map'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
