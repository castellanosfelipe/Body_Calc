<template>
  <Body>
    <b-container class="container background">
      <b-row class="row">
        <b-col class="col">
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
  justify-content: flex-end;
  transform: translateY(40vh);
}

.dt1 {
  color: white;
  font-size: 4em;
}

dd {
  font-family: "Dela Gothic One", cursive;
  font-size: 5em;
  color: #37a794;
}

.dt2 {
  color: white;
  font-size: 1em;
}

button {
  font-weight: 500;
  padding: 10px;
  color: white;
  font-size: 20px;

  border-width: 3px;
  border-color: #37a794;
  background: Transparent;
  transform: translateY(10vh);
  font-family: "Roboto", sans-serif;
}
/* 
button:hover {
  background: #37a794;
  opacity: 0.7;
  color: black;
  z-index: 1;
} */

.ButtonCenter {
  display: flex;
  justify-content: right;
}

.ButtonTop {
  margin-top: 1.7em;
  border-radius: 10px;
}
</style>
