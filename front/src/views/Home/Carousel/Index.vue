<template>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    controls
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="Reparacion de celulares"
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Reparación de computadoras"
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Reparación de electrodomésticos"
      img-src="https://picsum.photos/1024/480/?image=15"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Venta de accesorios para celulares"
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  methods: {

  }
}
</script>

<style lang="stylus">
.carousel
  width 60%
  margin 20px auto
</style>
