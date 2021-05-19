<template>
  <div id="app">
    <unlog-header />
    <img
      src="@/assets/Hero.png"
      style="max-width: 100%; width: auto; height: auto"
      alt="Encabezado"
    />
    <br /><br />
    <h1>¡La mejor experiencia con el mejor precio!</h1>
    <br><br>

    <div class="container">
    <div class="row">
      <div class="col-sm"><img src="https://images.pexels.com/photos/3932845/pexels-photo-3932845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Niño" width="200"></div>
      <div class="col-sm"><img src="https://images.pexels.com/photos/3932867/pexels-photo-3932867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Niño 2" width="200"></div>
      <div class="col-sm"><img src="https://images.pexels.com/photos/3932842/pexels-photo-3932842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Niño 2" width="200"></div>
      <div class="col-sm"><img src="https://images.pexels.com/photos/3932846/pexels-photo-3932846.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Niño 2" width="200"></div>

     </div>
    </div>


    
    <br>
    <img
      src="../assets/Ecotransport.png"
      width="300"
      height="300"
      class="bien"
    /><br />

    <p>Para probar toda la experiencia sigamos al registro</p>
    <a href="Registro"
      ><button type="button" class="btn-borde">Registrarme</button></a
    ><br><br><br>
  </div>
</template>

<script>
import UnlogHeader from "../components/UnlogHeader.vue";

export default {
  name: "landing",
  components: {
    UnlogHeader,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&family=Padauk:wght@700&display=swap');

h1 {
  font-family: "Pacifico", cursive;
}

p {
  font-family: "Padauk", sans-serif;
}

.btn-borde {
  padding: 0.375rem 0.75rem;
  border: 1px solid #295135;
  border-radius: 0.25rem;
  color: #295135;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
}

.btn-borde:hover,
.btn-borde:active,
.btn-borde:focus {
  color: #fff;
  background-color: #9fcc2e;
  box-shadow: 2px 2px 5px #999;
}

.bien:hover {
  transition: all 0.2s ease-in;
}
</style>