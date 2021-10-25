<template>
  <div>
    <header-bar />
    <div class="d-flex">
      <aside-bar />
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index'
import AsideBar from '@/components/AsideBar/Index'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    AsideBar
  }
}
</script>
