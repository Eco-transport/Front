<template>
    <div>
        <Header></Header>
        <h3>Tu cuenta ha sido eliminada exitosamente</h3>
        <p>Deseamos conocer la razon de tu partida, por lo cual si deseas, puedes contactarnos a traves de la pagina
            o en nuestro correo EcoTransport@gmail.com , te atenderemos con todo el gusto.
        </p>
        <p>Pronto serás redirijido a nuestro menu principal, si esto no ocurre haz click <a href="/#/">aqui</a></p>
        </div>
</template>

<script>
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
export default {
  name: "CuentaEliminada",
  components: {
    Header//, Footer
  }
};
</script>