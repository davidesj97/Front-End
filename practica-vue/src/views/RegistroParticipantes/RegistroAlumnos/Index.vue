<template>
  <div class="formulario-alumnos d-flex flex-wrap">
    <div class="d-flex flex-column w-50">
      <label for="curp">CURP <span>*</span></label>
      <input id="curp" type="text">
    </div>
    <div class="d-flex flex-column w-50">
      <label for="nombre">Nombre <span>*</span></label>
      <input id="nombre" type="text">
    </div>
    <div class="d-flex flex-column w-50">
      <label for="apellido-paterno">Apellido paterno <span>*</span></label>
      <input id="apellido-paterno" type="text">
    </div>
    <div class="d-flex flex-column w-50">
      <label for="apellido-materno">Apellido materno <span>*</span></label>
      <input id="apellido-materno" type="text">
    </div>
    <div class="d-flex flex-column w-50">
      <label for="nivel-academico">Nivel académico <span>*</span></label>
      <select id="nivel-academico">
        <option>Seleciona el nivel académico</option>
        <option v-for="grado in grados.data" :key="grado.academic_degree_id" :value="grado.academic_degree_id">
          {{ grado.name }}
        </option>
      </select>
    </div>
    <div class="d-flex flex-column w-50">
      <label for="turno">Turno <span>*</span></label>
      <input id="turno" type="text" />
    </div>
    <p class="mt-4 mb-0 fs-4">
      En caso de ir acompañado, los datos del padre, madre o tutor que acompaña al participante:
    </p>
    <div class="d-flex flex-column w-50">
      <label for="nombre-acompañante">Nombre del padre,madre o tutor <span>*</span></label>
      <input id="nombre-acompañante" type="text">
    </div>
    <div class="d-flex flex-column w-50">
      <label for="parentesco">Parentesco <span>*</span></label>
      <select id="parentesco" v-model="parentesco">
        <option :value="null">Seleciona el parentesco</option>
        <option v-for="parentesco in parentescos" :key="parentesco" :value="parentesco">{{ parentesco }}</option>
      </select>
    </div>
    <div class="d-flex flex-column w-50">
      <label for="correo-acompañante">Correo electrónico</label>
      <input id="correo-acompañante" type="text">
    </div>
    <div class="d-flex flex-column w-50">
      <label for="telefono-acompañante">Teléfono <span>*</span></label>
      <input id="telefono-acompañante" type="text">
    </div>
  </div>
</template>

<script>
import datos from '../../../assets/json/gradosAcademicos.json'

export default {
  name: 'RegistroAlumnos',
  data () {
    return {
      parentescos: [
        'Padre',
        'Madre',
        'Hermano',
        'Hermana',
        'Tio',
        'Tia',
        'Abuelo',
        'Abuela'
      ],
      parentesco: null
    }
  },
  computed: {
    grados () {
      return datos
    }
  }
}
</script>

<style lang="scss">
.formulario-alumnos {

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

  select {
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
