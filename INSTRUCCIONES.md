# Cómo actualizar la web — Guía rápida

> No necesitas saber programar. Solo edita el archivo `data.js` con cualquier editor de texto (el Bloc de notas funciona perfectamente).

---

## 1. Añadir una card nueva (apunte o examen)

Abre el archivo `data.js`.

- Si es un **apunte**, busca la sección que dice `APUNTES`.
- Si es un **examen o ejercicio**, busca la sección `EXAMENES`.

Copia este bloque y pégalo dentro de los corchetes `[ ]`, separado por una coma del bloque anterior:

```js
{
  nivel: '2eso',
  tag: '2.º ESO · Física',
  titulo: 'El título que quieras',
  descripcion: 'Una descripción breve de lo que contiene.',
  pdf: null
},
```

**Valores posibles para `nivel`:**
| Lo que escribes | Lo que significa |
|---|---|
| `'2eso'` | 2.º ESO |
| `'4eso'` | 4.º ESO |
| `'bach'` | 2.º Bachillerato |

Cuando tengas el PDF listo, cambia `null` por el nombre del archivo entre comillas (ver apartado 3).

---

## 2. Añadir un evento al calendario

En `data.js`, busca la sección `EVENTOS` y añade una línea nueva dentro de los corchetes:

```js
{ dia: 15, mes: 4, año: 2025, label: 'Examen 2ºESO', tipo: 'exam' },
```

**Importante sobre el mes:** los meses empiezan en 0, no en 1.

| Mes | Número a usar |
|---|---|
| Enero | 0 |
| Febrero | 1 |
| Marzo | 2 |
| Abril | 3 |
| Mayo | 4 |
| Junio | 5 |
| Julio | 6 |
| Agosto | 7 |
| Septiembre | 8 |
| Octubre | 9 |
| Noviembre | 10 |
| Diciembre | 11 |

**Tipos de evento (`tipo`):**
| Lo que escribes | Color en el calendario |
|---|---|
| `'exam'` | Negro — examen |
| `'ev'` | Rojo — entrega o evento |
| `'lab'` | Verde — práctica de laboratorio |

---

## 3. Subir un PDF nuevo

1. **Copia el archivo PDF** a la carpeta correspondiente:
   - Apuntes → carpeta `pdfs/apuntes/`
   - Exámenes → carpeta `pdfs/examenes/`

2. **Nombra el archivo** sin espacios ni acentos. Por ejemplo:
   - `apuntes-2eso-atomo.pdf`
   - `examen-4eso-formulacion.pdf`

3. **Abre `data.js`** y encuentra la card a la que pertenece ese PDF.

4. Cambia `null` por el nombre del archivo entre comillas:
   ```js
   pdf: 'apuntes-2eso-atomo.pdf'
   ```

El botón de la card pasará automáticamente de "Próximamente" a "Descargar PDF".

---

## 4. Publicar los cambios en la web

Cada vez que hagas un `git push` a la rama `main`, la web se actualiza sola en GitHub Pages en menos de un minuto.

Si no usas Git todavía, el flujo básico es:

```bash
git add .
git commit -m "Añado examen de formulación"
git push
```

---

## Estructura de carpetas

```
/
├── index.html          ← La web (no tocar)
├── data.js             ← AQUÍ van todos los contenidos
├── INSTRUCCIONES.md    ← Esta guía
├── pdfs/
│   ├── apuntes/        ← PDFs de apuntes aquí
│   └── examenes/       ← PDFs de exámenes aquí
└── img/                ← Imágenes (si las necesitas en el futuro)
```
