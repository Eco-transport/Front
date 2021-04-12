<template>
  <div>
    <Header></Header>
    <br />
    <h2>Editar estaciones</h2>
      <br /><br />
      <h3>📍 Soacha</h3>
      <h4>Kra 2 #38-127</h4>
      <a type="button" class="btn btn-primary" href="/editar-estacion">editar</a>
      <br /><br />
      <h3>📍 Chapinero</h3>
      <h4>Calle 52 #13-70</h4>
      <a type="button" class="btn btn-primary" href="/editar-estacion">editar</a>
      <br /><br />
      <h3>📍 Suba</h3>
      <h4>Kra 104 #148-07</h4>
      <a type="button" class="btn btn-primary" href="/editar-estacion">editar</a>   
      <br /><br />
      <h3>¿Hay alguna estación nueva?</h3>
      <br>
      <p>Agreguela para realizar el proceso de verificación</p><br>
      <a type="button" class="btn btn-success" href="/editar-estacion">Agregar</a>
    </div>
  </div>
</template>


<script>
import Header from "@/components/Header";
export default {
  name: "mapa",
  components: {
    Header,
  },
};
</script>
