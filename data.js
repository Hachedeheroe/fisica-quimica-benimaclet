// ============================================================
//  data.js — Todos los contenidos de la web
//  Edita este archivo para añadir cards y eventos.
//  NO toques index.html para cambiar contenido.
// ============================================================

// ── APUNTES ─────────────────────────────────────────────────
// Campos:
//   nivel      → '2eso' | '4eso' | 'bach'
//   tag        → texto pequeño sobre el título (curso · materia)
//   titulo     → título de la card
//   descripcion→ descripción breve
//   pdf        → nombre del archivo en /pdfs/apuntes/  (p.ej. 'atomo-2eso.pdf')
//                Si aún no hay PDF, pon: null
// ────────────────────────────────────────────────────────────
const APUNTES = [
  {
    nivel: '2eso',
    tag: '2.º ESO · Química',
    titulo: 'Estructura atómica y tabla periódica',
    descripcion: 'Modelos atómicos, número atómico y másico, isótopos. Organización de la tabla periódica.',
    pdf: null
  },
  {
    nivel: '2eso',
    tag: '2.º ESO · Matemáticas',
    titulo: 'Ecuaciones lineales',
    descripcion: 'Resolución de ecuaciones de primer grado, sistemas de ecuaciones y problemas aplicados.',
    pdf: null
  },
  {
    nivel: '4eso',
    tag: '4.º ESO · Física',
    titulo: 'Movimiento circular uniforme',
    descripcion: 'Velocidad angular, periodo, frecuencia. Aceleración centrípeta y fuerza centrípeta.',
    pdf: null
  },
  {
    nivel: '4eso',
    tag: '4.º ESO · Química',
    titulo: 'Formulación inorgánica',
    descripcion: 'Estados de oxidación, nomenclatura sistemática, de Stock y tradicional. Óxidos, hidróxidos, ácidos y sales.',
    pdf: null
  },
  // ── Bloque 1: Campo gravitatorio ──
  {
    nivel: 'bach',
    tag: '2.º Bach · Bloque 1',
    titulo: 'Campo gravitatorio',
    descripcion: 'Cálculo vectorial del campo gravitatorio. Efectos cinemáticos y dinámicos sobre objetos inmersos en el campo.',
    pdf: null
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Bloque 1',
    titulo: 'Momento angular y energía mecánica',
    descripcion: 'Momento angular en campo gravitatorio, fuerzas centrales y su conservación. Balances energéticos en desplazamientos entre trayectorias.',
    pdf: null
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Bloque 1',
    titulo: 'Leyes de Kepler y movimiento planetario',
    descripcion: 'Leyes que rigen el movimiento planetario. Extrapolación al movimiento de satélites y cuerpos celestes.',
    pdf: null
  },
  // ── Bloque 2: Campo electromagnético ──
  {
    nivel: 'bach',
    tag: '2.º Bach · Bloque 2',
    titulo: 'Campos eléctrico y magnético',
    descripcion: 'Tratamiento vectorial. Variables cinemáticas y dinámicas de cargas libres. Fenómenos naturales y aplicaciones tecnológicas.',
    pdf: null
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Bloque 2',
    titulo: 'Flujo eléctrico y energía de cargas',
    descripcion: 'Intensidad del campo eléctrico en distribuciones discretas y continuas. Flujo eléctrico. Energía y potencial eléctrico.',
    pdf: null
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Bloque 2',
    titulo: 'Campos magnéticos y corrientes eléctricas',
    descripcion: 'Campos generados por hilos rectilíneos, espiras, solenoides y toros. Líneas de campo. Interacción con cargas libres.',
    pdf: null
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Bloque 2',
    titulo: 'Ley de Lorentz e inducción electromagnética',
    descripcion: 'Fuerza sobre cargas en campos eléctricos y magnéticos. Variación de flujo magnético y FEM. Motores, generadores y transformadores.',
    pdf: null
  },
  // ── Bloque 3: Vibraciones y ondas ──
  {
    nivel: 'bach',
    tag: '2.º Bach · Bloque 3',
    titulo: 'Movimiento armónico simple (MAS)',
    descripcion: 'Variables cinemáticas del movimiento oscilatorio. Conservación de la energía mecánica. Análisis de gráficas de oscilación.',
    pdf: null
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Bloque 3',
    titulo: 'Fenómenos ondulatorios y el sonido',
    descripcion: 'Ondas mecánicas, tipos y características. El sonido como fenómeno ondulatorio: cualidades, atenuación, contaminación acústica. Interferencias y difracción.',
    pdf: null
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Bloque 3',
    titulo: 'Naturaleza de la luz y espectro electromagnético',
    descripcion: 'La luz como onda electromagnética. Experimento de la doble rendija. Espectro visible y no visible. Frecuencia y longitud de onda.',
    pdf: null
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Bloque 3',
    titulo: 'Óptica geométrica',
    descripcion: 'Índice de refracción. Formación de imágenes en lentes, prismas y espejos planos y curvos. Aplicaciones.',
    pdf: null
  },
  // ── Bloque 4: Física moderna ──
  {
    nivel: 'bach',
    tag: '2.º Bach · Bloque 4',
    titulo: 'Relatividad especial',
    descripcion: 'Principios fundamentales. Dilatación del tiempo y contracción de la longitud. Equivalencia masa-energía (E=mc²). Cambio de paradigma respecto a la mecánica clásica.',
    pdf: null
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Bloque 4',
    titulo: 'Física cuántica',
    descripcion: 'Hipótesis de Planck. Efecto fotoeléctrico y concepto de fotón. Hipótesis de De Broglie. Dualidad onda-corpúsculo. Principio de incertidumbre. Aplicaciones: láser, RMN, nanotecnología.',
    pdf: null
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Bloque 4',
    titulo: 'Física nuclear y de partículas',
    descripcion: 'Radiactividad natural y procesos nucleares. Modelo estándar. Aceleradores de partículas. Fisión y fusión nuclear. Aplicaciones en ingeniería, tecnología y salud.',
    pdf: null
  }
];

