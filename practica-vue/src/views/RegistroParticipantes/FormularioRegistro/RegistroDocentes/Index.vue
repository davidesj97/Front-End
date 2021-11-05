<template>
  <div v-on="pedir ? setDocente() : null" class="formulario-docente d-flex flex-wrap">
    <div class="d-flex flex-column w-50">
      <label for="correo-institucional">Correo institucional<span>*</span></label>
      <input id="correo-institucional"
        :style="this.validateEmail ? null : border"
        type="email"
        v-model="email">
    </div>
    <div class="d-flex flex-column w-50">
      <label for="telefono">Teléfono de contacto<span>*</span></label>
      <input id="telefono" :style="this.validatePhoneNumber ? null : border" type="text" v-model="phone_number">
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistroDocentes',
  props: ['border', 'pedir'],
  data () {
    return {
      email: null,
      phone_number: null,
      validateEmail: true,
      validatePhoneNumber: true
    }
  },
  methods: {
    setDocente () {
      if (!this.email) {
        this.validateEmail = false
      } else {
        const regexp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        if (!regexp.test(this.email)) {
          this.validateEmail = false
        } else {
          this.validateEmail = true
        }
      }
      if (!this.phone_number) {
        this.validatePhoneNumber = false
      } else {
        const regexp = /\d{10}/
        if (!regexp.test(this.phone_number)) {
          this.validatePhoneNumber = false
        } else {
          this.validatePhoneNumber = true
        }
      }
      this.$emit(
        'setDatosDocente',
        this.email,
        this.validateEmail,
        this.phone_number,
        this.validatePhoneNumber
      )
    }
  }
}
</script>
