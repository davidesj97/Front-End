import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/acerca-de', name: 'AcercaDe' },
  { path: '/servicios', name: 'Servicios' },
  { path: '/productos', name: 'Productos' },
  { path: '/contacto', name: 'Contacto' },
  { path: '/about', name: 'About' },
  { path: '/Error', name: 'Error' },
  { path: '*', redirect: { name: 'Home' } }
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
