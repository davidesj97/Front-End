<template>
  <div class="header-bar">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand>Digitalout</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="menu">
            <b-nav-item to="/">Inicio</b-nav-item>
            <b-nav-item href="#">Acerca de...</b-nav-item>
            <b-nav-item href="#">Servicios</b-nav-item>
            <b-nav-item href="#">Productos</b-nav-item>
            <b-nav-item href="#">Contacto</b-nav-item>
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
export default {
  name: 'HeaderBar'
}
</script>

<style lang="stylus">
  .menu
    margin 0 auto
</style>
