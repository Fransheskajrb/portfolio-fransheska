# Fase 2 — preparación para producción

## Alcance implementado

Las tres rutas originales ahora pertenecen al sistema Campo gravitacional:

- `/case-studies/institutional-goals`: Análisis de datos, IMPLEMENTADO, caso principal.
- `/case-studies/portfolio`: Portfolio Profesional, EN DESARROLLO.
- `/case-studies/sirius`: SIRIUS, EN DESARROLLO, proyecto académico secundario.

Se conserva el fondo fijo, Arial/Helvetica, paleta grafito, wordmark y navegación.
El contenido se presenta como lectura técnica con índice, contexto, desafío,
trabajo/decisiones/enfoque, investigación, propuesta, aprendizajes y herramientas.
Los visuales reutilizan los gráficos ilustrativos aprobados; no son capturas del
sistema ni métricas reales. Las páginas siguen siendo Server Components y se
prerenderizan. Reveal y movimiento reducido reutilizan las fronteras cliente.

La Home mantiene su composición. Sus dialogs incorporan «Leer el caso completo»
y canales reales de contacto. No se añadieron menú, sticky, efectos de hover ni
animaciones. La comparación automatizada confirma geometría idéntica de los diez
bloques de la Home a 1440, 768 y 390.

## Reconciliación de contenido

Fuente: `campoProjects.ts`, `caseStudies.ts`, `contact.ts` y stack existente.

- Los títulos, estados y orden del handoff prevalecen sobre los títulos antiguos.
- Para Análisis de datos, Oracle APEX / SQL sustituyen Power BI / Excel como herramientas principales. Se conservan indicadores y automatización de los datos existentes. No se añadió Oracle Database: no hay evidencia específica suficiente en estos archivos.
- Portfolio mantiene Next.js / React / TypeScript / Tailwind y añade Motion / UX e interacción, documentados en el repositorio. El texto de «prototipo en evaluación» se reconcilia con la descripción existente del sitio; permanece EN DESARROLLO.
- SIRIUS conserva las áreas documentadas, su alcance académico y la advertencia explícita de ausencia de implementación clínica/resultados. No se presenta un stack clínico desplegado.
- El bloque de evidencia conserva únicamente la advertencia existente sobre resultados cuantitativos que requieren validación. No se inventaron resultados ni evidencias anonimizadas.
- Se retiraron las referencias de datos a portadas inexistentes. No se generaron sustitutos ni imágenes de casos.
- No hay contradicciones pendientes que requieran decidir hechos nuevos.

## Contacto y CV

Los canales provienen exclusivamente de `contact.ts`:

- `mailto:fransheskaruizbonilla@gmail.com`
- `https://www.linkedin.com/in/fransheska-ruiz-127438276`
- `https://github.com/Fransheskajrb`

Están disponibles en el dialog real de la Home y al final de cada caso.
Los enlaces externos tienen `target=_blank` y `rel="noopener noreferrer"`.
No se implementó un backend de correo ni formulario, ni se enviaron mensajes.

El PDF definitivo aprobado está incorporado sin modificar su contenido en
**`public/cv-fransheska-ruiz.pdf`** → URL **`/cv-fransheska-ruiz.pdf`**.

`CvDownload` detecta su disponibilidad al prerenderizar y muestra «Descargar CV
(PDF)» en el dialog de contacto de Home y en los tres casos. La descarga es del
mismo dominio y conserva el nombre `cv-fransheska-ruiz.pdf`.

SHA-256 del adjunto y del archivo público:
`dc7f8edd549e94a753813fedfeabbf00fe7633f0ddc3cf11e2d2c872748f81ce`.

## SEO

- Dominio canonical: `https://www.fransheskaruiz.com`.
- Metadata global, títulos y descripciones específicos, canonical y OG por página.
- Twitter/X usa `summary` textual mientras falte una imagen social aprobada.
- `sitemap.xml` contiene Home y los tres casos; no inventa fechas de modificación.
- `robots.txt` permite el sitio y referencia su sitemap.
- Las rutas inexistentes responden 404 y contienen `noindex`.
- `lang=es` y favicon original se mantienen.

Asset social preparado, pero ausente:

**`public/images/og-campo-gravitacional.png`** → URL **`/images/og-campo-gravitacional.png`**.

