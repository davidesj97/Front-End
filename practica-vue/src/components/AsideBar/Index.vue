<template>
  <div class="aside-bar d-flex flex-column justify-content-between">
    <div class="menu align-self-center d-flex flex-column">
      <div class="opcion-menu text-start mt-4">
        <img class="icon-menu" src="../../assets/img/SEJ enventos_mis eventos.svg" alt="">
        <span>Mis eventos</span>
      </div>
      <div class="opcion-menu text-start mt-4">
        <img class="icon-menu" src="../../assets/img/SEJ enventos_registro de eventos.svg" alt="">
        <span>Registro de eventos</span>
      </div>
    </div>
    <img class="logo align-self-center pb-5" src="../../assets/img/SEJ enventos_logo jalisco.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'AsideBar'
}
</script>

<style lang="scss">
.aside-bar  {
  width: 14.58%;
  border-right: 1px solid #00000029;

  .menu {

    .opcion-menu {
      .icon-menu {
        width: 15px;
      }

      span {
        margin-left: 10px;
        font-size: 16px;
      }
    }

    .opcion-menu:hover{
      span {
        color: #E70E4C;
        cursor: pointer;
      }
    }
  }

  .logo {
    width: 43%;
  }
}
</style>
