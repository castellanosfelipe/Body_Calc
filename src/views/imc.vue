<template>
  <Body>
    <Header />
    <form @submit.prevent>
      <b-row>
        <b-col cols="12" sm="auto" md="auto" lg="6">
          <h2>Calcule su IMC:</h2>
          <b-form-input
            type="number"
            v-model.number="Altura"
            placeholder="Altura (cm)."
            class="Input mx-auto"
            min="100"
            max="250"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>
          <b-form-input
            type="number"
            v-model.number="Peso"
            placeholder="Peso (kg)."
            class="Input mx-auto"
            min="1"
            max="300"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>
          <p v-if="error" class="Error">{{ error }}</p>
          <button type="button" class="Button" @click="calcular">
            Calcular
          </button>

          <div v-if="resultado !== null" class="Resultado">
            <p class="ResultadoNumero">{{ resultado.imc }}</p>
            <p class="ResultadoLabel" :style="{ color: resultado.color }">
              {{ resultado.categoria }}
            </p>
            <p class="ResultadoMensaje">{{ resultado.mensaje }}</p>
            <router-link to="/Grasa-Corporal" class="ResultadoLink">
              ¿Conoces tu % de grasa corporal? Calcularlo aquí →
            </router-link>
          </div>
        </b-col>
        <b-col class="d-none d-md-block">
          <h4>IMC</h4>
          <p>
            IMC significa Índice de Masa Corporal, es una medida basada en el
            peso y la altura que se aplica a mujeres y hombres adultos.
          </p>
          <p>
            El IMC no debe calcularse con fines estéticos, sino para su salud.
          </p>
          <p>
            Tener el IMC correcto es importante porque tener bajo peso o
            sobrepeso puede aumentar el riesgo de enfermedades como accidentes
            cerebrovasculares y ataques cardíacos.
          </p>
          <div class="TablaIMC">
            <p class="TablaTitle">Clasificación IMC (OMS)</p>
            <div class="TablaFila bajo">Bajo peso — &lt; 18.5</div>
            <div class="TablaFila normal">Normal — 18.5 a 24.9</div>
            <div class="TablaFila sobre">Sobrepeso — 25 a 29.9</div>
            <div class="TablaFila obesidad">Obesidad — ≥ 30</div>
          </div>
        </b-col>
      </b-row>
    </form>

    <!-- Recursos Científicos -->
    <div class="RecursosWrapper">
      <button
        type="button"
        class="RecursosToggle"
        @click="mostrarRecursos = !mostrarRecursos"
      >
        📚 Recursos Científicos
        <span>{{ mostrarRecursos ? "▲" : "▼" }}</span>
      </button>
      <div v-if="mostrarRecursos" class="RecursosPanel">
        <div class="RecursosGrid">
          <div class="RecursoCard">
            <p class="RecursoTitulo">🔬 ¿Qué dice la ciencia sobre el IMC?</p>
            <p class="RecursoTexto">
              El IMC fue desarrollado por el estadístico belga Adolphe Quetelet
              en el siglo XIX y adoptado por la OMS como herramienta de tamizaje
              poblacional. Es una medida
              <strong>rápida y accesible</strong>, pero no distingue entre masa
              grasa y masa muscular. Un estudio de Romero-Corral et al. (2008)
              publicado en el <em>International Journal of Obesity</em>
              encontró que el IMC clasifica incorrectamente la obesidad en un
              50% de los casos cuando se compara con medición directa de grasa
              corporal.
            </p>
            <p class="RecursoCita">
              📄 Romero-Corral A. et al. (2008). Int J Obes, 32(6), 959–966.
            </p>
          </div>

          <div class="RecursoCard">
            <p class="RecursoTitulo">⚠️ Limitaciones del IMC</p>
            <p class="RecursoTexto">
              El IMC <strong>no es preciso para deportistas</strong> con alta
              masa muscular ni para personas mayores que han perdido músculo. La
              Organización Mundial de la Salud (OMS) recomienda complementarlo
              con la medición de circunferencia de cintura y porcentaje de grasa
              corporal para una evaluación más completa del riesgo
              cardiovascular y metabólico.
            </p>
            <p class="RecursoCita">
              📄 OMS — Obesity: preventing and managing the global epidemic
              (2000).
            </p>
          </div>

          <div class="RecursoCard">
            <p class="RecursoTitulo">❤️ IMC y riesgo cardiovascular</p>
            <p class="RecursoTexto">
              Un IMC elevado está asociado a mayor riesgo de diabetes tipo 2,
              hipertensión arterial, enfermedad coronaria y ciertos tipos de
              cáncer. El estudio Framingham Heart Study demostró que cada
              incremento de 1 punto en el IMC está asociado a un
              <strong
                >12% de aumento en el riesgo de cardiopatía coronaria</strong
              >
              en hombres y un 8% en mujeres.
            </p>
            <p class="RecursoCita">
              📄 Wilson PWF et al. (2002). Archives of Internal Medicine,
              162(16), 1867–1872.
            </p>
          </div>

          <div class="RecursoCard">
            <p class="RecursoTitulo">🥗 ¿Cómo mejorar tu IMC?</p>
            <p class="RecursoTexto">
              La evidencia científica más sólida indica que la combinación de
              <strong>déficit calórico moderado (300–500 kcal/día)</strong> con
              ejercicio de resistencia y aeróbico produce pérdida de grasa
              preservando músculo. Perder entre 0.5 y 1 kg por semana es
              considerado seguro y sostenible según el American College of
              Sports Medicine (ACSM).
            </p>
            <p class="RecursoCita">
              📄 ACSM Position Stand — Appropriate Physical Activity
              Intervention Strategies (2009).
            </p>
          </div>

          <div class="RecursoCard RecursoCardWide">
            <p class="RecursoTitulo">
              🎬 Videos recomendados (buscar en YouTube)
            </p>
            <ul class="RecursoLista">
              <li>
                🔎 <em>"BMI is a terrible measure of health" — Vox</em> —
                Explica las limitaciones científicas del IMC.
              </li>
              <li>
                🔎 <em>"How does BMI relate to health?" — TED-Ed</em> —
                Animación educativa sobre IMC y sus implicancias.
              </li>
              <li>
                🔎 <em>"Obesity and its health effects" — Mayo Clinic</em> —
                Perspectiva médica sobre el exceso de peso.
              </li>
            </ul>
            <p class="RecursoTexto">
              🌐 Fuente oficial OMS sobre obesidad:
              <strong
                >who.int/news-room/fact-sheets/detail/obesity-and-overweight</strong
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </Body>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/Header.vue";

