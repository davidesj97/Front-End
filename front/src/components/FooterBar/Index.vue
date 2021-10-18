<template>
  <footer class="footer-bar bg-dark">
    <b-row class="container d-flex justify-content-between align-items-center">
      <b-col md="12" lg="3">
        <ul>
          <li>
            <a class="link" href="#">Términos y condiciones</a>
          </li>
          <li>
            <a class="link" href="#">Aviso de privacidad</a>
          </li>
        </ul>
      </b-col>
      <b-col md="12" lg="6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4440.7572970817955!2d-103.45868365455516!3d20.620014346668395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ab85ce9477eb%3A0xebf7b2997a526c2c!2sGuadalupe%20Victoria%2063%2C%20Santa%20Ana%20Tepetitl%C3%A1n%2C%2045230%20Zapopan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1634307366208!5m2!1ses-419!2smx" width="350" height="300" style="margin: 20px 0" allowfullscreen="" loading="lazy"></iframe>
      </b-col>
      <b-col md="12" lg="3">
        <ul>
          <li>
            <a class="link" href="https://www.facebook.com/people/Digitalout-P%C3%A9rez/100071747231888/" target="_blank">Facebook</a>
          </li>
          <li>
            <a class="link" href="https://www.instagram.com/digital_out/" target="_blank">Instragram</a>
          </li>
        </ul>
      </b-col>
    </b-row>
  </footer>
</template>

<script>

export default {
  name: 'FooterBar'
}
</script>

<style lang="stylus">
.container
  margin 0 auto !important

li
  margin 10px 0
  list-style none

.link
  color #ffffff
  text-decoration none

.link:hover
  color #c0c0c0
  text-decoration underline
  cursor pointer
</style>
