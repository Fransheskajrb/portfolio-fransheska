# Selección pública actualizada

La selección pública final es:

1. Análisis de Metas Institucionales — IMPLEMENTADO — Oracle APEX / SQL.
2. Agenda de Sala / Gestión de Sala — IMPLEMENTADO — reservas, disponibilidad, aprobaciones y reportes administrativos.

Home conserva su composición y sus interacciones. El selector opera con dos
proyectos, sin aritmética fija para tres elementos. El segundo visual es una
ilustración de calendario en la superficie y paleta existentes, sin datos reales.
Los casos mantienen la lectura técnica y el sistema Campo gravitacional.

Portfolio y SIRIUS permanecen disponibles en sus rutas originales para conservar
compatibilidad, pero tienen `noindex, nofollow`. No se muestran en Home, selector,
navegación entre casos ni sitemap. Se conserva su código y contenido interno.

## Contenido de Agenda

Se usa únicamente lo respaldado por las capturas: calendario, disponibilidad,
reservas, aprobaciones, gestión de sala/materiales y reportes administrativos con
filtros de periodo/estado y opciones de Excel/PDF. Supabase figura explícitamente
en el texto de Reportes. No se deduce el resto del stack, fechas, rol profesional,
métricas, impacto ni decisiones de arquitectura. Año y rol no se muestran en este
caso porque no fueron proporcionados. Sus cifras demostrativas no se convierten
en resultados del proyecto.

## Evidencia visual

Los cuatro PNG del ZIP se copiaron sin transformación. Conservan las etiquetas
incrustadas y se muestran completos, con proporción original y enlace accesible
a tamaño completo. No se aplica recorte, overlay ni eliminación de información.

- `public/images/cases/metas-sanitarias.png`
- `public/images/cases/acreditacion.png`
- `public/images/cases/agenda-sala.png`
- `public/images/cases/reportes-sala.png`

Aclaración del caso principal: «Capturas anonimizadas · datos demostrativos ·
valores institucionales protegidos». Agenda conserva la aclaración de información
protegida. Los pies indican que las cifras no representan resultados reales.

SHA-256 de los originales públicos:

```json
{
  "public/images/cases/metas-sanitarias.png": "5c74beed707293353e705cad8b0a82f45311bbe4a7765040dc20da5d6128b729",
  "public/images/cases/reportes-sala.png": "e03bef9c0d2bff3240268b9acb826580da0e29fdd06339fea5dfc1e2cf065f7e",
  "public/images/cases/agenda-sala.png": "d04b6bb5023c162ffeba76155a0ff279bd2bc53b48cd305ff6166ff5c3dc021f",
  "public/images/cases/acreditacion.png": "e30935e31c107656d9ff02403bc5eb7fb83707ffe422d0fa32e640ec9a6db9b2"
}
```

## QA

Lint, TypeScript y build; Home y ambos casos a 1440×900 / 768×1024 / 390×844;
selector, dialogs y Escape, navegación, enlaces, imágenes completas y HTTP 200,
IDs, ausencia de desbordamiento de casos, CV, movimiento reducido del sistema y
manual, sitemap y rutas archivadas con noindex. Capturas e informe en
`public-projects/`. Sin nuevas dependencias, merge ni despliegue de producción.

Esta selección reemplaza la selección anterior documentada en PHASE2.md. Los
informes y capturas previos se conservan como evidencia histórica.

## Portadas reales de los casos públicos

El header público ahora presenta título/resumen, facts y una captura real completa:

- Metas: `metas-sanitarias.png` como portada; `acreditacion.png` en «Capturas del sistema».
- Agenda: `agenda-sala.png` como portada; `reportes-sala.png` en «Capturas del sistema».

Se eligen las vistas de seguimiento y calendario porque muestran directamente la
función principal de cada proyecto. La galería precede al resto del contenido y
no duplica la portada. Imágenes sin recorte, proporciones originales, etiquetas y
aclaraciones conservadas. Home y las rutas archivadas mantienen sus visuales.

Se repitieron lint, TypeScript y build, y se verificaron los dos casos en los tres
tamaños, imágenes HTTP 200, orden, captions, proporciones y ausencia de overflow.
Capturas e informe actuales en `case-covers/`; script `case-covers-check.cjs.txt`.
Las capturas de `public-projects/` preceden este ajuste de portadas.
