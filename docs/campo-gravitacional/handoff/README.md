# Design Handoff para desarrollo — Campo gravitacional

Fransheska Ruiz · destino: `Fransheskajrb/portfolio-fransheska`.
Fuente exacta: commit `1b339224a27cd0527437480e5057f7aa3ea42fd4` del prototipo.
Página: https://fransheska-campo-gravitacional.fransheskaruizbonill.chatgpt.site
Fecha: 7 de octubre de 2026. No se modificó el diseño ni el repositorio destino.

## Autoridad y estado de entrega

`source/index.html` conserva el código literal de la versión aprobada. El CSS contiene capas de iteraciones: el orden de la cascada es parte del resultado y no debe interpretarse usando sólo la primera declaración. Los assets usados están incluidos. No sustituir Arial ni generar ilustraciones nuevas.

**No hay capturas ni grabaciones ya producidas en este paquete.** La descarga del navegador falló en el entorno de exportación. `capture.cjs` automatiza su generación desde el código incluido, sin acceder a la web privada. No se presentan imágenes generadas como capturas reales. `specs/export-status.json` identifica el estado pendiente.

## Archivos

- `source/index.html`: referencia ejecutable exacta, contenido, estilos y JS.
- `assets/graphite-depth-v2.png`: único fondo raster activo, generado originalmente aquí; no proviene de Magnific. Acompaña toda la web mediante una capa fija.
- `assets/favicon-fr.svg`: favicon FR extraído del data URI. El wordmark del header es texto Arial bold, no un logo gráfico adicional.
- `assets/network-renderer.js`: renderer exacto de la red; depende de `q`, `reduce` y el botón `.motion` declarados en el HTML. No funciona aisladamente sin esas dependencias.
- `specs/styles-exact.css`, `specs/interactions-exact.js`: exportación literal.
- `specs/textos-exactos.md`: textos estáticos y casos dinámicos.
- `specs/tokens.json`: colores y constantes centrales.
- `capture.cjs`: capturas y grabación reproducibles.

No hay SVG de la esfera: es Canvas con coordenadas 3D, no imagen. Sus tres iconos se dibujan por comandos Canvas. El gráfico de barras es HTML/CSS con alturas ilustrativas 35%, 60%, 45%, 85%, 70%; no son resultados reales. El visual FR y SIRIUS también son HTML/CSS. No inventar exports de assets que no existen. Los fondos de iteraciones anteriores no se usan y se excluyeron.

## Generar el material visual

En esta carpeta, con Node instalado:

```sh
npm install --no-save playwright
npx playwright install chromium
node capture.cjs
```

Produce capturas full page a 1440×900, 768×1024 y 390×844; detalles en desktop y mobile; estados de los tres proyectos, hover de proyecto/botón, navbar después del scroll, juego completo y un video WebM desktop. Zoom 100%, device scale factor 1. La referencia usa Arial del sistema: diferencias de rasterización entre plataformas pueden cambiar píxeles.

El script revela las secciones mediante scroll real antes de full page. El fondo es fijo al viewport: una captura larga nativa puede representarlo sólo en la primera pantalla. El video muestra el comportamiento real durante todo el recorrido; no cambiar el fondo a uno estirado para imitar una captura larga.

## Estados existentes y ausentes

| Petición | Estado real |
|---|---|
| Menú móvil abierto | No existe botón hamburguesa ni drawer. A ≤540 px se oculta Sobre mí y quedan Proyectos / Contacto. No inventar menú. |
| Navbar después de scroll | Es `position:absolute`; sale de pantalla. No sticky, color nuevo ni transformación. |
| Hover de proyectos | No hay transformación específica por hover. Clic selecciona; clic en el ya seleccionado abre dialog. |
| Hover de botones | `.solid` y botón de caso cambian fondo a #f4eee1, sin escala. |
| Software / Data / Automation | Eyebrow y tres nodos de la red, no sección independiente. |
| Experiencia | Dentro de Sobre mí, no sección propia. |
| Contacto | Abre un dialog de prototipo; no correo ni formulario operativo. |
| Selected Work | El título visible es “El criterio / toma forma.” |

## Tipografía exacta

Familia global Arial, Helvetica, sans-serif. Base 16 px / peso normal (400); wordmark bold (700). Los títulos h2/h3 conservan bold por defecto del navegador salvo regla explícita; no asumir que todos pesan 600.

| Elemento | Desktop | Tablet ≤900 | Mobile ≤540 |
|---|---|---|---|
| Nombre | clamp(80px,12vw,192px), 600, lh .88, tracking -.075em | 15vw | 22vw, lh .98 |
| Mensaje hero | clamp(25.6px,3vw,41.6px), lh 1.15, tracking -.04em | igual | igual, max 320px |
| Selected work h2 | clamp(48px,7vw,112px), lh .98, tracking -.06em | igual | 54.4px |
| Proyectos h3 | clamp(19.2px,2.7vw,36.8px), tracking -.04em | igual | 20px |
| Detalle proyecto h3 | 32px | 32px | 28px |
| Proceso h2 | clamp(32px,4vw,64px), lh 1.08 | igual | igual |
| About h2 | clamp(40px,5.4vw,88px), lh 1.05 | igual | 46.4px |
| Contacto h2 | clamp(43.2px,5vw,80px), lh 1.05 | igual | igual |
| Párrafos proceso/about/contacto | 18px | 18px | 18px |
| Navbar/eyebrow | 14px | 14px | 14px |
| Meta/footer/nota | 13px | 13px | 13px |

