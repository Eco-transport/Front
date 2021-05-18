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
        <h4>¡Increibles modelos y gran comodidad!</h4>
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_2X_953114-MCO44898244934_022021-F.webp"
          style="width: 500px; height: auto"
          alt="Cicla Ecologica"
        />
      </div>
      <div class="col">
        <div class="card bg-light">
          <article class="card-body mx-auto" style="max-width: 400px">
            <h4 class="card-title mt-3 text-center">
              Alquilar cicla
            </h4>
            <p class="divider-text">
              <span class="bg-light"> Revisa los campos a continuación </span>
            </p>
            <form>
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
                  v-model="form.nombre"
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
                  v-model="cedula"
                />
              </div>
              <!-- form-group// -->
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
                  type="email"
                  v-model="ID_cicla"
                />
              </div>
              <!-- form-group// -->
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
                  v-model="horas"
                />
              </div>
              <!-- form-group// -->
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
                  v-model="total"
                />
              </div>
              <div class="alert alert-danger" role="alert" v-if="error">
                Las contraseñas no coinciden
              </div>
              <!-- form-group// -->
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-success btn-block"
                  v-on:click="contrasenaIgual"
                >
                  Hacer pedido
                </button>
              </div>
              <div class="alert alert-success" role="alert" v-if="state">
                ¡¡¡Su cuenta ha sido creada con éxito!!!
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
// import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: "alquilar",
  components: {
    // Splide,
    // SplideSlide,
    Header,
  },
  data: function () {
    return {
      form: {
        idEstacion: "",
        nombreUsuario: "",
        cedula: "",
        nombreEstacion: "",
        idCicla: "",
        horas: 0,
        total: 0,
      },
    };
  },
  mounted: function () {
    if (getAuthenticationToken()) {
      this.$swal({
        title: "¡Casi esta listo!",
        text: "Escoge la cantidad de horas que desees",
        imageUrl:
          "https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007953/65334281-concepto-ecol%C3%B3gico-en-bicicleta-icono-de-la-ilustraci%C3%B3n-del-vector-de-transporte.jpg",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Bici",
      });
    }

     axios.get( "http://localhost:8080/mi-nombre", { params: { access_token: getAuthenticationToken( ) } } )
        .then( response => {
          console.log(response.data);          
        });
    
  },
};
</script>

<style scoped>
h1,
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