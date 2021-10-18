<template>
  <div class="home">
    <carousel />
    <info-principal />
  </div>
</template>

<script>
import Carousel from './Carousel/Index'
import InfoPrincipal from './InfoPrincipal/Index'

export default {
  name: 'Home',
  components: {
    Carousel,
    InfoPrincipal
  }
}
</script>
