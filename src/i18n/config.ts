/**
 * i18n Configuration
 * 
 * Initializes react-i18next with namespaces for different parts of the application.
 * This configuration uses JSON files for translations and provides type-safe access.
 * 
 * Namespaces:
 * - common: Shared UI elements, buttons, labels
 * - dashboard: Dashboard-specific content
 * - projects: Projects view content
 * - navigation: Navigation labels and tooltips
 * - validation: Form validation messages
 * - auth: Authentication flow messages
 * 
 * Usage in components:
 * ```tsx
 * import { useTranslation } from 'react-i18next';
 * 
 * function MyComponent() {
 *   const { t } = useTranslation('common');
 *   return <button>{t('buttons.upload.label')}</button>;
 * }
 * ```
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation JSON files
import enCommon from '../locales/en/common.json';
import enDashboard from '../locales/en/dashboard.json';
import enProjects from '../locales/en/projects.json';
import enNavigation from '../locales/en/navigation.json';
import enValidation from '../locales/en/validation.json';
import enAuth from '../locales/en/auth.json';

// German translations (optional - add when ready for localization)
// import deCommon from '../locales/de/common.json';
// import deDashboard from '../locales/de/dashboard.json';
// ... etc

export const defaultNS = 'common';

export const resources = {
  en: {
    common: enCommon,
    dashboard: enDashboard,
    projects: enProjects,
    navigation: enNavigation,
    validation: enValidation,
    auth: enAuth,
  },
  // Add more languages here as needed
  // de: {
  //   common: deCommon,
  //   dashboard: deDashboard,
  //   projects: deProjects,
  //   navigation: deNavigation,
  //   validation: deValidation,
  //   auth: deAuth,
  // },
} as const;

i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en',
    ns: ['common', 'dashboard', 'projects', 'navigation', 'validation', 'auth'],
    defaultNS,
    resources,
    
    interpolation: {
      escapeValue: false,
    },
    
    debug: false,
    initImmediate: false,
    
    react: {
      useSuspense: false,
    },
  });

export default i18n;
