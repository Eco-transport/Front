<template>
  <div
    class="body"
    style="background-image: url('https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');">
    <!-- Enunciado principal con nombre -->
    <HeaderAdmin />
    <div class="container">
      <div class="row justify-content-center">
        <h1>Bienvenid@ {{ nombre_user }}</h1>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <h3>¿Qué desea administrar?</h3>
      </div>
    </div>

    <!-- Matriz de 3 elementos con grid de Bootstrap -->
    <div class="container">
      <div class="cajas">
        <div class="row">
          <div class="col-lg">
            <h3>Estaciones</h3>
            <center>
              Administra puntos de alquiler, unidades disponibles, horarios
              disponibles, crea o eliminalas
            </center>
            <a class="btn btn-outline-success" href="/admin-estaciones" role="button">Editar</a>
          </div>

          <div class="col-lg">
            <h3>Ciclas</h3>
            <center>
              Administra unidades, estado de las ciclas, estaciones que las possen
              y gestionalas facilmente
            </center>
            <a class="btn btn-outline-success" href="/admin-ciclas" role="button">Editar</a>
          </div>

          <div class="col-lg">
            <h3>Pedidos</h3>
            <center>
              Administra los pedidos reslizados por los clientes, cancela pedidos,
              cambia su estado
            </center>
            <a class="btn btn-outline-success" href="/admin-pedidos" role="button">Editar</a>
          </div>
        </div>
      </div>
    </div>

    <br><br>

    <Footer></Footer>
  </div>
</template>

<script>
  import HeaderAdmin from "../components/HeaderAdmin.vue";
  import Footer from "@/components/Footer";
  import axios from "axios";
  import { getAuthenticationToken } from "@/dataStorage";
  export default {
    beforeCreate() {
      if (!getAuthenticationToken()) {
        this.$router.push({ name: "IniciarSesion" });
      }
    },
    name: "terminos",
    components: {
      HeaderAdmin,
      Footer
    },
    data() {
      return {
        nombre_user: ""
      };
    },
    mounted: function() {
      if (getAuthenticationToken()) {
        axios.get( "http://localhost:8080/user/getNames", { params: { access_token: getAuthenticationToken( ) } } )
        .then( response => {
          this.nombre_user = response.data
          } );
      }
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
    margin-top: 10%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 59px;
    color: #ffffff;
    text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.54);
  }

  h3 {
    margin-top: 2px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;

    color: #ffffff;

    text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.7);
  }

  .cajas {
    margin-top: 4%;
  }

  /* Transparencia */
  .col-lg {
    height: 200px;
    margin: 1%;
    border: 0px;
    padding: 0%;
    background-color: rgba(255, 255, 255, 0.3);
    border: solid 1px rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(4px);
    border-radius: 10px;
  }

  .col-lg h3 {
    margin-top: 5%;
    text-shadow: 3px 4px 5px rgba(0, 0, 0, 0);
    color: #000000;
  }

  center {
    color: rgb(0, 0, 0);
    margin: 10px;
    margin-left: 30px;
    margin-right: 30px;
  }

  a {
    text-align: center;
    flex-direction: row;
    padding: 5px 20px;

    position: absolute;
    left: 35%;
    right: 40%;
    top: 73%;
    bottom: 10%;

    background: #005609;
    color: #ffffff;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
</style>
