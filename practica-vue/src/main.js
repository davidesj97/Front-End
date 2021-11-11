import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'ant-design-vue/dist/antd.css'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// CSS global
import './assets/css/main.scss'

library.add(faUser, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
