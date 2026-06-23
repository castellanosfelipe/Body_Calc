<template>
  <Body>
    <Header></Header>
    <form @submit.prevent>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6">
          <h2>Calcule sus calorias diarias:</h2>
          <b-form-select
            class="Input2 mx-auto"
            v-model="Sexo"
            :options="[
              { text: 'Sexo biológico', value: null },
              { text: 'Masculino', value: 'Masculino' },
              { text: 'Femenino', value: 'Femenino' },
            ]"
          ></b-form-select>
          <b-form-select
            class="Input2 mx-auto"
            v-model="NivelEjercicio"
            :options="[
              { text: 'Nivel de ejercicio', value: null },
              {
                text: 'Sedentario — Poco o ningún ejercicio',
                value: 'Sedentario',
              },
              { text: 'Ligero — Ejercicio 1-3 días/semana', value: 'Ligero' },
              {
                text: 'Moderado — Ejercicio 3-5 días/semana',
                value: 'Moderado',
              },
              { text: 'Activo — Ejercicio 6-7 días/semana', value: 'Activo' },
              {
                text: 'Muy activo — Atleta o trabajo físico intenso',
                value: 'MuyActivo',
              },
            ]"
          ></b-form-select>
          <h5 class="Medidas">¿Como obtener las medidas?</h5>
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
          <b-form-input
            type="number"
            v-model.number="Edad"
            placeholder="Edad (Años)."
            class="Input mx-auto"
            min="10"
            max="120"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>

          <p v-if="error" class="Error">{{ error }}</p>
          <button type="button" class="Button mx-auto" @click="calcular">
            Calcular
          </button>

          <div v-if="resultado !== null" class="Resultado mx-auto">
            <p class="ResultadoNumero">{{ resultado.tdee }} kcal/día</p>
            <p class="ResultadoSub">Tu gasto calórico diario total (TDEE)</p>
            <div class="DesgloseCalorias">
              <div class="DesgloseFila">
                <span class="DesgloseLabel">TMB (metabolismo basal)</span>
                <span class="DesgloseValor">{{ resultado.tmb }} kcal</span>
              </div>
              <div class="DesgloseFila">
                <span class="DesgloseLabel">Para perder peso (-500 kcal)</span>
                <span class="DesgloseValor deficit"
                  >{{ resultado.deficit }} kcal/día</span
                >
              </div>
              <div class="DesgloseFila">
                <span class="DesgloseLabel">Para mantener peso</span>
                <span class="DesgloseValor mantener"
                  >{{ resultado.tdee }} kcal/día</span
                >
              </div>
              <div class="DesgloseFila">
                <span class="DesgloseLabel">Para ganar peso (+300 kcal)</span>
                <span class="DesgloseValor superavit"
                  >{{ resultado.superavit }} kcal/día</span
                >
              </div>
            </div>
            <router-link to="/Macros-Diarios" class="ResultadoLink">
              ¿Quieres saber cuántas proteínas, grasas y carbos necesitas? →
            </router-link>
          </div>
        </b-col>
        <b-col class="d-none d-md-block m-md-4">
          <h4>CALORIAS DIARIAS</h4>
          <p>
            Sus calorías diarias son la suma de su tasa metabólica basal (TMB) y
            las calorías que su cuerpo usa en sus actividades diarias.
          </p>
          <p>
            Este valor representa la cantidad de calorías que consume tu cuerpo
            durante todo el día. Entonces, si consume más calorías que este
            resultado, aumentará de peso, y si consume menos, perderá peso.
          </p>
          <p>
            La TMB es el total de calorías que su cuerpo necesita para realizar
            las funciones más básicas del cuerpo, como la respiración, el
            cerebro, etc.
          </p>
          <div class="TablaActividad">
            <p class="TablaTitle">Factores de actividad (Harris-Benedict)</p>
            <div class="TablaFila sedentario">Sedentario — ×1.2</div>
            <div class="TablaFila ligero">Ligero — ×1.375</div>
            <div class="TablaFila moderado">Moderado — ×1.55</div>
            <div class="TablaFila activo">Activo — ×1.725</div>
            <div class="TablaFila muyActivo">Muy activo — ×1.9</div>
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
            <p class="RecursoTitulo">🔬 La fórmula Mifflin-St Jeor</p>
            <p class="RecursoTexto">
              Esta calculadora usa la ecuación
              <strong>Mifflin-St Jeor (1990)</strong>, considerada la más
              precisa para estimar el metabolismo basal en individuos con peso
              normal y sobrepeso. Un estudio de Frankenfield et al. (2005) en el
              <em>Journal of the American Dietetic Association</em> comparó 5
              ecuaciones predictivas y concluyó que Mifflin-St Jeor presentaba
              el menor margen de error medio en adultos no obesos
              (<strong>±10%</strong>).
            </p>
            <p class="RecursoCita">
              📄 Mifflin MD et al. (1990). J Am Diet Assoc, 90(3), 391–395.
            </p>
            <p class="RecursoCita">
              📄 Frankenfield D et al. (2005). J Am Diet Assoc, 105(5), 775–789.
            </p>
          </div>

          <div class="RecursoCard">
            <p class="RecursoTitulo">⚡ ¿Qué es el TDEE?</p>
            <p class="RecursoTexto">
              El <strong>TDEE (Total Daily Energy Expenditure)</strong> es tu
              gasto calórico total y se compone de: TMB (~60–70%), efecto
              térmico de los alimentos (~10%) y actividad física (~20–30%). Los
              factores de actividad de esta calculadora están basados en la
              revisión de Harris-Benedict que Harris y Benedict realizaron y que
              fue posteriormente revisada por Roza y Shizgal (1984), siendo los
              valores más utilizados en nutrición clínica.
            </p>
            <p class="RecursoCita">
              📄 Roza AM & Shizgal HM (1984). Am J Clin Nutr, 40(1), 168–182.
            </p>
          </div>

          <div class="RecursoCard">
            <p class="RecursoTitulo">🏃 Déficit calórico y pérdida de grasa</p>
            <p class="RecursoTexto">
              La guía clásica de "1 kg de grasa = 7.700 kcal" indica que un
              déficit de
              <strong>500 kcal/día produce ~0.5 kg de pérdida por semana</strong
              >, considerado seguro por la OMS y el ACSM. Sin embargo,
              investigaciones modernas de Hall et al. (2011) muestran que la
              respuesta metabólica es dinámica — el cuerpo reduce el TDEE al
              bajar de peso, por lo que los resultados reales varían
              individualmente.
            </p>
            <p class="RecursoCita">
              📄 Hall KD et al. (2011). The Lancet, 378(9793), 826–837.
            </p>
          </div>

          <div class="RecursoCard">
            <p class="RecursoTitulo">🍽️ Calorías mínimas saludables</p>
            <p class="RecursoTexto">
              Consumir menos de <strong>1.200 kcal/día para mujeres</strong> y
              <strong>1.500 kcal/día para hombres</strong> sin supervisión
              médica es considerado peligroso. Dietas muy restrictivas pueden
              causar pérdida de masa muscular, deficiencias nutricionales y
              adaptaciones metabólicas que dificultan futuras pérdidas de peso.
              Esta calculadora aplica ese mínimo automáticamente.
            </p>
            <p class="RecursoCita">
              📄 National Institutes of Health — Very Low Calorie Diets (2012).
            </p>
          </div>

          <div class="RecursoCard RecursoCardWide">
            <p class="RecursoTitulo">
              🎬 Videos recomendados (buscar en YouTube)
            </p>
            <ul class="RecursoLista">
              <li>
                🔎
                <em
                  >"How many calories should you eat?" — Nutrition Made
                  Simple</em
                >
                — Explica TDEE, TMB y cómo aplicar el déficit.
              </li>
              <li>
                🔎
                <em
                  >"Calories in, calories out — is it that simple?" — Thomas
                  DeLauer</em
                >
                — Matices científicos del balance energético.
              </li>
              <li>
                🔎 <em>"Understanding your metabolism" — TED-Ed</em> — Animación
                educativa sobre el metabolismo basal.
              </li>
              <li>
                🔎
                <em>"Why calorie counting doesn't always work" — SciShow</em> —
                Limitaciones del conteo calórico y adaptaciones metabólicas.
              </li>
            </ul>
            <p class="RecursoTexto">
              🌐 Fuente oficial NIH: <strong>niddk.nih.gov</strong> — National
              Institute of Diabetes and Digestive and Kidney Diseases.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Body>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";

