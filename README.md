# Física y Química — PC Santa Ana

Repositorio de materiales didácticos y web de aula para las asignaturas de Física y Química (2.º ESO, 4.º ESO y 2.º Bachillerato). La web se despliega automáticamente en GitHub Pages con cada `push` a `main`.

🌐 **Web:** [hachedeheroe.github.io/fisica-quimica-benimaclet](https://hachedeheroe.github.io/fisica-quimica-benimaclet)

---

## Contenido del repositorio

| Carpeta / Archivo | Descripción |
|---|---|
| `index.html` | Página principal — apuntes, exámenes y calendario |
| `clase.html` | Vista de clase con recursos por sesión |
| `data.js` | **Archivo central de contenidos** — editar aquí para añadir materiales |
| `pdfs/examenes/` | Exámenes y solucionarios en PDF |
| `pdfs/apuntes/` | Apuntes en PDF |
| `INSTRUCCIONES.md` | Guía para actualizar la web sin tocar código |

---

## Exámenes disponibles (curso 2025-26)

### 2.º ESO

| Examen | Evaluación | Archivo |
|---|---|---|
| Átomo y tabla periódica | 1.ª Eval | — |
| Ecuaciones lineales | 2.ª Eval | — |

### 4.º ESO

| Examen | Evaluación | Archivo |
|---|---|---|
| MCU y dinámica circular | 2.ª Eval | — |
| Formulación inorgánica | Repaso | — |

### 2.º Bachillerato — Parciales

| Examen | Bloque | Archivo |
|---|---|---|
| Parcial: Ondas y Acústica (nivel estándar) | Bloque 3 | `examen-bach-parcial-mas.pdf` |
| Parcial: Ondas y Acústica (nivel β) | Bloque 3 | `examen-bach-parcial-fenomenos.pdf` |
| Parcial: Óptica geométrica y ondulatoria | Bloque 3 | `examen-bach-parcial-optica.pdf` |
| Parcial: Interacción electromagnética | Bloque 2 | `examen-bach-parcial-em.pdf` |

### 2.º Bachillerato — Trimestrales

| Examen | Contenido | Archivo |
|---|---|---|
| Trimestral 1 | Campo gravitatorio + opciones electromagnetismo/ondas | `examen-bach-trim1-2526.pdf` |
| Solucionario Trimestral 1 | Criterios y solución completa | `examen-bach-trim1-2526-soluciones.pdf` |
| Trimestral 2 | Campo eléctrico (Gauss) + opciones gravitación/MAS/óptica | `examen-bach-trim2-2526.pdf` |

---

## Estructura del programa (2.º Bachillerato)

```
Bloque 1 — Campo gravitatorio
  · Campo gravitatorio vectorial y potencial
  · Momento angular y energía mecánica
  · Leyes de Kepler y movimiento planetario

Bloque 2 — Interacción electromagnética
  · Campos eléctrico y magnético
  · Flujo eléctrico y energía de cargas
  · Campos magnéticos y corrientes eléctricas
  · Ley de Lorentz e inducción electromagnética

Bloque 3 — Vibraciones y ondas
  · Movimiento armónico simple (MAS)
  · Fenómenos ondulatorios y el sonido
  · Naturaleza de la luz y espectro electromagnético
  · Óptica geométrica

Bloque 4 — Física moderna
  · Relatividad especial
  · Física cuántica
  · Física nuclear y de partículas
```

---

## Cómo añadir materiales

Todo el contenido (apuntes, exámenes, eventos del calendario) se gestiona desde un único archivo: [`data.js`](data.js).

Consulta [`INSTRUCCIONES.md`](INSTRUCCIONES.md) para una guía paso a paso sin necesidad de saber programar.

### Flujo rápido

```bash
# 1. Copia el PDF a la carpeta correspondiente
cp mi-examen.pdf pdfs/examenes/

# 2. Edita data.js para añadir la card
# 3. Publica
git add .
git commit -m "docs: añado examen de óptica 2ºBach"
git push
```

La web se actualiza sola en menos de un minuto.

---

## Convención de nombres para PDFs

```
examen-{curso}-{tema}.pdf          →  examen-bach-optica.pdf
examen-{curso}-trim{n}-{año}.pdf   →  examen-bach-trim1-2526.pdf
apuntes-{curso}-{tema}.pdf         →  apuntes-bach-gravitacion.pdf
```

Cursos: `2eso` · `4eso` · `bach`

---

## Despliegue

La web se publica automáticamente en **GitHub Pages** mediante el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) al hacer `push` a `main`. No requiere configuración adicional.
