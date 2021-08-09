<template>
  <!-- style="background-image: url('https://images.pexels.com/photos/1545505/pexels-photo-1545505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');" -->
  <div class="body">
    <HeaderAdmin />
    <br /><br />
    <div class="container" v-on:submit.prevent="obteniendoData">
      <b-form-row>
        <b-col>
          <label for="" class="control-label col-sm-2">ID</label>
          <b-form-input 
              disabled
              type="text"
              class="form-control"
              name="orderID"
              id="orderID"
              v-model="orderID" />
          <br /><br />
          <label for="" class="control-label col-sm-3">HORAS</label>
          <b-form-input 
            disabled
            type="number"
            class="form-control"
            name="hours"
            id="hours"
            v-model="hours" />
          <br /><br />
          <label for="" class="control-label col-sm-3">ESTACIÓN</label>
          <b-form-input 
            disabled
            type="text"
            class="form-control"
            name="station"
            id="station"
            v-model="station" />
          <br /><br />
          <label for="" class="control-label col-sm-3">HORA ENTREGA</label>
          <b-form-input 
            disabled
            type="text"
            class="form-control"
            name="serviceFinish"
            id="serviceFinish"
            v-model="serviceFinish" />
          <br /><br />
          <label for="" class="control-label col-sm-3">SOBRECOSTO</label>
          <b-form-input 
            disabled
            type="number"
            class="form-control"
            name="extraPayment"
            id="extraPayment"
            v-model="extraPayment" />
        </b-col>
        <b-col>
          <label for="" class="control-label col-sm-2">FECHA</label>
          <b-form-input 
            disabled
            type="text"
            class="form-control"
            name="date"
            id="date"
            v-model="date" />
          <br /><br />
          <label for="" class="control-label col-sm-3">PRECIO</label>
          <b-form-input 
            disabled
            type="number"
            class="form-control"
            name="price"
            id="price"
            v-model="price" />
          <br /><br />
          <label for="" class="control-label col-sm-3">USUARIO</label>
          <b-form-input 
            disabled
            type="text"
            class="form-control"
            name="user"
            id="user"
            v-model="user" />
          <br /><br />
          <label for="" class="control-label col-sm-3">HORA RECOGIDA</label>
          <b-form-input 
            disabled
            type="text"
            class="form-control"
            name="serviceStart"
            id="serviceStart"
            v-model="serviceStart" />
        </b-col>
        <b-col>
          <label for="" class="control-label col-sm-2">STATUS</label>
          <b-form-input 
            disabled
            type="text"
            class="form-control"
            name="status"
            id="status"
            v-model="status" />
          <br /><br />
          <label for="" class="control-label col-sm-3">BICICLETA</label>
          <b-form-input 
            disabled
            type="text"
            class="form-control"
            name="serial"
            id="serial"
            v-model="serial" />
          <br /><br />
          <label for="" class="control-label col-sm-3">PAGO</label>
          <b-form-input 
            disabled
            type="text"
            class="form-control"
            name="payment"
            id="payment"
            v-model="payment" />
          <br /><br />
          <label for="" class="control-label col-sm-3">TOTAL SERVICIO</label>
          <b-form-input 
            disabled
            type="number"
            class="form-control"
            name="total"
            id="total"
            v-model="total" />
          <br /><br />
          <button
            v-show="showButtonSobrecosto"
            type="button"
            class="btn btn-primary"
            v-on:click="calcularSobrecosto()"
          >
            Calcular Sobrecosto
          </button> 

          <button
            v-show="showButtonIniciarServicio"
            type="button"
            class="btn btn-success"
            v-on:click="iniciarServicio()"
          >
            Iniciar Servicio
          </button>

          <button
          v-show="showButtonFinalizarServicio"
            type="button"
            class="btn btn-success"
            v-on:click="finalizarServicio()"
          >
            Finalizar Servicio
          </button>

          <button
            type="button"
            class="btn btn-danger"
            v-on:click="salir()"
          >
            Salir
          </button>
        </b-col>
      </b-form-row>

    </div>
    <!-- <Footer />   -->
    <br />
  </div>
</template>
<script>
import HeaderAdmin from "@/components/HeaderAdmin.vue";

