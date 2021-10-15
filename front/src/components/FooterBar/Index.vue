<template>
  <footer class="footer-bar bg-dark">
    <b-row class="container d-flex justify-content-between align-items-center">
      <b-col md="12" lg="3">
        <b-nav class="d-flex flex-column">
          <b-nav-item href="#">Términos y condiciones</b-nav-item>
          <b-nav-item href="#">Aviso de privacidad</b-nav-item>
        </b-nav>
      </b-col>
      <b-col md="12" lg="6">
        <google-map :latitude="20.61951067504414" :longitude="-103.45792207415067" :title="'Ubicación'"/>
      </b-col>
      <b-col md="12" lg="3">
        <b-nav class="d-flex flex-column">
          <b-nav-item href="https://www.facebook.com/people/Digitalout-P%C3%A9rez/100071747231888/" target="_blank">Facebook</b-nav-item>
          <b-nav-item href="https://www.instagram.com/digital_out/" target="_blank">Instragram</b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </footer>
</template>

<script>
import GoogleMap from './GoogleMap/Index.vue'

export default {
  name: 'FooterBar',
  components: { GoogleMap }
}
</script>

<style lang="stylus">
.container
  margin 0 auto !important
</style>
