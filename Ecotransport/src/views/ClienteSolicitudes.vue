<template>
  <div>
    <Header></Header>
    <br /><br />
    <h1>Bienvenido Cliente</h1>
    <h1>Aqui podras revisar tu historial de prestamos</h1>
    <br />


    <!-- <form action="" class="form-horizontal">
      <div class="col-sm-10">
        <input
          type="hidden"
          id="custId"
          name="custId"
          value="3487"
          v-model="form.userID"
        />
      </div>
      <div class="col-sm-10">
        <input
          type="hidden"
          id="custId"
          name="custId"
          value="3487"
          v-model="form.Username"
        />
      </div>
    </form>
    <br /> -->




    <div class="container izquierda">
      <form method="get" action="/mapa">
        <button class="btn btn-primary" v-on:click="nuevo()">
          Pide una Bici!
        </button>
      </form>
      <br /><br />

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">FECHA</th>
            <th scope="col">ESTADO</th>            
            <th scope="col">USUARIO</th>
            <th scope="col">ESTACION</th>            
            <th scope="col">BICICLETA</th>
            <th scope="col">CANT. HORAS</th>
            <th scope="col">PRECIO TOTAL</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="prestamo in ListaPrestamos"
            :key="prestamo.orderId"
            v-on:click="editar(prestamo.orderId)"
          >
            <th scope="row">{{ prestamo.orderId }}</th>
            <td>{{ prestamo.orderDate }}</td>
            <td>{{ prestamo.orderStatus }}</td>            
            <td>{{ form.username }}</td>
            <td>{{ prestamo.orderStationId }}</td>            
            <td>{{ prestamo.orderBicycleId }}</td>  
            <td>{{ prestamo.orderTime }}</td> <!-- cantidad de horas -->          
            <td>{{ prestamo.orderTotalPrice }}</td>
          </tr>


        </tbody>
      </table>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import { getAuthenticationToken } from "@/dataStorage";

export default {
  name: "EditarPrestamos",

  beforeCreate() {
    if (!getAuthenticationToken()) {
      this.$router.push({ name: "IniciarSesion" });
    }
  },

  data() {
    return {
      ListaPrestamos: null,      
      form: {
        userID: "",
        username: ""
      }
    };
  },

  components: {
    Header
  },

  methods: {
    nuevo() {
      this.$router.push("/mapa");
    }
  },
  mounted: function() {
    axios.get("http://localhost:8080/order")
        .then(ORDERS => 
        {
            axios.get("http://localhost:8080/getUser", 
                {params: { access_token: getAuthenticationToken() }
                })
                .then(USERS => 
                {
                    this.form.userID = USERS.data.id;
                    this.form.username = USERS.data.username;
                    this.ListaOrdenes = ORDERS.data;
                    this.ListaPrestamos = new Array();
                    for (var key in this.ListaOrdenes) 
                    {
                        var orden = this.ListaOrdenes[key];                        
                        if (orden.orderUserId === this.form.userID) {
                            this.ListaPrestamos.push(orden);
                        }
                    }
                });
        });
  }
};
</script>

<style scoped>
.izquierda {
  text-align: left;
}
</style>
