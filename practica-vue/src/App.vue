<template>
  <div id="app">
    <login v-on:is-login="login" v-if="!isLogin"/>
    <main-layout v-else/>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import Login from '@/views/Login/Index'

export default {
  name: 'App',
  components: {
    MainLayout,
    Login
  },
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    login () {
      this.isLogin = true
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
