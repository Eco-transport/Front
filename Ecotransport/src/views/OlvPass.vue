<template>
  <div>
    <Header></Header>
    <div class="padre">
      <div class="hijo">
        <h1>Recuperación de contraseña<br /></h1>
        <p><br /></p>
        <div>
          <p v-show="hideEmail">Digite su correo:</p>
          <input v-show="hideEmail" v-model="email" placeholder="Digite su correo">
          <button class="btn btn-info" v-show="hideEmail" v-on:click="enviarCorreo">Ingresar correo</button>
          <p v-show="alertaEmailInvalido">CORREO ELECTRONICO NO VÁLIDO</p>
        </div>
        <div>
          <p v-show="hideAnswer">Responda la pregunta: "{{ pregunta }}"</p>
          <input v-show="hideAnswer" v-model="respuesta" placeholder="Digite su respuesta">
          <button class="btn btn-info" v-show="hideAnswer" v-on:click="enviarRespuesta">Ingresar respuesta</button>
          <p v-show="alertaRespuestaInvalida">RESPUESTA NO VÁLIDA</p>
        </div>
        <div>
          <p v-show="hideCambioPassword">Digite su nueva contraseña:</p>
          <input v-show="hideCambioPassword" v-model="nuevaPassword" placeholder="Digite su contraseña">
          <button class="btn btn-info" v-show="hideCambioPassword" v-on:click="cambiarPassword">Cambiar contraseña</button>
          <p v-show="alertaPasswordInvalido">CONTRASEÑA NO VÁLIDA</p>
          <p v-show="mensajePasswordCambiada">LA CONTRASEÑA HA SIDO CAMBIADA</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "OlvPass",
  components: {
    Header//, Footer
  },
  data() {
    return {
      email: "",
      pregunta: "",
      respuesta: "",
      hideAnswer: false,
      hideEmail: true,
      hideCambioPassword: false,
      alertaEmailInvalido: false,
      alertaRespuestaInvalida: false,
      alertaPasswordInvalido: false,
      mensajePasswordCambiada: false,
      emailValido: true,  //Se inicializa en true para efectos de prueba
      respuestaCorrecta: true,    //Se deja como true para efectos de prueba
      passwordCambiada: true,
      nuevaPassword: ""
    }

  },
  methods: {
    enviarCorreo: function (event) {
      //Enviar correo para verificación, guardar en "emailValido"
      if(this.emailValido !== "") {
        this.hideAnswer = true;
        this.hideEmail = false;
        //Se solicita la pregunta de seguridad asociada al correo valido, la respuesta se guarda en "pregunta"
        this.pregunta = "¿Qúe edad tienes?";    //Pregunta para efectos de prueba
      } else {
        this.hideAnswer = false;
        this.alertaEmailInvalido = true;
      }
    },
    enviarRespuesta: function (event) {
      if (this.respuesta !== ""){
        this.hideAnswer = false;
        //Enviar respuesta para la validación, el valor de la consulta de respuest se guardará en "respuestaCorrecta"
        if (this.respuestaCorrecta === true){
          this.hideCambioPassword = true;
        } else {
          this.hideCambioPassword = false;
        }
      } else {
        this.alertaRespuestaInvalida = true;
      }
    },
    cambiarPassword: function (event) {
      if(this.nuevaPassword !== "") {
        //Enviar password a base de datos y esperar boolean de confirmación
        if(this.passwordCambiada===true){
          this.mensajePasswordCambiada = true;
        }
      }else{
        this.alertaPasswordInvalido = true;
      }
    }
  }
}
</script>

<style>
  .padre {
    padding: 5% 0;
  }
  .hijo {
    padding: 10% 0;
  }
  .form-label {
    margin-top: 2rem;
    color: black;
    margin-bottom: 0.5rem;
  &:first-of-type {
     margin-top: 0rem;
   }
  }
</style>
