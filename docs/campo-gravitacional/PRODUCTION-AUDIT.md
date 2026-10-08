> Correcciones y mediciones actuales: [FINAL-PRODUCTION-CHECK.md](./FINAL-PRODUCTION-CHECK.md). Los pendientes de contraste y LCP descritos aquí corresponden a la auditoría anterior.

# Auditoría final — rendimiento, seguridad y producción

Auditoría sobre `redesign/campo-gravitacional`, PR #1 en Draft. Sin merge ni despliegue de producción. Mediciones locales de build de producción; no representan rendimiento de usuarios reales.

## Cambios aplicados

- Canvas conserva geometría, colores, etiquetas, interacción y reduced motion. Agrupa desenfoques por plano en un canvas auxiliar; limita DPR a 1.5 en desktop y conserva 2 en móvil. Cancela frames fuera del viewport o con documento oculto e ignora eventos sin cambio. No hay loop permanente cuando termina la interpolación.
- Fondo y capturas servidos mediante WebP sin pérdida: igualdad de píxeles comprobada. Fondo 2,021,013 → 1,372,950 bytes. Preload del fondo y carga de capturas al acercarse a Proyectos; se mantiene la caja para evitar desplazamientos.
- Headers CSP, nosniff, Referrer-Policy, Permissions-Policy y DENY/frame-ancestors. CSP sin eval en producción; excepción inline para hidratación y estilos existentes. Preview autoriza integración Vercel; desarrollo permite eval para HMR. Esta CSP no sustituye una política estricta con nonce/hash.
- Next y eslint-config-next actualizados 16.2.6 → 16.3.8, además de actualizaciones compatibles del lockfile. Sin upgrades mayores ni nuevas librerías de aplicación.
- Selector con role group y nombres accesibles que incluyen sus números visibles; botones de proyecto utilizan su contenido visible como nombre.
- Redacción determinista con Python, autorizada por la propietaria: se cubrieron únicamente marcas/nombres institucionales en las cuatro capturas. Todos los píxeles restantes, cifras y etiquetas de protección permanecen iguales. También se regeneraron 22 capturas históricas de QA en el árbol actual.

## Medición Canvas antes/después

Mismo harness aislado, Chromium headless con rasterización software, DPR inicial 2, 24 frames sintéticos de interacción y 3 repeticiones secuenciales por tamaño. Se compara el código anterior `2eeb4c7` con el actual. No son FPS de un equipo físico ni tiempos de carga del sitio.

| Escenario | Mediana anterior | Mediana actual | Canvas físico antes → después |
| --- | ---: | ---: | --- |
| Desktop | 48,868 ms | 1,128.5 ms | 1670×1520 → 1253×1140 |
| Móvil | 7,039.8 ms | 404.2 ms | 686×577 → 686×577 |

Frames observados tras salir del viewport: 1 → 0. La mayor mejora corresponde a rasterización/compositing, no al tiempo JavaScript de draw. Comparación visual adjunta: composición conservada; DPR desktop puede introducir diferencias mínimas de antialiasing. Móvil mantiene resolución.

## Lighthouse final

Lighthouse 13.5.0, mediciones secuenciales contra `next start` sin otros benchmarks concurrentes.

| Perfil | Performance | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Desktop | 85 | 100 | 100 | 100 | 1.54 s | 0 | 250 ms |
| Mobile simulado | 74 | 100 | 100 | 100 | 8.72 s | 0 | 140 ms |

Transferencia inicial medida: 1,549,063 bytes, frente a 3,057 KB en la medición intermedia sin diferir capturas. El fondo lossless sigue siendo pesado en red móvil simulada: LCP móvil pendiente. INP requiere medición de campo; TBT es solo una referencia de laboratorio. No se modificó calidad visual para mejorar puntuaciones.

## Dependencias y seguridad

`npm audit` inicial: 1 crítica, 33 altas, 1 moderada, 0 bajas. Final: 0 críticas, 5 altas, 0 moderadas, 0 bajas. `npm audit --omit=dev`: 0 en todas las categorías.

Las cinco altas restantes pertenecen a la cadena de desarrollo braces → micromatch → fast-glob → plugin ESLint Next → eslint-config-next. El aviso de braces (GHSA-vfj7-8cjw-p6xm) afecta patrones glob anidados no confiables; no se incorpora al runtime de producción. No había parche compatible de braces publicado durante esta auditoría. No se aplicó force ni downgrade mayor sugerido por audit.

CSP funciona sin errores observados en navegador. `unsafe-inline` continúa como limitación de defensa frente a XSS; adoptar nonce/hash necesita una adaptación independiente de generación/cache. No se encontraron claves privadas, archivos env versionados ni patrones de secretos en fuentes revisadas; esto no es una auditoría de seguridad exhaustiva.

## Privacidad

Árbol actual: OCR/inspección visual de cuatro capturas sin las identificaciones institucionales detectadas; sin coincidencias de RUT/correos personales en esas imágenes; PNG/WebP sin EXIF sensible. Alt text y datos públicos revisados. El email profesional y CV aprobado son públicos intencionalmente. Las cifras se mantienen como demostrativas según lo declarado por la propietaria; no se puede certificar su procedencia mediante OCR.

**Límite importante:** originales siguen recuperables en commits anteriores y pueden estar en previews antiguas. Esta redacción protege los assets actuales; no anonimiza el historial Git ni invalida copias ya distribuidas. No se reescribió historia ni se eliminaron deployments. Resolver retención de originales requiere una decisión separada antes de tratar el repositorio completo como anonimizado.

## QA y accesibilidad

- Lint, TypeScript (`tsc --noEmit --incremental false`) y build pasan con Next 16.3.8.
- Home, Metas y Agenda: HTTP 200 a 1440×900, 768×1024 y 390×844. Sin errores de navegador/CSP; enlaces internos e imágenes presentes responden 200.
- Skip link visible al foco y conectado a main; teclado, foco visible, dialogs con nombres, Tab y Escape/retorno de foco; reduced motion de sistema y manual verificados.
- Axe: 0 infracciones automáticas WCAG A/AA en los nueve escenarios. El contraste sobre el fondo fotográfico queda incompleto en axe: la puntuación 100 no certifica contraste manual.
- **Hallazgo manual:** frase pequeña `.hero .note` sobre fondo atmosférico: mediana aproximada 4.16:1, mínimo 2.88:1 en muestras de fondo bajo glifos; requiere 4.5:1 para texto normal. Pendiente corrección visual mínima aprobada; no se cambió el diseño para ocultar el hallazgo.
- Canonical, sitemap, robots, favicon, OG y Twitter summary_large_image comprobados. OG 200 y bytes originales aprobados intactos.
- `/case-studies/portfolio`: 404. SIRIUS sin enlaces públicos, fuera de sitemap, ruta interna con noindex.
- CV: 200, descarga de mismo origen, nombre correcto, bytes del PDF aprobado y activación por teclado en tres páginas y tres tamaños.
- Enlaces externos revisados en el código; disponibilidad de servicios externos no se certifica con QA local.

## Pendientes antes de producción

1. Corregir contraste de la nota del Hero con una intervención visual mínima.
2. Evaluar optimización del fondo para mejorar LCP móvil; cualquier compresión con pérdida/asset alternativo debe mantener calidad aprobada.
3. Resolver política de retención de identificaciones en Git/previews antiguas si esas copias no pueden seguir accesibles.
4. Seguimiento del parche de herramientas de desarrollo y eventual CSP estricta, sin vulnerabilidades conocidas de producción pendientes en npm audit.

No faltan CV ni Open Graph. PR permanece Draft y no se ha hecho merge.
