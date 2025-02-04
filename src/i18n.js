import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources for English and Chinese
const resources = {
    en: {
        translation: {
            "switchToCards": "Switch to Cards",
            "switchToTimeline": "Switch to Timeline",
            "zoomOut": "Zoom Out",
            "zoomIn": "Zoom In",
            "zoom": "Zoom: {{value}}px/day",
            "categories": {
                "MODEL_RELEASE": "Model Release",
                "CULTURE": "Culture & Society",
                "BUSINESS": "Business & Industry",
                "RESEARCH": "Research & Papers",
                "POLICY": "Policy & Regulation"
            }
        }
    },
    zh: {
        translation: {
            "switchToCards": "切换到卡片视图",
            "switchToTimeline": "切换到时间轴",
            "zoomOut": "缩小",
            "zoomIn": "放大",
            "zoom": "缩放：{{value}}px/天",
            "categories": {
                "MODEL_RELEASE": "模型发布",
                "CULTURE": "文化与社会",
                "BUSINESS": "商业与产业",
                "RESEARCH": "研究与论文",
                "POLICY": "政策与法规"
            }
        }
    }
};

i18n
  .use(initReactI18next) // Integrates with React
  .init({
      resources,
      lng: 'en', // Default language is English
      fallbackLng: 'en',
      interpolation: {
          escapeValue: false // React already safes from xss
      }
  });

export default i18n; 