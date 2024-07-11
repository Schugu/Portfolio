import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los archivos de traducción
import global_es from "@/translations/es/global.json";
import profile_es from "@/translations/es/profile.json";
import projects_es from "@/translations/es/projects.json";

import global_en from "@/translations/en/global.json";
import profile_en from "@/translations/en/profile.json";
import projects_en from "@/translations/en/projects.json";

import global_pt from "@/translations/pt/global.json";
import profile_pt from "@/translations/pt/profile.json";
import projects_pt from "@/translations/pt/projects.json";

// Obtener el idioma guardado en localStorage o usar 'es' como predeterminado
const savedLanguage = localStorage.getItem('language') || 'es';

i18next
  .use(initReactI18next) // Inicia react-i18next
  .init({
    interpolation: { escapeValue: false },
    lng: savedLanguage,
    fallbackLng: 'es', 
    ns: ['global', 'profile', 'projects'],
    resources: {
      es: {
        global: global_es,
        profile: profile_es,
        projects: projects_es,
      },
      en: {
        global: global_en,
        profile: profile_en,
        projects: projects_en,
      },
      pt: {
        global: global_pt,
        profile: profile_pt,
        projects: projects_pt,
      }
    }
  });

export default i18next;
