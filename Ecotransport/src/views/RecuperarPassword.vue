<template>
<div>
    <unlog-header />
    <br />
    <br />
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
          <h3>Recuperación de contraseña<br /></h3>
          <img src="../assets/RecuperarContraseña.png" id="icon" alt="Ecotransport" />
        </div>

        <!-- Login Form -->
        <form v-on:submit.prevent="enviarUsername">
          <input
            type="text"
            id="username"
            class="fadeIn second"
            v-show="hideUsername"
            name="username"
            placeholder="Digite su usuario"
            v-model="username"
          />
          <p v-show="hideAnswer" class="fadeIn third">Responda la pregunta: {{ pregunta }}</p>
          <input
            type="text"
            id="answer"
            class="fadeIn third"
            v-show="hideAnswer"
            name="answer"
            placeholder="Escriba la respuesta"
            v-model="respuesta"
          />
          <p v-show="hideCambioPassword" class="fadeIn fourth">Cambio de contraseña:</p>
          <input
            type="password"
            id="password1"
            class="fadeIn fourth"
            v-show="hideCambioPassword"
            name="password1"
            placeholder="Digite la nueva contraseña"
            v-model="nuevaPassword1"
          />
          <input
            type="password"
            id="password2"
            class="fadeIn fourth"
            v-show="hideCambioPassword"
            name="password2"
            placeholder="Confirme la nueva contraseña"
            v-model="nuevaPassword2"
          />
          <br />
          <input type="submit" class="fadeIn second" v-show="hideUsername" v-on:click="enviarUsername" value="Enviar Usuario" />
          <input type="submit" class="fadeIn third" v-show="hideAnswer" v-on:click="enviarRespuesta" value="Enviar Respuesta" />
          <input type="submit" class="fadeIn fourth" v-show="hideCambioPassword" v-on:click="cambiarPassword" value="Cambiar Contraseña" />
        </form>
        <p v-show="alertaUsernameInvalido">USUARIO NO VÁLIDO</p>
        <p v-show="alertaRespuestaInvalida">RESPUESTA NO VÁLIDA</p>
        <p v-show="alertaPasswordInvalido">CONTRASEÑA NO VÁLIDA</p>
        <p v-show="mensajePasswordCambiada">LA CONTRASEÑA HA SIDO CAMBIADA</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import UnlogHeader from '../components/UnlogHeader.vue';
import axios from "axios";
export default {
  name: "RecuperarPassword",
  components: {
    Header, 
    UnlogHeader//, Footer
  },
  data: function () {
    return {
      username: "",
      pregunta: "",
      respuesta: "",
      hideAnswer: false,
      hideUsername: true,
      hideCambioPassword: false,
      alertaUsernameInvalido: false,
      alertaRespuestaInvalida: false,
      alertaPasswordInvalido: false,
      mensajePasswordCambiada: false,
      emailValido: false, 
      respuestaCorrecta: false,    
      passwordCambiada: true,
      nuevaPassword1: "",
      nuevaPassword2: "", 
    };
  },
  methods: {
    enviarUsername( event ){
      this.alertaUsernameInvalido = false;
      axios.get("http://localhost:8080/recuperar-password/get-question/"+ this.username)
      .then( datos => {
          this.pregunta = datos.data;
          this.hideAnswer = true;
          this.hideUsername = false; 
        
      }).catch( error => {
        if( error.response.status === 400 ){
          alert( "Credenciales incorrectas" );
        }else{
          alert( "Usuario no encontrado" );
        }
      }); 
      event.preventDefault();
    },
    enviarRespuesta( event ){
      let json = {
        "username": this.username,
        "answer": this.respuesta,
      };
      if (this.respuesta !== ""){
        axios.post("http://localhost:8080/recuperar-password/verificar", json)
        .then( datos => {
          this.respuestaCorrecta = datos.data;
          if (this.respuestaCorrecta === true){
            this.alertaRespuestaInvalida = false;
            this.hideAnswer = false;
            this.hideCambioPassword = true;
          } else {
            this.alertaRespuestaInvalida = true;
            this.hideCambioPassword = false;
          }
        });
      } else {
        this.alertaRespuestaInvalida = true;
      }
      event.preventDefault();
    },
    cambiarPassword (event) {
      let json = {
        "username": this.username,
        "password": this.nuevaPassword1,
      };
      if (this.nuevaPassword1 !== this.nuevaPassword2) {
        this.alertaPasswordInvalido = true;
      } else {
        this.alertaPasswordInvalido = false;
        axios.post("http://localhost:8080/recuperar-password/cambiar", json)
        .then( datos => {
          this.passwordCambiada = datos.data;
          console.log(datos.data);
          if (this.passwordCambiada === true){
            this.hideCambioPassword = false;
            this.mensajePasswordCambiada = true;
          } else {
            this.alertaPasswordInvalido = true;
          }
        });
      }
      event.preventDefault();
    }
  }
}
</script>

<style scoped>
  html {
  background-color: #56baed;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

a {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

/* FORM TYPOGRAPHY*/

input[type="button"],
input[type="submit"],
input[type="reset"] {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: #39ace7;
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="text"]:placeholder {
  color: #cccccc;
}

input[type="password"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="password"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="password"]:placeholder {
  color: #cccccc;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after {
  width: 100%;
}

/* OTHERS */

*:focus {
  outline: none;
}

#icon {
  width: 60%;
}
</style>
