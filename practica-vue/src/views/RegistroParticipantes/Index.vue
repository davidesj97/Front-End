<template>
  <div class="registro-participantes">
    <h2 class="titulo">Registro de eventos</h2>
    <span>Registrate al evento seleccionado</span>
    <div v-for="(registro, i) in participante" :key="registro" class="registro mt-4">
      <div class="titulo-registro ps-5">
        Registro de otros asistentes
      </div>
        <formulario-registro
          :id="i+1"
          :pedir="pedir"
          @setDatosParticipante="getParticipante "
        />
    </div>
    <div class="opciones-formulario d-flex justify-content-between">
      <div class="d-flex justify-content-between w-100">
        <button class="btn-agregar-participante" type="button" @click="participante += 1">
          <img class="me-3" src="../../assets/img/icon/plus-circle.svg" alt="">
          Agregar otro participante
        </button>
        <button v-if="participante > 1" class="btn-eliminar-participante me-5" type="button" @click="participante -= 1">
          <img class="me-3" src="../../assets/img/icon/x-circle.svg" alt="">
          Eliminar participante
        </button>
      </div>
      <div class="cancelar-aceptar d-flex justify-content-between">
        <button class="btn-cancelar" type="button" @click="cancelarRegistro()">Cancelar</button>
        <button class="btn-registrase" type="submit" @click="validarFormulario()">Registrarse</button>
      </div>
    </div>
  </div>
</template>

<script>
import FormularioRegistro from './FormularioRegistro/Index'
import datos from '../../assets/json/tipoUsuario.json'
import saveAs from '@/utils/FileServer.js'

export default {
  name: 'RegistroParticipantes',
  components: {
    FormularioRegistro
  },
  data () {
    return {
      validate: [],
      pedir: false,
      participante: 1,
      registro: {
        event_folio: '',
        event_name: '',
        participants: []
      }
    }
  },
  computed: {
    usuarios () {
      return datos
    }
  },
  methods: {
    cancelarRegistro () {
      this.$router.push('/eventos')
    },
    getParticipante (participante, id, validate) {
      for (let i = 0; i < this.participante; i++) {
        if ((i + 1) === id) {
          this.validate[i] = null
          this.validate[i] = validate
          this.registro.participants[i] = participante
        }
      }
    },
    validarFormulario () {
      this.pedir = true
      const { id, nombre } = this.$route.params
      this.registro.event_folio = id
      this.registro.event_name = nombre
      const values = []
      for (let i = 0; i < this.participante; i++) {
        values[i] = Object.values(this.validate[i])
      }
      let valido
      for (let i = 0; i < this.participante; i++) {
        for (let j = 0; j < values[i].length; j++) {
          if (values[i][j] === true) {
            valido = true
          } else {
            valido = false
            break
          }
        }
      }
      console.log(valido)
      if (valido) {
        const datos = JSON.stringify(this.registro)
        var blob = new Blob([datos], { type: 'text/plain' })
        saveAs(blob, `RegistroParticipantes${this.registro.event_folio}.json`)
        this.$router.push('/eventos')
      }
    }
  }
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

  .registro {
    width: 73%;
    margin: 0 auto;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 10px;

    .titulo-registro {
      background-color: #FEDA81;
      color: #212529;
      height: 48px;
      font-size: 18px;
      line-height: 48px;
      border-radius: 10px 10px 0 0;
    }
  }

  .opciones-formulario {
    width: 73%;
    margin: 2rem auto;

    .btn-agregar-participante {
      background-color: #FFFFFF;
      border: 1px solid #E70E4C;
      border-radius: 8px;
      color: #E70E4C;
      padding: .5rem;
      line-height: 30px;
      width: 35%;
    }

    .btn-eliminar-participante {
      background-color: #FFFFFF;
      border: 1px solid #636668;
      border-radius: 8px;
      color: #636668;
      padding: 3px;
      line-height: 30px;
      width: 35%;
    }

    .cancelar-aceptar {
      width: 40%;

      .btn-cancelar {
        background-color: #FFFFFF;
        border: 1px solid #636668;
        border-radius: 8px;
        height: 40px;
        color: #636668;
        width: 42%;
      }

      .btn-registrase {
        background: #E70E4C 0% 0% no-repeat padding-box;
        border: none;
        border-radius: 8px;
        height: 40px;
        color: #FFFFFF;
        width: 50%;
      }
    }
  }
}
</style>
