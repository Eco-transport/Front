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

        <div>
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="3000"
            controls
            background="#aaa"
            img-height="300"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Imagen verde frontal -->
            <b-carousel-slide
              caption="Novedosos diseños"
              text="Contamos con los más altos standares de calidad a tu servicio"
              img-src="https://http2.mlstatic.com/D_NQ_NP_2X_953114-MCO44898244934_022021-F.webp"
            ></b-carousel-slide>

            <!-- imagen amarilla frontal  -->
            <b-carousel-slide
              caption="Multiples colores"
              text="Los materiales mas resistentes"
              img-src="https://http2.mlstatic.com/D_NQ_NP_905640-MCO44898282095_022021-O.webp"
            ></b-carousel-slide>

            <!-- amarilla trasera -->
            <b-carousel-slide
              caption="Viaje confortable"
              text="Comodidad y confort garantizado"
              img-src="https://http2.mlstatic.com/D_NQ_NP_839289-MCO44898243919_022021-O.webp"
            ></b-carousel-slide>

            <!-- azul frontal -->
            <b-carousel-slide
              caption="Sin papeleos"
              text="Sin contratos ni papeleos tediosos"
              img-src="https://http2.mlstatic.com/D_NQ_NP_2X_638089-MCO44126303547_112020-F.webp"
            ></b-carousel-slide>

            <!-- azul trasera  -->
            <b-carousel-slide
              caption="Todo desde tu celular"
              text="Realiza todo el proceso de reserva desde tu móvil"
              img-src="https://http2.mlstatic.com/D_NQ_NP_828569-MCO44126303595_112020-O.webp"
            ></b-carousel-slide>
          </b-carousel>
        </div>

        <!-- <img
          src="https://http2.mlstatic.com/D_NQ_NP_2X_953114-MCO44898244934_022021-F.webp"
          style="width: 500px; height: auto"
          alt="Cicla Ecologica"
        /> -->
      </div>

      <div class="col">
        <div class="card bg-light">
          <article class="card-body mx-auto" style="max-width: 400px">
            <h4 class="card-title mt-3 text-center">Alquilar cicla</h4>
            <p class="divider-text">
              <span class="bg-light"> Revisa los campos a continuación </span>
            </p>

            <form action="" class="form-horizontal">
              <!-- AQUI EMPIEZAN LOS HIDEN -->
              <div class="form-group left">
                <div class="col-sm-10">
                  <input
                    type="text"
                    hidden
                    class="form-control"
                    name="fecha"
                    id="fecha"
                    v-model="form.fecha"
                  />
                </div>
              </div>
        <div class="form-group left">
          <input type="hidden" id="custId" name="custId" value="3487" v-model="form.nombreCicla">
          </div>
           <div class="form-group left">
          <input type="hidden" id="custId" name="custId" value="3487" v-model="form.vendedorCicla">
          </div>
           <div class="form-group left">
          <input type="hidden" id="custId" name="custId" value="3487" v-model="form.precioCicla">
          </div>
           <div class="form-group left">
          <input type="hidden" id="custId" name="custId" value="3487" v-model="form.estacionCicla">
          </div>
              <div class="form-group left">
                <div class="col-sm-10">
                  <input
                    type="text"
                    hidden
                    class="form-control"
                    name="estatus"
                    id="estatus"
                    v-model="form.estatus"
                  />
                </div>
              </div>

              <div class="form-group left">
                <div class="col-sm-10">
                  <input
                    type="text"
                    hidden
                    class="form-control"
                    name="comentarios"
                    id="comentarios"
                    v-model="form.comentarios"
                  />
                </div>
              </div>

              <!-- AQUI TERMINAN LOS HIDEN -->

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
                  v-model="form.Username"
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
                  name=""
                  class="form-control"
                  placeholder="Cedula"
                  type="number"
                  v-model="form.Usercedula"
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
                  placeholder="ID cicla"
                  type="text"
                  v-model="form.bikeID"
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
                  placeholder="ID Estación"
                  type="number"
                  v-model="form.idEstacion"
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
                  placeholder="Horas"
                  type="number"
                  v-model="form.tiempo"
                />
              </div>
            

              <!-- 
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-university"></i>
                  </span>
                </div>
                <input
                  disabled
                  name=""
                  class="form-control"
                  placeholder="Total"
                  type="number"
                  v-model="form.total"                  
                />
              </div> -->

              <!-- form-group// -->
              <div class="form-group">
                <button type="button" class="btn btn-success btn-block" v-on:click="hacerPedido()">
                  Hacer pedido
                </button>

                <button type="button" class="btn btn-danger btn-block" v-on:click="cancelar()">
                  Cancelar
                </button>

                <!-- <a
                  class="btn btn-danger btn-block"
                  href="/mapa"
                  role="button"
                  >Cancelar pedido</a
                > -->
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
      form: {
        fecha: "",
        estatus: "",
        comentarios: "",
        idEstacion: "",
        nombreUsuario: "",
        Username: "",
        userID: "",
        bikeID: "",
        Usercedula: "",
        tiempo: 0,
        precio: 10000,
        total: 0,
        nombreCicla:"",
        precioCicla:"",
        vendedorCicla:"",
        estacionCicla:"",
      }
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },

    //ACA EMPIEZA LO NUEVO DE LEONARDO

    hacerPedido() {
      let jsonOrder = {
        orderDate: this.form.fecha,
        orderStatus: this.form.estatus,
        orderComments: this.form.comentarios,
        orderStationId: this.form.idEstacion,
        orderUserId: this.form.userID,
        orderBicycleId: this.form.bikeID,
        orderTime: this.form.tiempo,
        orderTotalPrice: this.form.tiempo * this.form.precio,
        

      };
      let jsonBike = {
        bicycleID:this.form.bikeID,
        bicycleName:this.form.nombreCicla, 
        bicycleVendor:this.form.vendedorCicla ,
        bicycleBuyPrice:this.form.precioCicla ,
        bicycleStationId: this.form.estacionCicla ,
        bicycleState:"En Reserva"

      }

      axios
        .post("http://localhost:8080/order/save", jsonOrder)
        .then( () => {
           axios.post("http://localhost:8080/bicycle/save", jsonBike)
            .then( () => {
              this.$router.push("/cliente-solicitudes");
            });          
        });
    },

    cancelar() {
      this.$router.push("/mapa");
    }

    //ACA TERMINA LO NUEVO DE LEONARDO
  },
  mounted: function() 
  {

    /* se quita temporalmente este IF porque al 
    hacer click en "hacer pedido" se recarga la pagina y no deja avanzar */

    /* if (getAuthenticationToken()) {
      this.$swal({
        title: "¡Casi esta listo!",
        text: "Escoge la cantidad de horas que desees",
        imageUrl:
          "https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007953/65334281-concepto-ecol%C3%B3gico-en-bicicleta-icono-de-la-ilustraci%C3%B3n-del-vector-de-transporte.jpg",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Bici"
      });
    } */

    this.form.idEstacion = this.$route.params.id;
    let Estation = this.$route.params.id;
    //this.form.total = this.form.tiempo * this.form.precio;

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
             this.ListaBicis= data.data;
             this.ListaBicicletas = new Array();
                    for (var key in this.ListaBicis) 
                    {
                        var cicla = this.ListaBicis[key]; //datos de la primera bici

                        //console.log("Test cicla: ",parseInt(cicla.bicycleStationId));                        
                        if (parseInt(cicla.bicycleStationId)=== parseInt(Estation)) {
                            if(String(cicla.bicycleState)==="Disponible")
                               { 
                                 this.ListaBicicletas.push(cicla);
                                 break;//para dejar de buscar
                               }
                        }
                    }  
              this.form.bikeID =parseInt(this.ListaBicicletas[0].bicycleID);
              this.form.nombreCicla =String(this.ListaBicicletas[0].bicycleName);
              this.form.vendedorCicla=String(this.ListaBicicletas[0].bicycleVendor);
              this.form.precioCicla=String(this.ListaBicicletas[0].bicycleBuyPrice);
              this.form.estacionCicla=String(this.ListaBicicletas[0].bicycleStationId);
                    
                       
        });
      });
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
