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
                <span class="form-eyebrow">{{ $t("common.eyebrow") }}</span>
                <h1 class="form-title">{{ $t("grasa.titulo") }}</h1>
                <p class="form-subtitle">
                  {{ $t("grasa.subtitulo") }}
                </p>
              </div>

              <div class="field-group">
                <label class="field-label" for="gc-sexo">{{
                  $t("common.sexo")
                }}</label>
                <b-form-select
                  id="gc-sexo"
                  class="field-input"
                  v-model="Sexo"
                  :options="sexoOpts"
                />
              </div>

              <div class="field-group">
                <label class="field-label" for="gc-altura">{{
                  $t("common.altura")
                }}</label>
                <b-form-input
                  id="gc-altura"
                  type="number"
                  v-model.number="Altura"
                  placeholder="cm"
                  class="field-input"
                  min="100"
                  max="250"
                />
                <span class="field-hint">{{ $t("common.altura_hint") }}</span>
              </div>

              <div class="field-group">
                <label class="field-label" for="gc-cuello">{{
                  $t("grasa.cuello")
                }}</label>
                <b-form-input
                  id="gc-cuello"
                  type="number"
                  v-model.number="Cuello"
                  placeholder="cm"
                  class="field-input"
                  min="20"
                  max="60"
                />
                <span class="field-hint">{{ $t("grasa.cuello_hint") }}</span>
              </div>

              <div class="field-group">
                <label class="field-label" for="gc-abdomen">{{
                  $t("grasa.abdomen")
                }}</label>
                <b-form-input
                  id="gc-abdomen"
                  type="number"
                  v-model.number="Abdomen"
                  placeholder="cm"
                  class="field-input"
                  min="40"
                  max="200"
                />
                <span class="field-hint">{{ $t("grasa.abdomen_hint") }}</span>
              </div>

              <div v-if="Sexo === 'Femenino'" class="field-group">
                <label class="field-label" for="gc-cadera">{{
                  $t("grasa.cadera")
                }}</label>
                <b-form-input
                  id="gc-cadera"
                  type="number"
                  v-model.number="Cadera"
                  placeholder="cm"
                  class="field-input"
                  min="40"
                  max="200"
                />
                <span class="field-hint">{{ $t("grasa.cadera_hint") }}</span>
              </div>

              <div v-if="error" class="field-error" role="alert">
                ⚠ {{ error }}
              </div>

              <button type="button" class="btn-calcular" @click="calcular">
                {{ $t("grasa.btn") }}
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
                  {{ $t("grasa.cta") }}
                </router-link>
              </div>
            </section>

            <!-- COLUMNA INFORMACIÓN -->
            <aside class="info-col d-none d-lg-flex">
              <h2 class="info-title">{{ $t("grasa.info_titulo") }}</h2>
              <p class="info-text">
                {{ $t("grasa.info_text1") }}
              </p>
              <p class="info-text" v-html="$t('grasa.info_text2')"></p>

              <div class="class-table">
                <p class="class-table-title">
                  {{ $t("common.tabla_hombres") }}
                </p>
                <div class="class-row row-danger">
                  <span class="class-row-label"
                    >⚠ {{ $t("grasa.muy_bajo") }}</span
                  ><span>&lt; 5%</span>
                </div>
                <div class="class-row row-normal">
                  <span class="class-row-label"
                    >✓ {{ $t("grasa.atletico") }}</span
                  ><span>5 – 13%</span>
                </div>
                <div class="class-row row-normal">
                  <span class="class-row-label"
                    >✓ {{ $t("grasa.saludable") }}</span
                  ><span>14 – 24%</span>
                </div>
                <div class="class-row row-danger">
                  <span class="class-row-label"
                    >! {{ $t("grasa.obesidad") }}</span
                  ><span>&gt; 25%</span>
                </div>
              </div>

              <div class="class-table">
                <p class="class-table-title">
                  {{ $t("common.tabla_mujeres") }}
                </p>
                <div class="class-row row-danger">
                  <span class="class-row-label"
                    >⚠ {{ $t("grasa.muy_bajo") }}</span
                  ><span>&lt; 12%</span>
                </div>
                <div class="class-row row-normal">
                  <span class="class-row-label"
                    >✓ {{ $t("grasa.atletico") }}</span
                  ><span>12 – 22%</span>
                </div>
                <div class="class-row row-normal">
                  <span class="class-row-label"
                    >✓ {{ $t("grasa.saludable") }}</span
                  ><span>23 – 31%</span>
                </div>
                <div class="class-row row-danger">
                  <span class="class-row-label"
                    >! {{ $t("grasa.obesidad") }}</span
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
            <span>{{ $t("common.recursos") }}</span>
            <span>{{ mostrarRecursos ? "▲" : "▼" }}</span>
          </button>
          <div v-if="mostrarRecursos" class="recursos-panel">
            <div class="recursos-grid">
              <div class="recurso-card">
                <p class="recurso-titulo">{{ $t("grasa.rec1_titulo") }}</p>
                <p class="recurso-texto" v-html="$t('grasa.rec1_texto')"></p>
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
                <p class="recurso-titulo">{{ $t("grasa.rec2_titulo") }}</p>
                <p class="recurso-texto" v-html="$t('grasa.rec2_texto')"></p>
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
                <p class="recurso-titulo">{{ $t("grasa.rec3_titulo") }}</p>
                <p class="recurso-texto" v-html="$t('grasa.rec3_texto')"></p>
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
                <p class="recurso-titulo">{{ $t("grasa.rec4_titulo") }}</p>
                <p class="recurso-texto" v-html="$t('grasa.rec4_texto')"></p>
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
                <p class="recurso-titulo">{{ $t("common.videos") }}</p>
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
                    — {{ $t("grasa.rec_vid1") }}
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
                    — {{ $t("grasa.rec_vid2") }}
                  </li>
                </ul>
                <p class="recurso-texto">
                  🌐
                  <a
                    href="https://www.acsm.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ $t("grasa.rec_fuente") }}</a
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
  computed: {
    sexoOpts(): Array<{ text: string; value: string | null }> {
      return [
        { text: this.$t("common.seleccionar"), value: null },
        { text: this.$t("common.masculino"), value: "Masculino" },
        { text: this.$t("common.femenino"), value: "Femenino" },
      ];
    },
  },
  created() {
    const p = this.$store.state.profile;
    if (p.sexo) this.Sexo = p.sexo;
    if (p.altura) this.Altura = p.altura;
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
        this.error = this.$t("grasa.error_invalido") as string;
        return;
      }

      const porcentajeStr = porcentaje.toFixed(1);
      let categoria: string;
      let color: string;
      let mensaje: string;

      if (this.Sexo === "Masculino") {
        if (porcentaje < 5) {
          categoria = this.$t("grasa.muy_bajo") as string;
          color = "#F87171";
          mensaje = this.$t("grasa.msg_muy_bajo_h") as string;
        } else if (porcentaje <= 13) {
          categoria = this.$t("grasa.atletico") as string;
          color = "#10B981";
          mensaje = this.$t("grasa.msg_atletico") as string;
        } else if (porcentaje <= 24) {
          categoria = this.$t("grasa.saludable") as string;
          color = "#10B981";
          mensaje = this.$t("grasa.msg_saludable") as string;
        } else {
          categoria = this.$t("grasa.obesidad") as string;
          color = "#F87171";
          mensaje = this.$t("grasa.msg_obesidad") as string;
        }
      } else {
        if (porcentaje < 12) {
          categoria = this.$t("grasa.muy_bajo") as string;
          color = "#F87171";
          mensaje = this.$t("grasa.msg_muy_bajo_f") as string;
        } else if (porcentaje <= 22) {
          categoria = this.$t("grasa.atletico") as string;
          color = "#10B981";
          mensaje = this.$t("grasa.msg_atletico") as string;
        } else if (porcentaje <= 31) {
          categoria = this.$t("grasa.saludable") as string;
          color = "#10B981";
          mensaje = this.$t("grasa.msg_saludable") as string;
        } else {
          categoria = this.$t("grasa.obesidad") as string;
          color = "#F87171";
          mensaje = this.$t("grasa.msg_obesidad") as string;
        }
      }

      this.resultado = { porcentaje: porcentajeStr, categoria, color, mensaje };
      this.$store.commit("setProfile", {
        sexo: this.Sexo,
        altura: this.Altura,
      });
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
