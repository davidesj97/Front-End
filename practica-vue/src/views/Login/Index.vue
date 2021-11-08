<template>
  <div class="login d-flex aling-center">
    <div class="container row">
      <div class="login-img col-5 d-flex align-items-end justify-content-around pb-5">
        <img class="SEJ-educacion" src="../../assets/img/SEJ enventos_logo_educacion.svg" alt="">
        <img class="SEJ-jalisco-blanco" src="../../assets/img/SEJ enventos_logo_Jalisco-blanco.svg" alt="">
      </div>
      <div class="login-form col-7 d-flex flex-column justify-content-center text-start">
        <img class="SEJ-recrea-gris" src="../../assets/img/SEJ enventos_logo recrea_gris.svg" alt="">
        <h1 class="title fs-2 fw-bold">¡Bienvenido a tus eventos!</h1>
        <p>Podras ingresar utilizando tu correo electrónico institucional y contraseña.</p>
        <form @submit.prevent="onSubmit()">
          <input
            type="text"
            class="form-control mt-4"
            placeholder="Correo electrónico"
            :pattern="regexp"
            required
          />
          <input type="password" class="form-control mt-4" placeholder="Contraseña" required/>
          <div class="d-flex justify-content-between mt-5">
            <a href="/">¿Olvidaste tu contraseña?</a>
            <button type="submit" class="btn btn-warning" @submit.prevent="onSubmit()">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      // eslint-disable-next-line no-useless-escape
      regexp: "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
    }
  },
  methods: {
    onSubmit () {
      this.$router.push('/eventos')
    }
  }
}
</script>

<style lang="scss">
.login {
  background-image: url('../../assets/img/SEJLogin.svg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;

  .container {
    margin: auto;
    background-color: #ffffff;
    border-radius: 20px;
    border: 1px solid #ebebeb;
    height: 39rem;

    .login-img{
      background-image: url('../../assets/img/SEJ eventos_login_right.jpg');
      background-repeat: no-repeat;
      background-position-x: 70%;
      background-size: 150% 100%;
      border-radius: 20px 0 0 20px;
    }

    .login-form {
      padding: 0 6rem;

      a {
        color: #E70E4C;
      }

      .btn {
        width: 8rem;
        border-radius: 5px;
        background-color: #FEC12D;
      }
    }

  }

  .row {
    --bs-gutter-x: 0;
  }

}

.SEJ-educacion {
  width: 40%;
}

.SEJ-jalisco-blanco {
  width: 20%;
}

.SEJ-recrea-gris {
  width: 10rem
}

.title{
  letter-spacing: 1px;
  margin-top: 3rem;
}

@media (min-width: 1400px){
  .login{
    .container {
      max-width: 1200px;
    }
  }
}

</style>
