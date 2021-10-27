<template>
  <div class="registro-participantes">
    <h2 class="titulo">Registro de eventos</h2>
    <span>Registrate al evento seleccionado</span>
    <div v-for="registro in participante" :key="registro" class="registro mt-4">
      <div class="titulo-registro ps-5">
        Registro de otros asistentes
      </div>
      <div class="formulario-registro mt-4 ps-5 pb-5">
        <form class="d-flex flex-column">
          <label for="usuario">Tipo de usuario<span>*</span></label>
          <select id="usuario" v-model="tipoUsuario">
            <option v-for="usuario in usuarios.data" :key="usuario.user_type_id" :value="usuario.user_type_id">{{ usuario.name }}</option>
          </select>
          <registro-alumnos v-if="tipoUsuario == 1"/>
          <registro-docentes v-else/>
        </form>
      </div>
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
        <button class="btn-registrase" type="button">Registrarse</button>
      </div>
    </div>
  </div>
</template>

<script>
import RegistroDocentes from './RegistroDocentes/Index'
import RegistroAlumnos from './RegistroAlumnos/Index'
import datos from '../../assets/json/tipoUsuario.json'

export default {
  name: 'RegistroParticipantes',
  components: {
    RegistroDocentes,
    RegistroAlumnos
  },
  data () {
    return {
      tipoUsuario: 1,
      participante: 1
    }
  },
  computed: {
    usuarios () {
      return datos
    }
  },
  methods: {
    cancelarRegistro () {
      this.$router.push({ name: 'RegistroEventos' })
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

    .formulario-registro {
      label{
        color: #636668;
        font-size: 14px;

        span {
          color: #E70E4C;
        }
      }

      #usuario {
        background-color: #FFFFFF;
        border: 1px solid #D0D0D0;
        border-radius: 8px;
        width: 45%;
        height: 40px;
        padding-left: 10px;

        option {
          font-size: 14px;
          color: #212529;
          height: 40px;
        }
      }
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
      height: 40px;
      line-height: 30px;
      width: 24%;
    }

    .btn-eliminar-participante {
      background-color: #FFFFFF;
      border: 1px solid #636668;
      border-radius: 8px;
      color: #636668;
      height: 40px;
      line-height: 30px;
      width: 24%;
    }

    .cancelar-aceptar {
      width: 30%;

      .btn-cancelar {
        background-color: #FFFFFF;
        border: 1px solid #636668;
        border-radius: 8px;
        height: 40px;
        color: #636668;
        width: 40%;
      }

      .btn-registrase {
        background: #E70E4C 0% 0% no-repeat padding-box;
        border: none;
        border-radius: 8px;
        height: 40px;
        color: #FFFFFF;
        width: 45%;
      }
    }
  }
}
</style>
