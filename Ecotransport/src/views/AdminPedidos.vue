<template>
  <div>
    <div class="body">
      <HeaderAdmin />
      <br /><br />
      <h1>Edite la información de algún pedido</h1>
      <br />

      <div class="container izquierda">
        <br /><br />

        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">FECHA</th>
              <th scope="col">ESTADO</th>
              <th scope="col">TIEMPO</th>
              <th scope="col">PRECIO</th>
              <th scope="col">BICICLETA</th>
              <th scope="col">ESTACIÓN</th>
              <th scope="col">USUARIO</th>
              <th scope="col">HORA RECOGIDA</th>
              <th scope="col">HORA ENTREGA</th>
              <th scope="col">PAGO</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in OrderList"
              :key="item.id"
              v-on:click="editar(item.id)">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.orderDate }}</td>
              <td>{{ item.orderStatus }}</td>
              <td>{{ item.hours }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.serialBicycle }}</td>
              <td>{{ item.stationID }}</td>
              <td>{{ item.userId }}</td>
              <td>{{ item.serviceStart }}</td>
              <td>{{ item.serviceFinish }}</td>
              <td>Efectivo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import HeaderAdmin from "@/components/HeaderAdmin.vue";
  import Footer from "@/components/Footer.vue";
  import axios from "axios";
  import { getAuthenticationToken } from "@/dataStorage";

  export default {
    name: "AdminPedidos",
    beforeCreate() {
      if (!getAuthenticationToken()) {
        this.$router.push({ name: "IniciarSesion" });
      }
    },
    data() {
      return {
        OrderList: null,
        stationList: null
      };
    },
    components: {
      HeaderAdmin,
      Footer
    },
    methods: {
      editar(id) {
        this.$router.push("/editar-pedido-admin/" + id);
      }
    },
    mounted: function() {
      let stationList;
      axios.get("http://localhost:8080/order/")
        .then(data => {
          this.OrderList = data.data;
          this.OrderList.forEach(function (order) {
            axios.get("http://localhost:8080/station/" + order.stationID)
              .then(stationData => {order.stationID = stationData.data.stationName;
              });
            axios.get("http://localhost:8080/user/getIdsAndUsernames")
              .then(userData => {order.userId = userData.data[order.userId];
              });
          });
        });
    }
  };
</script>

<style scoped>
  .izquierda {
    text-align: left;
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

  h1 {
    color: white;
  }

  .table {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    color: white;
  }

  table tbody :hover {
    background-color: rgba(255, 255, 255, 0.7);
    color: black;
  }
</style>
