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
        <a-form-model
          ref="loginForm"
          :model="user"
          :rules="rules"
          @submit="onSubmit()"
          @submit.native.prevent
        >
          <a-form-model-item ref="email" prop="email">
            <a-input
              class="login-input"
              v-model="user.email"
              type="email"
              placeholder="Correo electrónico"
            />
          </a-form-model-item>
          <a-form-model-item>
            <a-input class="login-input" v-model="user.password" type="password" placeholder="contraseña" />
          </a-form-model-item>
          <a-form-model-item>
            <a href="/">¿Olvidaste tu contraseña?</a>
            <a-button class="btn" type="primary" html-type="submit">Entrar</a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: 'Ingrse su correo electrónico', trigger: 'blur' }
        ]
      },
      // eslint-disable-next-line no-useless-escape
      regexp: "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
    }
  },
  methods: {
    onSubmit () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$router.push('/eventos')
        } else {
          return false
        }
      })
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

      .login-input {
        height: 40px;
        font-size: 16px;
      }

      a {
        color: #E70E4C;
      }

      .btn {
        background-color: #FEC12D;
        border: none;
        border-radius: 5px;
        color: #000000;
        width: 8rem;
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
