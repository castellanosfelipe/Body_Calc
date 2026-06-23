<template>
  <Body>
    <Header></Header>
    <form @submit.prevent>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6">
          <h2>Calcule sus macros:</h2>
          <b-form-select
            class="Input2 mx-auto"
            v-model="Meta"
            :options="[
              { text: 'Seleccione su meta:', value: null },
              { text: 'Perder peso', value: 'Perder peso' },
              { text: 'Mantener peso', value: 'Mantener peso' },
              { text: 'Ganar peso', value: 'Ganar peso' },
            ]"
          ></b-form-select>
          <h5 class="Medidas">¿Como obtener las medidas?</h5>
          <b-form-input
            type="number"
            v-model.number="Peso"
            placeholder="Peso (kg)."
            class="Input mx-auto"
            min="1"
            max="300"
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
            v-model.number="CaloriasTarget"
            placeholder="Calorias diarias."
            class="Input mx-auto"
            min="500"
            max="10000"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 5 digitos.</h3>

          <p v-if="error" class="Error">{{ error }}</p>
          <button type="button" class="Button mx-auto" @click="calcular">
            Calcular
          </button>

          <div v-if="resultado !== null" class="Resultado mx-auto">
            <p class="ResultadoTitulo">Tus macros diarios ({{ Meta }})</p>
            <div class="MacrosFila">
              <div class="MacroCard proteinas">
                <p class="MacroGramos">{{ resultado.proteinasG }}g</p>
                <p class="MacroNombre">Proteínas</p>
                <p class="MacroKcal">
                  {{ resultado.proteinasKcal }} kcal ({{
                    resultado.proteinasPct
                  }}%)
                </p>
              </div>
              <div class="MacroCard grasas">
                <p class="MacroGramos">{{ resultado.grasasG }}g</p>
                <p class="MacroNombre">Grasas</p>
                <p class="MacroKcal">
                  {{ resultado.grasasKcal }} kcal ({{ resultado.grasasPct }}%)
                </p>
              </div>
              <div class="MacroCard carbos">
                <p class="MacroGramos">{{ resultado.carbosG }}g</p>
                <p class="MacroNombre">Carbohidratos</p>
                <p class="MacroKcal">
                  {{ resultado.carbosKcal }} kcal ({{ resultado.carbosPct }}%)
                </p>
              </div>
            </div>
            <p class="ResultadoTotal">
              Total: {{ resultado.totalKcal }} kcal/día
            </p>
            <p class="ResultadoMensaje">{{ resultado.mensaje }}</p>
          </div>
        </b-col>
        <b-col class="d-none d-md-block m-md-4">
          <h4>MACROS DIARIOS</h4>
          <p>
            Hay 3 macronutrientes presentes en nuestra comida: Carbohidratos,
            Grasas y Proteínas. Cada uno tiene sus características y objetivos
            para ser consumido (calorías por gramo, tiempo de absorción, etc).
          </p>
          <p>
            Es el total de calorías que ingerimos en el día lo que nos hace
            ganar, mantener o perder peso. Si ingieres más de lo que tu cuerpo
            necesita en un día, ganarás peso, y de lo contrario, si ingieres
            menos de lo que necesitas, pierdes peso.
          </p>
          <p>Puedes comer lo que quieras, si se ajusta a tus macros.</p>

          <div class="TablaEquivalencias">
            <p class="TablaTitle">Equivalencia calórica</p>
            <div class="TablaFila protFila">Proteínas — 4 kcal/gramo</div>
            <div class="TablaFila carbFila">Carbohidratos — 4 kcal/gramo</div>
            <div class="TablaFila grasFila">Grasas — 9 kcal/gramo</div>
          </div>
          <div class="TablaEquivalencias">
            <p class="TablaTitle">Distribución por meta</p>
            <div class="TablaFila perderFila">
              Perder peso — Proteínas altas (2.2g/kg)
            </div>
            <div class="TablaFila mantenerFila">
              Mantener peso — Balance equilibrado (1.8g/kg)
            </div>
            <div class="TablaFila ganarFila">
              Ganar peso — Superávit calórico (2.0g/kg)
            </div>
          </div>

          <h5 class="Macro">🍣 Conoce mas sobre cada macro 🍣</h5>
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
            <p class="RecursoTitulo">
              🥩 Proteínas: el macronutriente más importante
            </p>
            <p class="RecursoTexto">
              El
              <strong>ISSN (International Society of Sports Nutrition)</strong>
              recomienda entre 1.4 y 2.0 g/kg de peso para personas activas, y
              hasta 2.2 g/kg en contextos de pérdida de grasa para preservar
              masa muscular. Un meta-análisis de Morton et al. (2018) en el
              <em>British Journal of Sports Medicine</em> con 49 estudios y
              1.800 participantes concluyó que el consumo de proteína
              suplementaria maximiza la ganancia de fuerza y masa muscular hasta
              un techo de ~1.62 g/kg/día.
            </p>
            <p class="RecursoCita">
              📄 Morton RW et al. (2018). Br J Sports Med, 52(6), 376–384.
            </p>
          </div>

          <div class="RecursoCard">
            <p class="RecursoTitulo">
              🍞 Carbohidratos: combustible para el rendimiento
            </p>
            <p class="RecursoTexto">
              Los carbohidratos son la
              <strong
                >fuente de energía preferida del músculo y el cerebro</strong
              >. El glucógeno muscular (almacenamiento de carbohidratos) es el
              principal determinante del rendimiento en ejercicios de alta
              intensidad. Burke et al. (2011) demostraron que dietas bajas en
              carbohidratos (&lt;50g/día) reducen significativamente el
              rendimiento en ejercicios de más de 10 segundos de duración. Para
              objetivos de composición corporal, los carbohidratos se ajustan
              según las calorías restantes después de proteínas y grasas.
            </p>
            <p class="RecursoCita">
              📄 Burke LM et al. (2011). J Sports Sci, 29(Suppl 1), S17–27.
            </p>
          </div>

          <div class="RecursoCard">
            <p class="RecursoTitulo">🫒 Grasas: esenciales, no el enemigo</p>
            <p class="RecursoTexto">
              Las grasas son fundamentales para la
              <strong>producción hormonal</strong> (testosterona, estrógeno,
              cortisol), absorción de vitaminas liposolubles (A, D, E, K) y
              protección de órganos. El ISSN y las guías dietéticas de EE.UU.
              recomiendan que las grasas representen
              <strong>20–35% de las calorías totales</strong>. Menos del 15%
              puede comprometer la producción de hormonas sexuales. Prioriza
              grasas insaturadas: aceite de oliva, aguacate, nueces, pescado
              graso.
            </p>
            <p class="RecursoCita">
              📄 Dietary Guidelines for Americans, 2020–2025. USDA/HHS.
            </p>
          </div>

          <div class="RecursoCard">
            <p class="RecursoTitulo">⚖️ IIFYM: "If It Fits Your Macros"</p>
            <p class="RecursoTexto">
              El enfoque IIFYM (si entra en tus macros, puedes comerlo) está
              respaldado por la ciencia en términos de composición corporal: lo
              que importa es el total calórico y el balance de macronutrientes,
              no los alimentos específicos. Un estudio de Barr & Wright (2010)
              en el <em>Nutrition Journal</em> no encontró diferencias
              significativas en pérdida de peso entre dietas con distintos tipos
              de alimentos pero igual aporte calórico. Sin embargo, la
              <strong>calidad</strong> de los alimentos sí importa para la salud
              a largo plazo y la saciedad.
            </p>
            <p class="RecursoCita">
              📄 Barr SB & Wright JC (2010). Nutr J, 9(1), 30.
            </p>
          </div>

          <div class="RecursoCard RecursoCardWide">
            <p class="RecursoTitulo">
              🎬 Videos recomendados (buscar en YouTube)
            </p>
            <ul class="RecursoLista">
              <li>
                🔎 <em>"How to count macros for beginners" — Jeff Nippard</em> —
                Guía práctica y científica para empezar con macros.
              </li>
              <li>
                🔎 <em>"Protein: how much do you need?" — Layne Norton</em> — El
                experto en proteínas más citado en nutrición deportiva.
              </li>
              <li>
                🔎 <em>"Are carbs really bad for you?" — TED-Ed</em> —
                Desmitifica la guerra contra los carbohidratos.
              </li>
              <li>
                🔎 <em>"The truth about fats" — TED-Ed</em> — Guía visual sobre
                tipos de grasas y su impacto en salud.
              </li>
              <li>
                🔎 <em>"IIFYM explained" — Stephanie Buttermore</em> — Cómo
                funciona el seguimiento de macros en la práctica.
              </li>
            </ul>
            <p class="RecursoTexto">
              🌐 Fuente oficial ISSN: <strong>jissn.biomedcentral.com</strong> —
              Journal of the International Society of Sports Nutrition.
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

