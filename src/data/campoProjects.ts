export type CampoProject = {
  title: string;
  status: "IMPLEMENTADO" | "EN DESARROLLO";
  description: string;
  slug: string;
  assetTitle: string;
  subtitle: string;
  visual: "data" | "web" | "system";
  blocks: { title: string; text: string }[];
};

export const campoProjects: CampoProject[] = [
  {
    "title": "Análisis de datos",
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
        "title": "Qué mostraré en el caso final",
        "text": "Mi aporte, las decisiones de implementación y evidencia del sistema con datos anonimizados. Los resultados cuantitativos requieren validación antes de publicarse."
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
        "text": "Prototipo en evaluación. La identidad visual final y los casos completos se desarrollarán después de aprobar el recorrido."
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
