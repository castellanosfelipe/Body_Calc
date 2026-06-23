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
                <h1 class="form-title">Índice de Masa Corporal</h1>
                <p class="form-subtitle">
                  Basado en la clasificación de la OMS.
                </p>
              </div>

              <div class="field-group">
                <label class="field-label" for="imc-altura">Altura</label>
                <b-form-input
                  id="imc-altura"
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
                <label class="field-label" for="imc-peso">Peso</label>
                <b-form-input
                  id="imc-peso"
                  type="number"
                  v-model.number="Peso"
                  placeholder="kg"
                  class="field-input"
                  min="1"
                  max="300"
                />
                <span class="field-hint">Entre 1 y 300 kg</span>
              </div>

              <div v-if="error" class="field-error" role="alert">
                ⚠ {{ error }}
              </div>

              <button type="button" class="btn-calcular" @click="calcular">
                Calcular IMC
              </button>

              <div
                v-if="resultado !== null"
                class="result-card"
                aria-live="polite"
              >
                <div class="result-value-row">
                  <span class="result-value">{{ resultado.imc }}</span>
                  <span class="result-unit">kg/m²</span>
                </div>
                <span
                  class="result-badge"
                  :style="{
                    backgroundColor: resultado.color + '1A',
                    color: resultado.color,
                    borderColor: resultado.color + '40',
                  }"
                  >{{ resultado.categoria }}</span
                >
                <p class="result-message">{{ resultado.mensaje }}</p>
                <router-link to="/Grasa-Corporal" class="result-cta">
                  ¿Conoces tu % de grasa corporal? →
                </router-link>
              </div>
            </section>

            <!-- COLUMNA INFORMACIÓN -->
            <aside class="info-col d-none d-lg-flex">
              <h2 class="info-title">¿Qué es el IMC?</h2>
              <p class="info-text">
                El IMC fue adoptado por la OMS como herramienta de tamizaje
                poblacional. Es rápido y accesible, pero no distingue entre masa
                grasa y muscular. Un estudio de Romero-Corral et al. (2008)
                mostró que clasifica incorrectamente la obesidad en un 50% de
                los casos vs. medición directa.
              </p>
              <p class="info-text">
                Complementa siempre el IMC con la medición de circunferencia de
                cintura y porcentaje de grasa corporal para una evaluación más
                completa del riesgo.
              </p>
              <div class="class-table">
                <p class="class-table-title">Clasificación OMS</p>
                <div class="class-row row-low">
                  <span class="class-row-label">⚠ Bajo peso</span>
                  <span>&lt; 18.5</span>
                </div>
                <div class="class-row row-normal">
                  <span class="class-row-label">✓ Normal</span>
                  <span>18.5 – 24.9</span>
                </div>
                <div class="class-row row-warning">
                  <span class="class-row-label">⚠ Sobrepeso</span>
                  <span>25 – 29.9</span>
                </div>
                <div class="class-row row-danger">
                  <span class="class-row-label">! Obesidad</span>
                  <span>≥ 30</span>
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
                  🔬 ¿Qué dice la ciencia sobre el IMC?
                </p>
                <p class="recurso-texto">
                  El IMC fue desarrollado por Adolphe Quetelet en el siglo XIX y
                  adoptado por la OMS como herramienta de tamizaje. Un estudio
                  de Romero-Corral et al. (2008) encontró que clasifica
                  incorrectamente la obesidad en un 50% de los casos comparado
                  con medición directa de grasa corporal.
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/18283284/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Romero-Corral A. et al. (2008). Int J Obes, 32(6), 959–966.
                    — PubMed</a
                  >
                </p>
              </div>
              <div class="recurso-card">
                <p class="recurso-titulo">⚠️ Limitaciones del IMC</p>
                <p class="recurso-texto">
                  El IMC <strong>no es preciso para deportistas</strong> con
                  alta masa muscular ni para personas mayores. La OMS recomienda
                  complementarlo con la circunferencia de cintura y el
                  porcentaje de grasa corporal para una evaluación más completa
                  del riesgo cardiovascular y metabólico.
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"
                    target="_blank"
                    rel="noopener noreferrer"
                    >OMS — Obesity and overweight: Fact Sheet (2024) —
                    who.int</a
                  >
                </p>
              </div>
              <div class="recurso-card">
                <p class="recurso-titulo">❤️ IMC y riesgo cardiovascular</p>
                <p class="recurso-texto">
                  El estudio Framingham Heart Study demostró que cada incremento
                  de 1 punto en el IMC está asociado a un
                  <strong
                    >12% de aumento en el riesgo de cardiopatía
                    coronaria</strong
                  >
                  en hombres y un 8% en mujeres.
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/12196081/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Wilson PWF et al. (2002). Archives of Internal Medicine,
                    162(16), 1867–1872. — PubMed</a
                  >
                </p>
              </div>
              <div class="recurso-card">
                <p class="recurso-titulo">🥗 ¿Cómo mejorar tu IMC?</p>
                <p class="recurso-texto">
                  La evidencia más sólida indica que un
                  <strong>déficit calórico de 300–500 kcal/día</strong>
                  combinado con ejercicio de resistencia produce pérdida de
                  grasa preservando músculo. Perder 0.5–1 kg/semana es
                  considerado seguro según el ACSM.
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://journals.lww.com/acsm-msse/fulltext/2009/07000/appropriate_physical_activity_intervention.26.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    >ACSM Position Stand — Appropriate Physical Activity
                    Intervention Strategies (2009). — ACSM/MSSE</a
                  >
                </p>
              </div>
              <div class="recurso-card recurso-card-wide">
                <p class="recurso-titulo">🎬 Videos</p>
                <ul class="recurso-lista">
                  <li>
                    🎥
                    <a
                      href="https://www.youtube.com/watch?v=z_3S2_41_FE"
                      target="_blank"
                      rel="noopener noreferrer"
                      >"What BMI doesn't tell you about your health" — Vox</a
                    >
                    — Limitaciones científicas del IMC.
                  </li>
                  <li>
                    🎥
                    <a
                      href="https://www.youtube.com/watch?v=-vNVG7XJpVE"
                      target="_blank"
                      rel="noopener noreferrer"
                      >"What is obesity?" — TED-Ed (Mia Nacamulli)</a
                    >
                    — Animación educativa sobre IMC y obesidad.
                  </li>
                  <li>
                    🎥
                    <a
                      href="https://www.youtube.com/watch?v=fZde_YQvc64"
                      target="_blank"
                      rel="noopener noreferrer"
                      >"Defining obesity: how BMI fails us" — TEDx</a
                    >
                    — Perspectiva crítica sobre el IMC.
                  </li>
                </ul>
                <p class="recurso-texto">
                  🌐
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Fuente oficial OMS — Hoja informativa sobre obesidad y
                    sobrepeso</a
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
        color = "#F59E0B";
        mensaje =
          "Tu IMC indica bajo peso. Considera consultar a un médico o nutricionista para alcanzar un peso saludable.";
      } else if (imc < 25) {
        categoria = "Normal";
        color = "#10B981";
        mensaje =
          "¡Excelente! Tu IMC está en el rango normal. Mantén tus hábitos saludables.";
      } else if (imc < 30) {
        categoria = "Sobrepeso";
        color = "#F59E0B";
        mensaje =
          "Tu IMC indica sobrepeso. Una alimentación balanceada y ejercicio regular pueden ayudarte.";
      } else {
        categoria = "Obesidad";
        color = "#F87171";
        mensaje =
          "Tu IMC indica obesidad. Te recomendamos consultar con un profesional de la salud para un plan personalizado.";
      }

      this.resultado = { imc: imcStr, categoria, color, mensaje };
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
</style>
