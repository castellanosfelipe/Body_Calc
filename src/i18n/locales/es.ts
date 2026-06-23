export default {
  nav: {
    imc: "IMC",
    grasa: "Grasa Corporal",
    calorias: "Calorías",
    macros: "Macros",
  },
  home: {
    eyebrow: "Plataforma de salud corporal",
    title_bold: "cuerpo",
    subtitle:
      "Calculadoras científicas para medir, entender y mejorar tu composición corporal.",
    quote: '"Lo que se mide, se controla."',
    section_title: "Calculadoras",
    section_subtitle: "Selecciona la métrica que quieres calcular",
    step1: "Calcula tu IMC para una visión rápida de tu estado general.",
    step2: "Mide tu % de grasa para evaluar tu composición real.",
    step3: "Determina tus calorías diarias según tu nivel de actividad.",
    step4: "Distribuye tus macros para alcanzar tu objetivo.",
    imc_title: "Índice de Masa Corporal",
    imc_desc:
      "Evalúa tu peso en relación a tu altura según los criterios de la OMS.",
    grasa_title: "Grasa Corporal",
    grasa_desc:
      "Calcula tu % de grasa con el Método US Navy (Hodgdon & Beckett).",
    calorias_title: "Calorías Diarias",
    calorias_desc:
      "Estima tu gasto calórico total (TDEE) con la ecuación Mifflin-St Jeor.",
    macros_title: "Macros Diarios",
    macros_desc:
      "Distribuye proteínas, grasas y carbohidratos según tu meta corporal.",
  },
  common: {
    eyebrow: "Calculadora",
    sexo: "Sexo biológico",
    masculino: "Masculino",
    femenino: "Femenino",
    seleccionar: "Seleccionar...",
    altura: "Altura",
    peso: "Peso",
    edad: "Edad",
    altura_hint: "Entre 100 y 250 cm",
    peso_hint: "Entre 1 y 300 kg",
    edad_hint: "Entre 10 y 120 años",
    recursos: "📚 Recursos Científicos",
    videos: "🎬 Videos",
    tabla_hombres: "Hombres — ACSM",
    tabla_mujeres: "Mujeres — ACSM",
  },
  imc: {
    titulo: "Índice de Masa Corporal",
    subtitulo: "Basado en la clasificación de la OMS.",
    btn: "Calcular IMC",
    unit: "kg/m²",
    cta: "¿Conoces tu % de grasa corporal? →",
    error_campos: "Por favor ingresa altura y peso.",
    error_altura: "La altura debe estar entre 100 y 250 cm.",
    error_peso: "El peso debe estar entre 1 y 300 kg.",
    info_titulo: "¿Qué es el IMC?",
    info_text1:
      "El IMC fue adoptado por la OMS como herramienta de tamizaje poblacional. Es rápido y accesible, pero no distingue entre masa grasa y muscular. Un estudio de Romero-Corral et al. (2008) mostró que clasifica incorrectamente la obesidad en un 50% de los casos vs. medición directa.",
    info_text2:
      "Complementa siempre el IMC con la medición de circunferencia de cintura y porcentaje de grasa corporal para una evaluación más completa del riesgo.",
    tabla_titulo: "Clasificación OMS",
    bajo_peso: "Bajo peso",
    normal: "Normal",
    sobrepeso: "Sobrepeso",
    obesidad: "Obesidad",
    msg_bajo_peso:
      "Tu IMC indica bajo peso. Considera consultar a un médico o nutricionista para alcanzar un peso saludable.",
    msg_normal:
      "¡Excelente! Tu IMC está en el rango normal. Mantén tus hábitos saludables.",
    msg_sobrepeso:
      "Tu IMC indica sobrepeso. Una alimentación balanceada y ejercicio regular pueden ayudarte.",
    msg_obesidad:
      "Tu IMC indica obesidad. Te recomendamos consultar con un profesional de la salud para un plan personalizado.",
    rec1_titulo: "🔬 ¿Qué dice la ciencia sobre el IMC?",
    rec1_texto:
      "El IMC fue desarrollado por Adolphe Quetelet en el siglo XIX y adoptado por la OMS como herramienta de tamizaje. Un estudio de Romero-Corral et al. (2008) encontró que clasifica incorrectamente la obesidad en un <strong>50% de los casos</strong> comparado con medición directa de grasa corporal.",
    rec2_titulo: "⚠️ Limitaciones del IMC",
    rec2_texto:
      "El IMC <strong>no es preciso para deportistas</strong> con alta masa muscular ni para personas mayores. La OMS recomienda complementarlo con la circunferencia de cintura y el porcentaje de grasa corporal para una evaluación más completa del riesgo cardiovascular y metabólico.",
    rec3_titulo: "❤️ IMC y riesgo cardiovascular",
    rec3_texto:
      "El estudio Framingham Heart Study demostró que cada incremento de 1 punto en el IMC está asociado a un <strong>12% de aumento en el riesgo de cardiopatía coronaria</strong> en hombres y un 8% en mujeres.",
    rec4_titulo: "🥗 ¿Cómo mejorar tu IMC?",
    rec4_texto:
      "La evidencia más sólida indica que un <strong>déficit calórico de 300–500 kcal/día</strong> combinado con ejercicio de resistencia produce pérdida de grasa preservando músculo. Perder 0.5–1 kg/semana es considerado seguro según el ACSM.",
    rec_vid1: "Limitaciones científicas del IMC.",
    rec_vid2: "Animación educativa sobre IMC y obesidad.",
    rec_vid3: "Perspectiva crítica sobre el IMC.",
    rec_fuente:
      "Fuente oficial OMS — Hoja informativa sobre obesidad y sobrepeso",
  },
  grasa: {
    titulo: "% de Grasa Corporal",
    subtitulo: "Método US Navy — Hodgdon & Beckett (1984).",
    cuello: "Diámetro del cuello",
    cuello_hint: "Medir en la parte más estrecha del cuello",
    abdomen: "Diámetro del abdomen",
    abdomen_hint: "Hombres: a la altura del ombligo. Mujeres: parte más ancha.",
    cadera: "Diámetro de la cadera",
    cadera_hint: "Parte más ancha de la cadera",
    btn: "Calcular % Grasa",
    cta: "¿Conoces tus calorías diarias? →",
    error_invalido:
      "El resultado parece inválido. Verifica que las medidas sean correctas.",
    info_titulo: "Grasa Corporal",
    info_text1:
      "La grasa corporal es la métrica más importante para gestionar la composición corporal. A diferencia del IMC, distingue entre masa grasa y masa muscular. Un fisicoculturista puede tener sobrepeso en IMC pero 5% de grasa corporal.",
    info_text2:
      'El exceso de <strong style="color: var(--text-primary)">grasa visceral</strong> (alrededor de órganos) está directamente asociado a resistencia a la insulina y síndrome metabólico, independientemente del peso total.',
    muy_bajo: "Muy bajo",
    atletico: "Atlético",
    saludable: "Saludable",
    obesidad: "Obesidad",
    msg_muy_bajo_h:
      "Tu porcentaje de grasa es muy bajo, lo que puede ser peligroso para la salud. Consulta con un médico.",
    msg_atletico:
      "Excelente condición física. Estás en el rango atlético, propio de deportistas.",
    msg_saludable:
      "Tu porcentaje de grasa es saludable. Mantén tus hábitos actuales.",
    msg_obesidad:
      "Tu porcentaje de grasa indica obesidad. Una dieta balanceada y ejercicio regular pueden ayudarte.",
    msg_muy_bajo_f:
      "Tu porcentaje de grasa es muy bajo para una mujer. Consulta con un médico.",
    rec1_titulo: "🔬 El Método US Navy: ¿qué tan preciso es?",
    rec1_texto:
      "Desarrollado por Hodgdon y Beckett (1984) para la Armada de EE.UU., este método utiliza mediciones de circunferencia para estimar la densidad corporal. Su margen de error es ±3–4%, comparable a escáneres DEXA para la mayoría de las personas.",
    rec2_titulo: "🧬 ¿Por qué importa la grasa corporal?",
    rec2_texto:
      "Más allá del peso total, la <strong>distribución de la grasa corporal</strong> es clave. Desprès et al. (2001) demostró que la obesidad central (relación cintura-cadera) es un predictor más fuerte de enfermedad cardiovascular que el IMC solo.",
    rec3_titulo: "💪 Grasa corporal y rendimiento deportivo",
    rec3_texto:
      "El ACSM recomienda un % de grasa entre <strong>6–20% para atletas masculinos</strong> y <strong>14–28% para atletas femeninas</strong> como óptimo para el rendimiento y la salud.",
    rec4_titulo: "🥩 ¿Cómo reducir la grasa corporal?",
    rec4_texto:
      "Stiegler & Cunliffe (2006) revisaron 50+ estudios y concluyeron que la combinación de <strong>déficit calórico + entrenamiento de resistencia</strong> preserva hasta un 95% de la masa magra mientras se pierde grasa. Una ingesta proteica de 1.6–2.2 g/kg es clave para preservar la masa muscular.",
    rec_vid1: "Análisis científico de rangos de grasa corporal.",
    rec_vid2: "Anatomía de la grasa visceral y sus riesgos.",
    rec_fuente: "Fuente oficial ACSM — acsm.org",
  },
  calorias: {
    titulo: "Calorías Diarias",
    subtitulo: "Ecuación Mifflin-St Jeor (1990) — la más precisa para adultos.",
    nivel: "Nivel de actividad",
    sedentario: "Sedentario — Poco o ningún ejercicio",
    ligero: "Ligero — Ejercicio 1-3 días/semana",
    moderado: "Moderado — Ejercicio 3-5 días/semana",
    activo: "Activo — Ejercicio 6-7 días/semana",
    muy_activo: "Muy activo — Atleta o trabajo físico intenso",
    btn: "Calcular Calorías",
    tdee_sub: "Tu gasto calórico total (TDEE)",
    tmb_label: "TMB (metabolismo basal)",
    deficit_label: "Para perder peso (−500 kcal)",
    mantener_label: "Para mantener peso",
    superavit_label: "Para ganar peso (+300 kcal)",
    cta: "¿Cuántas proteínas, grasas y carbos necesitas? →",
    info_titulo: "Calorías Diarias",
    info_text1:
      "Tus calorías diarias son la suma de tu tasa metabólica basal (TMB) y las calorías que tu cuerpo usa en actividades diarias. Si consumes más de este valor, ganas peso; si consumes menos, pierdes peso.",
    info_text2:
      "La TMB es el total de calorías que necesita tu cuerpo en reposo absoluto para funciones básicas: respiración, circulación, temperatura corporal.",
    tabla_titulo: "Factores de actividad",
    tabla_sed: "Sedentario",
    tabla_lig: "Ligero",
    tabla_mod: "Moderado",
    tabla_act: "Activo",
    tabla_may: "Muy activo",
    rec1_titulo: "🔬 La fórmula Mifflin-St Jeor",
    rec1_texto:
      "La ecuación de Mifflin-St Jeor (1990) reemplazó a la fórmula de Harris-Benedict (1919) como el estándar de oro. Un meta-análisis de Frankenfield et al. (2005) confirmó que predice la TMB con un error menor al <strong>10% en el 82% de personas sanas no obesas</strong>.",
    rec2_titulo: "⚡ ¿Qué es el TDEE?",
    rec2_texto:
      "El Gasto Energético Total Diario (TDEE) = TMB × Factor de Actividad Física. La revisión de Roza & Shizgal (1984) demostró que el <strong>nivel de actividad puede multiplicar tus necesidades calóricas hasta 1.9x</strong> respecto a tu tasa basal.",
    rec3_titulo: "🏃 Déficit calórico y pérdida de grasa",
    rec3_texto:
      "Hall et al. (2011) en The Lancet modeló que un <strong>déficit de 500 kcal/día produce aproximadamente 0.5 kg/semana de pérdida de grasa</strong>, siendo 3,500 kcal el equivalente teórico de 0.45 kg de grasa. Sin embargo, la adaptación metabólica hace que sea un proceso no lineal.",
    rec4_titulo: "🍽️ Calorías mínimas saludables",
    rec4_texto:
      "El NIH define las Dietas de Muy Bajo Valor Calórico (VLCD) como <strong>menos de 800 kcal/día</strong>, reservadas para casos médicos graves bajo supervisión estricta. No se recomiendan dietas menores a 1,200 kcal (mujeres) o 1,500 kcal (hombres) sin supervisión médica.",
    rec_vid1: "Matices científicos del balance energético.",
    rec_vid2: "Metabolismo, energía y composición corporal.",
    rec_fuente: "Fuente oficial NIH — Control de peso y calorías",
  },
  macros: {
    titulo: "Macros Diarios",
    subtitulo:
      "Distribución de proteínas, grasas y carbohidratos según tu meta.",
    meta: "Meta corporal",
    perder: "Perder peso",
    mantener: "Mantener peso",
    ganar: "Ganar peso",
    calorias_label: "Calorías diarias (TDEE)",
    calorias_hint: "Entre 500 y 10.000 kcal",
    calorias_cta: "¿No sabes cuántas? Calcúlalas →",
    btn: "Calcular Macros",
    resultado_titulo: "Tus macros diarios — ",
    total: "Total",
    proteinas: "Proteínas",
    grasas: "Grasas",
    carbos: "Carbohidratos",
    info_titulo: "Macronutrientes",
    info_text1:
      "Hay 3 macronutrientes presentes en nuestra alimentación: proteínas, grasas y carbohidratos. Cada uno tiene características y funciones distintas. Es el total calórico lo que determina si ganas, mantienes o pierdes peso.",
    tabla_titulo: "Equivalencia calórica",
    tabla2_titulo: "Proteínas por meta",
    msg_perder:
      "Alta proteína para preservar músculo mientras pierdes grasa. Mantén un déficit calórico consistente.",
    msg_mantener:
      "Distribución equilibrada para mantener tu peso y composición corporal actual.",
    msg_ganar:
      "Superávit calórico con proteína suficiente para maximizar la ganancia muscular.",
    error_meta: "Por favor selecciona tu meta.",
    error_campos: "Por favor completa todos los campos.",
    error_calorias: "Las calorías diarias no pueden ser menores a 500.",
    rec1_titulo: "🥩 Proteínas: el macronutriente más importante",
    rec1_texto:
      "El ISSN recomienda entre 1.4 y 2.0 g/kg para personas activas, y hasta 2.2 g/kg en contextos de pérdida de grasa. Un meta-análisis de Morton et al. (2018) con 49 estudios y 1.800 participantes concluyó que la proteína suplementaria maximiza la ganancia de fuerza hasta ~1.62 g/kg/día.",
    rec2_titulo: "🍞 Carbohidratos: combustible para el rendimiento",
    rec2_texto:
      "Burke et al. (2011) revisó evidencia que muestra que los <strong>carbohidratos son el combustible preferido para el ejercicio de alta intensidad</strong>. La recomendación para deportistas es 3–7 g/kg/día según el volumen e intensidad del entrenamiento.",
    rec3_titulo: "🫒 Grasas: esenciales, no el enemigo",
    rec3_texto:
      "Las <strong>grasas dietéticas son esenciales</strong> para la producción hormonal, absorción de vitaminas liposolubles (A, D, E, K) y función cerebral. Las Guías Dietéticas USDA 2020-2025 recomiendan que el 20–35% de las calorías totales provengan de las grasas.",
    rec4_titulo: '⚖️ IIFYM: "If It Fits Your Macros"',
    rec4_texto:
      "Barr & Wright (2010) encontraron que las <strong>comidas de alimentos integrales tienen hasta un 50% mayor efecto termogénico</strong> que las comidas procesadas con el mismo contenido calórico. Esto apoya el IIFYM como estrategia válida pero sugiere priorizar alimentos integrales para la eficiencia metabólica.",
    rec_vid1: "El experto en proteínas más citado en ciencias del deporte.",
    rec_vid2: "Tipos de grasas y su impacto en la salud.",
    rec_vid3: "Guía práctica y científica de composición corporal.",
    rec_fuente:
      "Journal of the International Society of Sports Nutrition — jissn.biomedcentral.com",
  },
};
