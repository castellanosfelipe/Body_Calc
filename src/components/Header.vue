<template>
  <div class="Header">
    <b-navbar
      toggleable
      type="dark"
      variant="none"
      class="c-white navbar-expand-lg fixed-top"
    >
      <b-navbar-brand
        ><h1>
          <router-link to="/" class="underline inconn"> 💪</router-link>
        </h1></b-navbar-brand
      >

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" class="mm" icon="arrow-up"></b-icon>
          <b-icon v-else class="mm" icon="arrow-down"></b-icon>
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
              ><router-link to="/" class="nav-link Color-text"
                >CALORIAS DIARIAS</router-link
              ></a
            >
          </li>
          <li class="nav-item">
            <a
              ><router-link to="/" class="nav-link Color-text"
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
  font-size: 2em;
  margin-left: 1em;
}
.mm {
  margin-right: 1em;
  margin-left: 1em;
}
.Color-text {
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