## Composición, spacing y responsive

No hay grid de 12 columnas, spacing de 8 px ni ancho máximo global. Son posiciones porcentuales y un recorrido asimétrico; `styles-exact.css` es la especificación completa.

Header padding 30px 5.5%; mobile 25px 6%. Nav gap 28px / 18px mobile. Hero min-height 960 / 880 / 800px; padding 175px 6% 80px, mobile top125px. Nombre margin45px 0 34px; segundo renglón desplazado 11%, mobile9%.

Red: desktop right−20px top100px width58vw height760px; tablet right−90px top350px width76vw height520px; mobile right−55px top430px width100vw height350px. Las posiciones de la red pueden coincidir con texto en ciertas pantallas: conservar para la transferencia y revisar cualquier corrección por separado.

Work padding20px 6% 80px (mobile top10px). Alto de campo de proyectos760 / 900 / 1040px. Proceso max-width780px. About max-width1030px, párrafos max630px; experiencia indent25% (mobile9%). Contacto margin60px 6% 100px 52%; tablet left25%, mobile margin50px 6% 90px 16%. Footer padding25px 6%, mobile wrap. Dialog max-width680px, width90%, max-height85vh, padding40px.

| Posición proyecto | Desktop ancho/left/top/rotación | Tablet | Mobile |
|---|---|---|---|
| Activo 1 | 62% / 32% / 0 / 3deg | 80% / 14% / 220px / 3deg | 94% / 2% / 295px / 3deg |
| Secundario 0 | 28% / 3% / 395px / −5deg | 38% / 0 / 660px / −5deg | 52% / 0 / 665px / −5deg |
| Secundario 2 | 23% / 73% / 530px / −6deg | 36% / 60% / 720px / −6deg | 45% / 53% / 820px / −6deg |

Surface alto200px (activo380), tablet activo270; mobile130 (activo230). Padding26px /16px mobile. El botón de caso del panel lateral se oculta ≤900px: el proyecto activo sigue abriendo el caso.

## Movimiento exacto

| Componente | Duración / easing | Cambio |
|---|---|---|
| Selección proyectos | transform900ms cubic-bezier(.2,.7,.2,1); width/left/top900ms ease | Reubica y rota según data-pos; no escala CSS explícita |
| Surface | height900ms ease; background500ms ease | Cambio de alto y gradiente; background-image no garantiza interpolación continua |
| Reveal | opacity800ms ease; transform1000ms ease | y30→0px; IntersectionObserver threshold .1; ocurre una vez |
| Juego | 650ms cubic-bezier(.2,.8,.2,1) | Primer clic translate(−95px,45px); segundo ✓; tercero restaura |
| Links | Sin transición definida | color #fff8eb en hover |
| Botones | Sin transición definida | fondo #f4eee1 en hover; sin escala |
| Dialog | Sin animación de entrada definida | showModal, backdrop blur9px; Escape/cerrar/clic exterior |
| Scroll | CSS smooth | Duración/easing controlados por navegador, no definidos numéricamente |

Red: 112 nodos sobre esfera Fibonacci; cada nodo unido a sus 5 vecinos más próximos, aristas deduplicadas. Proyección perspectiva k=3.7/(3.7−z), scale=min(width×.29,height×.255), centro(.56w,.48h). Yaw=.32+px×.38; pitch=−.14+py×.24. Suavizado por frame `px+=(tx−px)*.055`, idem py; no duración fija en ms, depende del frame rate. RAF se detiene al estabilizarse (error total≤.001), fuera de viewport o documento oculto. Sin rotación automática permanente.

Cursor normaliza tx/ty a −1..1. Scroll cambia ty=min(scrollY/700,1)×.65; coarse pointer también tx=min(scrollY/500,1). Puntero touch no controla giro por pointermove. Atrás blur.8px, edges blur.65px; puntos cercanos glow5/16px y perspectiva. Skills tienen coordenadas3D y placas5px radius; Python/React/SQL/TypeScript/Next.js/Oracle APEX/Git/Power BI/Figma. Labels10px mobile/12px desktop, nodos temáticos9/10px. La resolución Canvas limita DPR a2. Sin WebGL ni modelo3D importado.

Reduced motion: respeta prefers-reduced-motion y botón local. Desactiva transiciones y reveal; esfera neutral px=py=0. No almacenamiento persistente. En modo manual reducido CSS scroll smooth permanece (el media query del sistema sí lo desactiva); conservar como está, no prometer otra conducta.

Hay handlers antiguos que escriben --mx/--my/--turn y estilos `.plane`, pero el transform actual `none!important` y la ausencia de `.plane` los hacen inactivos. No usarlos como motion final. La trayectoria y ring del contacto están ocultos.

## Alcance del contenido

Análisis de datos está Implementado. Portfolio y SIRIUS En desarrollo. Representaciones de proyectos son ilustrativas, no capturas reales. Textos de resultados y contacto son de prototipo; no inventar métricas, emails ni disponibilidad adicional. Reproducir textos de `textos-exactos.md` y el array `projects`.

## Instrucción para Codex

Implementar esta versión en el repo destino, sin nuevo discovery, alternativas ni cambio de diseño. Primero leer README y ejecutar capture.cjs para obtener el material visual pendiente. Conservar la cascada y la lógica original al portarlas al stack existente. Validar 1440/768/390 y juego/selección/dialog/reduced motion. Separar cualquier arreglo de UX o contenido como propuesta posterior, sin mezclarlo con la transferencia1:1.
