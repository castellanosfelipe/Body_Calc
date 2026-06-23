<template>
  <Body>
    <Header></Header>

    <form>
      <b-row>
        <b-col>
          <h2>Calcule su IMC:</h2>
          <b-form-input
            type="number"
            v-model="Altura"
            placeholder="Altura (cm)."
            class="Input"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>
          <b-form-input
            type="number"
            v-model="Peso"
            placeholder="Peso (kg)."
            class="Input"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>
          <button class="Button">Calcular</button>
        </b-col>
        <b-col>
          <h4>IMC</h4>
          <P
            >IMC significa Índice de Masa Corporal, es una medida basada en el
            peso y la altura que se aplica a mujeres y hombres adultos.
          </P>
          <P
            >El IMC no debe calcularse con fines estéticos, sino para su
            salud.</P
          >
          <P>
            Tener el IMC correcto es importante porque tener bajo peso o
            sobrepeso puede aumentar el riesgo de enfermedades como accidentes
            cerebrovasculares y ataques cardíacos.</P
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
  name: "imc",
  data() {
    return {
      Altura: "",
      Peso: "",
    };
  },
  components: {
    Header,
  },
});
</script>

<style>
Body {
  background-color: #2d313d;
}

h2 {
  color: #37a794;
  text-align: center;
  font-size: 25px;
  transform: translateY(30vh);
}
.Input {
  transform: translateY(30vh);
  margin-left: 8em;
  margin-top: 2em;
  border-radius: 10px;
  max-width: 400px;
}
.Inputt {
  color: white;
  margin-top: 10px;
  transform: translateY(30vh);
  font-size: 13px;
  text-align: center;
  margin-right: 18em;
}
.Button {
  transform: translateY(30vh);
  border-radius: 10px;
  max-width: 300px;
  font-weight: 700;
  padding: 10px;
  color: rgba(255, 255, 255, 0.986);
  font-size: 20px;
  border-width: 3px;
  border-color: #37a794;
  background: Transparent;
  margin-right: 1em;
  margin-top: 2em;
}

h4 {
  color: white;
  font-size: 6em;
  transform: translateY(25vh);
}
p {
  color: white;
  transform: translateY(25vh);
  text-align: justify;
  margin-right: 3em;
}
</style>
