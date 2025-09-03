import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// Translation resources for English, Chinese and Spanish
const resources = {
  en: {
    translation: {
      hero: {
        title: "The Road to AGI",
        dateRange: "2015 - {{year}}",
        description1:
          "This timeline attempts to tell the story of the last decade in artificial intelligence, from cultural trends to technical advancements. Each event is a clickable link to source material.",
        description2:
          "Note: Curation is inherently subjective, and many events may have been missed. If you'd like to contribute, visit the project's ",
        githubLink: "GitHub",
        description3: " or submit an event ",
        formLink: "here",
        description4: ".",
        imageAlt: "TIME 100 AI 2023 Cover",
      },
      switchToCards: "Switch to Cards",
      switchToTimeline: "Switch to Timeline",
      zoomOut: "Zoom Out",
      zoomIn: "Zoom In",
      zoom: "Zoom: {{value}}px/day",
      categories: {
        MODEL_RELEASE: "Model Release",
        CULTURE: "Culture & Society",
        BUSINESS: "Business & Industry",
        RESEARCH: "Research & Papers",
        POLICY: "Policy & Regulation",
      },
      footer: {
        createdBy: "© {{year}} AGI Timeline. Created by",
        and: "and",
        contributors: "Open-source contributors:",
      },
      loading: "Loading timeline...",
    },
  },
  zh: {
    translation: {
      hero: {
        title: "通往AGI之路",
        dateRange: "2015 - {{year}}",
        description1:
          "这个时间轴试图讲述过去十年人工智能的发展历程，从文化趋势到技术进步。每个事件都是一个可点击的链接，指向相关资料。",
        description2:
          "注意：编排具有主观性，许多事件可能未被收录。如果你想贡献，请访问项目的 ",
        githubLink: "GitHub",
        description3: " 或在 ",
        formLink: "这里",
        description4: " 提交事件。",
        imageAlt: "TIME 100 AI 2023 封面",
      },
      switchToCards: "切换到卡片视图",
      switchToTimeline: "切换到时间轴",
      zoomOut: "缩小",
      zoomIn: "放大",
      zoom: "缩放：{{value}}px/天",
      categories: {
        MODEL_RELEASE: "模型发布",
        CULTURE: "文化与社会",
        BUSINESS: "商业与产业",
        RESEARCH: "研究与论文",
        POLICY: "政策与法规",
      },
      footer: {
        createdBy: "© {{year}} AGI Timeline。由",
        and: "和",
        contributors: "开源贡献者：",
      },
      loading: "正在加载时间轴...",
    },
  },
  es: {
    translation: {
      hero: {
        title: "El camino hacia la AGI",
        dateRange: "2015 - {{year}}",
        description1:
          "Esta línea de tiempo intenta contar la historia de la última década en inteligencia artificial, desde tendencias culturales hasta avances técnicos. Cada evento es un enlace que se puede hacer clic para acceder al material de origen.",
        description2:
          "Nota: La selección es inherentemente subjetiva, y es posible que se hayan omitido muchos eventos. Si deseas contribuir, visita el ",
        githubLink: "GitHub",
        description3: " del proyecto o envía un evento ",
        formLink: "aquí",
        description4: ".",
        imageAlt: "Portada TIME 100 AI 2023",
      },
      switchToCards: "Cambiar a Tarjetas",
      switchToTimeline: "Cambiar a Línea de Tiempo",
      zoomOut: "Alejar",
      zoomIn: "Acercar",
      zoom: "Zoom: {{value}}px/día",
      categories: {
        MODEL_RELEASE: "Lanzamiento de Modelos",
        CULTURE: "Cultura y Sociedad",
        BUSINESS: "Negocios e Industria",
        RESEARCH: "Investigación y Publicaciones",
        POLICY: "Política y Regulación",
      },
      footer: {
        createdBy: "© {{year}} AGI Timeline. Creado por",
        and: "y",
        contributors: "Colaboradores de código abierto:",
      },
      loading: "Cargando línea de tiempo...",
    },
  },
};
i18n
  .use(initReactI18next) // Integrates with React
  .init({
    resources,
    lng: "en", // Default language is English
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });
export default i18n;
