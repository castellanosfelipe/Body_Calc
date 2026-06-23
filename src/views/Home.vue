<template>
  <Body>
    <b-container class="container background">
      <b-row class="row">
        <b-col class="col">
          <dt class="textHome dt1">CUERPO SALUDABLE</dt>
          <dd class="textHome">CALCULADORA</dd>
          <dt class="textHome dt2">
            Conoce las medidas de tu cuerpo , crea tu dieta y alcanza tus
            objetivos.
          </dt>
          <dt class="textHome dt2">#HEALTHY</dt>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col contenedor2">
          <dt class="ButtonCenter">
            <button class="ButtonTop">INDICE DE MASA CORPORAL (IMC)</button>
          </dt>
          <dt class="ButtonCenter">
            <button class="ButtonTop">GRASA CORPORAL</button>
          </dt>
          <dt class="ButtonCenter">
            <button class="ButtonTop">CALORIAS DIARIAS</button>
          </dt>
          <dt class="ButtonCenter">
            <button class="ButtonTop">MACROS DIARIOS</button>
          </dt>
        </b-col>
      </b-row>
    </b-container>
  </Body>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {},
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

body {
  margin: 0;

  min-height: 100vh;
  /* max-height: 100vh; */
  background-image: url(../assets/x.jpg);
  background-size: cover; /* Cubra todo el ancho y el alto  */
  background-position: center;
  background-attachment: fixed;
}
body:before {
  content: "";
  width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: 2;
}
.textHome {
  display: flex;
  justify-content: flex-start;
  transform: translateY(20vh);
}

.dt1 {
  color: whitesmoke;
  font-size: 6em;
}

dd {
  font-family: "Dela Gothic One", cursive;
  font-size: 6em;
  color: #37a794;
}

.dt2 {
  color: white;
  font-size: 1em;
}

button {
  font-weight: 700;
  padding: 10px;
  color: rgba(255, 255, 255, 0.986);
  font-size: 20px;

  border-width: 3px;
  border-color: #37a794;
  background: Transparent;

  font-family: "Roboto", sans-serif;
}

.contenedor2 {
  display: flex;
  justify-content: space-around;
  transform: translateY(30vh);
}

.ButtonTop {
  border-radius: 10px;
}

/* ::placeholder {
  z-index: -1;
} */

button:hover {
  background: #37a794;
  opacity: 0.7;
  /* color: black; */
  z-index: -1;
}
</style>
