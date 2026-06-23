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
                <h1 class="form-title">% de Grasa Corporal</h1>
                <p class="form-subtitle">
                  Método US Navy — Hodgdon & Beckett (1984).
                </p>
              </div>

              <div class="field-group">
                <label class="field-label" for="gc-sexo">Sexo biológico</label>
                <b-form-select
                  id="gc-sexo"
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
                <label class="field-label" for="gc-altura">Altura</label>
                <b-form-input
                  id="gc-altura"
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
                <label class="field-label" for="gc-cuello"
                  >Diámetro del cuello</label
                >
                <b-form-input
                  id="gc-cuello"
                  type="number"
                  v-model.number="Cuello"
                  placeholder="cm"
                  class="field-input"
                  min="20"
                  max="60"
                />
                <span class="field-hint"
                  >Medir en la parte más estrecha del cuello</span
                >
              </div>

              <div class="field-group">
                <label class="field-label" for="gc-abdomen"
                  >Diámetro del abdomen</label
                >
                <b-form-input
                  id="gc-abdomen"
                  type="number"
                  v-model.number="Abdomen"
                  placeholder="cm"
                  class="field-input"
                  min="40"
                  max="200"
                />
                <span class="field-hint"
                  >Hombres: a la altura del ombligo. Mujeres: parte más
                  ancha.</span
                >
              </div>

              <div v-if="Sexo === 'Femenino'" class="field-group">
                <label class="field-label" for="gc-cadera"
                  >Diámetro de la cadera</label
                >
                <b-form-input
                  id="gc-cadera"
                  type="number"
                  v-model.number="Cadera"
                  placeholder="cm"
                  class="field-input"
                  min="40"
                  max="200"
                />
                <span class="field-hint">Parte más ancha de la cadera</span>
              </div>

              <div v-if="error" class="field-error" role="alert">
                ⚠ {{ error }}
              </div>

              <button type="button" class="btn-calcular" @click="calcular">
                Calcular % Grasa
              </button>

              <div
                v-if="resultado !== null"
                class="result-card"
                aria-live="polite"
              >
                <div class="result-value-row">
                  <span class="result-value">{{ resultado.porcentaje }}</span>
                  <span class="result-unit">%</span>
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
                <router-link to="/Calorias-Diarias" class="result-cta">
                  ¿Conoces tus calorías diarias? →
                </router-link>
              </div>
            </section>

            <!-- COLUMNA INFORMACIÓN -->
            <aside class="info-col d-none d-lg-flex">
              <h2 class="info-title">Grasa Corporal</h2>
              <p class="info-text">
                La grasa corporal es la métrica más importante para gestionar la
                composición corporal. A diferencia del IMC, distingue entre masa
                grasa y masa muscular. Un fisicoculturista puede tener sobrepeso
                en IMC pero 5% de grasa corporal.
              </p>
              <p class="info-text">
                El exceso de
                <strong style="color: var(--text-primary)"
                  >grasa visceral</strong
                >
                (alrededor de órganos) está directamente asociado a resistencia
                a la insulina y síndrome metabólico, independientemente del peso
                total.
              </p>

              <div class="class-table">
                <p class="class-table-title">Hombres — ACSM</p>
                <div class="class-row row-danger">
                  <span class="class-row-label">⚠ Muy bajo</span
                  ><span>&lt; 5%</span>
                </div>
                <div class="class-row row-normal">
                  <span class="class-row-label">✓ Atlético</span
                  ><span>5 – 13%</span>
                </div>
                <div class="class-row row-normal">
                  <span class="class-row-label">✓ Saludable</span
                  ><span>14 – 24%</span>
                </div>
                <div class="class-row row-danger">
                  <span class="class-row-label">! Obesidad</span
                  ><span>&gt; 25%</span>
                </div>
              </div>

              <div class="class-table">
                <p class="class-table-title">Mujeres — ACSM</p>
                <div class="class-row row-danger">
                  <span class="class-row-label">⚠ Muy bajo</span
                  ><span>&lt; 12%</span>
                </div>
                <div class="class-row row-normal">
                  <span class="class-row-label">✓ Atlético</span
                  ><span>12 – 22%</span>
                </div>
                <div class="class-row row-normal">
                  <span class="class-row-label">✓ Saludable</span
                  ><span>23 – 31%</span>
                </div>
                <div class="class-row row-danger">
                  <span class="class-row-label">! Obesidad</span
                  ><span>&gt; 32%</span>
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
                  🔬 El Método US Navy: ¿qué tan preciso es?
                </p>
                <p class="recurso-texto">
                  La fórmula US Navy fue desarrollada por Hodgdon y Beckett
                  (1984) para la Armada de los EE.UU. Utiliza medidas de
                  circunferencias corporales y ha demostrado un
                  <strong>margen de error de ±3–4%</strong> respecto a métodos
                  de referencia como la hidrodensitometría (pesaje bajo el
                  agua).
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://scholar.google.com/scholar?q=Hodgdon+Beckett+1984+circumference+body+fat+Navy"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Hodgdon JA & Beckett MB (1984). US Naval Health Research
                    Center Technical Report No. 84-11. — Google Scholar</a
                  >
                </p>
              </div>
              <div class="recurso-card">
                <p class="recurso-titulo">
                  🧬 ¿Por qué importa la grasa corporal?
                </p>
                <p class="recurso-texto">
                  La grasa corporal cumple funciones vitales: protege órganos,
                  regula hormonas y almacena energía. Sin embargo, el exceso de
                  grasa visceral está directamente asociado a resistencia a la
                  insulina y síndrome metabólico. Desprès et al. (2001)
                  demostraron que predice el riesgo cardiovascular mejor que el
                  IMC.
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://www.bmj.com/content/322/7288/716"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Després JP et al. (2001). BMJ, 322(7288), 716–720. — BMJ</a
                  >
                </p>
              </div>
              <div class="recurso-card">
                <p class="recurso-titulo">
                  💪 Grasa corporal y rendimiento deportivo
                </p>
                <p class="recurso-texto">
                  El ACSM establece que los atletas de élite masculinos operan
                  entre 6–13% de grasa corporal, y las atletas femeninas entre
                  12–20%. Por debajo de la grasa esencial (hombres: ~3–5%,
                  mujeres: ~10–12%) el cuerpo compromete funciones hormonales e
                  inmunes.
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://www.acsm.org/education-resources/books"
                    target="_blank"
                    rel="noopener noreferrer"
                    >ACSM's Health-Related Physical Fitness Assessment Manual,
                    5th ed. (2017). — ACSM Store</a
                  >
                </p>
              </div>
              <div class="recurso-card">
                <p class="recurso-titulo">
                  🥩 ¿Cómo reducir la grasa corporal?
                </p>
                <p class="recurso-texto">
                  La evidencia más sólida indica que el entrenamiento de
                  resistencia combinado con un
                  <strong>déficit calórico de 300–500 kcal/día</strong> produce
                  la mayor pérdida de grasa con mínima pérdida de músculo. El
                  consumo de proteína alta (1.6–2.2 g/kg) es clave para
                  preservar la masa muscular.
                </p>
                <p class="recurso-cita">
                  📄
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/16526835/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Stiegler P & Cunliffe A (2006). Sports Med, 36(3), 239–262.
                    — PubMed</a
                  >
                </p>
              </div>
              <div class="recurso-card recurso-card-wide">
                <p class="recurso-titulo">🎬 Videos</p>
                <ul class="recurso-lista">
                  <li>
                    🎥
                    <a
                      href="https://www.youtube.com/watch?v=5K9QhkPww44"
                      target="_blank"
                      rel="noopener noreferrer"
                      >"What Every Body Fat % Actually Looks Like" — Jeff
                      Nippard</a
                    >
                    — Análisis científico de rangos de grasa corporal.
                  </li>
                  <li>
                    🎥
                    <a
                      href="https://www.youtube.com/watch?v=dlaZ6VZGV8o"
                      target="_blank"
                      rel="noopener noreferrer"
                      >"The Scary Truth About Visceral Body Fat" — Institute of
                      Human Anatomy</a
                    >
                    — Anatomía de la grasa visceral y sus riesgos.
                  </li>
                </ul>
                <p class="recurso-texto">
                  🌐
                  <a
                    href="https://www.acsm.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Fuente oficial ACSM — acsm.org</a
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

