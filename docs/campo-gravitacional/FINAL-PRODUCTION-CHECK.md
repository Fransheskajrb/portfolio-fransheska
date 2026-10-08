# Correcciones finales antes de merge

PR #1 mantiene Draft. Sin merge, producción, force push, reescritura de commits ni eliminación de deployments.

## Contraste

Único ajuste visual: `.hero .note` usa el color existente `--ink` (#f2eee6) y un halo grafito de 1–3 px mediante text-shadow. Conserva tipografía, tamaño, posición y composición. Aclarar el color solo no alcanzaba AA en zonas luminosas.

**Mínimo medido: 5.89:1** en 1440/768/390/320 y cuatro posiciones verticales de scroll por ancho (16 escenarios). Umbral: 4.5:1. Se capturó texto visible y fondo con el relleno del texto transparente, conservando el halo; se muestreó el fondo bajo glifos y se calculó luminancia sRGB WCAG con el color nominal del texto, excluyendo antialiasing del color nominal. Reduced motion estabiliza el Canvas; los resultados corresponden a estos escenarios, no a una certificación global del sitio.

## Fondo y LCP

Variante `public/assets/graphite-depth-mobile.webp`: misma imagen y resolución 1672×941, WebP calidad 95, 218,644 bytes frente a 1,372,950. Reduce 84.1% el asset manteniendo encuadre, background-size/position, gradientes y opacidad. No se reduce resolución porque cover en pantallas altas exige altura suficiente. Desktop mantiene el WebP lossless original.

CSS cambia la URL únicamente a anchos ≤900px. Dos preloads condicionados por media queries coinciden con el breakpoint; se descarga y prioriza solo la variante correspondiente. No se elimina el fondo ni se modifica Canvas/estructura/contenido/footer.

Comparación visual del build en cuatro tamaños: mismas dimensiones/composición; diferencia media RGB menor a 0.07/255 en capturas completas, percentil 99 ≤1/255. Desktop solo difiere en la nota. Capturas adjuntas.

Lighthouse 13.5.0 local, build de producción, Chromium headless. **Medianas de tres ejecuciones secuenciales por perfil**, sin otros navegadores de QA activos. Puntuaciones de laboratorio, sensibles al host; no son INP real ni garantía de Core Web Vitals de campo.

| Perfil | Performance | LCP | CLS | TBT | Bytes iniciales |
| --- | ---: | ---: | ---: | ---: | ---: |
| Desktop | 91 | 1.53 s | 0 | 154 ms | 1551031 |
| Mobile | 91 | 3.31 s | 0 | 162 ms | 396723 |

Referencia de auditoría previa: desktop 85/1.54 s; móvil 74/8.72 s. Desktop conserva LCP/asset; mobile reduce transferencia y LCP significativamente. El elemento LCP observado es el h1, no una captura de proyectos; el fondo grande competía durante carga inicial. Aun con mejora, LCP móvil de laboratorio continúa por encima de 2.5 s y conviene verificarlo en tráfico real.

## Validación

Lint, TypeScript y build pasan. Home inspeccionada visualmente a 1440/768/390/320. Headers CSP/nosniff/Referrer/Permissions/frame-ancestors y DENY verificados; sin cambio de política ni errores CSP. Open Graph y Twitter summary_large_image correctos, imagen 200 y bytes aprobados intactos. CV 200, nombre y bytes originales, descarga por teclado y mismo origen. Home/Metas/Agenda 200 en tres tamaños; Portfolio 404; SIRIUS noindex, sin promoción pública y fuera del sitemap. Sin enlaces internos rotos detectados.

## Diagnóstico exacto de capturas históricas

Cada PNG tiene **dos versiones**. Introducción de los cuatro originales: `d2927f0461c4888531c6be9d88fe7383f776cc41`. Se conservan idénticos en:

- `55545b9282f8bef211f81b0b44aa878053260194`
- `6df6fd280bba71a9302caefa0440530f1b569dd3`
- `2eeb4c79c58bce3c34a3ab1176527bee6184d9dc`

Redacción aplicada en `f60e164210e3a125198ae3d760cb6d5da5b6d6ea`; `1a6aea485b69280c585dd530618b4981ca53a89e` conserva esa versión. Los WebP nacen en f60e164 y ya están redactados.

| Archivo exacto | Diferencia histórica retirada | Rectángulo de píxeles modificados (x0,y0,x1,y1 exclusivo) |
| --- | --- | --- |
| public/images/cases/metas-sanitarias.png | Sigla institucional en título | 477,12,525,35 |
| public/images/cases/acreditacion.png | Sigla institucional en título | 438,10,484,33 |
| public/images/cases/agenda-sala.png | Emblema institucional; nombre ya protegido | 14,14,78,77 |
| public/images/cases/reportes-sala.png | Logo y nombre institucional visible | 19,14,80,78 |

Identificadores de blobs y SHA por commit están en `final-production/capture-history.json`. OCR e inspección visual no identificaron nombres personales, correos reales ni RUT en originales; EXIF ausente. Todos los píxeles fuera de esos rectángulos siguen iguales: no desaparecieron cifras/resultados ni otros datos personales. No se puede certificar procedencia real de cifras mirando una imagen: permanecen demostrativas según la declaración de la propietaria y las etiquetas, que no se retiraron.

**GitHub:** repositorio público; las cuatro URLs raw de originales d2927f0 responden 200 sin autenticación y coinciden exactamente con Git. Cambiar HEAD no las oculta.

**Vercel:** API GitHub registra cuatro previews históricas exitosas, IDs 6935498760 (d2927f0), 6935906845 (55545b9), 6936511517 (6df6fd2), 6936852504 (2eeb4c7). Este entorno bloquea sus URLs en el túnel con 403; no puede verificarse disponibilidad pública actual ni interpretarse ese bloqueo como eliminación/protección de Vercel. Si siguen accesibles, contienen los originales según sus commits de build.

También existían copias en 22 capturas de QA: seis public-projects introducidas d2927f0, seis case-covers en 55545b9 y diez final-home en 6df6fd2. Fueron sustituidas en f60e164; las anteriores permanecen en historial. Archivos exactos:

- `docs/campo-gravitacional/case-covers/desktop-institutional-goals.png`
- `docs/campo-gravitacional/case-covers/desktop-room-management.png`
- `docs/campo-gravitacional/case-covers/mobile-institutional-goals.png`
- `docs/campo-gravitacional/case-covers/mobile-room-management.png`
- `docs/campo-gravitacional/case-covers/tablet-institutional-goals.png`
- `docs/campo-gravitacional/case-covers/tablet-room-management.png`
- `docs/campo-gravitacional/final-home/projects-1440-1.png`
- `docs/campo-gravitacional/final-home/projects-1440-2.png`
- `docs/campo-gravitacional/final-home/projects-320-1.png`
- `docs/campo-gravitacional/final-home/projects-320-2.png`
- `docs/campo-gravitacional/final-home/projects-390-1.png`
- `docs/campo-gravitacional/final-home/projects-390-2.png`
- `docs/campo-gravitacional/final-home/projects-540-1.png`
- `docs/campo-gravitacional/final-home/projects-540-2.png`
- `docs/campo-gravitacional/final-home/projects-768-1.png`
- `docs/campo-gravitacional/final-home/projects-768-2.png`
- `docs/campo-gravitacional/public-projects/desktop-institutional-goals.png`
- `docs/campo-gravitacional/public-projects/desktop-room-management.png`
- `docs/campo-gravitacional/public-projects/mobile-institutional-goals.png`
- `docs/campo-gravitacional/public-projects/mobile-room-management.png`
- `docs/campo-gravitacional/public-projects/tablet-institutional-goals.png`
- `docs/campo-gravitacional/public-projects/tablet-room-management.png`

## Recomendación segura, sin ejecutar limpieza

Dado que la identificación institucional no está autorizada, conviene restringir o retirar las cuatro previews antiguas en una acción expresamente autorizada y coordinar la eliminación de blobs/cachés históricos con GitHub. Para el repositorio público, una limpieza efectiva puede requerir un plan acordado de historia/referencias o una copia pública limpia con archivo original restringido; ninguna opción debe ejecutarse automáticamente ni prometer borrar clones/capturas de terceros. No se reescribió ni eliminó nada durante esta tarea.

No hay un fallo técnico que impida construir/desplegar la versión actual. La exposición comprobada de marcas en GitHub histórico sigue pendiente de una decisión de privacidad antes de considerar completamente cerrada esa parte. Los avisos de desarrollo y la excepción inline de CSP se mantienen como limitaciones documentadas en la auditoría anterior.
