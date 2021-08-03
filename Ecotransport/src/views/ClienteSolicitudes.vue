<template>
  <!-- style="background-image: url('https://images.pexels.com/photos/409701/pexels-photo-409701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');"   -->
  <div
    class="body"

  >
    <HeaderUser></HeaderUser>
    <br /><br />
    <h1>¡Bienvenid@, {{ nombreUser }}!</h1>
    <h1>Consulta tu historial de préstamos</h1>
    <br />

    <div class="container izquierda">
      <form method="get" action="/mapa">
        <button class="btn btn-primary" v-on:click="nuevo()">
          ¡Alquila una bicicleta!
        </button>
      </form>
      <br /><br />

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">FECHA</th>
            <th scope="col">ESTADO</th>
            <th scope="col">ESTACIÓN</th>
            <th scope="col">BICICLETA</th>
            <th scope="col">CANT. HORAS</th>
            <th scope="col">PRECIO TOTAL</th>
            <th scope="col">HORA RECOGIDA</th>
            <th scope="col">HORA ENTREGA</th>
            <th scope="col">MÉTODO DE PAGO</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="prestamo in OrderList"
            :key="prestamo.id"
            v-on:click="editar(prestamo.id)">
            <td>{{ prestamo.orderDate }}</td>
            <td>{{ prestamo.orderStatus }}</td>
            <td>{{ prestamo.stationID }}</td>
            <td>{{ prestamo.serialBicycle }}</td>
            <td>{{ prestamo.hours }}</td>
            <td>{{ prestamo.price }}</td>
            <td>{{ prestamo.serviceStart }}</td>
            <td>{{ prestamo.serviceFinish }}</td>
            <td> Efectivo </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <Footer /> -->
    <br><br><br><br>
  </div>
</template>

<script>
  import HeaderUser from "@/components/HeaderUser.vue";
  import axios from "axios";
  import { getAuthenticationToken } from "@/dataStorage";

  export default {
    name: "EditarPrestamos",

    beforeCreate() {
      if (!getAuthenticationToken()) {
        this.$router.push({ name: "IniciarSesion" });
      }
    },

    data: function() {
      return {
        OrderList: null,
        idClient: 0,
        user: this.$session.get('usuario'),
        stationList: null,
        nombreUser: "",
      };
    },

    components: {
      HeaderUser
    },

    methods: {
      gettingStationData(){
      },

      editar(id) {
        //this.$session.clear("stationName");
        this.$router.push("/editar-pedido/" + id);
      },

      nuevo() {
        this.$session.clear("stationName");
        this.$router.push("/mapa");
      }
    },

    mounted: function() {
      if (!getAuthenticationToken()) {
        //this is because if customer is logged
        //but do not anything during a period of time
        //he'll lose the credentials by this session
        //but still there, without this if-sentence
        //he'll see the whole data.
        this.$router.push({ name: "IniciarSesion" });
      } else {

        this.gettingStationData();

        axios.get( "http://localhost:8080/user/getNames", { params: { access_token: getAuthenticationToken( ) } } )
          .then( response => {
            this.nombreUser = response.data
          } );
        axios.get("http://localhost:8080/user/getUser", {
           params: { access_token: getAuthenticationToken() }
        }).then(userData => {
            this.idClient = userData.data.id;

            //It's mandatory use this axios-call inside current call
            //because somehow the idClient lost the value beyond these brackets
            //So, meanwhile, I solved it with a second call like below
            axios
            .get("http://localhost:8080/order/user/" + this.idClient)
            .then(orderData => {
              this.OrderList = orderData.data;
              this.OrderList.forEach(function(order){
                axios.get("http://localhost:8080/station/" + order.stationID)
                      .then(tmp => {order.stationID = tmp.data.stationName;});
                 /* axios.get( "http://localhost:8080/user/getNames", { params: { access_token: getAuthenticationToken( ) } })
                      .then(tmp => {order.userId = tmp.data}); */
              });
            });
         });
      }
    }
  };
</script>

<style scoped>
  .izquierda {
    text-align: left;
  }

  h1{
    color: white;
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

  .table{
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    color:white;
  }

  table tbody :hover{
    background-color: rgba(255, 255, 255, 0.7);
    color: black
  }
</style>
