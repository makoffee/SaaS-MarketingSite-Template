/**
 * i18n Provider Component
 * 
 * Wraps the application with i18next configuration.
 * This should be placed at the root level of the application.
 * 
 * Usage in App.tsx:
 * ```tsx
 * import { I18nProvider } from './components/I18nProvider';
 * 
 * function App() {
 *   return (
 *     <I18nProvider>
 *       <YourApp />
 *     </I18nProvider>
 *   );
 * }
 * ```
 */

import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/config';

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
