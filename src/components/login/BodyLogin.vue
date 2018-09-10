<template>
    <body>
    <section class="material-half-bg">
      <div class="cover"></div>
    </section>
    <section class="login-content">
      <div class="logo">
        <h1>UCN</h1>
      </div>
      <div class="login-box">
        <form class="login-form" action="">
          <h3 class="login-head"><i class="fa fa-lg fa-fw fa-user"></i>Entrar</h3>
          <div class="form-group">
            <label class="control-label">Nombre Usuario</label>
            <input class="form-control" type="text" v-model="input.username" placeholder="Usuario" autofocus>
          </div>
          <div class="form-group">
            <label class="control-label">Contraseña</label>
            <input class="form-control" type="password" v-model="input.password" placeholder="Contraseña">
          </div>
          <div class="form-group">
            <div class="utility">
              <div class="animated-checkbox">
                <label>
                  <input type="checkbox"><span class="label-text">Recordar Sesion</span>
                </label>
              </div>
              <p class="semibold-text mb-2"><a href="#" data-toggle="flip">Olvido la contraseña ?</a></p>
            </div>
          </div>
          <div class="form-group btn-container">
            <button class="btn btn-primary btn-block">Entrar</button>
            <v-btn @click="$router.push('/')" large color="primary" class="mx-0">Volver al login</v-btn>
          </div>
        </form>
        <form class="forget-form" action="index.html">
          <h3 class="login-head"><i class="fa fa-lg fa-fw fa-lock"></i>Olvido la contraseña ?</h3>
          <div class="form-group">
            <label class="control-label">Correo</label>
            <input class="form-control" type="text" placeholder="Email">
          </div>
          <div class="form-group btn-container">
            <button class="btn btn-primary btn-block"><i class="fa fa-unlock fa-lg fa-fw"></i>RESET</button>
          </div>
          <div class="form-group mt-3">
            <p class="semibold-text mb-0"><a href="#" data-toggle="flip"><i class="fa fa-angle-left fa-fw"></i> Regresar a Iniciar Sesion</a></p>
          </div>
        </form>
      </div>
    </section>
  </body>
</template>

<script>
export default {
  name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
  methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
}
</script>

<script>
    export default {
        created () {
            this.$store.commit('SET_LAYOUT', 'principal-layout')
        }
    }
</script>
<style lang="scss">
@import '../../sass/main.scss';
</style>
