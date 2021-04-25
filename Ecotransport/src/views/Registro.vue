<template>
    <div>
        <unlog-header />
        <h1>Bienvenid@ a EcoTransport, ingresa tus datos para ser parte de la mejor experiencia
          en transporte
        </h1>

      <form action class="form">
          <label class="form-label" for="#identificacion">Numero de cedula:</label>
          <input class="form-input" type="identificacion" id="identificacion" required placeholder="">
          <label class="form-label" for="#nombre">Nombre:</label>
          <input class="form-input" type="nombre" id="nombre" placeholder="">
          <label class="form-label" for="#email">Email:</label>
          <input class="form-input" type="email" id="email" placeholder="">
          <label class="form-label" for="#password">Contraseña:</label>
          <input class="form-input" type="password" id="password" placeholder="">
          <p>Recuerda utilizar una contraseña segura y no compartirla con nadie</p>
          <label class="form-label" for="#telofono">Numero de telefono:</label>
          <input class="form-input" type="telofono" id="telofono" placeholder="">
          <label class="form-label" for="#safequestion">Pregunta de seguridad:</label>
          <input class="form-input" type="safequestion" id="safequestion" placeholder="">
          <label class="form-label" for="#safeanswer">Respuesta de seguridad:</label>
          <input class="form-input" type="safeanswer" id="safeanswer" placeholder="">
          <input class="form-submit" type="submit" value="Registrate!">
        </form>

    </div>
</template>

<script>
import Header from "@/components/Header";
import UnlogHeader from '../components/UnlogHeader.vue';
// import Footer from "@/components/Footer";
export default {
  name: "registro",
  components: {
    Header,
    UnlogHeader//, Footer
  }
};
</script>
<style lang="css" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
p{
 color: white;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
</style>