interface ResultadoIMC {
  imc: string;
  categoria: string;
  color: string;
  mensaje: string;
}

export default Vue.extend({
  name: "imc",
  components: { Header },
  data() {
    return {
      Altura: null as number | null,
      Peso: null as number | null,
      resultado: null as ResultadoIMC | null,
      error: "" as string,
      mostrarRecursos: false,
    };
  },
  methods: {
    calcular() {
      this.error = "";
      this.resultado = null;

      if (!this.Altura || !this.Peso) {
        this.error = "Por favor ingresa altura y peso.";
        return;
      }
      if (this.Altura < 100 || this.Altura > 250) {
        this.error = "La altura debe estar entre 100 y 250 cm.";
        return;
      }
      if (this.Peso < 1 || this.Peso > 300) {
        this.error = "El peso debe estar entre 1 y 300 kg.";
        return;
      }

      const alturaM = this.Altura / 100;
      const imc = this.Peso / (alturaM * alturaM);
      const imcStr = imc.toFixed(1);

      let categoria: string;
      let color: string;
      let mensaje: string;

      if (imc < 18.5) {
        categoria = "Bajo peso";
        color = "#f0ad4e";
        mensaje =
          "Tu IMC indica bajo peso. Considera consultar a un médico o nutricionista para alcanzar un peso saludable.";
      } else if (imc < 25) {
        categoria = "Normal";
        color = "#37a794";
        mensaje =
          "¡Excelente! Tu IMC está en el rango normal. Mantén tus hábitos saludables.";
      } else if (imc < 30) {
        categoria = "Sobrepeso";
        color = "#f0ad4e";
        mensaje =
          "Tu IMC indica sobrepeso. Una alimentación balanceada y ejercicio regular pueden ayudarte a alcanzar tu peso ideal.";
      } else {
        categoria = "Obesidad";
        color = "#e74c3c";
        mensaje =
          "Tu IMC indica obesidad. Te recomendamos consultar con un profesional de la salud para un plan personalizado.";
      }

      this.resultado = { imc: imcStr, categoria, color, mensaje };
    },
  },
});
</script>

