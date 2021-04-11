<template>
    <div>
        <Header></Header>
        <h1>Esta es la pagina de registro</h1>
       <a class="nav-link" href="ConfirmarRegistro"> <button type="button" class="btn btn-info">Confirmar Registro</button></a>
       <a class="nav-link" href="EliminarCuenta"> <button type="button" class="btn btn-info">Eliminar Cuenta</button></a> 
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