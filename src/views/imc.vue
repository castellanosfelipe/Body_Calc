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
                <span class="form-eyebrow">{{ $t('common.eyebrow') }}</span>
                <h1 class="form-title">{{ $t('imc.titulo') }}</h1>
                <p class="form-subtitle">
                  {{ $t('imc.subtitulo') }}
                </p>
              </div>

              <div class="field-group">
                <label class="field-label" for="imc-altura">{{ $t('common.altura') }}</label>
                <b-form-input
                  id="imc-altura"
                  type="number"
                  v-model.number="Altura"
                  placeholder="cm"
                  class="field-input"
                  min="100"
                  max="250"
                />
                <span class="field-hint">{{ $t('common.altura_hint') }}</span>
              </div>

              <div class="field-group">
                <label class="field-label" for="imc-peso">{{ $t('common.peso') }}</label>
                <b-form-input
                  id="imc-peso"
                  type="number"
                  v-model.number="Peso"
                  placeholder="kg"
                  class="field-input"
                  min="1"
                  max="300"
                />
                <span class="field-hint">{{ $t('common.peso_hint') }}</span>
              </div>

              <div v-if="error" class="field-error" role="alert">
                ⚠ {{ error }}
              </div>

              <button type="button" class="btn-calcular" @click="calcular">
                {{ $t('imc.btn') }}
              </button>

              <div
                v-if="resultado !== null"
                class="result-card"
                aria-live="polite"
              >
                <div class="result-value-row">
                  <span class="result-value">{{ resultado.imc }}</span>
                  <span class="result-unit">{{ $t('imc.unit') }}</span>
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
                  {{ $t('imc.cta') }}
                </router-link>
              </div>
            </section>

            <!-- COLUMNA INFORMACIÓN -->
            <aside class="info-col d-none d-lg-flex">
              <h2 class="info-title">{{ $t('imc.info_titulo') }}</h2>
              <p class="info-text">
                {{ $t('imc.info_text1') }}</p>
              <p class="info-text">
                {{ $t('imc.info_text2') }}</p>
              <div class="class-table">
                <p class="class-table-title">{{ $t('imc.tabla_titulo') }}</p>
                <div class="class-row row-low">
                  <span class="class-row-label">⚠ {{ $t('imc.bajo_peso') }}</span>
                  <span>&lt; 18.5</span>
                </div>
                <div class="class-row row-normal">
                  <span class="class-row-label">✓ {{ $t('imc.normal') }}</span>
                  <span>18.5 – 24.9</span>
                </div>
                <div class="class-row row-warning">
                  <span class="class-row-label">⚠ {{ $t('imc.sobrepeso') }}</span>
                  <span>25 – 29.9</span>
                </div>
                <div class="class-row row-danger">
                  <span class="class-row-label">! {{ $t('imc.obesidad') }}</span>
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
            <span>{{ $t('common.recursos') }}</span>
            <span>{{ mostrarRecursos ? "▲" : "▼" }}</span>
          </button>
          <div v-if="mostrarRecursos" class="recursos-panel">
            <div class="recursos-grid">
              <div class="recurso-card">
                <p class="recurso-titulo">
                  {{ $t('imc.rec1_titulo') }}
                </p>
                <p class="recurso-texto" v-html="$t('imc.rec1_texto')"></p>
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
                <p class="recurso-titulo">{{ $t('imc.rec2_titulo') }}</p>
                <p class="recurso-texto" v-html="$t('imc.rec2_texto')"></p>
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
                <p class="recurso-titulo">{{ $t('imc.rec3_titulo') }}</p>
                <p class="recurso-texto" v-html="$t('imc.rec3_texto')"></p>
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
                <p class="recurso-titulo">{{ $t('imc.rec4_titulo') }}</p>
                <p class="recurso-texto" v-html="$t('imc.rec4_texto')"></p>
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
                <p class="recurso-titulo">{{ $t('common.videos') }}</p>
                <ul class="recurso-lista">
                  <li>
                    🎥
                    <a
                      href="https://www.youtube.com/watch?v=z_3S2_41_FE"
                      target="_blank"
                      rel="noopener noreferrer"
                      >"What BMI doesn't tell you about your health" — Vox</a
                    >
                    — {{ $t('imc.rec_vid1') }}
                  </li>
                  <li>
                    🎥
                    <a
                      href="https://www.youtube.com/watch?v=-vNVG7XJpVE"
                      target="_blank"
                      rel="noopener noreferrer"
                      >"What is obesity?" — TED-Ed (Mia Nacamulli)</a
                    >
                    — {{ $t('imc.rec_vid2') }}
                  </li>
                  <li>
                    🎥
                    <a
                      href="https://www.youtube.com/watch?v=fZde_YQvc64"
                      target="_blank"
                      rel="noopener noreferrer"
                      >"Defining obesity: how BMI fails us" — TEDx</a
                    >
                    — {{ $t('imc.rec_vid3') }}
                  </li>
                </ul>
                <p class="recurso-texto">
                  🌐
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ $t('imc.rec_fuente') }}</a
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
  created() {
    const p = this.$store.state.profile;
    if (p.altura) this.Altura = p.altura;
    if (p.peso) this.Peso = p.peso;
  },
  methods: {
    calcular() {
      this.error = "";
      this.resultado = null;

      if (!this.Altura || !this.Peso) {
        this.error = this.$t('imc.error_campos') as string;
        return;
      }
      if (this.Altura < 100 || this.Altura > 250) {
        this.error = this.$t('imc.error_altura') as string;
        return;
      }
      if (this.Peso < 1 || this.Peso > 300) {
        this.error = this.$t('imc.error_peso') as string;
        return;
      }

      const alturaM = this.Altura / 100;
      const imc = this.Peso / (alturaM * alturaM);
      const imcStr = imc.toFixed(1);

      let categoria: string;
      let color: string;
      let mensaje: string;

      if (imc < 18.5) {
        categoria = this.$t('imc.bajo_peso') as string;
        color = "#F59E0B";
        mensaje =
          this.$t('imc.msg_bajo_peso') as string;
      } else if (imc < 25) {
        categoria = this.$t('imc.normal') as string;
        color = "#10B981";
        mensaje =
          this.$t('imc.msg_normal') as string;
      } else if (imc < 30) {
        categoria = this.$t('imc.sobrepeso') as string;
        color = "#F59E0B";
        mensaje =
          this.$t('imc.msg_sobrepeso') as string;
      } else {
        categoria = this.$t('imc.obesidad') as string;
        color = "#F87171";
        mensaje =
          this.$t('imc.msg_obesidad') as string;
      }

      this.resultado = { imc: imcStr, categoria, color, mensaje };
      this.$store.commit("setProfile", {
        altura: this.Altura,
        peso: this.Peso,
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
