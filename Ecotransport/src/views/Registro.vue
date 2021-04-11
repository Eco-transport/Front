<template>
    <div>
        <Header></Header>
        <h1>Esta es la pagina de registro</h1>
       <a class="nav-link" href="ConfirmarRegistro.vue"> <button type="button" class="btn btn-info">Confirmar Registro</button></a> 
    </div>
</template>

<script>
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
export default {
  name: "registro",
  components: {
    Header//, Footer
  }
};
</script>