<template>
  <div class="registro-eventos">
    <h2 class="titulo">{{ title }}</h2>
    <span>Eventos disponibles</span>
    <div class="card mt-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <div>Nombre del evento</div>
        <div class="d-flex justify-content-end">
          <span @click="mostrarOpciones()" class="btn-opciones">...</span>
          <div v-if="opciones" class="opciones-evento mt-2">
            <div class="opcion-evento ps-4">
              <img class="icon" src="../../assets/img/icon/users.svg" alt=""> ver participantes
            </div>
            <div class="opcion-evento ps-4">
              <img class="icon" src="../../assets/img/icon/trash-solid.svg" alt=""> Eliminar evento
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <ul class="list-cards">
          <li>
            <div>
              <img class="icon" src="../../assets/img/icon/SEJ enventos_id.svg" alt="">
              <span class="ms-3">1</span>
            </div>
            <div>
              <img class="icon" src="../../assets/img/icon/SEJ enventos_fecha.svg" alt="">
              <span class="ms-3">2021-11-04</span>
            </div>
            <div>
              <img class="icon" src="../../assets/img/icon/SEJ enventos_hora.svg" alt="">
              <span class="ms-3">16:00 hrs</span>
            </div>
            <div>
              <img class="icon" src="../../assets/img/icon/SEJ enventos_registro.svg" alt="">
              <span class="ms-3"><b>Registro abierto del: </b> 2021-10-02 - 2021-11-03</span>
            </div>
            <div>
              <img class="icon" src="../../assets/img/icon/SEJ enventos_sede presencial.svg" alt="">
              <span class="ms-3">Presencial</span>
            </div>
            <div>
              <img class="icon" src="../../assets/img/icon/SEJ enventos_sede.svg" alt="">
              <span class="ms-3"><b>Nombre de la sede</b> Direncion de la sede en caso de ser muy larga con dos renglones</span>
            </div>
            <div>
              <img class="icon" src="../../assets/img/icon/SEJ enventos_mensaje.svg" alt="">
              <p class="ms-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid impedit deserunt ea in totam repudiandae culpa fugiat molestias provident nihil accusantium itaque esse quae asperiores harum illo possimus quod.</p>
            </div>
            <div>
              <img class="icon" src="../../assets/img/icon/SEJ enventos_adjuntos.svg" alt="">
              <span class="ms-3">Ver los archivos de las convocatorias</span>
            </div>
            <div class="w-100 text-center">
              <button class="btn-registrate mt-5" type="button" @click="registrarse()">Registrate ahora</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistroEventos',
  data () {
    return {
      title: 'Registro a eventos',
      opciones: false
    }
  },
  methods: {
    mostrarOpciones () {
      this.opciones = !this.opciones
    },
    registrarse () {
      this.$router.push({ name: 'RegistroParticipantes' })
    }
  }
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
        }
      }
    }
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
