<template>
  <div>
    <HeaderUser />
    <br /><br />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
    />
    <div class="row">
      <div class="col">
        <h1>¡Increibles modelos y gran comodidad!</h1>
        <br />

        <!-- CARRUSEL COMIENZO -->
        
        
        
        <!-- CARRUSEL TERMINA -->



      </div>

      <div class="col">
        <div class="card bg-light">
          <article class="card-body mx-auto" style="max-width: 400px">
            <h4 class="card-title mt-3 text-center">Alquilar cicla</h4>
            <p class="divider-text">
              <span class="bg-light"> Revisa los campos a continuación </span>
            </p>

            <form action="" class="form-horizontal">
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  disabled
                  name="nombre"
                  class="form-control"
                  type="text"
                  placeholder="Name"
                  id="nombre"
                  v-model="client"
                />
              </div>

              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-id-card"></i>
                  </span>
                </div>
                <input
                  disabled
                  name="cedula"
                  class="form-control"
                  placeholder="Cedula"
                  type="text"
                  v-model="cedula"
                />
              </div>

              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-bicycle"></i>
                  </span>
                </div>
                <input
                  disabled
                  name=""
                  class="form-control"
                  placeholder="Bicicleta"
                  type="text"
                  v-model="bikeBrand"
                />
              </div>

              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-building"></i>
                  </span>
                </div>
                <input
                  disabled
                  name=""
                  class="form-control"
                  placeholder="Estación"
                  type="text"
                  v-model="stationName"
                />
              </div>

              <p>
                Cantidad de horas a alquilar: <br />
                ($10.000 COP x hora)
              </p>


              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-hourglass-end"></i>
                  </span>
                </div>
                <input
                  name=""
                  class="form-control"
                  placeholder="¿# de horas?"
                  type="number"
                  v-model="hours"
                />
              </div>

          
              <!-- hacer pedido -->
              <div class="form-group">
                <button
                  type="button"
                  class="btn btn-success btn-block"
                  v-on:click="hacerPedido()"
                >
                  Hacer pedido
                </button>

                <button
                  type="button"
                  class="btn btn-danger btn-block"
                  v-on:click="cancelar()"
                >
                  Cancelar
                </button>

            
              </div>

              <!-- form-group// -->
              <p class="text-center">
                ¿Alguna duda?
                <a href="http://api.whatsapp.com/send?phone=+573002345678"
                  >WhatsApp</a
                >
              </p>
            </form>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderUser from "@/components/HeaderUser";
import axios from "axios";
import { getAuthenticationToken } from "@/dataStorage";

export default {
  name: "alquilar",
  components: {
    slide: 0,
    sliding: null,
    HeaderUser
  },

  data: function() {
    return {
      client: "",
      cedula: "",
      
      bikeBrand: "",
      stationName: "",
      serialBike: "",

      idClient: 0,      
      idBike: 0,      
      idStation: this.$route.params.id,

      
      hours: 0
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    cancelar() {
      this.$router.push("/mapa");
    },
    hacerPedido() {

    }
  },
  mounted: function() {
    if (getAuthenticationToken())
    {
      /* Obteniendo  UserData = OK */
      axios
      .get("http://localhost:8080/user/getUser", {
        params: { access_token: getAuthenticationToken() }
      })
      .then(userData => {
        //console.log(userData.data);
        this.idClient = userData.data.id;
        this.client = "Cliente: "+userData.data.names;
        this.cedula = "ID: "+userData.data.identityNumber;
      });

      /* Obteniendo  Station Data  = OK */
      axios
        .get("http://localhost:8080/station/" + this.idStation)
        .then(stationData => {
          //console.log(stationData.data);
          this.idStation = stationData.data.id;
          this.stationName = "Estación: " +stationData.data.stationName;
          
        });

      /* Obteniendo  BikeData = OK*/
      axios
        .get("http://localhost:8080/bicycle/" + this.idStation)
        .then(bicycleData => {
          //console.log(bicycleData.data); 
          this.bikeBrand = "Marca: "+ bicycleData.data.vendor;
          this.serialBike = "Serial: " + bicycleData.data.bicycleSerial;
          this.idBike = bicycleData.data.id;
        });

  
    }else{
      console.log("Loguearse de nuevo");
    }
    

    



    

      /* ANTERIOR LLAMADO */
    /*   
    this.form.idEstacion = this.$route.params.id;
    let Estation = this.$route.params.id;
    

    axios
      .get("http://localhost:8080/getUserForOrder", {
        params: { access_token: getAuthenticationToken() }
      })
      .then(respuesta => {
        this.form.Username = respuesta.data.username;
        this.form.Usercedula = respuesta.data.identityNumber;
        this.form.userID = respuesta.data.id;
        //HAY QUE MEJORAR ESTO CON LA TABLA REAL
        this.form.fecha = new Date(Date.now()).toUTCString();
        this.form.estatus = "Esperando Pago";
        this.form.comentarios = "Ninguno";
        let bicis = "http://localhost:8080/bicycle/";
        axios.get(bicis).then(data => {
          this.ListaBicis = data.data;
          this.ListaBicicletas = new Array();
          for (var key in this.ListaBicis) {
            var cicla = this.ListaBicis[key]; //datos de la primera bici

            //console.log("Test cicla: ",parseInt(cicla.bicycleStationId));
            if (parseInt(cicla.bicycleStationId) === parseInt(Estation)) {
              if (String(cicla.bicycleState) === "Disponible") {
                this.ListaBicicletas.push(cicla);
                break; //para dejar de buscar
              }
            }
          }
          this.form.bikeID = parseInt(this.ListaBicicletas[0].bicycleID);
          this.form.nombreCicla = String(this.ListaBicicletas[0].bicycleName);
          this.form.vendedorCicla = String(
            this.ListaBicicletas[0].bicycleVendor
          );
          this.form.precioCicla = String(
            this.ListaBicicletas[0].bicycleBuyPrice
          );
          this.form.estacionCicla = String(
            this.ListaBicicletas[0].bicycleStationId
          );
        });
      });

    */
      
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&family=Padauk:wght@700&display=swap");

h1 {
  font-family: "Pacifico", cursive;
}
h2,
h3,
h4,
h5 {
  font-family: "Montserrat", sans-serif;
}
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
