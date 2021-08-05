<template>
  <!-- style="background-image: url('https://images.pexels.com/photos/1545505/pexels-photo-1545505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');" -->
  <div class="body">
    <HeaderAdmin />
    <br /><br />
    <div class="container" v-on:submit.prevent="obteniendoData">
      <form action="" class="form-horizontal">
        <div class="form-group left">
          <label class="control-label col-sm-2">ID</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="orderID"
              id="orderID"
              v-model="orderID"/>
          </div>
        </div>

        <div class="form-group left">
          <label class="control-label col-sm-2">FECHA</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="date"
              id="date"
              v-model="date"/>
          </div>
        </div>

        <div class="form-group left">
          <label class="control-label col-sm-2">ESTADO</label>
          <div class="col-sm-10">
            <select id="status" name="status">
              <option value="volvo">{{ status }}</option>
              <option value="saab">Recogido</option>
              <option value="saab">Entregado</option>
              <option value="saab">Pagado</option>
              <option value="mercedes">Anulado</option>
              <option value="audi">Finalizado</option>
            </select>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label class="control-label col-sm-3">TIEMPO</label>
            <div class="col-sm-7">
              <input
                type="number"
                class="form-control"
                name="hours"
                id="hours"
                v-model="hours"/>
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label class="control-label col-sm-3">PRECIO</label>
            <div class="col-sm-7">
              <input
                type="number"
                class="form-control"
                name="price"
                id="price"
                v-model="price"/>
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label class="control-label col-sm-3">BICICLETA</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="serial"
                id="serial"
                v-model="serial"/>
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label class="control-label col-sm-3">ESTACIÓN</label>
            <div class="col-sm-7">
              <input

                type="text"
                class="form-control"
                name="station"
                id="station"
                v-model="station"
              />
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label class="control-label col-sm-3">USUARIO</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="user"
                id="user"
                v-model="user"/>
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label class="control-label col-sm-3">HORA RECOGIDA</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="serviceStart"
                id="serviceStart"
                v-model="serviceStart"/>
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label class="control-label col-sm-3">HORA ENTREGA</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="serviceFinish"
                id="serviceFinish"
                v-model="serviceFinish"/>
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label class="control-label col-sm-3">PAGO</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="payment"
                id="payment"
                v-model="payment"/>
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label class="control-label col-sm-3">SOBRECOSTO</label>
            <div class="col-sm-7">
              <input
                type="number"
                class="form-control"
                name="extraPayment"
                id="extraPayment"
                v-model="extraPayment"/>
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label class="control-label col-sm-3">TOTAL SERVICIO</label>
            <div class="col-sm-7">
              <input
                type="number"
                class="form-control"
                name="total"
                id="total"
                v-model="total"/>
            </div>
          </div>
        </div>

        <div><br /><br /><br /></div>

        <div class="form-group">
          <button
            type="button"
            class="btn btn-primary"
            v-on:click="editar()">
            Editar
          </button>

          <button
            type="button"
            class="btn btn-info"
            v-on:click="calcularSobreCosto()">
            Sobrecosto
          </button>

          <button
            type="button"
            class="btn btn-success"
            v-on:click="finalizarPedido()">
            Finalizar
          </button>

          <button
            type="button"
            class="btn btn-danger"
            v-on:click="salir()">
            Salir
          </button>
        </div>
      </form>
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
      editar() {
        var combo = document.getElementById("status");
        var selected = combo.options[combo.selectedIndex].text;
        let json = {
          id: this.orderID,
          orderDate: this.date,
          orderStatus: selected,
          hours: this.hours,
          price: this.price,
          serialBicycle: this.serial,
          paymentID: this.payment,
          stationID: this.station,
          userId: this.user,
          serviceStart: this.serviceStart,
          serviceFinish: this.serviceFinish
        };
        //console.log(json);
        axios.post("http://localhost:8080/order/save/", json)
              .then(() => {/* console.log(data); */});
      },
      salir() {
        this.$router.push("/admin-pedidos");
      },
      calcularSobreCosto(){
        var date = new Date();
        var hh = date.getHours(), mm = date.getMinutes(), ss = date.getSeconds();
        var hhOrder = parseInt(this.serviceFinish.substring(0,2));
        var mmOrder = parseInt(this.serviceFinish.substring(3,5));
        var HH = hh-hhOrder, MM = mm-mmOrder;

        if(hh<hhOrder){
          HH = (hhOrder-12)+hh;
          if(HH<0){HH = 24+HH}//meaning that the delay is near to 24hrs
        }

        if(MM>15){HH = HH+1}//after 15min the full hour will be applied

        this.extraPayment = HH*this.priceHour;
        this.total = this.extraPayment + this.price;
      },
      finalizarPedido(){
        let json = {
          id: this.orderID,
          orderDate: this.date,
          orderStatus: "Finalizado",
          hours: this.hours,
          price: this.price + this.extraPayment,
          serialBicycle: this.serial,
          paymentID: this.payment,
          stationID: this.station,
          userId: this.user,
          serviceStart: this.serviceStart,
          serviceFinish: this.serviceFinish
        };
        //console.log(json);
        axios.post("http://localhost:8080/order/save/", json)
              .then(() => {/* console.log(data); */});
        this.wildcardLoadData();
        this.$router.push("/admin-pedidos");
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
            stationId: r.data.stationId,
          }
          axios
          .post("http://localhost:8080/bicycle/save/", json)
          .then(()=>{/* console.log(r.data) */});
        });
        axios
        .get("http://localhost:8080/station/" + this.station)
        .then(r => {
          let json = {
            id: this.station,
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
    color: white;
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
    color: white;
  }
</style>
