# Campo gravitacional — transferencia de Fase 1

Fuente: `Design-Handoff-Campo-Gravitacional.zip`, prototipo aprobado en commit
`1b339224a27cd0527437480e5057f7aa3ea42fd4`. El ZIP sustituye el brief preliminar.
Los checksums del paquete original se verificaron antes de generar capturas.

## Adaptación al proyecto

- Next.js 16 / React 19 / TypeScript / Tailwind 4 / Motion existente. Sin dependencias nuevas ni modificaciones del lockfile.
- Layout, Navbar, Hero, SelectedWork, Process, About, Footer y los visuales de tarjetas son Server Components. El contenido estático se pasa a las pequeñas fronteras cliente cuando corresponde.
- Client Components: selección de proyectos, dialogs nativos, juego, botón de movimiento, reveal y Canvas.
- Datos del handoff estructurados en `src/data/campoProjects.ts`; los dialogs renderizan elementos React, sin `innerHTML` ni HTML inyectado.
- `src/lib/skillNetwork.ts` conserva geometría, proyección, dibujo y suavizado del renderer. Añade tipos y limpieza de RAF, eventos y observers al desmontar.
- Motion `useInView` observa el mismo umbral de 0.1, una sola vez. La cascada original controla duración y easing; no se añadieron animaciones.
- El CSS exportado se mantiene en su orden literal después de importar theme/utilities de Tailwind. Se omite Preflight porque su reset cambiaría los pesos, márgenes, botones y dialogs del prototipo.
- Arial del sistema, fondo fijo original y favicon incluido. No fuentes remotas, menú móvil, selector de idioma ni navbar sticky.
- Se conservan `/case-studies/institutional-goals`, `/case-studies/portfolio` y `/case-studies/sirius`. Solo se alinearon estados y prioridad de sus datos; no se implementaron sus nuevas páginas completas.

## Comportamientos heredados deliberadamente

No son mejoras pendientes de esta transferencia; cualquier cambio requiere una propuesta aparte.

- A ≤900 px `.work-detail button { display:none }` también oculta 01/02/03. Las tarjetas seleccionan y el segundo clic en la activa abre el caso.
- La red sobresale del viewport. Las capturas full-page tienen anchos 1460 / 858 / 445 pese a viewports de 1440 / 768 / 390. No se ajustó el layout para ocultar esta diferencia heredada.
- El fondo es fijo al viewport; una captura larga solo lo representa en la primera pantalla. No se estiró la imagen para imitar el screenshot.
- El movimiento reducido del sistema desactiva scroll suave; el botón local conserva ese scroll, como la referencia.
- El juego sigue desplazando el botón al primer clic incluso en modo reducido, pero sin transición.
- Contacto abre el dialog de prototipo; no se inventó un correo, formulario ni disponibilidad adicional.
- Los gráficos de tarjetas son ilustrativos, no capturas del sistema ni resultados medidos.

## Reproducir las capturas

La fuente congelada está en `handoff/source/index.html`; los assets activos están en
`public/assets/`. Para ejecutar el exportador desde una carpeta temporal:

1. Copiar `handoff/source/` y `public/assets/` a esa carpeta.
2. Crear `capturas/`, `estados/`, `motion/` y `specs/`.
3. Copiar `handoff/capture-compatible.cjs.txt` como `capture.cjs`.
4. Proporcionar Playwright y Chromium/FFmpeg desde las herramientas de QA, sin añadirlos a las dependencias de la aplicación.
5. Ejecutar `node capture.cjs`.

El exportador original (`capture.cjs.txt`) se ejecutó primero y se detuvo al intentar
pulsar el selector oculto en móvil. La copia compatible solo cambia la selección
móvil para utilizar las tarjetas visibles. No cambia HTML, CSS, JS ni assets de la
referencia. En este entorno se usaron Chromium y FFmpeg del sistema con Playwright
ya disponible; no se descargaron paquetes adicionales para QA.

La implementación se capturó usando el mismo recorrido contra el servidor de
producción local. El informe de validación y las imágenes se guardan en `evidence/`.
La grabación completa se conserva fuera del checkout en `/workspace/campo-evidence/`.

## Alcance posterior

