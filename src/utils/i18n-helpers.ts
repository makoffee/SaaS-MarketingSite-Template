/**
 * i18n Helper Utilities
 * 
 * Provides utility functions and custom hooks for working with i18n in components.
 * These helpers simplify common patterns like button configs, status displays, and icon mapping.
 * 
 * Usage examples:
 * 
 * Button with icon and label:
 * ```tsx
 * const uploadBtn = useButtonConfig('buttons.upload');
 * <Button>
 *   <uploadBtn.Icon className="h-4 w-4 mr-2" />
 *   {uploadBtn.label}
 * </Button>
 * ```
 * 
 * Status badge:
 * ```tsx
 * const status = useStatusConfig('completed');
 * <Badge className={status.className}>
 *   <status.Icon className="h-4 w-4 mr-1" />
 *   {status.label}
 * </Badge>
 * ```
 */

import { useTranslation } from 'react-i18next';
import { iconRegistry, type IconName } from '@/config/icon-registry';
import type { LucideIcon } from 'lucide-react';

/**
 * Button configuration with icon and labels
 */
export interface ButtonConfig {
  label: string;
  ariaLabel: string;
  Icon: LucideIcon;
  iconName: IconName;
}

/**
 * Hook to get button configuration from i18n
 * @param key - Translation key for the button (e.g., 'buttons.upload')
 * @param namespace - i18n namespace (default: 'common')
 * @returns Button configuration with label, aria-label, and icon component
 */
export function useButtonConfig(key: string, namespace: string = 'common'): ButtonConfig {
  const { t } = useTranslation(namespace);
  
  const iconName = t(`${key}.icon`, { defaultValue: 'plus' }) as IconName;
  const Icon = iconRegistry[iconName] || iconRegistry.plus;
  
  return {
    label: t(`${key}.label`),
    ariaLabel: t(`${key}.ariaLabel`, { defaultValue: t(`${key}.label`) }),
    Icon,
    iconName,
  };
}

/**
 * Status configuration for badges and indicators
 */
export interface StatusConfig {
  label: string;
  Icon: LucideIcon;
  iconName: IconName;
  color: string;
  className: string;
}

/**
 * Status color mappings for Tailwind classes
 */
const statusColorMap: Record<string, string> = {
  emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  red: 'border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400',
  blue: 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400',
  yellow: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  gray: 'border-gray-500/30 bg-gray-500/10 text-gray-600 dark:text-gray-400',
};

/**
 * Hook to get status configuration from i18n
 * @param statusKey - Status key (e.g., 'completed', 'processing', 'failed')
 * @param namespace - i18n namespace (default: 'common')
 * @returns Status configuration with label, icon, and styling
 */
export function useStatusConfig(statusKey: string, namespace: string = 'common'): StatusConfig {
  const { t } = useTranslation(namespace);
  
  const iconName = t(`status.${statusKey}.icon`, { defaultValue: 'info' }) as IconName;
  const Icon = iconRegistry[iconName] || iconRegistry.info;
  const color = t(`status.${statusKey}.color`, { defaultValue: 'gray' });
  const className = statusColorMap[color] || statusColorMap.gray;
  
  return {
    label: t(`status.${statusKey}.label`),
    Icon,
    iconName,
    color,
    className,
  };
}

/**
 * Navigation item configuration
 */
export interface NavItemConfig {
  label: string;
  description: string;
  Icon: LucideIcon;
  iconName: IconName;
  badge?: string;
}

/**
 * Hook to get navigation item configuration from i18n
 * @param key - Navigation key (e.g., 'dashboard', 'projects')
 * @param namespace - i18n namespace (default: 'navigation')
 * @returns Navigation item configuration
 */
export function useNavItemConfig(key: string, namespace: string = 'navigation'): NavItemConfig {
  const { t } = useTranslation(namespace);
  
  const iconName = t(`main.${key}.icon`, { defaultValue: 'folderOpen' }) as IconName;
  const Icon = iconRegistry[iconName] || iconRegistry.folderOpen;
  
  return {
    label: t(`main.${key}.label`),
    description: t(`main.${key}.description`, { defaultValue: '' }),
    Icon,
    iconName,
    badge: t(`main.${key}.badge`, { defaultValue: undefined }),
  };
}

/**
 * Get icon component by name from registry
 * @param iconName - Icon name from registry
 * @returns Lucide icon component
 */
export function useIcon(iconName: IconName): LucideIcon {
  return iconRegistry[iconName];
}

/**
 * Format duration in minutes to human-readable format
 * @param minutes - Duration in minutes
 * @param t - Translation function
 * @returns Formatted duration string
 */
export function formatDuration(minutes: number, t: any): string {
  if (minutes < 60) {
    return t('common:time.minutes', { count: minutes });
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return t('common:time.hours', { count: hours, minutes: remainingMinutes });
}

/**
 * Get language name from language code
 * @param code - Language code (e.g., 'EN', 'DE')
 * @param t - Translation function
 * @returns Translated language name
 */
export function getLanguageName(code: string, t: any): string {
  return t(`common:languages.${code}`, { defaultValue: code });
}

/**
 * Format array of language codes to display string
 * @param codes - Array of language codes
 * @param t - Translation function
 * @param maxDisplay - Maximum number of languages to display before truncating
 * @returns Formatted language string
 */
export function formatLanguages(codes: string[], t: any, maxDisplay: number = 3): string {
  if (codes.length === 0) return '';
  
  const displayCodes = codes.slice(0, maxDisplay);
  const remaining = codes.length - maxDisplay;
  
  const names = displayCodes.map(code => getLanguageName(code, t));
  const formatted = names.join(', ');
  
  if (remaining > 0) {
    return `${formatted} +${remaining}`;
  }
  
  return formatted;
}

/**
 * Type guard to check if a translation key exists
 * @param t - Translation function
 * @param key - Translation key to check
 * @returns True if translation exists
 */
export function hasTranslation(t: any, key: string): boolean {
  const translation = t(key, { defaultValue: '__MISSING__' });
  return translation !== '__MISSING__';
}
