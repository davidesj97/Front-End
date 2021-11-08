<template>
  <div class="eventos d-flex flex-wrap justify-content-between">
    <div v-for="(evento, i) in eventos.data" :key="evento.event_id" class="card mt-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <div>{{ evento.event_name }}</div>
        <div class="d-flex justify-content-end">
          <span @click="mostrarOpciones(i)" class="btn-opciones">...</span>
          <div v-if="opciones == i" class="opciones-evento mt-2">
            <div @click="verParticipantes(evento.event_id)" class="opcion-evento ps-4">
              <img class="icon" src="../../../assets/img/icon/users.svg" alt=""> ver participantes
            </div>
            <div class="opcion-evento ps-4">
              <img class="icon" src="../../../assets/img/icon/trash-solid.svg" alt=""> Eliminar evento
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <ul class="list-cards">
          <li>
            <div>
              <img class="icon" src="../../../assets/img/icon/SEJ enventos_id.svg" alt="">
              <span class="ms-3">{{ evento.event_id }}</span>
            </div>
            <div>
              <img class="icon" src="../../../assets/img/icon/SEJ enventos_fecha.svg" alt="">
              <span class="ms-3">{{ evento.event_date }}</span>
            </div>
            <div>
              <img class="icon" src="../../../assets/img/icon/SEJ enventos_hora.svg" alt="">
              <span class="ms-3">16:00 hrs</span>
            </div>
            <div>
              <img class="icon" src="../../../assets/img/icon/SEJ enventos_registro.svg" alt="">
              <span class="ms-3"><b>Registro abierto del: </b> {{ evento.start_date }} - {{ evento.end_date }}</span>
            </div>
            <div>
              <img class="icon" src="../../../assets/img/icon/SEJ enventos_sede presencial.svg" alt="">
              <span class="ms-3">{{ venues[i][0].type }}</span>
            </div>
            <div class="d-flex">
              <div>
                <img class="icon" src="../../../assets/img/icon/SEJ enventos_sede.svg" alt="">
              </div>
              <div class="ms-3">
                <span>
                  <b>{{ venues[i][0].onsite_name }}</b>
                  {{ venues[i][0].street }}, {{ venues[i][0].references }}, col. {{ venues[i][0].suburb }},
                  cp. {{ venues[i][0].cp }}, {{ venues[i][0].town }}
                </span>
              </div>
            </div>
            <div class="d-flex">
              <div>
                <img class="icon" src="../../../assets/img/icon/SEJ enventos_mensaje.svg" alt="">
              </div>
              <div class="ms-3">
                <p>{{ evento.general_message }}</p>
              </div>
            </div>
            <div>
              <img class="icon" src="../../../assets/img/icon/SEJ enventos_adjuntos.svg" alt="">
              <span class="ms-3">Ver los archivos de las convocatorias</span>
            </div>
            <div class="w-100 text-center">
              <button class="btn-registrate mt-5" type="button" @click="registrarse(evento.event_id, evento.event_name)">Registrate ahora</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import eventos from '../../../assets/json/eventos.json'
export default {
  name: 'Eventos',
  data () {
    return {
      opciones: null
    }
  },
  computed: {
    eventos () {
      return eventos
    },
    venues () {
      const data = eventos.data
      // const venues = JSON.parse(data[0].venues)
      // const type = venues[0].type
      const venues = []
      data.forEach((element) => {
        venues.push(JSON.parse(element.venues))
      })
      return venues
    }
  },
  methods: {
    mostrarOpciones (i) {
      if (this.opciones === null) {
        this.opciones = i
      } else {
        this.opciones = null
      }

      this.$emit('ocultarOpciones')
    },
    registrarse (id, nombre) {
      this.$router.push({ name: 'RegistroParticipantes', params: { id, nombre } })
    },
    verParticipantes (id) {
      this.$router.push({ name: 'VerParticipantes', params: { id } })
    }
  }
}
</script>

<style lang="scss">
@media (min-width: 1200px) {
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
          cursor: pointer;
        }
      }
    }
  }
}
</style>
