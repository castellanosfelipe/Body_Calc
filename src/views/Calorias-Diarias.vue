<template>
  <div class="page">
    <Header />
    <main class="page-content">
      <div class="page-inner">
        <form @submit.prevent>
          <div class="calc-layout">
            <!-- COLUMNA FORMULARIO -->
            <section class="form-col">
              <div class="form-header">
                <span class="form-eyebrow">Calculadora</span>
                <h1 class="form-title">Calorías Diarias</h1>
                <p class="form-subtitle">
                  Ecuación Mifflin-St Jeor (1990) — la más precisa para adultos.
                </p>
              </div>

              <div class="field-group">
                <label class="field-label" for="cal-sexo">Sexo biológico</label>
                <b-form-select
                  id="cal-sexo"
                  class="field-input"
                  v-model="Sexo"
                  :options="[
                    { text: 'Seleccionar...', value: null },
                    { text: 'Masculino', value: 'Masculino' },
                    { text: 'Femenino', value: 'Femenino' },
                  ]"
                />
              </div>

              <div class="field-group">
                <label class="field-label" for="cal-ejercicio"
                  >Nivel de actividad</label
                >
                <b-form-select
                  id="cal-ejercicio"
                  class="field-input"
                  v-model="NivelEjercicio"
                  :options="[
                    { text: 'Seleccionar...', value: null },
                    {
                      text: 'Sedentario — Poco o ningún ejercicio',
                      value: 'Sedentario',
                    },
                    {
                      text: 'Ligero — Ejercicio 1-3 días/semana',
                      value: 'Ligero',
                    },
                    {
                      text: 'Moderado — Ejercicio 3-5 días/semana',
                      value: 'Moderado',
                    },
                    {
                      text: 'Activo — Ejercicio 6-7 días/semana',
                      value: 'Activo',
                    },
                    {
                      text: 'Muy activo — Atleta o trabajo físico intenso',
                      value: 'MuyActivo',
                    },
                  ]"
                />
              </div>

              <div class="field-group">
                <label class="field-label" for="cal-altura">Altura</label>
                <b-form-input
                  id="cal-altura"
                  type="number"
                  v-model.number="Altura"
                  placeholder="cm"
                  class="field-input"
                  min="100"
                  max="250"
                />
                <span class="field-hint">Entre 100 y 250 cm</span>
              </div>

              <div class="field-group">
                <label class="field-label" for="cal-peso">Peso</label>
                <b-form-input
                  id="cal-peso"
                  type="number"
                  v-model.number="Peso"
                  placeholder="kg"
                  class="field-input"
                  min="1"
                  max="300"
                />
                <span class="field-hint">Entre 1 y 300 kg</span>
              </div>

              <div class="field-group">
                <label class="field-label" for="cal-edad">Edad</label>
                <b-form-input
                  id="cal-edad"
                  type="number"
                  v-model.number="Edad"
                  placeholder="años"
                  class="field-input"
                  min="10"
                  max="120"
                />
                <span class="field-hint">Entre 10 y 120 años</span>
              </div>

              <div v-if="error" class="field-error" role="alert">
                ⚠ {{ error }}
              </div>

              <button type="button" class="btn-calcular" @click="calcular">
                Calcular Calorías
              </button>

              <div
                v-if="resultado !== null"
                class="result-card"
                aria-live="polite"
              >
                <div class="result-value-row">
                  <span class="result-value">{{ resultado.tdee }}</span>
                  <span class="result-unit">kcal/día</span>
                </div>
                <p class="result-sub">Tu gasto calórico total (TDEE)</p>

                <div class="desglose">
                  <div class="desglose-fila">
                    <span class="desglose-label">TMB (metabolismo basal)</span>
                    <span class="desglose-valor">{{ resultado.tmb }} kcal</span>
                  </div>
                  <div class="desglose-fila">
                    <span class="desglose-label"
                      >Para perder peso (−500 kcal)</span
                    >
                    <span class="desglose-valor deficit"
                      >{{ resultado.deficit }} kcal/día</span
                    >
                  </div>
                  <div class="desglose-fila">
                    <span class="desglose-label">Para mantener peso</span>
                    <span class="desglose-valor mantener"
                      >{{ resultado.tdee }} kcal/día</span
                    >
                  </div>
                  <div class="desglose-fila">
                    <span class="desglose-label"
                      >Para ganar peso (+300 kcal)</span
                    >
                    <span class="desglose-valor superavit"
                      >{{ resultado.superavit }} kcal/día</span
                    >
                  </div>
                </div>

                <router-link to="/Macros-Diarios" class="result-cta">
                  ¿Cuántas proteínas, grasas y carbos necesitas? →
                </router-link>
              </div>
            </section>

            <!-- COLUMNA INFORMACIÓN -->
            <aside class="info-col d-none d-lg-flex">
              <h2 class="info-title">Calorías Diarias</h2>
              <p class="info-text">
                Tus calorías diarias son la suma de tu tasa metabólica basal
                (TMB) y las calorías que tu cuerpo usa en actividades diarias.
                Si consumes más de este valor, ganas peso; si consumes menos,
                pierdes peso.
              </p>
              <p class="info-text">
                La TMB es el total de calorías que necesita tu cuerpo en reposo
                absoluto para funciones básicas: respiración, circulación,
                temperatura corporal.
              </p>

              <div class="class-table">
                <p class="class-table-title">Factores de actividad</p>
                <div class="class-row" style="color: var(--text-secondary)">
                  <span class="class-row-label">Sedentario</span
                  ><span>× 1.2</span>
                </div>
                <div class="class-row" style="color: var(--text-secondary)">
                  <span class="class-row-label">Ligero</span
                  ><span>× 1.375</span>
                </div>
                <div class="class-row row-normal">
                  <span class="class-row-label">Moderado</span
                  ><span>× 1.55</span>
                </div>
                <div class="class-row row-normal">
                  <span class="class-row-label">Activo</span
                  ><span>× 1.725</span>
                </div>
                <div class="class-row row-normal">
                  <span class="class-row-label">Muy activo</span
                  ><span>× 1.9</span>
                </div>
              </div>
            </aside>
          </div>
        </form>

        <!-- RECURSOS CIENTÍFICOS -->
        <div class="recursos-wrapper">
          <button
            type="button"
            class="recursos-toggle"
            @click="mostrarRecursos = !mostrarRecursos"
            :aria-expanded="mostrarRecursos.toString()"
          >
            <span>📚 Recursos Científicos</span>
            <span>{{ mostrarRecursos ? "▲" : "▼" }}</span>
          </button>
          <div v-if="mostrarRecursos" class="recursos-panel">
            <div class="recursos-grid">
              <div class="recurso-card">
                <p class="recurso-titulo">🔬 La fórmula Mifflin-St Jeor</p>
                <p class="recurso-texto">
                  Esta calculadora usa la ecuación
                  <strong>Mifflin-St Jeor (1990)</strong>, considerada la más
                  precisa para estimar el metabolismo basal. Un estudio de
                  Frankenfield et al. (2005) comparó 5 ecuaciones predictivas y
                  concluyó que Mifflin-St Jeor presentaba el menor margen de
                  error medio en adultos no obesos (<strong>±10%</strong>).
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/2305711/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Mifflin MD et al. (1990). J Am Diet Assoc, 90(3), 391–395.
                    — PubMed</a
                  >
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/15883556/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Frankenfield D et al. (2005). J Am Diet Assoc, 105(5),
                    775–789. — PubMed</a
                  >
                </p>
              </div>
              <div class="recurso-card">
                <p class="recurso-titulo">⚡ ¿Qué es el TDEE?</p>
                <p class="recurso-texto">
                  El <strong>TDEE (Total Daily Energy Expenditure)</strong> se
                  compone de: TMB (~60–70%), efecto térmico de los alimentos
                  (~10%) y actividad física (~20–30%). Los factores de actividad
                  están basados en la revisión de Roza y Shizgal (1984), los más
                  utilizados en nutrición clínica.
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/6741850/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Roza AM & Shizgal HM (1984). Am J Clin Nutr, 40(1),
                    168–182. — PubMed</a
                  >
                </p>
              </div>
              <div class="recurso-card">
                <p class="recurso-titulo">
                  🏃 Déficit calórico y pérdida de grasa
                </p>
                <p class="recurso-texto">
                  Un déficit de
                  <strong
                    >500 kcal/día produce ~0.5 kg de pérdida por semana</strong
                  >, considerado seguro por la OMS y el ACSM. Hall et al. (2011)
                  muestran que la respuesta metabólica es dinámica: el cuerpo
                  reduce el TDEE al bajar de peso, por lo que los resultados
                  reales varían individualmente.
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/21872751/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Hall KD et al. (2011). The Lancet, 378(9793), 826–837. —
                    PubMed</a
                  >
                </p>
              </div>
              <div class="recurso-card">
                <p class="recurso-titulo">🍽️ Calorías mínimas saludables</p>
                <p class="recurso-texto">
                  Consumir menos de
                  <strong>1.200 kcal/día para mujeres</strong> y
                  <strong>1.500 kcal/día para hombres</strong> sin supervisión
                  médica es peligroso. Dietas muy restrictivas causan pérdida de
                  masa muscular y adaptaciones metabólicas que dificultan
                  futuras pérdidas de peso.
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://www.niddk.nih.gov/health-information/weight-management/very-low-calorie-diets"
                    target="_blank"
                    rel="noopener noreferrer"
                    >National Institutes of Health — Very Low Calorie Diets. —
                    NIH/NIDDK</a
                  >
                </p>
              </div>
              <div class="recurso-card recurso-card-wide">
                <p class="recurso-titulo">🎬 Videos</p>
                <ul class="recurso-lista">
                  <li>
                    🎥
                    <a
                      href="https://www.youtube.com/watch?v=l3XPLRQDxE4"
                      target="_blank"
                      rel="noopener noreferrer"
                      >"The Biggest Flaw with Calories in/Calories Out Thinking"
                      — Thomas DeLauer</a
                    >
                    — Matices científicos del balance energético.
                  </li>
                  <li>
                    🎥
                    <a
                      href="https://www.youtube.com/watch?v=-vNVG7XJpVE"
                      target="_blank"
                      rel="noopener noreferrer"
                      >"What is obesity?" — TED-Ed (Mia Nacamulli)</a
                    >
                    — Metabolismo, energía y composición corporal.
                  </li>
                </ul>
                <p class="recurso-texto">
                  🌐
                  <a
                    href="https://www.niddk.nih.gov/health-information/weight-management"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Fuente oficial NIH — Control de peso y calorías</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
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

