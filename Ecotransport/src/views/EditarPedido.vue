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
            <label for="" class="control-label col-sm-3">Bicicleta</label>
            <div class="col-sm-7">
              <input
                disabled
                type="text"
                class="form-control"
                name="bicicleta"
                id="bicicleta"
                v-model="bicycle"
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
      bicycle: "", //string     
      station: "", //integer
      user: "",
      
      //BICYCLE DATA 
      idBicycle:"-1", //integer
      vendor:"-1",
      bicycleSerial:"-1",
      bicycleStatus:"-1",
      stationId:"-1",

      //STATION DATA
      stationName:"",
      address:"",
      phone:"",
      city:"",
      inventory:"",
      available:"",
      openTime:"",
      closeTime:"",
      
    
    };
  },
  methods: {
    wildcardLoadData(){
      
      axios
      .get("http://localhost:8080/bicycle/serial/" + this.bicycle)
      .then(r => {
        this.idBicycle = r.data.id;
        this.vendor = r.data.vendor;
        this.bicycleSerial = r.data.bicycleSerial;
        this.bicycleStatus = "Disponible"; //this is the update
        this.stationId = r.data.stationId;
      });

      axios
      .get("http://localhost:8080/station/" + this.station)
      .then(r => {
        this.stationName = r.data.stationName;
        this.address = r.data.address;
        this.phone = r.data.phone;
        this.city = r.data.city;
        this.inventory = r.data.inventory;
        this.available = r.data.available;
        this.openTime = r.data.openTime;
        this.closeTime = r.data.closeTime;
      });
    },
    updateBikesAfterDelete(){ 
      let json = {
        id: this.idBicycle,
        vendor: this.vendor,
        bicycleSerial: this.bicycleSerial,
        bicycleStatus: this.bicycleStatus,
        stationId: this.stationId
      }

      axios
      .post("http://localhost:8080/bicycle/save/", json)
      .then(()=>{/* console.log(r.data) */});
    },

    updateStationsAfterDelete(){

      /* console.log("STATION:", this.station, this.stationName,
      this.address,
      this.phone,
      this.city,
      this.inventory,
      this.available,
      this.openTime,
      this.closeTime
      ) */
      
      let json = {
        id: this.station,
        stationName: this.stationName,
        address: this.address,
        phone: this.phone,
        city: this.city,
        inventory: this.inventory,
        available: this.available + 1,//this is the update
        openTime: this.openTime,
        closeTime: this.closeTime 
      }
      axios
      .post("http://localhost:8080/station/save/", json)
      .then(()=>{/* console.log(r.data) */});

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
          this.wildcardLoadData();
          setTimeout(()=>{this.updateBikesAfterDelete();},30);//minimum 30ms    
          setTimeout(()=>{this.updateStationsAfterDelete();},50);//minimum 50ms    
          this.$router.push("/cliente-solicitudes");
        });
    }
  },

  created() {    
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
  height: 100vh;  
  overflow: auto;   /* Arregla problema de imagen salida */
  background-size: cover;
  font-family: "Montserrat", sans-serif;
  background-color: #222222;
  opacity: 0.9;
  background: radial-gradient(circle, transparent 20%, #222222 20%, #222222 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #222222 20%, #222222 80%, transparent 80%, transparent) 27.5px 27.5px, linear-gradient(#000000 2.2px, transparent 2.2px) 0 -1.1px, linear-gradient(90deg, #000000 2.2px, #222222 2.2px) -1.1px 0;
  background-size: 55px 55px, 55px 55px, 27.5px 27.5px, 27.5px 27.5px;
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
