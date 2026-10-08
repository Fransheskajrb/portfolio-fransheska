# Ajustes finales de Home, rutas y metadata

## Implementado

- Hero mobile (hasta 540 px): nombre 15vw con límites 46–76 px (58,5 px a 390), padding superior 112 px, título principal 6,7vw, párrafos de 16 px. La esfera pasa al flujo normal bajo el enlace, con altura adaptable, sin superponer texto. Nota debajo de la esfera. Navbar Home más discreta; sin menú nuevo ni sticky. Desktop/tablet conservan el Hero previo.
- Home / proyectos: `metas-sanitarias.png` y `agenda-sala.png` dentro de las superficies existentes. `object-fit: contain`, sin recorte, bytes ni etiquetas alterados; mismo selector y animaciones. Datos de evidencia centralizados para no duplicar la elección de portada.
- `/case-studies/portfolio` excluido de generateStaticParams y getCaseStudy. HTTP 404; no se enlaza desde la experiencia pública. Su contenido permanece versionado internamente.
- SIRIUS mantiene noindex y sigue fuera de Home, selector, navegación y sitemap.
- Metadata global reutiliza pageMetadata, que incluye el asset social aprobado únicamente cuando existe. Ruta prevista: `public/images/og-campo-gravitacional.png`.

## Bloqueo del asset Open Graph

La imagen aprobada se recibió como imagen embebida en el chat. No está disponible
como archivo descargable en el entorno; no se recreó ni se sustituyó. Falta adjuntar
el PNG original o un ZIP. No se afirma que Open Graph esté integrado ni validado.
El helper continúa con metadata textual sin enlace roto; cuando llegue el archivo
se copiará sin transformación, se reconstruirá y se validarán OG/Twitter/HTTP.

## Validación

Lint, TypeScript y build pasaron. QA Home a 1440/768/390 y adicionalmente 320/540:
nombre dentro del viewport, navbar separada, esfera fuera del texto, capturas correctas
completas y HTTP 200, selección y dialogs por teclado. Casos públicos HTTP 200,
Portfolio HTTP 404, SIRIUS noindex y sitemap con solo dos casos públicos.
Capturas e informe en `final-home/`; script en `final-home-check.cjs.txt`.

Sin nuevas dependencias, merge ni despliegue de producción. PR permanece Draft.
