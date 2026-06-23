export default {
  nav: {
    imc: "BMI",
    grasa: "Body Fat",
    calorias: "Calories",
    macros: "Macros",
  },
  home: {
    eyebrow: "Body health platform",
    title_bold: "body",
    subtitle:
      "Scientific calculators to measure, understand and improve your body composition.",
    quote: '"What gets measured, gets controlled."',
    section_title: "Calculators",
    section_subtitle: "Select the metric you want to calculate",
    step1: "Calculate your BMI for a quick overview of your general health.",
    step2: "Measure your body fat % to evaluate your real composition.",
    step3: "Determine your daily calories based on your activity level.",
    step4: "Distribute your macros to achieve your goal.",
    imc_title: "Body Mass Index",
    imc_desc:
      "Evaluate your weight relative to your height according to WHO criteria.",
    grasa_title: "Body Fat",
    grasa_desc:
      "Calculate your body fat % with the US Navy Method (Hodgdon & Beckett).",
    calorias_title: "Daily Calories",
    calorias_desc:
      "Estimate your total daily energy expenditure (TDEE) with the Mifflin-St Jeor equation.",
    macros_title: "Daily Macros",
    macros_desc:
      "Distribute proteins, fats and carbohydrates according to your body goal.",
  },
  common: {
    eyebrow: "Calculator",
    sexo: "Biological sex",
    masculino: "Male",
    femenino: "Female",
    seleccionar: "Select...",
    altura: "Height",
    peso: "Weight",
    edad: "Age",
    altura_hint: "Between 100 and 250 cm",
    peso_hint: "Between 1 and 300 kg",
    edad_hint: "Between 10 and 120 years",
    recursos: "📚 Scientific Resources",
    videos: "🎬 Videos",
    tabla_hombres: "Men — ACSM",
    tabla_mujeres: "Women — ACSM",
  },
  imc: {
    titulo: "Body Mass Index",
    subtitulo: "Based on WHO classification.",
    btn: "Calculate BMI",
    unit: "kg/m²",
    cta: "Know your body fat %? →",
    error_campos: "Please enter height and weight.",
    error_altura: "Height must be between 100 and 250 cm.",
    error_peso: "Weight must be between 1 and 300 kg.",
    info_titulo: "What is BMI?",
    info_text1:
      "BMI was adopted by the WHO as a population screening tool. It is quick and accessible, but does not distinguish between fat and muscle mass. A study by Romero-Corral et al. (2008) showed it misclassifies obesity in 50% of cases vs. direct measurement.",
    info_text2:
      "Always complement BMI with waist circumference and body fat percentage measurements for a more complete risk assessment.",
    tabla_titulo: "WHO Classification",
    bajo_peso: "Underweight",
    normal: "Normal",
    sobrepeso: "Overweight",
    obesidad: "Obesity",
    msg_bajo_peso:
      "Your BMI indicates underweight. Consider consulting a doctor or nutritionist to reach a healthy weight.",
    msg_normal:
      "Excellent! Your BMI is in the normal range. Keep up your healthy habits.",
    msg_sobrepeso:
      "Your BMI indicates overweight. A balanced diet and regular exercise can help you.",
    msg_obesidad:
      "Your BMI indicates obesity. We recommend consulting a healthcare professional for a personalized plan.",
    rec1_titulo: "🔬 What does science say about BMI?",
    rec1_texto:
      "BMI was developed by Adolphe Quetelet in the 19th century and adopted by the WHO as a screening tool. A study by Romero-Corral et al. (2008) found it incorrectly classifies obesity in <strong>50% of cases</strong> compared to direct body fat measurement.",
    rec2_titulo: "⚠️ BMI limitations",
    rec2_texto:
      "BMI is <strong>not accurate for athletes</strong> with high muscle mass or older adults. The WHO recommends complementing it with waist circumference and body fat percentage for a more complete cardiovascular and metabolic risk assessment.",
    rec3_titulo: "❤️ BMI and cardiovascular risk",
    rec3_texto:
      "The Framingham Heart Study showed that each 1-point increase in BMI is associated with a <strong>12% increase in coronary heart disease risk</strong> in men and 8% in women.",
    rec4_titulo: "🥗 How to improve your BMI?",
    rec4_texto:
      "The strongest evidence points to a <strong>caloric deficit of 300–500 kcal/day</strong> combined with resistance exercise producing fat loss while preserving muscle. Losing 0.5–1 kg/week is considered safe according to ACSM.",
    rec_vid1: "Scientific limitations of BMI.",
    rec_vid2: "Educational animation on BMI and obesity.",
    rec_vid3: "Critical perspective on BMI.",
    rec_fuente: "Official WHO source — Obesity and overweight fact sheet",
  },
  grasa: {
    titulo: "Body Fat %",
    subtitulo: "US Navy Method — Hodgdon & Beckett (1984).",
    cuello: "Neck circumference",
    cuello_hint: "Measure at the narrowest part of the neck",
    abdomen: "Abdomen circumference",
    abdomen_hint: "Men: at navel level. Women: widest part.",
    cadera: "Hip circumference",
    cadera_hint: "Widest part of the hips",
    btn: "Calculate Body Fat %",
    cta: "Know your daily calories? →",
    error_invalido:
      "The result seems invalid. Check that the measurements are correct.",
    info_titulo: "Body Fat",
    info_text1:
      "Body fat is the most important metric for managing body composition. Unlike BMI, it distinguishes between fat mass and muscle mass. A bodybuilder may be classified as overweight by BMI but have only 5% body fat.",
    info_text2:
      'Excess <strong style="color: var(--text-primary)">visceral fat</strong> (around organs) is directly associated with insulin resistance and metabolic syndrome, regardless of total weight.',
    muy_bajo: "Very low",
    atletico: "Athletic",
    saludable: "Healthy",
    obesidad: "Obese",
    msg_muy_bajo_h:
      "Your body fat % is very low, which can be dangerous for bodily functions. Consult a doctor.",
    msg_atletico:
      "Excellent physical condition. You are in the athletic range, typical of athletes.",
    msg_saludable: "Your body fat % is healthy. Keep up your current habits!",
    msg_obesidad:
      "Your body fat % indicates obesity. A balanced diet and regular exercise can help.",
    msg_muy_bajo_f:
      "Your body fat % is very low for a woman. Consult a doctor.",
    rec1_titulo: "🔬 The US Navy Method: how accurate is it?",
    rec1_texto:
      "Developed by Hodgdon and Beckett (1984) for the U.S. Navy, this method uses circumference measurements to estimate body density. Its margin of error is ±3–4%, comparable to DEXA scans for most people.",
    rec2_titulo: "🧬 Why does body fat matter?",
    rec2_texto:
      "Beyond total weight, the <strong>distribution of body fat</strong> is key. Desprès et al. (2001) showed that central obesity (waist-to-hip ratio) is a stronger predictor of cardiovascular disease than BMI alone.",
    rec3_titulo: "💪 Body fat and athletic performance",
    rec3_texto:
      "The ACSM recommends a body fat % between <strong>6–20% for male athletes</strong> and <strong>14–28% for female athletes</strong> as optimal for performance and health.",
    rec4_titulo: "🥩 How to reduce body fat?",
    rec4_texto:
      "Stiegler & Cunliffe (2006) reviewed 50+ studies and concluded that <strong>caloric deficit + resistance training</strong> preserves up to 95% of lean mass while losing fat. A protein intake of 1.6–2.2 g/kg is key to preserving muscle mass.",
    rec_vid1: "Scientific analysis of body fat percentage ranges.",
    rec_vid2: "Anatomy of visceral fat and its health risks.",
    rec_fuente: "Official ACSM source — acsm.org",
  },
  calorias: {
    titulo: "Daily Calories",
    subtitulo:
      "Mifflin-St Jeor equation (1990) — the most accurate for adults.",
    nivel: "Activity level",
    sedentario: "Sedentary — Little or no exercise",
    ligero: "Light — Exercise 1-3 days/week",
    moderado: "Moderate — Exercise 3-5 days/week",
    activo: "Active — Exercise 6-7 days/week",
    muy_activo: "Very active — Athlete or intense physical work",
    btn: "Calculate Calories",
    tdee_sub: "Your total daily energy expenditure (TDEE)",
    tmb_label: "BMR (basal metabolic rate)",
    deficit_label: "To lose weight (−500 kcal)",
    mantener_label: "To maintain weight",
    superavit_label: "To gain weight (+300 kcal)",
    cta: "How many proteins, fats and carbs do you need? →",
    info_titulo: "Daily Calories",
    info_text1:
      "Your daily calories are the sum of your basal metabolic rate (BMR) and the calories your body uses in daily activities. If you consume more than this value, you gain weight; if you consume less, you lose weight.",
    info_text2:
      "BMR is the total calories your body needs at absolute rest for basic functions: breathing, circulation, body temperature.",
    tabla_titulo: "Activity factors",
    tabla_sed: "Sedentary",
    tabla_lig: "Light",
    tabla_mod: "Moderate",
    tabla_act: "Active",
    tabla_may: "Very active",
    rec1_titulo: "🔬 The Mifflin-St Jeor formula",
    rec1_texto:
      "The Mifflin-St Jeor equation (1990) replaced the Harris-Benedict formula (1919) as the gold standard. A 2005 meta-analysis by Frankenfield et al. confirmed it predicts BMR with an error under <strong>10% in 82% of healthy non-obese individuals</strong>.",
    rec2_titulo: "⚡ What is TDEE?",
    rec2_texto:
      "Total Daily Energy Expenditure (TDEE) = BMR × Physical Activity Factor. Roza & Shizgal (1984) demonstrated that <strong>activity level can multiply your caloric needs by up to 1.9x</strong> compared to your basal rate.",
    rec3_titulo: "🏃 Caloric deficit and fat loss",
    rec3_texto:
      "Hall et al. (2011) in The Lancet modeled that a <strong>500 kcal/day deficit produces approximately 0.5 kg/week of fat loss</strong>, with 3,500 kcal being the theoretical equivalent of 0.45 kg of fat. However, metabolic adaptation makes this a non-linear process.",
    rec4_titulo: "🍽️ Minimum healthy calories",
    rec4_texto:
      "The NIH defines Very Low Calorie Diets (VLCD) as <strong>fewer than 800 kcal/day</strong>, reserved for severe medical cases under strict supervision. Diets below 1,200 kcal (women) or 1,500 kcal (men) are not recommended without medical supervision.",
    rec_vid1: "Scientific nuances of energy balance.",
    rec_vid2: "Metabolism, energy and body composition.",
    rec_fuente: "Official NIH source — Weight management and calories",
  },
  macros: {
    titulo: "Daily Macros",
    subtitulo:
      "Distribution of proteins, fats and carbohydrates according to your goal.",
    meta: "Body goal",
    perder: "Lose weight",
    mantener: "Maintain weight",
    ganar: "Gain weight",
    calorias_label: "Daily calories (TDEE)",
    calorias_hint: "Between 500 and 10,000 kcal",
    calorias_cta: "Don't know how many? Calculate them →",
    btn: "Calculate Macros",
    resultado_titulo: "Your daily macros — ",
    total: "Total",
    proteinas: "Proteins",
    grasas: "Fats",
    carbos: "Carbohydrates",
    info_titulo: "Macronutrients",
    info_text1:
      "There are 3 macronutrients in our diet: proteins, fats and carbohydrates. Each has distinct characteristics and functions. The total caloric intake determines whether you gain, maintain or lose weight.",
    tabla_titulo: "Caloric equivalent",
    tabla2_titulo: "Proteins by goal",
    msg_perder:
      "High protein to preserve muscle while losing fat. Maintain a consistent caloric deficit.",
    msg_mantener:
      "Balanced distribution to maintain your current weight and body composition.",
    msg_ganar:
      "Caloric surplus with sufficient protein to maximize muscle gain.",
    error_meta: "Please select your goal.",
    error_campos: "Please fill in all fields.",
    error_calorias: "Daily calories cannot be less than 500.",
    rec1_titulo: "🥩 Proteins: the most important macronutrient",
    rec1_texto:
      "ISSN recommends 1.4–2.0 g/kg for active individuals, and up to 2.2 g/kg during fat loss. A meta-analysis by Morton et al. (2018) across 49 studies and 1,800 participants concluded supplemental protein maximizes strength gains up to ~1.62 g/kg/day.",
    rec2_titulo: "🍞 Carbohydrates: fuel for performance",
    rec2_texto:
      "Burke et al. (2011) reviewed evidence showing <strong>carbohydrates are the preferred fuel for high-intensity exercise</strong>. The recommendation for athletes is 3–7 g/kg/day depending on training volume and intensity.",
    rec3_titulo: "🫒 Fats: essential, not the enemy",
    rec3_texto:
      "<strong>Dietary fats are essential</strong> for hormone production, fat-soluble vitamin absorption (A, D, E, K) and brain function. USDA Dietary Guidelines 2020-2025 recommend 20–35% of total calories come from fats.",
    rec4_titulo: '⚖️ IIFYM: "If It Fits Your Macros"',
    rec4_texto:
      "Barr & Wright (2010) found that <strong>whole-food meals have up to 50% greater thermogenic effect</strong> than processed meals with the same caloric content, supporting IIFYM as valid but suggesting prioritizing whole foods for metabolic efficiency.",
    rec_vid1: "The most cited expert in sports nutrition science on protein.",
    rec_vid2: "Types of fats and their health impact.",
    rec_vid3: "Scientific and practical guide to body composition.",
    rec_fuente:
      "Journal of the International Society of Sports Nutrition — jissn.biomedcentral.com",
  },
};
