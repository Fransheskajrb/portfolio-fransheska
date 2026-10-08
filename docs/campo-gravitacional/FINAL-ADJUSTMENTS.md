# Ajustes finales de Home, rutas y metadata

## Implementado

- Hero mobile (hasta 540 px): nombre 15vw con límites 46–76 px (58,5 px a 390), padding superior 112 px, título principal 6,7vw, párrafos de 16 px. La esfera pasa al flujo normal bajo el enlace, con altura adaptable, sin superponer texto. Nota debajo de la esfera. Navbar Home más discreta; sin menú nuevo ni sticky. Desktop/tablet conservan el Hero previo.
- Home / proyectos: `metas-sanitarias.png` y `agenda-sala.png` dentro de las superficies existentes. `object-fit: contain`, sin recorte, bytes ni etiquetas alterados; mismo selector y animaciones. Datos de evidencia centralizados para no duplicar la elección de portada.
- `/case-studies/portfolio` excluido de generateStaticParams y getCaseStudy. HTTP 404; no se enlaza desde la experiencia pública. Su contenido permanece versionado internamente.
- SIRIUS mantiene noindex y sigue fuera de Home, selector, navegación y sitemap.
- Metadata global reutiliza pageMetadata, que incluye el asset social aprobado únicamente cuando existe. Ruta prevista: `public/images/og-campo-gravitacional.png`.

## Open Graph integrado

La imagen aprobada del ZIP se copió sin transformación a
`public/images/og-campo-gravitacional.png`. Tamaño: 1731×909, 2.116.264 bytes.
SHA-256 idéntico al original:
`6190fc9fca441b619873cdd604d73341b1e348ce1f531b7b4946a252cc3cdc9e`.

La metadata global y de Home/ambos casos reutiliza la infraestructura existente:
`og:image` y `twitter:image` apuntan a
`https://www.fransheskaruiz.com/images/og-campo-gravitacional.png`;
Twitter usa `summary_large_image`. Asset HTTP 200/image-png y bytes originales
verificados sobre el build de producción local. No se modificó código, diseño,
animaciones ni contenido del sitio para activar la imagen social.

La QA final está en `final-open-graph-report.json` y el script en
`final-open-graph-check.cjs.txt`. Incluye Home y ambos casos a 1440/768/390,
metadata de las tres páginas, enlaces internos/assets, CV por teclado y bytes,
Portfolio 404 y SIRIUS excluido de la experiencia principal/sitemap con noindex.

Pendiente externo: comprobar LinkedIn desde un navegador normal; el proxy impide
su validación externa. Los scrapers sociales del dominio de producción solo verán
el nuevo asset después del merge y despliegue, que no se han realizado.

## Validación

Lint, TypeScript y build pasaron. QA Home a 1440/768/390 y adicionalmente 320/540:
nombre dentro del viewport, navbar separada, esfera fuera del texto, capturas correctas
completas y HTTP 200, selección y dialogs por teclado. Casos públicos HTTP 200,
Portfolio HTTP 404, SIRIUS noindex y sitemap con solo dos casos públicos.
Capturas e informe en `final-home/`; script en `final-home-check.cjs.txt`.

Sin nuevas dependencias, merge ni despliegue de producción. PR permanece Draft.
