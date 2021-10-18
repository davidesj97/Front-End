<template>
  <div class="header-bar">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand>Digitalout</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="menu">
            <b-nav-item to="/">Inicio</b-nav-item>
            <b-nav-item @click="goToAcercaDe">Acerca de...</b-nav-item>
            <b-nav-item @click="goToServicios">Servicios</b-nav-item>
            <b-nav-item @click="goToProductos">Productos</b-nav-item>
            <b-nav-item @click="goToContacto">Contacto</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item>Iniciar sesión</b-nav-item>
            <b-nav-item>Registrate</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import goToServicios from '@/mixins/goToServicios'
import goToProductos from '@/mixins/goToProductos'
import goToContacto from '@/mixins/goToContacto'
import goToAcercaDe from '@/mixins/goToAcercaDe'

export default {
  name: 'HeaderBar',
  mixins: [
    goToServicios,
    goToProductos,
    goToContacto,
    goToAcercaDe
  ]
}
</script>

<style lang="stylus">
  .menu
    margin 0 auto
</style>
