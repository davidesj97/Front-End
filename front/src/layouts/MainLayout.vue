<template>
  <div>
    <header-bar />
    <h1>MainLayout</h1>
    <router-view />
    <footer-bar />
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index'
import FooterBar from '@/components/FooterBar/Index'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>
