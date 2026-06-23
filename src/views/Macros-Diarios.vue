<template>
  <Body>
    <Header></Header>
    <form>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6">
          <h2>Calcule sus macros:</h2>
          <b-form-select
            id="inline-form-custom-select-pref"
            class="Input2 mx-auto"
            :options="[
              { text: 'Seleccione su meta:', value: null },
              'Perder peso',
              'Mantener peso',
              'Ganar peso',
            ]"
            :value="null"
          ></b-form-select>
          <h5 class="Medidas">¿Como obtener las medidas?</h5>
          <b-form-input
            type="number"
            v-model="Altura"
            placeholder="Peso(kg)."
            class="Input mx-auto"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>
          <h1>
            ¿Conoces tus calorías diarias?
            <router-link to="/Calorias-Diarias"
              ><small>Calcular aqui</small></router-link
            >
          </h1>
          <b-form-input
            type="number"
            v-model="Abdomen"
            placeholder="Calorias diarias."
            class="Input mx-auto"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>

          <button class="Button mx-auto">Calcular</button>
        </b-col>
        <b-col class="d-none d-md-block m-md-4">
          <h4>MACROS DIARIOS</h4>
          <P
            >Hay 3 macronutrientes presentes en nuestra comida, son
            Carbohidratos, Grasas y Proteínas. Cada uno tiene suS
            características Y objetivos para ser consumido (calorías por gramo,
            tiempo de absorción, etc).
          </P>
          <P
            >Es el total de calorías que ingerimos en el día es lo que nos hace
            ganar, mantener o perder peso. Es bastante simple, si ingieres más
            de lo que tu cuerpo necesita en un día (calorías diarias), ganarás
            peso, y de lo contrario, si ingieres menos de lo que necesitas,
            pierdes peso.</P
          >
          <P> Puedes comer lo que quieras, si se ajusta a tus macros.</P>

          <h5 class="Macro">🍣 Conoce mas sobre cada macro 🍣</h5>
        </b-col>
      </b-row>
    </form>
  </Body>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";

export default Vue.extend({
  name: "Macros-Diarios",

  components: {
    Header,
  },
});
</script>

<style>
Body {
  background-color: #2d313d;
}
</style>

<style scoped>
.Medidas {
  transform: translateY(20vh);
  color: #37a794;
  text-decoration: underline;
  font-size: 1em;
}
h2 {
  color: #37a794;
  text-align: center;
  font-size: 25px;
  transform: translateY(20vh);
}
.Input {
  transform: translateY(20vh);
  margin-top: 2em;
  border-radius: 10px;
  max-width: 60%;
}
.Input2 {
  transform: translateY(18vh);
  border-radius: 10px;
  width: 60%;
  height: 38px;
  margin-top: 2em;
}
.Inputt {
  color: white;
  margin-top: 10px;
  transform: translateY(20vh);
  font-size: 13px;
  text-align: center;
}

h1 {
  font-size: 12px;
  transform: translateY(22vh);
  color: white;
}

small {
  text-decoration: underline;
  color: #37a794;
  font-size: 15px;
}
.Button {
  transform: translateY(17vh);
  border-radius: 10px;
  font-weight: 700;
  padding: 10px;
  color: rgba(255, 255, 255, 0.986);
  font-size: 20px;
  border-width: 3px;
  border-color: #37a794;
  background: Transparent;

  margin-top: 2em;
}

h4 {
  display: flex;
  color: #37a794;
  font-size: 4em;
  transform: translateY(25vh);
  justify-content: flex-start;
}
p {
  color: white;
  transform: translateY(30vh);
  text-align: justify;
  margin-right: 3em;
}
.Macro {
  display: flex;
  transform: translateY(30vh);
  color: #37a794;
  text-decoration: underline;
  font-size: 1em;
  justify-content: flex-start;
}
</style>
