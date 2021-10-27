<template>
  <div class="formulario-docente d-flex flex-wrap">
    <div class="d-flex flex-column w-50">
      <label for="curp">CURP<span>*</span></label>
      <input id="curp" type="text">
    </div>
    <div class="d-flex flex-column w-50">
      <label for="nombre">Nombre<span>*</span></label>
      <input id="nombre" type="text">
    </div>
    <div class="d-flex flex-column w-50">
      <label for="apellido-paterno">Apellido paterno<span>*</span></label>
      <input id="apellido-paterno" type="text">
    </div>
    <div class="d-flex flex-column w-50">
      <label for="apellido-materno">Apellido materno<span>*</span></label>
      <input id="apellido-materno" type="text">
    </div>
    <div class="d-flex flex-column w-50">
      <label for="correo-institucional">Correo institucional<span>*</span></label>
      <input id="correo-institucional" type="text">
    </div>
    <div class="d-flex flex-column w-50">
      <label for="telefono">Teléfono de contacto<span>*</span></label>
      <input id="telefono" type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistroDocentes'
}
</script>

<style lang="scss">
.formulario-docente {

  label {
    margin: 15px 0 0;
  }

  input {
    background-color: #FFFFFF;
    border: 1px solid #D0D0D0;
    border-radius: 8px;
    width: 90%;
    height: 40px;
    padding-left: 10px;
    margin: 5px 0 0;
  }
}
</style>
