import Vue from "vue";
import VueI18n from "vue-i18n";
import es from "./locales/es";
import en from "./locales/en";

Vue.use(VueI18n);

const savedLocale = localStorage.getItem("locale") || "es";

export default new VueI18n({
  locale: savedLocale,
  fallbackLocale: "es",
  messages: { es, en },
});
