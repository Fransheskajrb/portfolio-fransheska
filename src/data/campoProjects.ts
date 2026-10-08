export type CampoProject = {
  title: string;
  status: "IMPLEMENTADO" | "EN DESARROLLO";
  description: string;
  slug: string;
  assetTitle: string;
  subtitle: string;
  visual: "data" | "web" | "system" | "agenda";
  blocks: { title: string; text: string }[];
};

const archivedProjects: CampoProject[] = [
  {
    "title": "Análisis de Metas Institucionales",
    "status": "IMPLEMENTADO",
    "description": "SQL y Oracle APEX para organizar información y seguir indicadores de capacitación.",
    "blocks": [
      {
        "title": "El problema",
        "text": "Seguir indicadores exige información consistente y criterios de cálculo claros."
      },
      {
        "title": "El trabajo",
        "text": "Consultas SQL, organización de registros y seguimiento de metas de capacitación en Oracle APEX."
      },
      {
        "title": "Evidencia",
        "text": "Capturas anonimizadas · datos demostrativos · valores institucionales protegidos. Los valores mostrados no representan resultados reales."
      }
    ],
    "slug": "institutional-goals",
    "assetTitle": "Datos / reglas / decisiones",
    "subtitle": "Metas e indicadores · Oracle APEX / SQL",
    "visual": "data"
  },
  {
    "title": "Portfolio Profesional",
    "status": "EN DESARROLLO",
    "description": "Identidad profesional, experiencia de uso y desarrollo de una web que conecte presencia con evidencia.",
    "blocks": [
      {
        "title": "La intención",
        "text": "Expresar mi identidad como profesional de informática mediante una experiencia propia."
      },
      {
        "title": "Las decisiones",
        "text": "Discovery de marca, composición adaptable, accesibilidad y movimiento que responde a la interacción."
      },
      {
        "title": "Estado",
        "text": "Sitio web personal desarrollado desde cero para presentar mi experiencia, proyectos y evolución profesional mediante buenas prácticas de desarrollo web moderno."
      }
    ],
    "slug": "portfolio",
    "assetTitle": "Web / experiencia",
    "subtitle": "Desarrollo web · UX / Interacción",
    "visual": "web"
  },
  {
    "title": "SIRIUS",
    "status": "EN DESARROLLO",
    "description": "Proyecto académico enfocado en activación y gestión de Código Azul. Una línea secundaria de trabajo.",
    "blocks": [
      {
        "title": "El alcance",
        "text": "Activación de Código Azul, coordinación e información para funcionarios."
      },
      {
        "title": "El enfoque",
        "text": "Investigación del proceso y diseño de una solución que conviva con los mecanismos institucionales."
      },
      {
        "title": "Estado",
        "text": "En desarrollo. Esta presentación no implica uso clínico ni resultados de implementación."
      }
    ],
    "slug": "sirius",
    "assetTitle": "Software / coordinación",
    "subtitle": "Código Azul · Proyecto académico",
    "visual": "system"
  }
];

const roomProject: CampoProject = {
  title: "Agenda de Sala / Gestión de Sala",
  status: "IMPLEMENTADO",
  description: "Gestión de reservas y disponibilidad de sala, aprobaciones y reportes administrativos.",
  slug: "room-management",
  assetTitle: "Agenda / disponibilidad / reportes",
  subtitle: "Reservas · Aprobaciones · Reportes administrativos",
  visual: "agenda",
  blocks: [
    { title: "La agenda", text: "Vista de calendario con disponibilidad y reservas protegidas de la sala." },
    { title: "La gestión", text: "Solicitudes, aprobaciones, gestión de sala y materiales y reportes administrativos." },
    { title: "Evidencia", text: "Capturas anonimizadas · datos demostrativos · información protegida. Los valores mostrados no representan resultados reales." },
  ],
};

// Only these projects are promoted in Home, case navigation and the sitemap.
export const campoProjects: CampoProject[] = [archivedProjects[0], roomProject];
// Preserve existing routes without promoting or indexing archived projects.
export const allCampoProjects: CampoProject[] = [...archivedProjects, roomProject];
