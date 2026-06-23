<template>
  <Body>
    <Header></Header>
    <form>
      <b-row>
        <b-col cols="12" sm="auto" md="auto" lg="6">
          <h2>Calcule su % de grasa corporal:</h2>
          <b-form-select
            id="inline-form-custom-select-pref"
            class="Input2"
            :options="[
              { text: 'Sexo biológico', value: null },
              'Masculino',
              'Femenino',
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
            placeholder="Diametro del cuello (cm)."
            class="Input mx-auto"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>
          <b-form-input
            type="number"
            v-model="Abdomen"
            placeholder="Diametro del abdomen (cm)."
            class="Input mx-auto"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>

          <button class="Button mx-auto my-5">Calcular</button>
        </b-col>
        <b-col class="d-none d-md-block">
          <h4>GRASA CORPORAL</h4>
          <P
            >El cálculo de grasa corporal es el más importante para gestionar
            sus resultados estéticos,Le informa el porcentaje de grasa de su
            cuerpo.
          </P>
          <P
            >La razón por la que la grasa corporal es la mejor para administrar
            sus resultados es porque muchas veces, puede perder grasa y también
            ganar masa muscular, por lo que su peso no está cambiando demasiado,
            pero eso no significa que no lo esté. evolucionando.</P
          >
          <P>
            Un fisicoculturista , por ejemplo, puede tener más de 100Kg y un 5%
            de grasa corporal , el IMC le informará que es obeso, pero es pesado
            y no obeso.</P
          >
          <P
            >Recuerde, un porcentaje muy bajo o muy alto de grasa corporal
            durante mucho tiempo no es saludable . Mantenga siempre el
            equilibrio.</P
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
  text-align: center;
}
h2 {
  color: #37a794;
  text-align: center;
  font-size: 25px;
  transform: translateY(20vh);
}
.Input {
  display: flex;
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
</style>
