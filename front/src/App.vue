<template>
  <div id="app">
    <main-layout />
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

export default {
  name: 'App',
  components: { MainLayout }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
