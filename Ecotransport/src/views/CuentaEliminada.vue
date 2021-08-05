<template>
    <div>
        <Header></Header>
        <h3>Tu cuenta ha sido eliminada exitosamente</h3>
        <p>Deseamos conocer la razón de tu partida, por lo cual si deseas, puedes contactarnos a traves de la página
            o en nuestro correo ecotransport342@gmail.com y te atenderemos con todo el gusto.
        </p>
        <p>Pronto serás redirigido a la página principal, si esto no ocurre haz click <a href="/#/">aquí</a>.</p>
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
