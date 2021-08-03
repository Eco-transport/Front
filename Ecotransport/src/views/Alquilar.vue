<template>
  <div class="body">
    <HeaderUser />
    <br /><br />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
    />
    <div class="row">
      <div class="col">
        <h1>¡Increíbles modelos y gran comodidad!</h1>
        <br />

        <!-- CARRUSEL COMIENZO -->

        <!-- CARRUSEL TERMINA -->
      </div>

      <div class="col">
        <div class="card bg-ligth">
          <article class="card-body mx-auto" style="max-width: 400px">
            <h4 class="card-title mt-3 text-center">Alquilar bicicleta</h4>
            <p class="divider-text">
              <span class="bg-light"> Revisa los campos a continuación </span>
            </p>

            <form action="" class="form-horizontal">
              <p>Nombre</p>
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

              <p>ID</p>
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

              <p>Serial bicicleta</p>
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
                  v-model="serialBike"
                />
              </div>

              <p>Ubicación</p>
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
                  v-model="hours" :min="1" :max="10" inline controls
                />
              </div>

              <p>
                Por favor indique la hora en que recogerá la bicicleta
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
                  placeholder="¿hora de inicio?"
                  type="time"
                  v-model="serviceStart"
                />
              </div>
              <p v-show="validarAlquiler">
                Por favor diligencie bien los campos solicitados
              </p>
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
  beforeCreate() {
    if (!getAuthenticationToken()) {
      this.$router.push({ name: "IniciarSesion" });
    }
    this.$session.clear("stationName");
  },
  data: function() {
    return {

      validarAlquiler: false,

      //CUSTOMER
      idClient: 0,
      client: "",
      cedula: "",

      //BIKE
      idBike: 0,
      bikeBrand: "",
      serialBike: "",
      toSentSerialBike: "",
      toSentVendorBike: "",

      //ORDER
      valueHour: 10000,
      hours: 1,
      serviceStart: "",
      serviceFinish: "",
      status: "Pendiente de Pago",

      //STATION
      idStation: this.$route.params.id,
      stationName: "",
      stationAddress : "",
      stationPhone : "",
      stationCity : "",
      stationInventory  : "",
      stationAvailable  : "",
      stationOpen  : "",
      stationClose : "",

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
    updateValuesBikes(){
      let json = {
        id: this.idBike,
        vendor: this.toSentVendorBike,
        bicycleSerial: this.toSentSerialBike,
        bicycleStatus: "Ocupada",
        stationId: this.idStation
      };
      axios.post("http://localhost:8080/bicycle/save", json)
      .then(() => {});
    },
    updateValuesStation(){
      let json = {
        id: this.idStation,
        stationName: this.stationName,
        address: this.stationAddress,
        phone: this.stationPhone,
        city: this.stationCity,
        inventory: this.stationInventory,
        available: this.stationAvailable - 1,
        openTime: this.stationOpen,
        closeTime: this.stationClose,
      };
      axios.post("http://localhost:8080/station/save", json)
      .then(() => {});
    },
    hacerPedido() {
      if(this.serviceStart!=""){
        this.validarAlquiler = false;
        var date = new Date();
        var dateString =
          date.getFullYear() +"/"+ date.getMonth() +"/"+ date.getDay() +" "+
          date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();

        if((parseInt(this.serviceStart.substring(0,2), 10)+ parseInt(this.hours))>=24){
          var hourAux = (parseInt(this.serviceStart.substring(0,2), 10) + parseInt(this.hours))-24;

          if(hourAux<10){
            this.serviceFinish = "0" + hourAux + ":" + this.serviceStart.substring(3,5);
          }else{
            this.serviceFinish = hourAux + ":" + this.serviceStart.substring(3,5);
          }
        }else{
          var hourAux = parseInt(this.serviceStart.substring(0,2), 10) + parseInt(this.hours);
          if(hourAux<10){
            this.serviceFinish = "0" + hourAux + ":" + this.serviceStart.substring(3,5);
          }else{
            this.serviceFinish = hourAux + ":" + this.serviceStart.substring(3,5);
          }
        }

        let json = {
          orderDate: dateString,
          orderStatus: this.status,
          hours: parseInt(this.hours),
          price: parseInt(this.hours) * parseInt(this.valueHour),
          serialBicycle: this.toSentSerialBike,
          paymentID: 1, //always this will be 1 = efectivo
          stationID: this.idStation,
          userId: this.idClient,
          serviceStart: this.serviceStart,
          serviceFinish: this.serviceFinish,
        };
        this.updateValuesBikes();
        this.updateValuesStation();
        axios.post("http://localhost:8080/order/save", json).then(r => {
           this.$router.push("/cliente-solicitudes"); 
        });
      }else{
        this.validarAlquiler = true;
      }
    }
  },
  mounted: function() {
    /* Obteniendo  UserData = OK */
    axios
      .get("http://localhost:8080/user/getUser", {
        params: { access_token: getAuthenticationToken() }
      })
      .then(userData => {
        this.idClient = userData.data.id;
        this.client = "Cliente: " + userData.data.names;
        this.cedula = "ID: " + userData.data.identityNumber;
      });

    /* Obteniendo  Station Data  = OK */
    axios
      .get("http://localhost:8080/station/" + this.idStation)
      .then(stationData => {
        this.idStation = stationData.data.id;
        this.stationName = stationData.data.stationName;
        this.stationAddress = stationData.data.address;
        this.stationPhone = stationData.data.phone;
        this.stationCity = stationData.data.city;
        this.stationInventory = stationData.data.inventory;
        this.stationAvailable = stationData.data.available;
        this.stationOpen = stationData.data.openTime;
        this.stationClose = stationData.data.closeTime;
      });

    /* Obteniendo  BikeData = OK*/
    axios
      .get("http://localhost:8080/bicycle/" + this.idStation)
      .then(bicycleData => {
        this.toSentSerialBike = bicycleData.data.bicycleSerial;
        this.toSentVendorBike = bicycleData.data.vendor;
        this.bikeBrand = this.toSentVendorBike;
        this.serialBike = this.toSentSerialBike;
        this.idBike = bicycleData.data.id;
      });
  },
  beforeDestroy(){
    //sessionStorage.clear();
    //localStorage.clear();
    //localStorage.setItem('stationID', this.idStation);
    //this.$session.set('stationID', this.idStation);

  }
};
</script>

<style scoped>


.card{
  background-color:rgb(255, 255, 255);
  margin-right: 10%;
  margin-bottom: 10%;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.7);


}

.body {
  height: 100vh;
  overflow: auto;   /* Arregla problema de imagen salida */
  background-size: cover;
  font-family: "Montserrat", sans-serif;
  background-color: #0e0f1c;
  opacity: 1;
  background: radial-gradient(circle, transparent 20%, #0e0f1c 20%, #0e0f1c 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #0e0f1c 20%, #0e0f1c 80%, transparent 80%, transparent) 27.5px 27.5px, linear-gradient(#00425e 2.2px, transparent 2.2px) 0 -1.1px, linear-gradient(90deg, #00425e 2.2px, #0e0f1c 2.2px) -1.1px 0;
  background-size: 55px 55px, 55px 55px, 27.5px 27.5px, 27.5px 27.5px;
}

h1,
h2,
h3,
h5 {
  font-family: "Montserrat", sans-serif;
  color: white;
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
p{
  margin: 0px;
  padding: 0px;
  border: 0px;
}
</style>