<style scoped>
.calc-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--s8);
}

@media (min-width: 992px) {
  .calc-layout {
    grid-template-columns: 1fr 1fr;
    gap: var(--s12);
    align-items: start;
  }
}

.form-col {
  display: flex;
  flex-direction: column;
}

.form-header {
  margin-bottom: var(--s8);
}

.form-eyebrow {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: var(--s2);
}

.form-title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: var(--s3);
}

.form-subtitle {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

.info-col {
  flex-direction: column;
  gap: var(--s4);
  padding: var(--s8);
  background: var(--bg-surface);
  border-radius: var(--r-lg);
  border: 1px solid var(--border-color);
  align-self: start;
  position: sticky;
  top: calc(var(--header-h) + var(--s6));
}

/* RESULT DESGLOSE */
.result-sub {
  color: var(--text-muted) !important;
  font-size: 13px !important;
  margin-bottom: var(--s5) !important;
  transform: none !important;
}

.desglose {
  border-top: 1px solid var(--border-color);
  padding-top: var(--s4);
  margin-bottom: var(--s5);
  display: flex;
  flex-direction: column;
  gap: var(--s2);
}

.desglose-fila {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.desglose-label {
  font-size: 13px;
  color: var(--text-secondary);
}

.desglose-valor {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

.desglose-valor.deficit {
  color: var(--color-warning);
}
.desglose-valor.mantener {
  color: var(--teal);
}
.desglose-valor.superavit {
  color: var(--color-success);
}
</style>
