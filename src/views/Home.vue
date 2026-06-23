<template>
  <Body>
    <b-container fluid="sm" class="container background">
      <b-row class="row">
        <b-col class="col">
          <dt class="textHome dt1 ml-0">CUERPO SALUDABLE</dt>
          <dd class="textHome d-none d-md-block">CALCULADORA.</dd>
          <dt class="textHome dt2">
            Conoce las medidas de tu cuerpo , crea tu dieta y alcanza tus
            objetivos.
          </dt>
          <dt class="textHome dt2">#HEALTHY</dt>
        </b-col>
      </b-row>
      <b-row class="col">
        <b-col
          cols="12"
          md="6"
          lg="3"
          class="mt-3 mt-md-1 ButtonCenter contenedor2"
        >
          <router-link to="/imc" class="link">
            <button class="ButtonTop">
              INDICE DE MASA CORPORAL (IMC)
            </button></router-link
          >
        </b-col>
        <b-col
          cols="12"
          md="6"
          lg="3"
          class="mt-3 mt-md-1 ButtonCenter contenedor2"
        >
          <router-link to="/Grasa-Corporal" class="link"
            ><button class="ButtonTop">GRASA CORPORAL</button></router-link
          >
        </b-col>

        <b-col
          cols="12"
          md="6"
          lg="3"
          class="mt-3 mt-md-1 ButtonCenter contenedor2"
        >
          <router-link to="/Calorias-Diarias" class="link"
            ><button class="ButtonTop">CALORIAS DIARIAS</button></router-link
          >
        </b-col>
        <b-col
          cols="12"
          md="6"
          lg="3"
          class="mt-3 mt-md-1 ButtonCenter contenedor2"
        >
          <router-link to="/Macros-Diarios" class="link"
            ><button class="ButtonTop">MACROS DIARIOS</button></router-link
          >
        </b-col>
      </b-row>
      <b-row>
        <b-col class="dt3"> "Lo que se mide, se controla" </b-col>
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

<style scoped>
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
  transform: translateY(10vh);
}

.dt1 {
  color: whitesmoke;
  font-size: 5em;
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
  transform: translateY(25vh);
}

.ButtonTop {
  border-radius: 10px;
}

.link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.986);
}

.link:hover {
  color: black;
}
/* ::placeholder {
  z-index: -1;
} */

button:hover {
  background: #37a794;
  opacity: 0.7;
  /* color: black; */
  /*   z-index: -1; */
}

.dt3 {
  display: flex;
  justify-content: space-around;
  transform: translateY(25vh);
  color: white;
  font-size: 1.5em;
  -webkit-text-stroke: 0.5px;
  -webkit-text-stroke-color: black;
}
</style>