const PROTEINAS_POR_KG: Record<string, number> = {
  "Perder peso": 2.2,
  "Mantener peso": 1.8,
  "Ganar peso": 2.0,
};

const GRASAS_PCT: Record<string, number> = {
  "Perder peso": 0.25,
  "Mantener peso": 0.3,
  "Ganar peso": 0.25,
};

interface ResultadoMacros {
  proteinasG: number;
  proteinasKcal: number;
  proteinasPct: number;
  grasasG: number;
  grasasKcal: number;
  grasasPct: number;
  carbosG: number;
  carbosKcal: number;
  carbosPct: number;
  totalKcal: number;
  mensaje: string;
}

export default Vue.extend({
  name: "Macros-Diarios",
  components: { Header },
  data() {
    return {
      Meta: null as string | null,
      Peso: null as number | null,
      CaloriasTarget: null as number | null,
      resultado: null as ResultadoMacros | null,
      error: "" as string,
      mostrarRecursos: false,
    };
  },
  methods: {
    calcular() {
      this.error = "";
      this.resultado = null;

      if (!this.Meta) {
        this.error = "Por favor selecciona tu meta.";
        return;
      }
      if (!this.Peso || !this.CaloriasTarget) {
        this.error = "Por favor completa todos los campos.";
        return;
      }
      if (this.CaloriasTarget < 500) {
        this.error = "Las calorías diarias no pueden ser menores a 500.";
        return;
      }

      const proteinasPorKg = PROTEINAS_POR_KG[this.Meta];
      const grasasPct = GRASAS_PCT[this.Meta];

      const proteinasG = Math.round(this.Peso * proteinasPorKg);
      const proteinasKcal = proteinasG * 4;

      const grasasKcal = Math.round(this.CaloriasTarget * grasasPct);
      const grasasG = Math.round(grasasKcal / 9);

      const carbosKcal = Math.max(
        0,
        this.CaloriasTarget - proteinasKcal - grasasKcal
      );
      const carbosG = Math.round(carbosKcal / 4);

      const totalKcal = proteinasKcal + grasasKcal + carbosKcal;

      const proteinasPct = Math.round((proteinasKcal / totalKcal) * 100);
      const grasasPctReal = Math.round((grasasKcal / totalKcal) * 100);
      const carbosPct = 100 - proteinasPct - grasasPctReal;

      const mensajes: Record<string, string> = {
        "Perder peso":
          "Alta proteína para preservar músculo mientras pierdes grasa. Mantén un déficit calórico consistente.",
        "Mantener peso":
          "Distribución equilibrada para mantener tu peso y composición corporal actual.",
        "Ganar peso":
          "Superávit calórico con proteína suficiente para maximizar la ganancia muscular.",
      };

      this.resultado = {
        proteinasG,
        proteinasKcal,
        proteinasPct,
        grasasG,
        grasasKcal,
        grasasPct: grasasPctReal,
        carbosG,
        carbosKcal,
        carbosPct,
        totalKcal,
        mensaje: mensajes[this.Meta],
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
.Error {
  color: #e74c3c;
  transform: translateY(20vh);
  font-size: 14px;
  margin-top: 8px;
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
  display: block;
  cursor: pointer;
}
.Button:hover {
  background: #37a794;
}
.Resultado {
  transform: translateY(17vh);
  margin-top: 1.5em;
  background: rgba(55, 167, 148, 0.1);
  border: 2px solid #37a794;
  border-radius: 12px;
  padding: 1.2em;
  max-width: 90%;
}
.ResultadoTitulo {
  color: #37a794 !important;
  font-size: 1em !important;
  font-weight: 700;
  margin-bottom: 1em;
  transform: none !important;
}
.MacrosFila {
  display: flex;
  gap: 8px;
  margin-bottom: 1em;
}
.MacroCard {
  flex: 1;
  border-radius: 10px;
  padding: 0.8em 0.4em;
  text-align: center;
}
.proteinas {
  background: rgba(52, 152, 219, 0.3);
  border: 1px solid #3498db;
}
.grasas {
  background: rgba(230, 126, 34, 0.3);
  border: 1px solid #e67e22;
}
.carbos {
  background: rgba(46, 204, 113, 0.3);
  border: 1px solid #2ecc71;
}
.MacroGramos {
  color: white !important;
  font-size: 1.6em !important;
  font-weight: 700;
  margin-bottom: 0;
  transform: none !important;
}
.MacroNombre {
  color: whitesmoke !important;
  font-size: 0.75em !important;
  margin-bottom: 0.2em;
  transform: none !important;
}
.MacroKcal {
  color: rgba(255, 255, 255, 0.7) !important;
  font-size: 0.7em !important;
  margin-bottom: 0;
  transform: none !important;
}
.ResultadoTotal {
  color: #37a794 !important;
  font-size: 0.95em !important;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5em;
  transform: none !important;
}
.ResultadoMensaje {
  color: whitesmoke !important;
  font-size: 0.82em !important;
  text-align: center;
  margin-bottom: 0;
  transform: none !important;
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
.TablaEquivalencias {
  transform: translateY(30vh);
  margin-right: 3em;
  margin-top: 1em;
  border-radius: 10px;
  overflow: hidden;
}
.TablaTitle {
  color: #37a794 !important;
  font-weight: 700;
  font-size: 0.9em !important;
  transform: none !important;
  margin-bottom: 4px;
}
.TablaFila {
  padding: 5px 12px;
  font-size: 0.82em;
  font-weight: 600;
}
.protFila {
  background: rgba(52, 152, 219, 0.5);
  color: white;
}
.carbFila {
  background: rgba(46, 204, 113, 0.5);
  color: white;
}
.grasFila {
  background: rgba(230, 126, 34, 0.5);
  color: white;
}
.perderFila {
  background: #e74c3c;
  color: white;
}
.mantenerFila {
  background: #37a794;
  color: white;
}
.ganarFila {
  background: #2ecc71;
  color: #2d313d;
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