import axios from "axios";
export default {
  name: "EditarPedidoAdmin",
  components: {
    HeaderAdmin
  },
  data: function() {
    return {
      showButtonIniciarServicio: false,
      showButtonFinalizarServicio: false,
      showButtonSobrecosto: false,

      localSg: "",
      idStationFinish: "",

      //ORDER DATA
      orderID: "",
      date: "",
      status: "",
      hours: "",
      price: "",
      serial: "",
      station: "",
      user: "",
      payment: "",
      serviceStart: "",
      serviceFinish: "",
      priceHour: 10000,      
      extraPayment: 0,
      total: 0,

      //BICYCLE DATA 
      idBicycle: "-1", //integer
      vendor: "-1",
      bicycleSerial: "-1",
      bicycleStatus: "-1",
      stationId: "-1",

      //STATION DATA
      stationName: "",
      address: "",
      phone: "",
      city: "",
      inventory: "",
      available: "",
      openTime: "",
      closeTime: "",
    };
  },
  methods: {
    
    salir() {
      this.$router.push("/admin-pedidos");
    },
    calcularSobrecosto() {
      var date = new Date();
      var hh = date.getHours(); 
      var mm = date.getMinutes();        
      var hhOrder = parseInt(this.serviceFinish.substring(0,2));
      var mmOrder = parseInt(this.serviceFinish.substring(3,5));
      var HH = hh-hhOrder;
      var MM = mm+mmOrder;

      if(hh<hhOrder){
        this.extraPayment = 0;
      }else{
        if(hh>hhOrder){
          if((mm+mmOrder>=60)){
            this.extraPayment = HH * this.priceHour;
            if((MM-60)>=15){this.extraPayment = this.extraPayment + this.priceHour}
          }else{
            this.extraPayment = (HH - 1) * this.priceHour;
            if(MM>=15){this.extraPayment = this.extraPayment + this.priceHour}
          }
        }else{
          if(MM>=15){this.extraPayment = this.extraPayment + this.priceHour}
        }
      }
      this.total = this.extraPayment + this.price

    },
    iniciarServicio(){
      let json = {
        id:  this.orderID,
        orderDate: this.date,
        orderStatus: "EN SERVICIO",
        hours: this.hours,
        price: this.price,
        serialBicycle: this.serial,
        paymentID: 1,
        stationID: this.station,
        userId: this.user,
        serviceStart: this.serviceStart,
        serviceFinish: this.serviceFinish
      };
      console.log(json);
      axios.post("http://localhost:8080/order/save/", json)
            .then(() => {this.$router.push("/admin-pedidos");  });
    },
    finalizarServicio(){   
      let json = {
        id: this.orderID,
        orderDate: this.date,
        orderStatus: "FINALIZADO",
        hours: this.hours,
        price: this.price + this.extraPayment,
        serialBicycle: this.serial,
        paymentID: 1,
        stationID: this.station,
        userId: this.user,
        serviceStart: this.serviceStart,
        serviceFinish: this.serviceFinish
      };
      //console.log(json);
      axios.post("http://localhost:8080/order/save/", json)
            .then(() => {
              this.wildcardLoadData(); 
              this.$router.push("/admin-pedidos");
              });  
    },
    wildcardLoadData(){
      axios
      .get("http://localhost:8080/bicycle/serial/" + this.serial)
      .then(r => {
        let json = {
          id: r.data.id,
          vendor: r.data.vendor,
          bicycleSerial: r.data.bicycleSerial,
          bicycleStatus: "Disponible",
          stationId: this.idStationFinish,
        }
        axios
        .post("http://localhost:8080/bicycle/save/", json)
        .then(()=>{/* console.log(r.data) */});
      });
      axios
      .get("http://localhost:8080/station/" + this.idStationFinish)
      .then(r => {
        let json = {
          id: this.idStationFinish,
          stationName: r.data.stationName,
          address: r.data.address,
          phone: r.data.phone,
          city: r.data.city,
          inventory: r.data.inventory,
          available: r.data.available + 1,//this is the update
          openTime: r.data.openTime,
          closeTime: r.data.closeTime, 
        }
        axios
        .post("http://localhost:8080/station/save/", json)
        .then(()=>{/* console.log(r.data) */});
        });
    },
  },
  mounted: function() {
    this.orderID = this.$route.params.id;
    axios.get("http://localhost:8080/order/" + this.orderID).then(data => {
      this.date = data.data.orderDate;
      this.status = data.data.orderStatus;
      this.hours = data.data.hours;
      this.price = data.data.price;
      this.serial = data.data.serialBicycle;
      this.station = data.data.stationID;
      this.user = data.data.userId;
      this.serviceStart = data.data.serviceStart;
      this.serviceFinish = data.data.serviceFinish;
      this.payment = data.data.paymentID;
      if(this.status=="PENDIENTE DE PAGO"){
        this.showButtonIniciarServicio = true;
      }else{
        if(this.status=="EN SERVICIO"){
          this.showButtonSobrecosto = true;
          this.showButtonFinalizarServicio = true;
        }
      }
      if(this.payment==1){
        this.payment = "EFECTIVO";
      }
    });
    this.localSg = localStorage.nameStation;
    console.log("localSg", this.localSg);
    axios.get("http://localhost:8080/station/testing/" + this.localSg).then(data => {
      this.idStationFinish = data.data.id;
      console.log(this.idStationFinish);
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
.body {
  height: 100vh;  
  overflow: auto;   /* Arregla problema de imagen salida */
  background-size: cover;
  font-family: "Montserrat", sans-serif;
  background-color: #10100d;
  opacity: 1;
  background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #10100d 11px ), repeating-linear-gradient( #322d0855, #322d08 );
}


.control-label {
  color: rgb(252, 250, 250);
}

form {
  width: 40%;
  font-size: 20px;
}
#idEstacion {
  background-color: rgba(255, 255, 255, 0.2);
  border: solid 1px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  color: white;
}
input {
  background-color: rgba(255, 255, 255, 0.2);
  border: solid 1px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  color: rgb(3, 3, 3);
}
</style>

