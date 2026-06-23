<template>
  <div class="home">
    <Header />

    <div class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-eyebrow">Plataforma de salud corporal</p>
        <h1 class="hero-title">
          Conoce tu<br />
          <span class="hero-accent">cuerpo.</span>
        </h1>
        <p class="hero-subtitle">
          Calculadoras científicas para medir, entender y mejorar tu composición
          corporal.
        </p>
        <p class="hero-quote">"Lo que se mide, se controla."</p>
      </div>
    </div>

    <main class="home-content">
      <div class="section-header">
        <h2 class="section-title">Calculadoras</h2>
        <p class="section-subtitle">
          Selecciona la métrica que quieres calcular
        </p>
      </div>

      <div class="calc-grid">
        <router-link
          v-for="calc in calculadoras"
          :key="calc.to"
          :to="calc.to"
          class="calc-card"
        >
          <div class="calc-card-icon">{{ calc.icon }}</div>
          <div class="calc-card-body">
            <h3 class="calc-card-title">{{ calc.title }}</h3>
            <p class="calc-card-desc">{{ calc.desc }}</p>
          </div>
          <span class="calc-card-arrow">→</span>
        </router-link>
      </div>

      <div class="steps-row">
        <div class="step" v-for="(step, i) in pasos" :key="i">
          <span class="step-num">{{ i + 1 }}</span>
          <p class="step-text">{{ step }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/Header.vue";

export default Vue.extend({
  name: "Home",
  components: { Header },
  data() {
    return {
      calculadoras: [
        {
          to: "/imc",
          icon: "⚖️",
          title: "Índice de Masa Corporal",
          desc: "Evalúa tu peso en relación a tu altura según los criterios de la OMS.",
        },
        {
          to: "/Grasa-Corporal",
          icon: "🔬",
          title: "Grasa Corporal",
          desc: "Calcula tu % de grasa con el Método US Navy (Hodgdon & Beckett).",
        },
        {
          to: "/Calorias-Diarias",
          icon: "⚡",
          title: "Calorías Diarias",
          desc: "Estima tu gasto calórico total (TDEE) con la ecuación Mifflin-St Jeor.",
        },
        {
          to: "/Macros-Diarios",
          icon: "🥗",
          title: "Macros Diarios",
          desc: "Distribuye proteínas, grasas y carbohidratos según tu meta corporal.",
        },
      ],
      pasos: [
        "Calcula tu IMC para una visión rápida de tu estado general.",
        "Mide tu % de grasa para evaluar tu composición real.",
        "Determina tus calorías diarias según tu nivel de actividad.",
        "Distribuye tus macros para alcanzar tu objetivo.",
      ],
    };
  },
});
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: var(--bg-page);
}

/* HERO */
.hero {
  position: relative;
  height: 60vh;
  min-height: 420px;
  background-image: url(../assets/x.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding-top: var(--header-h);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(15, 22, 35, 0.55) 0%,
    rgba(15, 22, 35, 0.85) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: var(--s12) var(--s6);
}

.hero-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: var(--s3);
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: var(--s4);
}

.hero-accent {
  color: var(--teal);
}

.hero-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 480px;
  line-height: 1.6;
  margin-bottom: var(--s4);
}

.hero-quote {
  font-size: 13px;
  color: var(--text-muted);
  font-style: italic;
}

/* CONTENT */
.home-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--s12) var(--s6);
}

.section-header {
  margin-bottom: var(--s8);
}

.section-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  margin-bottom: var(--s2);
}

.section-subtitle {
  font-size: 14px;
  color: var(--text-muted);
}

/* CALC CARDS */
.calc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--s4);
  margin-bottom: var(--s12);
}

.calc-card {
  display: flex;
  align-items: flex-start;
  gap: var(--s4);
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--r-lg);
  padding: var(--s6);
  text-decoration: none;
  color: inherit;
  transition: border-color var(--t-base), box-shadow var(--t-base),
    transform var(--t-base);
  cursor: pointer;
}

.calc-card:hover {
  border-color: var(--teal-border);
  box-shadow: 0 4px 24px rgba(13, 155, 136, 0.12);
  transform: translateY(-2px);
  text-decoration: none;
  color: inherit;
}

.calc-card-icon {
  font-size: 1.75rem;
  line-height: 1;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--teal-faint);
  border-radius: var(--r-md);
}

.calc-card-body {
  flex: 1;
  min-width: 0;
}

.calc-card-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--s2);
  line-height: 1.3;
}

.calc-card-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

.calc-card-arrow {
  color: var(--teal);
  font-size: 1.1rem;
  flex-shrink: 0;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity var(--t-base), transform var(--t-base);
}

.calc-card:hover .calc-card-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* STEPS */
.steps-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--s4);
  padding: var(--s8);
  background: var(--bg-surface);
  border-radius: var(--r-lg);
  border: 1px solid var(--border-color);
}

.step {
  display: flex;
  gap: var(--s3);
  align-items: flex-start;
}

.step-num {
  width: 24px;
  height: 24px;
  border-radius: var(--r-full);
  background: var(--teal-faint);
  border: 1px solid var(--teal-border);
  color: var(--teal);
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-text {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
}
</style>
