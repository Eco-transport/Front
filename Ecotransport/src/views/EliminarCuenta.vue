<template>
    <div>
        <Header></Header>
        <h3>¿En verdad deseas eliminar tu cuenta? Te vamos a extrañar.</h3>
        <p>Para eliminar tu cuenta, por favor ingresa tu contraseña, luego presiona el botón confirmar</p>
        <form action="/action_page.php">
          <label for="fname">Contraseña:</label><br>
          <input type="text" id="fname" name="fname" value=""><br>
         <a class="nav-link" href="CuentaEliminada"> <button type="button" class="btn btn-info">Confirmar</button></a>
          <p>Antes de continuar, recuerda que esta accion no se puede deshacer.</p>
        </form>
    </div>
</template>

<script>
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
export default {
  name: "EliminarCuenta",
  components: {
    Header//, Footer
  }
};
</script>
