<template>
  <div class="Header">
    <b-navbar
      toggleable
      type="dark"
      variant="dark"
      class="navbar-expand-lg fixed-top"
    >
      <b-navbar-brand
        ><h1>
          <router-link to="/" class="underline inconn"> 💪</router-link>
        </h1></b-navbar-brand
      >

      <b-navbar-toggle target="navbar-toggle-collapse" class="mm">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="arrow-up"></b-icon>
          <b-icon v-else icon="arrow-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <li class="nav-item">
            <a>
              <router-link to="/imc" class="nav-link Color-text"
                >INDICE DE MASA CORPORAL (IMC)</router-link
              ></a
            >
          </li>
          <li class="nav-item">
            <a
              ><router-link to="/Grasa-Corporal" class="nav-link Color-text"
                >GRASA CORPORAL</router-link
              ></a
            >
          </li>
          <li class="nav-item">
            <a
              ><router-link to="/Calorias-Diarias" class="nav-link Color-text"
                >CALORIAS DIARIAS</router-link
              ></a
            >
          </li>
          <li class="nav-item">
            <a
              ><router-link to="/Macros-Diarios" class="nav-link Color-text"
                >MACROS DIARIOS</router-link
              ></a
            >
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  props: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inconn {
  font-size: 1.5em;
  margin-right: 1em;
}
.mm {
  margin-right: 1em;
  margin-left: 1em;
  color: #37a794;
  border-width: 3px;
  border-color: #37a794;
}
.Color-text {
  color: #37a794;
  margin-right: 3em;
  font-size: 15px;
  font-weight: 700;
  -webkit-text-stroke: 0.5px;
  -webkit-text-stroke-color: black;
}
.underline {
  text-decoration: none;
}
</style>
