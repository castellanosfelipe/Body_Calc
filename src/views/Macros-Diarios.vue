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
                <h1 class="form-title">Macros Diarios</h1>
                <p class="form-subtitle">
                  Distribución de proteínas, grasas y carbohidratos según tu
                  meta.
                </p>
              </div>

              <div class="field-group">
                <label class="field-label" for="mac-meta">Meta corporal</label>
                <b-form-select
                  id="mac-meta"
                  class="field-input"
                  v-model="Meta"
                  :options="[
                    { text: 'Seleccionar...', value: null },
                    { text: 'Perder peso', value: 'Perder peso' },
                    { text: 'Mantener peso', value: 'Mantener peso' },
                    { text: 'Ganar peso', value: 'Ganar peso' },
                  ]"
                />
              </div>

              <div class="field-group">
                <label class="field-label" for="mac-peso">Peso</label>
                <b-form-input
                  id="mac-peso"
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
                <label class="field-label" for="mac-calorias">
                  Calorías diarias (TDEE)
                  <router-link to="/Calorias-Diarias" class="label-link">
                    ¿No sabes cuántas? Calcúlalas →
                  </router-link>
                </label>
                <b-form-input
                  id="mac-calorias"
                  type="number"
                  v-model.number="CaloriasTarget"
                  placeholder="kcal/día"
                  class="field-input"
                  min="500"
                  max="10000"
                />
                <span class="field-hint">Entre 500 y 10.000 kcal</span>
              </div>

              <div v-if="error" class="field-error" role="alert">
                ⚠ {{ error }}
              </div>

              <button type="button" class="btn-calcular" @click="calcular">
                Calcular Macros
              </button>

              <div
                v-if="resultado !== null"
                class="result-card"
                aria-live="polite"
              >
                <p class="macros-titulo">Tus macros diarios — {{ Meta }}</p>
                <div class="macros-grid">
                  <div class="macro-card proteinas">
                    <span class="macro-gramos"
                      >{{ resultado.proteinasG }}g</span
                    >
                    <span class="macro-nombre">Proteínas</span>
                    <span class="macro-detalle"
                      >{{ resultado.proteinasKcal }} kcal ·
                      {{ resultado.proteinasPct }}%</span
                    >
                  </div>
                  <div class="macro-card grasas">
                    <span class="macro-gramos">{{ resultado.grasasG }}g</span>
                    <span class="macro-nombre">Grasas</span>
                    <span class="macro-detalle"
                      >{{ resultado.grasasKcal }} kcal ·
                      {{ resultado.grasasPct }}%</span
                    >
                  </div>
                  <div class="macro-card carbos">
                    <span class="macro-gramos">{{ resultado.carbosG }}g</span>
                    <span class="macro-nombre">Carbohidratos</span>
                    <span class="macro-detalle"
                      >{{ resultado.carbosKcal }} kcal ·
                      {{ resultado.carbosPct }}%</span
                    >
                  </div>
                </div>
                <p class="macros-total">
                  Total: {{ resultado.totalKcal }} kcal/día
                </p>
                <p class="result-message">{{ resultado.mensaje }}</p>
              </div>
            </section>

            <!-- COLUMNA INFORMACIÓN -->
            <aside class="info-col d-none d-lg-flex">
              <h2 class="info-title">Macronutrientes</h2>
              <p class="info-text">
                Hay 3 macronutrientes presentes en nuestra alimentación:
                proteínas, grasas y carbohidratos. Cada uno tiene
                características y funciones distintas. Es el total calórico lo
                que determina si ganas, mantienes o pierdes peso.
              </p>

              <div class="class-table">
                <p class="class-table-title">Equivalencia calórica</p>
                <div class="class-row" style="color: #60a5fa">
                  <span class="class-row-label">🥩 Proteínas</span
                  ><span>4 kcal / g</span>
                </div>
                <div class="class-row" style="color: #34d399">
                  <span class="class-row-label">🍞 Carbohidratos</span
                  ><span>4 kcal / g</span>
                </div>
                <div class="class-row" style="color: #fbbf24">
                  <span class="class-row-label">🫒 Grasas</span
                  ><span>9 kcal / g</span>
                </div>
              </div>

              <div class="class-table">
                <p class="class-table-title">Proteínas por meta</p>
                <div class="class-row" style="color: var(--color-warning)">
                  <span class="class-row-label">Perder peso</span
                  ><span>2.2 g/kg</span>
                </div>
                <div class="class-row" style="color: var(--teal)">
                  <span class="class-row-label">Mantener peso</span
                  ><span>1.8 g/kg</span>
                </div>
                <div class="class-row" style="color: var(--color-success)">
                  <span class="class-row-label">Ganar peso</span
                  ><span>2.0 g/kg</span>
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
                <p class="recurso-titulo">
                  🥩 Proteínas: el macronutriente más importante
                </p>
                <p class="recurso-texto">
                  El ISSN recomienda entre 1.4 y 2.0 g/kg para personas activas,
                  y hasta 2.2 g/kg en contextos de pérdida de grasa. Un
                  meta-análisis de Morton et al. (2018) con 49 estudios y 1.800
                  participantes concluyó que la proteína suplementaria maximiza
                  la ganancia de fuerza hasta ~1.62 g/kg/día.
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://bjsm.bmj.com/content/52/6/376"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Morton RW et al. (2018). Br J Sports Med, 52(6), 376–384. —
                    BJSM</a
                  >
                </p>
              </div>
              <div class="recurso-card">
                <p class="recurso-titulo">
                  🍞 Carbohidratos: combustible para el rendimiento
                </p>
                <p class="recurso-texto">
                  Los carbohidratos son la fuente de energía preferida del
                  músculo y el cerebro. Burke et al. (2011) demostraron que
                  dietas bajas en carbohidratos (&lt;50g/día) reducen
                  significativamente el rendimiento en ejercicios de más de 10
                  segundos de duración.
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://doi.org/10.1080/02640414.2011.585473"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Burke LM et al. (2011). J Sports Sci, 29(Suppl 1), S17–27.
                    — DOI</a
                  >
                </p>
              </div>
              <div class="recurso-card">
                <p class="recurso-titulo">
                  🫒 Grasas: esenciales, no el enemigo
                </p>
                <p class="recurso-texto">
                  Las grasas son fundamentales para la producción hormonal
                  (testosterona, estrógeno, cortisol) y absorción de vitaminas
                  liposolubles (A, D, E, K). El ISSN recomienda que representen
                  <strong>20–35% de las calorías totales</strong>. Menos del 15%
                  puede comprometer las hormonas sexuales.
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://www.dietaryguidelines.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Dietary Guidelines for Americans, 2020–2025. USDA/HHS. —
                    dietaryguidelines.gov</a
                  >
                </p>
              </div>
              <div class="recurso-card">
                <p class="recurso-titulo">⚖️ IIFYM: "If It Fits Your Macros"</p>
                <p class="recurso-texto">
                  El enfoque IIFYM está respaldado por la ciencia: lo que
                  importa es el total calórico y el balance de macronutrientes,
                  no los alimentos específicos. Un estudio de Barr & Wright
                  (2010) no encontró diferencias en pérdida de peso entre dietas
                  con distintos alimentos pero igual aporte calórico. La
                  <strong>calidad</strong> sí importa para la salud a largo
                  plazo.
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2897733/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Barr SB & Wright JC (2010). Nutr J, 9(1), 30. — PMC Open
                    Access</a
                  >
                </p>
              </div>
              <div class="recurso-card recurso-card-wide">
                <p class="recurso-titulo">🎬 Videos</p>
                <ul class="recurso-lista">
                  <li>
                    🎥
                    <a
                      href="https://www.youtube.com/watch?v=ogdwauvem7s"
                      target="_blank"
                      rel="noopener noreferrer"
                      >"How much protein do you need?" — Layne Norton</a
                    >
                    — El experto en proteínas más citado en ciencias del
                    deporte.
                  </li>
                  <li>
                    🎥
                    <a
                      href="https://www.youtube.com/watch?v=mvvx2yQRbzQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      >"The truth about fats: bad and good" — TED-Ed</a
                    >
                    — Tipos de grasas y su impacto en la salud.
                  </li>
                  <li>
                    🎥
                    <a
                      href="https://www.youtube.com/watch?v=5K9QhkPww44"
                      target="_blank"
                      rel="noopener noreferrer"
                      >"What Every Body Fat % Actually Looks Like" — Jeff
                      Nippard</a
                    >
                    — Guía práctica y científica de composición corporal.
                  </li>
                </ul>
                <p class="recurso-texto">
                  🌐
                  <a
                    href="https://jissn.biomedcentral.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Journal of the International Society of Sports Nutrition —
                    jissn.biomedcentral.com</a
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

