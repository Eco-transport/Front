<template>
  <div id="contacto">
      <Header></Header>

    <br><br><br><br>

    <div class="col md-8 ">
          <h1 class="h12">Encuentre la estación mas cercana</h1>
          <h2 class="h12">¡Vamos!</h2>
    </div>

        <br><br><br>

    <br>
    <div>
        <h4>Estamos ubicados en:</h4>
    </div>
    <div class="row justify-content-center">
        
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63630.807719254124!2d-74.13263037037063!3d4.607362148159379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1618082800636!5m2!1ses!2sco" width="1000" height="650" style="border:0;" allowfullscreen="" loading="lazy"></iframe>    </div>
 
    <br><br><br>    
    <div class="row justify-content-center">
        <div class="container">
        <a href="https://api.whatsapp.com/send?phone=3195748728" class="mx-2">
            <img src="https://anthoncode.com/wp-content/uploads/2019/01/whatsapp-2.png" alt="whatsapp" height="100" width="100">
        </a>
        </div>
    </div>



    <div class="row justify-content-center">
        <div class="container">
            <h6>¡Escribenos a whatsapp!</h6>
        </div>
    </div>
        <br><br><br><br><br><br>

    </div>
</template>

<script>
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
export default {
  name: "apa",
  components: {
    Header//, Footer
  }
};
</script>
