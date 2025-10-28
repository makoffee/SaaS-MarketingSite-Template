/**
 * i18n TypeScript Declarations
 * 
 * Provides type safety for i18next translations.
 * This enables autocomplete and type checking for translation keys.
 */

import 'react-i18next';
import { resources, defaultNS } from './config';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['en'];
  }
}
