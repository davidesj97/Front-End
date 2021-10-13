<template>
  <div class="home">
    <home-title />
    <main-form />
  </div>
</template>

<script>
import MainForm from './HomeForm.vue'
import HomeTitle from './HomeTitle.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    HomeTitle,
    MainForm
  }
}
</script>
