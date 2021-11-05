<template>
  <div class="registro-eventos">
    <h2 class="titulo">Registro a eventos</h2>
    <span>Eventos disponibles</span>
    <eventos />
  </div>
</template>

<script>
import Eventos from './Eventos/Index'

export default {
  name: 'RegistroEventos',
  components: { Eventos }
}
</script>

<style lang="scss">
.registro-eventos {
  padding: 2rem;
  text-align: left;
  width: 85.42%;

  .titulo {
    color: #212529;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 2rem;
  }

  span {
    color: #636668;
    font-size: 16px;
  }

  .card {
    width: 504px;
    border-radius: 10px;

    .card-header {
      height: 72px;
      max-height: 72px;
      font-size: 16px;

      .btn-opciones {
        font-size: 35px;
        margin-top: -35px;
        color: #E70E4C;
      }
      .btn-opciones:hover {
        cursor: pointer;
      }

      .opciones-evento {
        position: absolute;
        background-color: #ffffff;
        width: 208px;
        height: 192px;
        border-radius: 2px;
        box-shadow: 0px 3px 6px #00000029;

        .opcion-evento {
          width: 100%;
          height: 48px;
          line-height: 48px;
          font-size: 14px;
          color: #212529;
        }
        .opcion-evento:hover {
          background-color: #FCE1E9;
          font-size: 14px;
          color: #E70E4C;
        }
      }
    }
  }

  .list-cards {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .btn-registrate {
    background-color: #FEC12D;
    border: none;
    border-radius: 10px;
    width: 200px;
    height: 40px;
  }
}

.icon {
  width: 17px;
  height: 16px;
}
</style>
