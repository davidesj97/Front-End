<template>
  <div v-on.prevent="setParticipante()" class="formulario-registro mt-4 ps-5 pb-5">
    <form v-on="validateFormulario()"  class="d-flex flex-column">
      <label for="usuario">Tipo de usuario<span>*</span></label>
      <select id="usuario" v-model="participant.user_type_id">
        <option
          v-for="usuario in usuarios.data"
          :key="usuario.user_type_id"
          :value="usuario.user_type_id"
        >
          {{ usuario.name }}
        </option>
      </select>
      <div class="d-flex flex-wrap">
        <div class="d-flex flex-column w-50">
          <label for="curp">CURP <span>*</span></label>
          <input
            id="curp"
            type="text"
            :style="this.validate.validateCurp || !pedir ? null : border"
            v-model="participant.curp"
          >
        </div>
        <div class="d-flex flex-column w-50">
          <label for="nombre">Nombre <span>*</span></label>
          <input
            id="nombre"
            :style="this.validate.validateName || !pedir ? null : border"
            type="text"
            v-model="participant.name"
          >
        </div>
        <div class="d-flex flex-column w-50">
          <label for="apellido-paterno">Apellido paterno <span>*</span></label>
          <input
            id="apellido-paterno"
            :style="this.validate.validatePaternalSurname || !pedir ? null : border"
            type="text"
            v-model="participant.paternal_surname"
          >
        </div>
        <div class="d-flex flex-column w-50">
          <label for="apellido-materno">Apellido materno <span>*</span></label>
          <input
            id="apellido-materno"
            :style="this.validate.validateMaternalSurname || !pedir ? null : border"
            type="text"
            v-model="participant.maternal_surname"
          >
        </div>
      </div>
    </form>
    <registro-alumnos
      v-if="participant.user_type_id == 1"
      :border="border"
      :pedir="pedir"
      @setDatosAlumno="getDatosAlumno"
    />
    <registro-docentes
      v-else
      :border="border"
      :pedir="pedir"
      @setDatosDocente="getDatosDocentes"
    />
  </div>
</template>

<script>
import RegistroDocentes from './RegistroDocentes/Index'
import RegistroAlumnos from './RegistroAlumnos/Index'
import datos from '../../../assets/json/tipoUsuario.json'

export default {
  name: 'FormularioRegistro',
  props: [
    'id',
    'pedir'
  ],
  components: {
    RegistroDocentes,
    RegistroAlumnos
  },
  data () {
    return {
      validate: {
        validateCurp: false,
        validateName: false,
        validatePaternalSurname: false,
        validateMaternalSurname: false,
        validateAcademicLevel: false,
        validateShift: false,
        validateTutorName: false,
        validateRelationship: false,
        validateEmail: false,
        validatePhoneNumber: false
      },
      border: 'border: 1px solid red;',
      participant: {
        user_type_id: 1,
        curp: null,
        name: null,
        paternal_surname: null,
        maternal_surname: null,
        academic_level: null,
        shift: null,
        tutors: null,
        email: null,
        phone_number: null
      }
    }
  },
  computed: {
    usuarios () {
      return datos
    }
  },
  methods: {
    getDatosAlumno (
      academicLevel,
      shift, tutors,
      validateAcademicLevel,
      validateShift,
      validateTutorName,
      validateRelationship,
      validateEmail,
      validatePhoneNumber
    ) {
      this.participant.academic_level = academicLevel
      this.participant.shift = shift
      this.participant.tutors = tutors
      this.validate.validateAcademicLevel = validateAcademicLevel
      this.validate.validateShift = validateShift
      this.validate.validateTutorName = validateTutorName
      this.validate.validateRelationship = validateRelationship
      this.validate.validateEmail = validateEmail
      this.validate.validatePhoneNumber = validatePhoneNumber
    },
    getDatosDocentes (email, validateEmail, phoneNumber, validatePhoneNumber) {
      this.participant.email = email
      this.participant.phone_number = phoneNumber
      this.validate.validateEmail = validateEmail
      this.validate.validatePhoneNumber = validatePhoneNumber
    },
    setParticipante () {
      this.$emit('setDatosParticipante', this.participant, this.id, this.validate)
    },
    validateFormulario () {
      if (!this.participant.curp) {
        this.validate.validateCurp = false
      } else {
        this.validate.validateCurp = true
      }
      if (!this.participant.name) {
        this.validate.validateName = false
      } else {
        this.validate.validateName = true
      }
      if (!this.participant.paternal_surname) {
        this.validate.validatePaternalSurname = false
      } else {
        this.validate.validatePaternalSurname = true
      }
      if (!this.participant.maternal_surname) {
        this.validate.validateMaternalSurname = false
      } else {
        this.validate.validateMaternalSurname = true
      }

      this.$emit('setValidateFormulario', this.validate, this.id)
    }
  }

}
</script>

<style lang="scss">
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
</style>
