import Vue from 'vue'
import Vuex from 'vuex'

// Importar oauth
import oauth from './modules/oauth'
// Importar loading
import loading from './modules/loading'

Vue.use(Vuex)

export default new Vuex.Store({
  // Aquí registramos todos los módulos
  modules: {
    oauth,
    loading
  }
})