// ── EXÁMENES ─────────────────────────────────────────────────
// Mismos campos que APUNTES.
// pdf → nombre del archivo en /pdfs/examenes/
// ─────────────────────────────────────────────────────────────
const EXAMENES = [
  {
    nivel: '2eso',
    tag: '2.º ESO · 1.ª Eval',
    titulo: 'Examen: Átomo y tabla periódica',
    descripcion: 'Modelo de Bohr, configuración electrónica, propiedades periódicas. Con soluciones.',
    pdf: null
  },
  {
    nivel: '2eso',
    tag: '2.º ESO · 2.ª Eval',
    titulo: 'Examen: Ecuaciones lineales',
    descripcion: '10 ejercicios graduados. Incluye hoja de respuestas y criterios de corrección.',
    pdf: null
  },
  {
    nivel: '4eso',
    tag: '4.º ESO · 2.ª Eval',
    titulo: 'Examen: MCU y dinámica circular',
    descripcion: 'Problemas de velocidad angular, periodo y fuerza centrípeta. Versión estándar y NEE.',
    pdf: null
  },
  {
    nivel: '4eso',
    tag: '4.º ESO · Repaso',
    titulo: 'Ejercicios: Formulación inorgánica',
    descripcion: '50 compuestos para practicar. Incluye soluciones detalladas paso a paso.',
    pdf: null
  },
  // ── Parciales de Bloque II (Ondas y Vibraciones) ──
  {
    nivel: 'bach',
    tag: '2.º Bach · Parcial · Bloque 3',
    titulo: 'Parcial: Ondas y Acústica (nivel estándar)',
    descripcion: 'Tormenta en la Albufera y oleaje en el Puerto de Valencia. Potencia acústica, ecuación de onda y velocidad de fase. 5 puntos.',
    pdf: 'bach/examen-bach-parcial-mas.pdf'
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Parcial · Bloque 3',
    titulo: 'Parcial: Ondas y Acústica (nivel β)',
    descripcion: 'Mismos contextos que el nivel estándar con mayor profundidad matemática. Incluye deducciones simbólicas. 5 puntos.',
    pdf: 'bach/examen-bach-parcial-fenomenos.pdf'
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Parcial · Bloque 3',
    titulo: 'Parcial: Óptica geométrica y ondulatoria',
    descripcion: 'Dispersión cromática en lámina de vidrio y cálculo de posición de lente en proyector de cine. Índice de refracción y lentes convergentes. 5 puntos.',
    pdf: 'bach/examen-bach-parcial-optica.pdf'
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Parcial · Bloque 2',
    titulo: 'Parcial: Interacción electromagnética',
    descripcion: 'Condensador de placas planas, teorema de Gauss y trabajo del campo eléctrico. Campo magnético generado por corrientes. 5 puntos.',
    pdf: 'bach/examen-bach-parcial-em.pdf'
  },
  // ── Trimestrales 2025-26 ──
  {
    nivel: 'bach',
    tag: '2.º Bach · Trimestral 1 · 2025-26',
    titulo: 'Trimestral 1 — Campo gravitatorio',
    descripcion: 'Apartado obligatorio: campo gravitatorio vectorial, potencial y trabajo. Apartados opcionales A/B sobre electromagnetismo y ondas. Incluye datos y tablas.',
    pdf: 'bach/examen-bach-trim1-2526.pdf'
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Trimestral 1 · 2025-26',
    titulo: 'Solucionario Trimestral 1',
    descripcion: 'Criterios de corrección detallados y solución completa del Trimestral 1. Rúbrica con puntuación por apartado.',
    pdf: 'bach/examen-bach-trim1-2526-soluciones.pdf'
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Trimestral 2 · 2025-26',
    titulo: 'Trimestral 2 — Interacción gravitatoria',
    descripcion: 'Apartado obligatorio: campo eléctrico con superficie gaussiana. Opciones A/B en gravitación, MAS y óptica. Formato EBAU.',
    pdf: 'bach/examen-bach-trim2-2526.pdf'
  }
];

// ── EVENTOS DEL CALENDARIO ────────────────────────────────────
// Campos:
//   dia   → número del día (1-31)
//   mes   → número del mes, empezando en 0 (0=enero, 1=febrero … 11=diciembre)
//   año   → año con 4 dígitos (ej. 2025)
//   label → texto que aparece en el calendario
//   tipo  → 'exam' (examen, negro) | 'ev' (entrega/evento, rojo) | 'lab' (práctica, verde)
// ─────────────────────────────────────────────────────────────
const EVENTOS = [
  { dia: 3,  mes: 3, año: 2025, label: '2ºESO Examen átomo',       tipo: 'exam' },
  { dia: 10, mes: 3, año: 2025, label: 'Lab: destilación 4ºESO',   tipo: 'lab'  },
  { dia: 14, mes: 3, año: 2025, label: 'Entrega redacción',         tipo: 'ev'   },
  { dia: 22, mes: 3, año: 2025, label: '2ºBach MCU examen',         tipo: 'exam' },
  { dia: 28, mes: 3, año: 2025, label: 'Lab: electromagnetismo',    tipo: 'lab'  },
  { dia: 5,  mes: 4, año: 2025, label: 'Examen 4ºESO formulación',  tipo: 'exam' },
  { dia: 12, mes: 4, año: 2025, label: 'Entrega prácticas',         tipo: 'ev'   },
  { dia: 20, mes: 4, año: 2025, label: 'Lab: titulación',           tipo: 'lab'  }
];
