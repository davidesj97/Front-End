import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerOptions = [
  { path: '/', name: 'RegistroEventos' },
  { path: '/registro-participantes', name: 'RegistroParticipantes' },
  { path: '*', redirect: { name: 'RegistroEventos' } }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    component: () => import(`@/views/${r.name}/Index.vue`)
  }
})

const router = new VueRouter({
  routes
})

export default router
