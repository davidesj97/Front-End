<template>
  <div class="header-bar">
    <div class="header d-flex">

      <div class="wrap-logo d-flex align-center justify-content-center">
        <img class="recrea-logo" src="../../assets/img/SEJ enventos_logo recrea.svg" alt="">
      </div>

      <div class="wrap-user d-flex align-items-center justify-content-end">
        <div class="d-flex flex-column align-items-end me-3">
          <span class="fw-bold">Nombre del usuario</span>
          <span>Administración General</span>
        </div>
        <div class="icon-user me-4">
          <img class="user-image" src="../../assets/img/CRISTIANO.jpg" alt="">
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style lang="scss">
.header-bar {
  width: 100%;
  height: 88px;

  .header{
    height: 100%;
  }

  .wrap-logo {
    width: 14.58%;
    height: 100%;
    background-color: #E70E4C;

    .recrea-logo {
      width: 60%;
    }
  }

  .wrap-user {
    background-color: #F5F6F6;
    width: 85.42%;
    height: 100%;

    .icon-user {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      overflow: hidden;

      .user-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

</style>
