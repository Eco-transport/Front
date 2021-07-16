<template>
  <!-- style="background-image: url('https://images.pexels.com/photos/409701/pexels-photo-409701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');" -->
  <div
    class="body"
    
  >
    <HeaderUser />
    <br /><br />
    <div class="container" v-on:submit.prevent="obteniendoData">
      <form action="" class="form-horizontal">
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">ID</label>
          <div class="col-sm-10">
            <input
              disabled
              type="text"
              class="form-control"
              name="idPedido"
              id="idPedido"
              v-model="id"
            />
          </div>
        </div>

        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Fecha</label>
          <div class="col-sm-10">
            <input
              disabled
              type="text"
              class="form-control"
              name="fecha"
              id="fecha"
              v-model="fecha"
            />
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">status</label>
          <div class="col-sm-10">
            <input
                disabled
              type="text"
              class="form-control"
              name="status"
              id="status"
              v-model="status"
            />
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Estacion</label>
            <div class="col-sm-7">
              <input
                disabled
                type="text"
                class="form-control"
                name="estacion"
                id="estacion"
                v-model="station"
              />
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Horas</label>
            <div class="col-sm-7">
              <input
                type="number"
                class="form-control"
                name="horas"
                id="horas"
                v-model="hours"
              />
            </div>
          </div>
        </div>

        <div><br /><br /><br /></div>
        <div class="form-group">
          <a
            href="/cliente-solicitudes"
            class="btn btn-primary"
            v-on:click="editar()"
            >Editar</a
          >

          <button
            type="button"
            class="btn btn-danger margen"
            v-on:click="eliminar()"
          >
            Eliminar
          </button>

          <button
            type="button"
            class="btn btn-dark margen"
            v-on:click="salir()"
          >
            Salir
          </button>
        </div>
      </form>
    </div>
    <!-- <Footer />   -->
  </div>
</template>
<script>
import HeaderUser from "@/components/HeaderUser.vue";
import axios from "axios";


export default {
  name: "EditarPedido", 

  components: {
    HeaderUser
  },
  data: function() {
    return {
      //ORDER DATA
      id: this.$route.params.id,
      fecha: "",
      status: "",
      hours: 0,
      valueHour: 10000, 
      bicycle: "",      
      station: "",
      user: "",
      
      //BICYCLE DATA 
      idBicycle: parseInt(localStorage.getItem('bikeID')),

      //STATION DATA
      idStation: parseInt(localStorage.getItem('stationID'))
      
      
    
    };
  },
  methods: {
    updateBikesAfterDelete(){
      let json = {
        id: this.idBicycle,
        vendor:localStorage.getItem('vendor'),
        bicycleSerial: localStorage.getItem('bike'),
        bicycleStatus: "Disponible", //this is the change
        stationId: this.idStation
      }
      axios
      .post("http://localhost:8080/bicycle/save/", json)
      .then(()=>{});
    },
    updateStationsAfterDelete(){
      let json = {
        id: this.idStation,
        stationName: localStorage.getItem('stationName'),
        address: localStorage.getItem('stationAddress'),
        phone: localStorage.getItem('stationPhone'),
        city: localStorage.getItem('stationCity'),
        inventory: parseInt(localStorage.getItem('stationInventory')),
        available: parseInt(localStorage.getItem('stationAvailable')),
        openTime: localStorage.getItem('stationOpen'),
        closeTime: localStorage.getItem('stationClose') 
      }
      axios
      .post("http://localhost:8080/station/save/", json)
      .then(r=>{console.log(r.data)});
    },
    editar() {
      let json = {
        id: this.id,
        orderDate: this.fecha,
        orderStatus: this.status,
        hours: this.hours,
        price: this.hours * this.valueHour,
        serialBicycle: this.bicycle,
        paymentID: 1, //always this will be 1 = efectivo
        stationID: this.station,
        userId: this.user
      };
      axios.post("http://localhost:8080/order/save/", json).then(() => {});
    },
    salir() {
      this.$router.push("/cliente-solicitudes");
    },
    eliminar() {
      axios
        .delete("http://localhost:8080/order/" + this.id)
        .then(() => {
          this.updateBikesAfterDelete();
          this.updateStationsAfterDelete();
          this.$router.push("/cliente-solicitudes");
        });
    }
  },

  mounted: function() {    
    axios.get("http://localhost:8080/order/" + this.id)
    .then(datos => {      
      this.fecha = datos.data.orderDate;
      this.status = datos.data.orderStatus;
      this.hours = datos.data.hours;
      this.bicycle = datos.data.serialBicycle;
      this.station = datos.data.stationID;
      this.user = datos.data.userId;
    });
  }
};
</script>

<style scoped>
.left {
  text-align: left;
}
.margen {
  margin-left: 15px;
  margin-right: 15px;
}

/* agrega */
.body {
  height: auto;
  background-color: rgb(0, 0, 0, 0.5);
  background-size: cover;
  font-family: "Montserrat", sans-serif;
}

.control-label {
  color: white;
}

form {
  width: 40%;
  font-size: 20px;
}
#estacion, #status, #fecha, #idPedido {
  background-color: rgba(255, 255, 255, 0.2);
  border: solid 1px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  color: white;
}
input {
  background-color: rgba(255, 255, 255, 0.2);
  border: solid 1px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  color: white;
}
</style>
