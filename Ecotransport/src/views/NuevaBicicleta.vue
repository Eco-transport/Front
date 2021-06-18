<template>
  <div>
    <Header />
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
            <h4 class="card-title mt-3 text-center">Añadir cicla</h4>
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
                  
                  name="nombre"
                  class="form-control"
                  type="text"
                  placeholder="Nombre Bici"
                  id="nombre"
                  v-model="form.Bikename"
                />
              </div>

              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-id-card"></i>
                  </span>
                </div>
                <input
                  
                  name=""
                  class="form-control"
                  placeholder="Vendedor"
                  type="text"
                  v-model="form.Bikevendor"
                />
              </div>

                <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-id-card"></i>
                  </span>
                </div>
                <input
                  name=""
                  class="form-control"
                  placeholder="Precio de compra"
                  type="text"
                  v-model="form.Bikebuyprice"
                />
              </div>
               <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-id-card"></i>
                  </span>
                </div>
                <input
                  name=""
                  class="form-control"
                 
                  type="text" hidden
                  v-model="form.Bikestate"
                />
              </div>


           
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-bicycle"></i>
                  </span>
                </div>
                <input
                  
                  name=""
                  class="form-control"
                  placeholder="ID Estación"
                  type="text" readonly
                  v-model="form.idEstacion"
                />
              </div>

              
              <!-- form-group// -->
              <div class="form-group">
                <button type="button" class="btn btn-success btn-block" v-on:click="guardar()">
                  Guardar Bici
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
import Header from "@/components/Header";
import axios from "axios";
import { getAuthenticationToken } from "@/dataStorage";

export default {
  name: "nuevabicicleta",
  components: {
    slide: 0,
    sliding: null,
    Header
  },

  data: function() {
    return {
      form: {
        
      Bikename:"",
      Bikevendor:"",
      Bikebuyprice:"",
      Bikestate:"",
      idEstacion:""
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

    guardar() {
      let json = {
       /*
       private Integer bicycleID;
    private String bicycleName;
    private String bicycleVendor;
    private Integer bicycleBuyPrice;
    private String bicycleState;
    private Integer bicycleStationId;
       */ 
       
        bicycleName: this.form.Bikename,
        bicycleVendor: this.form.Bikevendor,
        bicycleBuyPrice: this.form.Bikebuyprice,
        bicycleState: this.form.Bikestate,
        bicycleStationId: this.form.idEstacion
        
      };

      axios
        .post("http://localhost:8080/bicycle/save", json)
        .then( () => {
          this.$router.push("/adminciclasperestacion/"+this.$route.params.id);
        });
    },

    cancelar() {
      this.$router.push("/adminciclas");
    }

    //ACA TERMINA LO NUEVO DE LEONARDO
  },
  mounted: function() 
  {
    this.form.idEstacion = this.$route.params.id;
    this.form.Bikestate = "Disponible";
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
