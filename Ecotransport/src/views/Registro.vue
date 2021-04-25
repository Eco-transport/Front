<template>
  <div>
    <unlog-header />
    <br />
    <div class="container">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
      />
      <br />

      <div class="card bg-light">
        <article class="card-body mx-auto" style="max-width: 400px">
          <h4 class="card-title mt-3 text-center">Crear cuenta</h4>
          <p class="text-center">Arranquemos creando una cuenta de usuario</p>
          <p class="divider-text">
            <span class="bg-light"> ¡Vamos allá! </span>
          </p>
          <form v-on:submit.prevent>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                name=""
                class="form-control"
                placeholder="Nombre completo"
                type="text"
                v-model="nombre"
              />
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-id-card"></i>
                </span>
              </div>
              <input
                name=""
                class="form-control"
                placeholder="Cedula"
                type="number"
                v-model="cedula"
              />
            </div>
            <!-- form-group// -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <input
                name=""
                class="form-control"
                placeholder="Correo electrónico"
                type="email"
                v-model="correo"
              />
            </div>
            <!-- form-group// -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-phone"></i>
                </span>
              </div>
              <select class="custom-select" style="max-width: 120px">
                <option selected="">+57</option>
              </select>
              <input
                name=""
                class="form-control"
                placeholder="Celular"
                type="number"
                v-model="celular"
              />
            </div>
            <!-- form-group// -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-building"></i>
                </span>
              </div>
              <select class="form-control" v-model="pregunta">
                <option hidden selected="">Pregunta de seguridad</option>
                <option>¿Nombre de su madre?</option>
                <option>¿Primer vehiculo que compró?</option>
                <option>¿Raza de su primera mascota?</option>
              </select>
            </div>
            <!-- Respuesta -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-handshake"></i>
                </span>
              </div>
              <input
                name=""
                class="form-control"
                placeholder="Respuesta de seguridad"
                type="text"
                v-model="respuesta"
              />
            </div>
            <!-- form-group end.// -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input
                class="form-control"
                placeholder="Crear contraseña"
                type="password"
                v-model="contrasena1"
              />
            </div>
            <!-- form-group// -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input
                class="form-control"
                placeholder="Repetir contraseña"
                type="password"
                v-model="contrasena2"
              />
            </div>
            <div class="alert alert-danger" role="alert" v-if="error">
              Las contraseñas no coinciden
            </div>
            <!-- form-group// -->
            <div class="form-group">
              <button
                type="submit"
                class="btn btn-primary btn-block"
                v-on:click="contrasenaIgual"
              >
                Crear cuenta
              </button>
            </div>
            <!-- form-group// -->
            <p class="text-center">
              ¿Ya tienes una cuenta? <a href="iniciar-sesion">Acceder</a>
            </p>
          </form>
        </article>
      </div>
      <!-- card.// -->
    </div>
  </div>
</template>

<script>
import UnlogHeader from "@/components/UnlogHeader.vue";
import axios from "axios";

export default {
  name: "registro",
  components: {
    UnlogHeader,
  },
  data: function () {
    return {
      nombre: "",
      cedula: "",
      correo: "",
      celular: "",
      pregunta: "",
      respuesta: "",
      contrasena1: "",
      contrasena2: "",
      state: false,
      error: false,
    };
  },
  methods: {
    contrasenaIgual() {
      if (this.contrasena1 !== this.contrasena2) {
        this.error = true;
        console.log("Estan diferentes!");
      } else {
        this.registro();
      }
    },
    registro() {
      let json = {
        cedula: this.cedula,
        nombre: this.nombre,
        email: this.correo,
        celular: this.celular,
        pregunta: this.pregunta,
        respuesta: this.respuesta,
        contrasena: this.contrasena1,
        activo: this.state,
      };
      axios
        .post("http://localhost:8080/API/estacion/guardar")
        .then((respuesta) => {
          console.log("Todo crema");
        });
    },
  },
};
</script>



<style scoped>
.divider-text {
  position: relative;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.divider-text span {
  padding: 7px;
  font-size: 12px;
  position: relative;
  z-index: 2;
}
.divider-text:after {
  content: "";
  position: absolute;
  width: 100%;
  border-bottom: 1px solid #ddd;
  top: 55%;
  left: 0;
  z-index: 1;
}
</style>