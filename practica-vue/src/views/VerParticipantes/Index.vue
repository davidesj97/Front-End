<template>
  <div class="ver-participantes">
    <div class="w-100 d-flex justify-content-between">
      <h2 class="titulo">Participantes registrados</h2>
      <div class="options">
        <button class="btn-regresar" @click="backToEvents()">
          <span class="me-1">←</span> Regresar
        </button>
        <button class="btn-reporte ms-5">Generar reporte</button>
      </div>
    </div>
    <div class="input-group search-participante mt-4">
      <img class="icon" src="../../assets/img/icon/search.svg" alt="">
      <input type="search" class="search-input" placeholder="Buscar participante">
    </div>
    <table class="table mt-4">
      <tr class="table-head">
        <th>Folio</th>
        <th>CURP</th>
        <th>Nombre completo</th>
      </tr>
      <tr class="table-body" v-for="(participante, i) in listaParticipantes" :key="participante.curp">
        <td>{{ i+1 }}</td>
        <td>{{ participante.curp }}</td>
        <td>{{ participante.name }} {{ participante.paternal_surname }} {{ participante.maternal_surname }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'VerParticipantes',
  data () {
    return {
      listaParticipantes: null
    }
  },
  computed: {
    participants () {
      const registro = JSON.parse(localStorage.getItem('RegistroParticipantes'))
      const { id } = this.$route.params
      const event = registro.findIndex(element => element.event_folio === Number(id))
      if (registro[event]) {
        return registro[event]
      } else {
        return null
      }
    }
  },
  methods: {
    obtenerParticipantes () {
      if (this.participants) {
        this.listaParticipantes = this.participants.participants
      }
    },
    backToEvents () {
      this.$router.push('/eventos')
    }
  },
  created () {
    this.obtenerParticipantes()
  }
}
</script>

<style lang="scss">
.ver-participantes {
  padding: 2rem;
  text-align: left;
  width: 85.42%;
  min-height: calc(100vh - 88px);

  .titulo {
    font-size: 24px;
  }

  .options {
    width: 30%;

    .btn-regresar {
      background-color: transparent;
      border: none;
      color: #E70E4C;
    }

    .btn-reporte {
      background-color: #E70E4C;
      border: none;
      border-radius: 5px;
      color: #FFFFFF;
      font-size: 14px;
      height: 40px;
      width: 45%
    }
  }

  .search-participante {
    height: 40px;

    .icon {
      font-size: 16px;
      line-height: 14px;
      border-top: 1px solid #989898;
      border-left: 1px solid #989898;
      border-bottom: 1px solid #989898;
      border-radius: 20px;
      padding: .5rem;
      height: 100%;
    }

    .search-input {
      font-size: 16px;
      line-height: 14px;
      border-top: 1px solid #989898;
      border-right: 1px solid #989898;
      border-bottom: 1px solid #989898;
      border-left: none;
      border-radius: 20px;
      padding: .5rem;
      width: 27%;
      outline: none;
    }
  }

  .table {
    .table-head {
      background-color: #F3F4F4;

      th {
        color: #606469;
        padding: 1rem;
        font-size: 14px;
        font-weight: bold;
      }
    }

    .table-body {
      border: none;

      td {
        color: #606469;
        font-size: 14px;
        padding: 1rem;
      }
    }
  }
}
</style>