/* LABEL LINK */
.label-link {
  font-size: 11px;
  color: var(--teal);
  text-decoration: none;
  font-weight: 600;
  margin-left: var(--s3);
}

.label-link:hover {
  color: var(--teal-light);
  text-decoration: underline;
}

/* MACROS RESULT */
.macros-titulo {
  font-size: 13px !important;
  font-weight: 700 !important;
  color: var(--text-muted) !important;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--s4) !important;
  transform: none !important;
}

.macros-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--s3);
  margin-bottom: var(--s4);
}

.macro-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--s4) var(--s3);
  border-radius: var(--r-md);
  border: 1px solid;
  text-align: center;
}

.macro-card.proteinas {
  background: rgba(96, 165, 250, 0.08);
  border-color: rgba(96, 165, 250, 0.25);
}

.macro-card.grasas {
  background: rgba(251, 191, 36, 0.08);
  border-color: rgba(251, 191, 36, 0.25);
}

.macro-card.carbos {
  background: rgba(52, 211, 153, 0.08);
  border-color: rgba(52, 211, 153, 0.25);
}

.macro-gramos {
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: var(--s1);
}

.proteinas .macro-gramos {
  color: #60a5fa;
}
.grasas .macro-gramos {
  color: #fbbf24;
}
.carbos .macro-gramos {
  color: #34d399;
}

.macro-nombre {
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--s1);
}

.macro-detalle {
  font-size: 11px;
  color: var(--text-muted);
  line-height: 1.4;
}

.macros-total {
  font-family: var(--font-mono);
  font-size: 13px !important;
  font-weight: 600 !important;
  color: var(--teal) !important;
  margin-bottom: var(--s4) !important;
  transform: none !important;
}
</style>