<style>
Body {
  background-color: #2d313d;
}
</style>
<style scoped>
h2 {
  color: #37a794;
  font-size: 25px;
  transform: translateY(30vh);
}
.Input {
  transform: translateY(30vh);
  margin-top: 2em;
  border-radius: 10px;
  max-width: 60%;
}
.Inputt {
  color: white;
  margin-top: 10px;
  transform: translateY(30vh);
  font-size: 13px;
}
.Error {
  color: #e74c3c;
  transform: translateY(30vh);
  font-size: 14px;
  margin-top: 8px;
}
.Button {
  transform: translateY(25vh);
  border-radius: 10px;
  max-width: 300px;
  font-weight: 700;
  padding: 10px;
  color: rgba(255, 255, 255, 0.986);
  font-size: 20px;
  border-width: 3px;
  border-color: #37a794;
  background: Transparent;
  margin-top: 2em;
  cursor: pointer;
}
.Button:hover {
  background: #37a794;
}
.Resultado {
  transform: translateY(25vh);
  margin-top: 2em;
  background: rgba(55, 167, 148, 0.1);
  border: 2px solid #37a794;
  border-radius: 12px;
  padding: 1.2em;
  max-width: 80%;
}
.ResultadoNumero {
  color: #37a794 !important;
  font-size: 3.5em !important;
  font-weight: 700;
  margin-bottom: 0;
  transform: none !important;
}
.ResultadoLabel {
  font-size: 1.4em !important;
  font-weight: 600;
  margin-bottom: 0.5em;
  transform: none !important;
}
.ResultadoMensaje {
  color: whitesmoke !important;
  font-size: 0.95em !important;
  margin-bottom: 0.8em;
  transform: none !important;
}
.ResultadoLink {
  color: #37a794;
  font-size: 0.9em;
  text-decoration: underline;
}

h4 {
  color: #37a794;
  font-size: 6em;
  transform: translateY(20vh);
}
p {
  color: white;
  transform: translateY(25vh);
  text-align: justify;
  margin-right: 10%;
}
.TablaIMC {
  transform: translateY(25vh);
  margin-right: 10%;
  border-radius: 10px;
  overflow: hidden;
}
.TablaTitle {
  color: #37a794 !important;
  font-weight: 700;
  font-size: 1em !important;
  transform: none !important;
  margin-bottom: 4px;
}
.TablaFila {
  padding: 6px 12px;
  font-size: 0.9em;
  color: #2d313d;
  font-weight: 600;
}
.bajo {
  background: #f0ad4e;
}
.normal {
  background: #37a794;
}
.sobre {
  background: #f0ad4e;
}
.obesidad {
  background: #e74c3c;
  color: white;
}

/* Recursos Científicos */
.RecursosWrapper {
  margin: 6em 2em 3em 2em;
}
.RecursosToggle {
  background: rgba(55, 167, 148, 0.15);
  border: 2px solid #37a794;
  border-radius: 10px;
  color: #37a794;
  font-size: 1.1em;
  font-weight: 700;
  padding: 0.6em 1.2em;
  cursor: pointer;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
.RecursosToggle:hover {
  background: rgba(55, 167, 148, 0.3);
}
.RecursosPanel {
  margin-top: 1em;
}
.RecursosGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1em;
}
.RecursoCard {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(55, 167, 148, 0.4);
  border-radius: 10px;
  padding: 1.1em;
}
.RecursoCardWide {
  grid-column: 1 / -1;
}
.RecursoTitulo {
  color: #37a794 !important;
  font-size: 1em !important;
  font-weight: 700;
  margin-bottom: 0.5em;
  transform: none !important;
}
.RecursoTexto {
  color: rgba(255, 255, 255, 0.85) !important;
  font-size: 0.88em !important;
  line-height: 1.6;
  margin-bottom: 0.5em;
  transform: none !important;
  text-align: left !important;
}
.RecursoCita {
  color: rgba(55, 167, 148, 0.8) !important;
  font-size: 0.78em !important;
  font-style: italic;
  margin-bottom: 0;
  transform: none !important;
}
.RecursoLista {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.88em;
  line-height: 1.8;
  padding-left: 1.2em;
  margin-bottom: 0.8em;
}
</style>
