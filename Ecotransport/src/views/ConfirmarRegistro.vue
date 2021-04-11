<template>
    <div>
        <Header></Header>
        <h1>Al presionar este boton, acepta los terminos y condiciones y se procederá a confirmar su cuenta</h1>
         <a class="nav-link" href="RegistroConfirmado"> <button type="button" class="btn btn-info">Confirmar Registro</button></a> 
    </div>
</template>

<script>
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
export default {
  name: "ConfirmarRegistro",
  components: {
    Header//, Footer
  }
};
</script>