<template>
  <Body>
    <Header></Header>
    <form>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6">
          <h2>Calcule sus calorias diarias:</h2>
          <b-form-select
            id="inline-form-custom-select-pref"
            class="Input2 mx-auto"
            :options="[
              { text: 'Sexo biológico', value: null },
              'Masculino',
              'Femenino',
            ]"
            :value="null"
          ></b-form-select>
          <b-form-select
            id="inline-form-custom-select-pref"
            class="Input2 mx-auto"
            :options="[
              { text: 'Nivel de ejercicio', value: null },
              'Sedentario',
              'Ligero',
              'Moderado',
              'Activo',
              'Muy activo',
            ]"
            :value="null"
          ></b-form-select>
          <h5 class="Medidas">¿Como obtener las medidas?</h5>
          <b-form-input
            type="number"
            v-model="Altura"
            placeholder="Altura (cm)."
            class="Input mx-auto"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>
          <b-form-input
            type="number"
            v-model="Cuello"
            placeholder="Peso(kg)."
            class="Input mx-auto"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>
          <b-form-input
            type="number"
            v-model="Abdomen"
            placeholder="Edad(Años)."
            class="Input mx-auto"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>

          <button class="Button mx-auto">Calcular</button>
        </b-col>
        <b-col class="d-none d-md-block m-md-4">
          <h4>CALORIAS DIARIAS</h4>
          <P
            >Sus calorías diarias son la suma de su tasa metabólica basal (TMB)
            y las calorías que su cuerpo usa en sus actividades diarias.
          </P>
          <P
            >Este valor representa la cantidad de calorías que consume tu cuerpo
            durante todo el día. Entonces, si consume más calorías que este
            resultado, aumentará de peso , y si consume menos, perderá peso .</P
          >
          <P>
            La TMB es el total de calorías que su cuerpo necesita para realizar
            las funciones más básicas del cuerpo, como la respiración, el
            cerebro, etc.</P
          >
        </b-col>
      </b-row>
    </form>
  </Body>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";

export default Vue.extend({
  name: "Grasa-Corporal",

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

  margin-top: 1em;
  border-radius: 10px;
  max-width: 60%;
}
.Input2 {
  transform: translateY(18vh);
  border-radius: 10px;
  width: 60%;
  height: 38px;
  margin-top: 1.5em;
}
.Inputt {
  color: white;
  margin-top: 10px;
  transform: translateY(20vh);
  font-size: 13px;
  text-align: center;
}
.Button {
  transform: translateY(15vh);
  border-radius: 10px;
  font-weight: 700;
  padding: 10px;
  color: rgba(255, 255, 255, 0.986);
  font-size: 20px;
  border-width: 3px;
  border-color: #37a794;
  background: Transparent;
  margin-top: 3em;
}

h4 {
  display: flex;
  color: #37a794;
  font-size: 3.5em;
  transform: translateY(25vh);
}
p {
  color: white;
  transform: translateY(30vh);
  text-align: justify;
  margin-right: 3em;
}
</style>
