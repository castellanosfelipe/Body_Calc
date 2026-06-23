<template>
  <header class="app-header">
    <div class="header-inner">
      <router-link to="/" class="header-logo" aria-label="Inicio">
        <span class="logo-icon">💪</span>
        <span class="logo-text">Body<strong>Calc</strong></span>
      </router-link>

      <button
        class="nav-toggle"
        type="button"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen.toString()"
        aria-controls="main-nav"
        aria-label="Menú"
      >
        <span class="toggle-bar"></span>
        <span class="toggle-bar"></span>
        <span class="toggle-bar"></span>
      </button>

      <nav
        id="main-nav"
        :class="['main-nav', { 'is-open': menuOpen }]"
        role="navigation"
      >
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          active-class="nav-link--active"
          @click.native="menuOpen = false"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span class="nav-label">{{ $t(item.labelKey) }}</span>
        </router-link>

        <button
          type="button"
          class="lang-toggle"
          @click="toggleLocale"
          :aria-label="$i18n.locale === 'es' ? 'Switch to English' : 'Cambiar a Español'"
        >
          <span :class="{ 'lang-active': $i18n.locale === 'es' }">ES</span>
          <span class="lang-sep">|</span>
          <span :class="{ 'lang-active': $i18n.locale === 'en' }">EN</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data() {
    return {
      menuOpen: false,
      navItems: [
        { to: "/imc",             icon: "⚖️", labelKey: "nav.imc" },
        { to: "/Grasa-Corporal",  icon: "🔬", labelKey: "nav.grasa" },
        { to: "/Calorias-Diarias",icon: "⚡", labelKey: "nav.calorias" },
        { to: "/Macros-Diarios",  icon: "🥗", labelKey: "nav.macros" },
      ],
    };
  },
  methods: {
    toggleLocale() {
      const next = this.$i18n.locale === "es" ? "en" : "es";
      this.$i18n.locale = next;
      localStorage.setItem("locale", next);
    },
  },
});
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-h);
  background: rgba(15, 22, 35, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
}

.header-inner {
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  padding: 0 var(--s6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--s4);
}

.header-logo {
  display: flex;
  align-items: center;
  gap: var(--s2);
  text-decoration: none;
  color: var(--text-primary);
  flex-shrink: 0;
}

.logo-icon {
  font-size: 1.4rem;
  line-height: 1;
}

.logo-text {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
}

.logo-text strong {
  color: var(--teal);
  font-weight: 800;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: var(--s1);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: var(--s2);
  padding: var(--s2) var(--s3);
  border-radius: var(--r-md);
  color: var(--text-muted);
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: color var(--t-fast), background var(--t-fast);
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
}

.nav-link--active {
  color: var(--teal) !important;
  background: var(--teal-faint) !important;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: var(--s1) var(--s3);
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: var(--r-md);
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  transition: border-color var(--t-fast), color var(--t-fast);
  margin-left: var(--s2);
}

.lang-toggle:hover {
  border-color: var(--teal-border);
  color: var(--text-primary);
}

.lang-active {
  color: var(--teal);
}

.lang-sep {
  opacity: 0.3;
  margin: 0 2px;
}

.nav-icon {
  font-size: 14px;
  line-height: 1;
}

.nav-label {
  display: none;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 6px;
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: var(--r-sm);
  cursor: pointer;
}

.toggle-bar {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text-secondary);
  border-radius: 2px;
  transition: background var(--t-fast);
}

.nav-toggle:hover .toggle-bar {
  background: var(--text-primary);
}

@media (min-width: 640px) {
  .nav-label {
    display: inline;
  }
}

@media (max-width: 767px) {
  .nav-toggle {
    display: flex;
  }

  .main-nav {
    display: none;
    position: absolute;
    top: var(--header-h);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    background: var(--bg-surface);
    border-bottom: 1px solid var(--border-color);
    padding: var(--s3) var(--s4);
    gap: var(--s1);
  }

  .main-nav.is-open {
    display: flex;
  }

  .nav-link {
    padding: var(--s3) var(--s4);
    font-size: 14px;
  }

  .nav-label {
    display: inline;
  }
}
</style>
