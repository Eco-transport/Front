<template>
  <div
    class="body"
    style="background-image: url('https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');"
  >
    <!-- Enunciado principal con nombre -->
    <Unlog-header />
    <div class="container">
      <div class="row justify-content-center">
        <h1>¡La mejor experiencia con el mejor precio!</h1>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <h3>¡Para probar toda la experiencia sigue a registro!</h3>
      </div>
    </div>
    <br>
    <img
      src="../assets/LogoHeader.png"
      width="120"
      height="120"
      class="bien"
    />
    <!-- Matriz de 3 elementos con grid de Bootstrap -->
    <div class="container">
      <div class="cajas">
        <div class="row justify-content-center">
          <div class="col-lg">
            <h3>Registrarme</h3>
            <center>
              Haga parte de nuestro emprendimiento llenado un pequeño formulario
            </center>
            <a class="btn btn-outline-success" href="/registro" role="button"
              >Registro</a
            >
          </div>
          <div class="col-lg">
            <h3>Iniciar sesión</h3>
            <center>
              Ingrese sus datos de acceso para vivir toda una experiencia ecologica
            </center>
            <a
              class="btn btn-outline-success"
              href="/iniciar-sesion"
              role="button"
              >Iniciar</a
            >
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderUser from "../components/HeaderUser.vue";
import Footer from "@/components/Footer.vue";
import UnlogHeader from "../components/UnlogHeader.vue";
export default {
  name: "terminos",
  components: {
    HeaderUser,
    Footer,
    UnlogHeader
  }
};
</script>

<style scoped>
.body {
  height: 100vh;
  overflow: auto;   /* Arregla problema de imagen salida */
  background-color: rgb(0, 0, 0, 0.8);
  background-size: cover;
  font-family: "Montserrat", sans-serif;
}

h1 {
  margin-top: 3%;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 59px;
  color: #ffffff;
  text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.9);
}
h3 {
  margin-top: 2px;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;

  /* text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.7); */
}
.cajas {
  margin-top: 4%;
  width: 80%;
  margin-left: 10%;
}

/* Transparencia */
.col-lg {
  height: 200px;
  margin: 5%;
  margin-top: 2%;
  border: 0px;
  padding: 0%;
  background-color: rgba(255, 255, 255, 0.4);
  border: solid 1px rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 10px;
}

.col-lg h3 {
  margin-top: 5%;
  /* text-shadow: 3px 4px 5px rgba(255, 255, 255, 0, 8); */
  color: #000000;
}

center {
  color: rgb(0, 0, 0);
  /* text-shadow: 3px 4px 5px rgba(255, 255, 255, 0, 8); */
  margin: 10px;
  margin-left: 30px;
  margin-right: 30px;
}
a {
  text-align: center;
  flex-direction: row;
  padding: 3px 0px;

  position: absolute;
  left: 35%;
  right: 35%;
  top: 73%;
  bottom: 10%;

  background: #005609;
  color: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
</style>
