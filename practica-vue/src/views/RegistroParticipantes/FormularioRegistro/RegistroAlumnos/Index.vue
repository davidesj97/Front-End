<template>
  <div v-on="setAlumno()" class="formulario-alumnos d-flex flex-wrap">
    <div class="d-flex flex-column w-50">
      <label for="nivel-academico">Nivel académico <span>*</span></label>
      <select
        id="nivel-academico"
        :style="this.validateAcademicLevel || !pedir ? null : border"
        v-model="nivelAcademico"
      >
        <option :value="null">Seleciona el nivel académico</option>
        <option v-for="grado in grados.data" :key="grado.academic_degree_id" :value="grado.name">
          {{ grado.name }}
        </option>
      </select>
    </div>
    <div class="d-flex flex-column w-50">
      <label for="turno">Turno <span>*</span></label>
      <input id="turno" :style="this.validateShift || !pedir ? null : border" type="text" v-model="shift" />
    </div>
    <p class="mt-4 mb-0 fs-4">
      En caso de ir acompañado, los datos del padre, madre o tutor que acompaña al participante:
    </p>
    <div class="d-flex flex-column w-50">
      <label for="nombre-acompañante">Nombre del padre,madre o tutor <span>*</span></label>
      <input id="nombre-acompañante" :style="this.validateTutorName || !pedir ? null : border" type="text" v-model="tutors.tutor_name">
    </div>
    <div class="d-flex flex-column w-50">
      <label for="parentesco">Parentesco <span>*</span></label>
      <select id="parentesco" :style="this.validateRelationship || !pedir ? null : border" v-model="tutors.relationship">
        <option :value="null">Seleciona el parentesco</option>
        <option v-for="parentesco in parentescos" :key="parentesco" :value="parentesco">{{ parentesco }}</option>
      </select>
    </div>
    <div class="d-flex flex-column w-50">
      <label for="correo-acompañante">Correo electrónico</label>
      <input id="correo-acompañante" :style="this.validateTutorEmail || !pedir ? null : border " type="email" v-model="tutors.email">
    </div>
    <div class="d-flex flex-column w-50">
      <label for="telefono-acompañante">Teléfono <span>*</span></label>
      <input id="telefono-acompañante" :style="this.validateTutorPhoneNumber || !pedir ? null : border" type="text" v-model="tutors.phone_number">
    </div>
  </div>
</template>

<script>
import datos from '../../../../assets/json/gradosAcademicos.json'

export default {
  name: 'RegistroAlumnos',
  props: ['border', 'pedir'],
  data () {
    return {
      nivelAcademico: null,
      shift: null,
      tutors: {
        tutor_name: null,
        relationship: null,
        email: null,
        phone_number: null
      },
      validateAcademicLevel: false,
      validateShift: false,
      validateTutorName: false,
      validateRelationship: false,
      validateTutorEmail: false,
      validateTutorPhoneNumber: false,
      parentescos: [
        'Padre',
        'Madre',
        'Hermano',
        'Hermana',
        'Tio',
        'Tia',
        'Abuelo',
        'Abuela'
      ]
    }
  },
  computed: {
    grados () {
      return datos
    }
  },
  methods: {
    setAlumno () {
      if (!this.nivelAcademico) {
        this.validateAcademicLevel = false
      } else {
        this.validateAcademicLevel = true
      }
      if (!this.shift) {
        this.validateShift = false
      } else {
        this.validateShift = true
      }
      if (!this.tutors.tutor_name) {
        this.validateTutorName = false
      } else {
        this.validateTutorName = true
      }
      if (!this.tutors.relationship) {
        this.validateRelationship = false
      } else {
        this.validateRelationship = true
      }
      if (this.tutors.email) {
        const regexp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        if (!regexp.test(this.tutors.email)) {
          this.validateTutorEmail = false
        } else {
          this.validateTutorEmail = true
        }
      } else {
        this.validateTutorEmail = true
      }
      if (!this.tutors.phone_number) {
        this.validateTutorPhoneNumber = false
      } else {
        const regexp = /\d{10}/
        if (!regexp.test(this.tutors.phone_number)) {
          this.validateTutorPhoneNumber = false
        } else {
          this.validateTutorPhoneNumber = true
        }
      }

      this.$emit('setDatosAlumno',
        this.nivelAcademico,
        this.shift,
        this.tutors,
        this.validateAcademicLevel,
        this.validateShift,
        this.validateTutorName,
        this.validateRelationship,
        this.validateTutorEmail,
        this.validateTutorPhoneNumber
      )
    }
  }
}
</script>

<style lang="scss">
.formulario-alumnos {

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