Fase 2: integrar progresivamente las páginas de caso, metadata individual, sitemap,
robots, Open Graph, CV y assets finales. No hubo merge ni despliegue de producción.

## Resultados de validación

- `npm run lint`: pasó, sin advertencias.
- `npx --no-install tsc --noEmit --incremental false`: pasó.
- `npm run build`: pasó; `/` prerenderizada y `/case-studies/[slug]` conservada.
- Desarrollo y producción: respuesta HTTP 200 con Hero y proyectos.
- Tres rutas de caso: 200 y estado correcto; slug inexistente: 404.
- Seis recorridos funcionales: referencia e implementación en cada viewport. Selección de los tres proyectos; dialogs, Escape, botón Cerrar y backdrop; tres estados del juego; respuesta al puntero; modos reducido manual y del sistema. Sin errores de navegador.
- Los diez bloques inspeccionados tienen estilos calculados y geometría idénticos en los tres tamaños.
- Canvas neutral: igualdad exacta de la imagen del canvas en los tres tamaños.

### Diferencias restantes de captura

No se detectaron diferencias de composición o estilo al inspeccionar las imágenes.
En el estado neutral completo persisten 54 / 61 / 142 píxeles distintos en
escritorio / tablet / móvil (0.000895% / 0.001852% / 0.007533%). Se localizan en
la rasterización de texto de tarjetas rotadas; no corresponden a tamaños o
posiciones diferentes. No se cambiaron los transforms aprobados para forzar
igualdad de antialiasing.

La captura móvil con movimiento habilitado difiere en 0.702698% de píxeles,
principalmente en la red: el estado depende de frames y eventos de scroll.
La comparación neutral confirma que no existe una geometría distinta del Canvas.

Informe cuantitativo: [comparison-report.json](evidence/comparison-report.json).
Recorridos funcionales: [functional-report.json](evidence/functional-report.json).

| Viewport | Referencia | Next.js |
|---|---|---|
| 1440 × 900 | [Captura](evidence/desktop-reference.png) | [Captura](evidence/desktop-implementation.png) |
| 768 × 1024 | [Captura](evidence/tablet-reference.png) | [Captura](evidence/tablet-implementation.png) |
| 390 × 844 | [Captura](evidence/mobile-reference.png) | [Captura](evidence/mobile-implementation.png) |

Los dialogs y los estados neutrales también están en `evidence/`. Capturas
adicionales, estados del juego y vídeos completos están en `/workspace/campo-evidence/`.

## Correcciones de accesibilidad aprobadas después de la transferencia

Estas tres correcciones fueron autorizadas expresamente para cerrar Fase 1:

- Enlace global «Saltar al contenido», visible únicamente al recibir foco. Tanto la portada como las rutas de casos tienen `main-content` y `tabIndex=-1` para recibir el foco.
- Dialogs con `aria-labelledby`: `case-title` y `contact-title`, sin IDs duplicados. No cambian showModal, cierre, estilos ni gestión nativa de foco.
- MotionToggle observa `prefers-reduced-motion` con `useSyncExternalStore`. `aria-pressed` representa sistema OR elección manual. Cuando el sistema exige reducción, muestra «Movimiento reducido por el sistema» y queda deshabilitado; al cambiar esa preferencia vuelve a reflejar la elección manual conservada. No se modificaron las animaciones.

Validación posterior sobre build de producción: lint, TypeScript y build pasaron.
Siete recorridos funcionales completados: navegación solo con teclado a 1440/768/390,
los tres casos y el dialog de contacto con nombre accesible, Escape/Cerrar/backdrop,
foco inicial y restauración, juego y botón de movimiento; preferencia del sistema
inicial y cambios en caliente; preferencia manual conservada. También se verificó
el enlace de salto en las tres rutas de casos. Sin errores de navegador.

La navegación Tab del dialog nativo puede pasar por la interfaz del navegador
(reflejada como `document.body` en Chromium); no permite enfocar controles de la
página detrás del dialog. Se conserva este comportamiento nativo.

Resultado: [accessibility-report.json](evidence/accessibility-report.json).
Script: `accessibility-check.cjs.txt`, ejecutado como archivo `.cjs` con Playwright
ya disponible y un servidor de producción en el puerto 3002.
Las capturas anteriores siguen documentando la transferencia visual aprobada.