interface ResultadoGrasa {
  porcentaje: string;
  categoria: string;
  color: string;
  mensaje: string;
}

export default Vue.extend({
  name: "Grasa-Corporal",
  components: { Header },
  data() {
    return {
      Sexo: null as string | null,
      Altura: null as number | null,
      Cuello: null as number | null,
      Abdomen: null as number | null,
      Cadera: null as number | null,
      resultado: null as ResultadoGrasa | null,
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
      if (!this.Altura || !this.Cuello || !this.Abdomen) {
        this.error = "Por favor completa todos los campos requeridos.";
        return;
      }
      if (this.Sexo === "Femenino" && !this.Cadera) {
        this.error =
          "Para mujeres se requiere también el diámetro de la cadera.";
        return;
      }
      if (this.Abdomen <= this.Cuello) {
        this.error = "El abdomen debe ser mayor que el cuello.";
        return;
      }

      let porcentaje: number;

      if (this.Sexo === "Masculino") {
        porcentaje =
          495 /
            (1.0324 -
              0.19077 * Math.log10(this.Abdomen - this.Cuello) +
              0.15456 * Math.log10(this.Altura)) -
          450;
      } else {
        const cadera = this.Cadera as number;
        porcentaje =
          495 /
            (1.29579 -
              0.35004 * Math.log10(this.Abdomen + cadera - this.Cuello) +
              0.221 * Math.log10(this.Altura)) -
          450;
      }

      if (porcentaje < 0 || porcentaje > 70) {
        this.error =
          "El resultado parece inválido. Verifica que las medidas sean correctas.";
        return;
      }

      const porcentajeStr = porcentaje.toFixed(1);
      let categoria: string;
      let color: string;
      let mensaje: string;

      if (this.Sexo === "Masculino") {
        if (porcentaje < 5) {
          categoria = "Muy bajo";
          color = "#F87171";
          mensaje =
            "Tu porcentaje de grasa es muy bajo, lo que puede ser peligroso para la salud. Consulta con un médico.";
        } else if (porcentaje <= 13) {
          categoria = "Atlético";
          color = "#10B981";
          mensaje =
            "Excelente condición física. Estás en el rango atlético, propio de deportistas.";
        } else if (porcentaje <= 24) {
          categoria = "Saludable";
          color = "#10B981";
          mensaje =
            "Tu porcentaje de grasa es saludable. Mantén tus hábitos actuales.";
        } else {
          categoria = "Obesidad";
          color = "#F87171";
          mensaje =
            "Tu porcentaje de grasa indica obesidad. Una dieta balanceada y ejercicio regular pueden ayudarte.";
        }
      } else {
        if (porcentaje < 12) {
          categoria = "Muy bajo";
          color = "#F87171";
          mensaje =
            "Tu porcentaje de grasa es muy bajo para una mujer. Consulta con un médico.";
        } else if (porcentaje <= 22) {
          categoria = "Atlético";
          color = "#10B981";
          mensaje =
            "Excelente condición física. Estás en el rango atlético, propio de deportistas.";
        } else if (porcentaje <= 31) {
          categoria = "Saludable";
          color = "#10B981";
          mensaje =
            "Tu porcentaje de grasa es saludable. Mantén tus hábitos actuales.";
        } else {
          categoria = "Obesidad";
          color = "#F87171";
          mensaje =
            "Tu porcentaje de grasa indica obesidad. Una dieta balanceada y ejercicio regular pueden ayudarte.";
        }
      }

      this.resultado = { porcentaje: porcentajeStr, categoria, color, mensaje };
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