Proporcionar una imagen aprobada, preferiblemente 1200 × 630, y reconstruir el
sitio. El helper la incluirá en OG/Twitter y cambiará Twitter a `summary_large_image`.
Hasta entonces no se anuncian imágenes inexistentes. No se inventó handle de X.

## Validación

- `npm run lint`: pasó.
- `npx --no-install tsc --noEmit --incremental false`: pasó.
- `npm run build`: pasó; Home, tres casos, sitemap y robots prerenderizados.
- 12 comprobaciones página/viewport: Home y cada caso a 1440×900 / 768×1024 / 390×844; metadata, canonical, estados, IDs y capturas.
- Tres recorridos solo con teclado: skip, Home → cada caso → Home, índice/anclas y contacto real, foco y Escape.
- 12 recorridos de movimiento reducido manual y del sistema; estado efectivo y CSS verificados.
- Todos los enlaces internos comprobados por HTTP y todas las anclas verificadas.
- Entradas de índices y navegación entre casos visibles en móvil; se corrigió de manera localizada la regla heredada que ocultaba el segundo enlace, sin cambiar la navbar de la Home.
- Casos sin desbordamiento horizontal. El desbordamiento de la esfera de la Home se conserva como en el diseño aprobado.
- Rutas inválidas: 404/noindex. Sin errores de navegador.

GitHub respondió 200 a una comprobación HEAD. LinkedIn fue bloqueado por el proxy
(403 de túnel): se verificaron URL y atributos existentes, pero no se afirma su
disponibilidad externa desde este entorno. `mailto` se verificó como enlace;
no se probó entrega de correo.

Informe y script de QA: `phase2/report.json` y `phase2-check.cjs.txt`.
El script usa Playwright/Chromium ya presentes en el entorno y un servidor de
producción en 3004. No se añadieron dependencias de la aplicación.

## Capturas

| Página | Desktop 1440 | Tablet 768 | Mobile 390 |
|---|---|---|---|
| Home | [Captura](phase2/desktop-home.png) | [Captura](phase2/tablet-home.png) | [Captura](phase2/mobile-home.png) |
| Análisis de datos | [Captura](phase2/desktop-institutional-goals.png) | [Captura](phase2/tablet-institutional-goals.png) | [Captura](phase2/mobile-institutional-goals.png) |
| Portfolio | [Captura](phase2/desktop-portfolio.png) | [Captura](phase2/tablet-portfolio.png) | [Captura](phase2/mobile-portfolio.png) |
| SIRIUS | [Captura](phase2/desktop-sirius.png) | [Captura](phase2/tablet-sirius.png) | [Captura](phase2/mobile-sirius.png) |

El fondo fijo solo aparece en la primera pantalla de una captura full-page;
su comportamiento real continúa durante el scroll. No se modificó para imitar
una captura larga.

## Dependencias del usuario antes de decidir el merge

1. Proporcionar una imagen social aprobada en `public/images/og-campo-gravitacional.png`, o aprobar compartir metadata textual sin imagen.
2. Si se desean evidencias visuales reales del caso principal, proporcionar capturas anonimizadas/autorizadas. Son opcionales para el funcionamiento actual; permanecen los visuales ilustrativos aprobados.
3. Comprobar LinkedIn desde un navegador con acceso normal; el proxy impidió su validación externa.

La PR permanece Draft; no se hizo merge ni despliegue de producción.

## Ajustes finales de contenido y CV

- Análisis de datos: rol «Diseño, desarrollo y análisis de datos». La experiencia laboral mantiene «Administrativa de Capacitación».
- SIRIUS: rol «Product Owner · Analista Funcional · Enlace con el hospital». Su contexto explica el levantamiento de necesidades, aclaración/traducción de requerimientos y comunicación institucional hacia el equipo como participación en el proyecto académico, sin cargo formal hospitalario. Mantiene EN DESARROLLO y la advertencia de ausencia de implementación clínica/resultados.
- Se repitieron lint, TypeScript y build. El informe `final-content-cv-report.json` registra la QA de Home y las tres rutas a 1440/768/390, descarga por teclado, HTTP 200, MIME PDF, nombre de archivo, igualdad de bytes y enlaces internos.
- Las capturas e informe `phase2/report.json` anteriores documentan la validación inicial de Fase 2, previa a estos ajustes. El nuevo informe sustituye su comprobación histórica de CV ausente.
- No se cambiaron componentes, estilos, animaciones ni configuración SEO.
