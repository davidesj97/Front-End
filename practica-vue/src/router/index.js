import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/eventos',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/RegistroEventos/Index.vue')
      },
      {
        path: '/evento/:id',
        name: 'RegistroParticipantes',
        component: () => import('../views/RegistroParticipantes/Index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
