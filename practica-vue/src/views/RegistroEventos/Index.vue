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