const FACTORES_ACTIVIDAD: Record<string, number> = {
  Sedentario: 1.2,
  Ligero: 1.375,
  Moderado: 1.55,
  Activo: 1.725,
  MuyActivo: 1.9,
};

interface ResultadoCalorias {
  tmb: number;
  tdee: number;
  deficit: number;
  superavit: number;
}

export default Vue.extend({
  name: "Calorias-Diarias",
  components: { Header },
  data() {
    return {
      Sexo: null as string | null,
      NivelEjercicio: null as string | null,
      Altura: null as number | null,
      Peso: null as number | null,
      Edad: null as number | null,
      resultado: null as ResultadoCalorias | null,
      error: "" as string,
      mostrarRecursos: false,
    };
  },
  methods: {
    calcular() {
      this.error = "";
      this.resultado = null;

      if (!this.Sexo) {
        this.error = "Por favor selecciona tu sexo biológico.";
        return;
      }
      if (!this.NivelEjercicio) {
        this.error = "Por favor selecciona tu nivel de ejercicio.";
        return;
      }
      if (!this.Altura || !this.Peso || !this.Edad) {
        this.error = "Por favor completa todos los campos.";
        return;
      }

      let tmb: number;
      if (this.Sexo === "Masculino") {
        tmb = 10 * this.Peso + 6.25 * this.Altura - 5 * this.Edad + 5;
      } else {
        tmb = 10 * this.Peso + 6.25 * this.Altura - 5 * this.Edad - 161;
      }

      const factor = FACTORES_ACTIVIDAD[this.NivelEjercicio];
      const tdee = Math.round(tmb * factor);

      this.resultado = {
        tmb: Math.round(tmb),
        tdee,
        deficit: Math.max(1200, tdee - 500),
        superavit: tdee + 300,
      };
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
.Error {
  color: #e74c3c;
  transform: translateY(20vh);
  font-size: 14px;
  margin-top: 8px;
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
  display: block;
  cursor: pointer;
}
.Button:hover {
  background: #37a794;
}
.Resultado {
  transform: translateY(15vh);
  margin-top: 1.5em;
  background: rgba(55, 167, 148, 0.1);
  border: 2px solid #37a794;
  border-radius: 12px;
  padding: 1.2em;
  max-width: 85%;
}
.ResultadoNumero {
  color: #37a794 !important;
  font-size: 2em !important;
  font-weight: 700;
  margin-bottom: 0;
  transform: none !important;
}
.ResultadoSub {
  color: whitesmoke !important;
  font-size: 0.85em !important;
  margin-bottom: 1em;
  transform: none !important;
}
.DesgloseCalorias {
  border-top: 1px solid rgba(55, 167, 148, 0.3);
  padding-top: 0.8em;
  margin-bottom: 1em;
}
.DesgloseFila {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4em;
}
.DesgloseLabel {
  color: whitesmoke;
  font-size: 0.85em;
}
.DesgloseValor {
  font-weight: 700;
  font-size: 0.9em;
  color: white;
}
.deficit {
  color: #f0ad4e !important;
}
.mantener {
  color: #37a794 !important;
}
.superavit {
  color: #2ecc71 !important;
}
.ResultadoLink {
  color: #37a794;
  font-size: 0.85em;
  text-decoration: underline;
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
.TablaActividad {
  transform: translateY(30vh);
  margin-right: 3em;
  border-radius: 10px;
  overflow: hidden;
}
.TablaTitle {
  color: #37a794 !important;
  font-weight: 700;
  font-size: 0.95em !important;
  transform: none !important;
  margin-bottom: 4px;
}
.TablaFila {
  padding: 5px 12px;
  font-size: 0.85em;
  font-weight: 600;
}
.sedentario {
  background: #7f8c8d;
  color: white;
}
.ligero {
  background: #3498db;
  color: white;
}
.moderado {
  background: #37a794;
  color: white;
}
.activo {
  background: #2ecc71;
  color: #2d313d;
}
.muyActivo {
  background: #27ae60;
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
  margin-bottom: 0.3em;
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
