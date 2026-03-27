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
  {
    nivel: 'bach',
    tag: '2.º Bach · Física',
    titulo: 'Electromagnetismo',
    descripcion: 'Campo eléctrico y magnético, ley de Faraday, inducción electromagnética. Problemas de selectividad.',
    pdf: null
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Química',
    titulo: 'Nomenclatura orgánica',
    descripcion: 'Hidrocarburos, grupos funcionales, isomería. Criterios IUPAC con ejemplos resueltos.',
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
    nivel: 'bach',
    tag: '2.º Bach · Competencial',
    titulo: 'Prueba de electromagnetismo',
    descripcion: 'Formato EBAU. Situaciones problema contextualizadas. Con rúbrica de evaluación.',
    pdf: null
  },
  {
    nivel: '4eso',
    tag: '4.º ESO · Repaso',
    titulo: 'Ejercicios: Formulación inorgánica',
    descripcion: '50 compuestos para practicar. Incluye soluciones detalladas paso a paso.',
    pdf: null
  },
  {
    nivel: 'bach',
    tag: '2.º Bach · Orgánica',
    titulo: 'Ejercicios: Nomenclatura IUPAC',
    descripcion: 'Formulación y nomenclatura de compuestos orgánicos. Nivel selectividad.',
    pdf: null
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
