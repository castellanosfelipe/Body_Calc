<template>
  <Body>
    <Header></Header>
    <form @submit.prevent>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="6">
          <h2>Calcule su % de grasa corporal:</h2>
          <b-form-select
            class="Input2"
            v-model="Sexo"
            :options="[
              { text: 'Sexo biológico', value: null },
              { text: 'Masculino', value: 'Masculino' },
              { text: 'Femenino', value: 'Femenino' },
            ]"
          ></b-form-select>
          <h5 class="Medidas">¿Como obtener las medidas?</h5>
          <b-form-input
            type="number"
            v-model.number="Altura"
            placeholder="Altura (cm)."
            class="Input mx-auto"
            min="100"
            max="250"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>
          <b-form-input
            type="number"
            v-model.number="Cuello"
            placeholder="Diametro del cuello (cm)."
            class="Input mx-auto"
            min="20"
            max="60"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>
          <b-form-input
            type="number"
            v-model.number="Abdomen"
            placeholder="Diametro del abdomen (cm)."
            class="Input mx-auto"
            min="40"
            max="200"
          ></b-form-input>
          <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>

          <div v-if="Sexo === 'Femenino'">
            <b-form-input
              type="number"
              v-model.number="Cadera"
              placeholder="Diametro de la cadera (cm)."
              class="Input mx-auto"
              min="40"
              max="200"
            ></b-form-input>
            <h3 class="Inputt">Ingresar maximo 3 digitos.</h3>
          </div>

          <p v-if="error" class="Error">{{ error }}</p>
          <button type="button" class="Button mx-auto my-5" @click="calcular">
            Calcular
          </button>

          <div v-if="resultado !== null" class="Resultado mx-auto">
            <p class="ResultadoNumero">{{ resultado.porcentaje }}%</p>
            <p class="ResultadoLabel" :style="{ color: resultado.color }">
              {{ resultado.categoria }}
            </p>
            <p class="ResultadoMensaje">{{ resultado.mensaje }}</p>
            <router-link to="/Calorias-Diarias" class="ResultadoLink">
              ¿Conoces tus calorías diarias? Calcularlas aquí →
            </router-link>
          </div>
        </b-col>
        <b-col class="d-none d-md-block m-md-4">
          <h4>GRASA CORPORAL</h4>
          <p>
            El cálculo de grasa corporal es el más importante para gestionar sus
            resultados estéticos. Le informa el porcentaje de grasa de su
            cuerpo.
          </p>
          <p>
            La razón por la que la grasa corporal es la mejor para administrar
            sus resultados es porque muchas veces, puede perder grasa y también
            ganar masa muscular, por lo que su peso no está cambiando demasiado,
            pero eso no significa que no esté evolucionando.
          </p>
          <p>
            Un fisicoculturista, por ejemplo, puede tener más de 100Kg y un 5%
            de grasa corporal. El IMC le informará que es obeso, pero es pesado
            y no obeso.
          </p>
          <p>
            Recuerde, un porcentaje muy bajo o muy alto de grasa corporal
            durante mucho tiempo no es saludable. Mantenga siempre el
            equilibrio.
          </p>
          <div class="TablaGrasa">
            <p class="TablaTitle">Clasificación % Grasa — Hombres (ACSM)</p>
            <div class="TablaFila muyBajo">Muy bajo — &lt; 5%</div>
            <div class="TablaFila atletico">Atlético — 5% a 13%</div>
            <div class="TablaFila saludable">Saludable — 14% a 24%</div>
            <div class="TablaFila obesidadG">Obesidad — &gt; 25%</div>
          </div>
          <div class="TablaGrasa">
            <p class="TablaTitle">Clasificación % Grasa — Mujeres (ACSM)</p>
            <div class="TablaFila muyBajo">Muy bajo — &lt; 12%</div>
            <div class="TablaFila atletico">Atlético — 12% a 22%</div>
            <div class="TablaFila saludable">Saludable — 23% a 31%</div>
            <div class="TablaFila obesidadG">Obesidad — &gt; 32%</div>
          </div>
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
              🔬 El Método US Navy: ¿qué tan preciso es?
            </p>
            <p class="RecursoTexto">
              La fórmula US Navy fue desarrollada por Hodgdon y Beckett (1984)
              para la Armada de los EE.UU. Utiliza medidas de circunferencias
              corporales y ha demostrado un
              <strong>margen de error de ±3–4%</strong> respecto a métodos de
              referencia como la hidrodensitometría (pesaje bajo el agua). Es
              una de las fórmulas de campo más aceptadas científicamente por su
              balance entre precisión y accesibilidad.
            </p>
            <p class="RecursoCita">
              📄 Hodgdon JA & Beckett MB (1984). US Naval Health Research Center
              Technical Report.
            </p>
          </div>

          <div class="RecursoCard">
            <p class="RecursoTitulo">🧬 ¿Por qué importa la grasa corporal?</p>
            <p class="RecursoTexto">
              La grasa corporal cumple funciones vitales: protege órganos,
              regula hormonas y almacena energía. Sin embargo, el exceso de
              <strong>grasa visceral</strong>
              (alrededor de los órganos) está directamente asociado a
              resistencia a la insulina, síndrome metabólico y enfermedad
              cardiovascular, independientemente del peso total. Un estudio de
              Despres et al. (2001) demostró que la grasa visceral predice el
              riesgo cardiovascular mejor que el IMC.
            </p>
            <p class="RecursoCita">
              📄 Després JP et al. (2001). BMJ, 322(7300), 716–720.
            </p>
          </div>

          <div class="RecursoCard">
            <p class="RecursoTitulo">
              💪 Grasa corporal y rendimiento deportivo
            </p>
            <p class="RecursoTexto">
              El ACSM (American College of Sports Medicine) establece que los
              atletas de élite masculinos suelen operar entre 6–13% de grasa
              corporal, y las atletas femeninas entre 12–20%. Por debajo del
              <strong>grasa esencial</strong> (hombres: ~3–5%, mujeres: ~10–12%)
              el cuerpo comienza a comprometer funciones hormonales e inmunes.
              No busques números extremadamente bajos sin supervisión médica.
            </p>
            <p class="RecursoCita">
              📄 ACSM's Health-Related Physical Fitness Assessment Manual, 5th
              ed. (2017).
            </p>
          </div>

          <div class="RecursoCard">
            <p class="RecursoTitulo">🥩 ¿Cómo reducir la grasa corporal?</p>
            <p class="RecursoTexto">
              La evidencia más sólida indica que el entrenamiento de resistencia
              (pesas) combinado con ejercicio cardiovascular y un
              <strong>déficit calórico de 300–500 kcal/día</strong>
              produce la mayor pérdida de grasa con mínima pérdida de músculo.
              El consumo de proteína alta (1.6–2.2 g/kg de peso) es clave para
              preservar la masa muscular durante la pérdida de grasa.
            </p>
            <p class="RecursoCita">
              📄 Stiegler P & Cunliffe A (2006). Sports Med, 36(3), 239–262.
            </p>
          </div>

          <div class="RecursoCard RecursoCardWide">
            <p class="RecursoTitulo">
              🎬 Videos recomendados (buscar en YouTube)
            </p>
            <ul class="RecursoLista">
              <li>
                🔎 <em>"Body Fat Percentage Explained" — Jeff Nippard</em> —
                Análisis científico de rangos de grasa corporal.
              </li>
              <li>
                🔎
                <em
                  >"How to measure body fat at home" — Renaissance
                  Periodization</em
                >
                — Métodos prácticos y su precisión.
              </li>
              <li>
                🔎
                <em
                  >"Visceral fat vs subcutaneous fat" — Institute of Human
                  Anatomy</em
                >
                — Anatomía de la grasa corporal.
              </li>
              <li>
                🔎
                <em
                  >"The truth about body fat percentage" — Stronger By
                  Science</em
                >
                — Desmitificando porcentajes populares.
              </li>
            </ul>
            <p class="RecursoTexto">
              🌐 Fuente oficial ACSM: <strong>acsm.org</strong> — American
              College of Sports Medicine.
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
          color = "#e74c3c";
          mensaje =
            "Tu porcentaje de grasa es muy bajo, lo que puede ser peligroso para la salud. Consulta con un médico.";
        } else if (porcentaje <= 13) {
          categoria = "Atlético";
          color = "#37a794";
          mensaje =
            "Excelente condición física. Estás en el rango atlético, propio de deportistas.";
        } else if (porcentaje <= 24) {
          categoria = "Saludable";
          color = "#37a794";
          mensaje =
            "Tu porcentaje de grasa es saludable. Mantén tus hábitos actuales.";
        } else {
          categoria = "Obesidad";
          color = "#e74c3c";
          mensaje =
            "Tu porcentaje de grasa indica obesidad. Una dieta balanceada y ejercicio regular pueden ayudarte.";
        }
      } else {
        if (porcentaje < 12) {
          categoria = "Muy bajo";
          color = "#e74c3c";
          mensaje =
            "Tu porcentaje de grasa es muy bajo para una mujer. Consulta con un médico.";
        } else if (porcentaje <= 22) {
          categoria = "Atlético";
          color = "#37a794";
          mensaje =
            "Excelente condición física. Estás en el rango atlético, propio de deportistas.";
        } else if (porcentaje <= 31) {
          categoria = "Saludable";
          color = "#37a794";
          mensaje =
            "Tu porcentaje de grasa es saludable. Mantén tus hábitos actuales.";
        } else {
          categoria = "Obesidad";
          color = "#e74c3c";
          mensaje =
            "Tu porcentaje de grasa indica obesidad. Una dieta balanceada y ejercicio regular pueden ayudarte.";
        }
      }

      this.resultado = { porcentaje: porcentajeStr, categoria, color, mensaje };
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
  text-align: center;
}
h2 {
  color: #37a794;
  text-align: center;
  font-size: 25px;
  transform: translateY(20vh);
}
.Input {
  display: flex;
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
.Button {
  transform: translateY(15vh);
  border-radius: 10px;
  font-weight: 700;
  padding: 10px;
  color: rgba(255, 255, 255, 0.986);
  font-size: 20px;
  border-width: 3px;
  border-color: #37a794;
  background: Transparent;
  cursor: pointer;
  display: block;
}
.Button:hover {
  background: #37a794;
}
.Resultado {
  transform: translateY(15vh);
  margin-top: 1em;
  background: rgba(55, 167, 148, 0.1);
  border: 2px solid #37a794;
  border-radius: 12px;
  padding: 1.2em;
  max-width: 80%;
  text-align: center;
}
.ResultadoNumero {
  color: #37a794 !important;
  font-size: 3.5em !important;
  font-weight: 700;
  margin-bottom: 0;
  transform: none !important;
}
.ResultadoLabel {
  font-size: 1.4em !important;
  font-weight: 600;
  margin-bottom: 0.5em;
  transform: none !important;
}
.ResultadoMensaje {
  color: whitesmoke !important;
  font-size: 0.95em !important;
  margin-bottom: 0.8em;
  transform: none !important;
  text-align: center !important;
}
.ResultadoLink {
  color: #37a794;
  font-size: 0.9em;
  text-decoration: underline;
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
.TablaGrasa {
  transform: translateY(30vh);
  margin-right: 3em;
  margin-top: 1em;
  border-radius: 10px;
  overflow: hidden;
}
.TablaTitle {
  color: #37a794 !important;
  font-weight: 700;
  font-size: 0.95em !important;
  transform: none !important;
  margin-bottom: 4px;
}
.TablaFila {
  padding: 5px 12px;
  font-size: 0.85em;
  font-weight: 600;
  color: #2d313d;
}
.muyBajo {
  background: #e74c3c;
  color: white;
}
.atletico {
  background: #37a794;
  color: white;
}
.saludable {
  background: #2ecc71;
  color: #2d313d;
}
.obesidadG {
  background: #e74c3c;
  color: white;
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
  margin-bottom: 0;
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
