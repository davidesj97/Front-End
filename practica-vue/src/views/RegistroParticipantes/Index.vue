<template>
  <div class="registro-participantes">
    <h2 class="titulo">Registro de eventos</h2>
    <span>Registrate al evento seleccionado</span>
    <div class="registro">
      <div class="titulo-registro">
        Datos del participante
      </div>
      <div class="formulario-registro"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistroParticipantes'
}
</script>

<style lang="scss">
.registro-participantes {
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
}
</style>
