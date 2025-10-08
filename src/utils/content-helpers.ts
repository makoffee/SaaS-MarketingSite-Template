/**
 * Content Helper Utilities
 * Utility functions for content manipulation and formatting
 */

/**
 * Format price with currency and period
 */
export function formatPrice(price: string, currency: string, period: string): string {
  return `${currency}${price}${period}`;
}

/**
 * Get icon component by name
 * Useful for dynamic icon rendering from CMS content
 */
export function getIconByName(iconName: string) {
  // This will be expanded based on the icons used in the project
  const iconMap: Record<string, any> = {
    // Add mappings as needed
  };
  
  return iconMap[iconName] || null;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generate gradient classes from content
 */
export function getGradientClasses(gradient: string): string {
  return `bg-gradient-to-r ${gradient}`;
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Convert content structure for different contexts
 */
export function adaptContentForContext<T>(content: T, context: 'mobile' | 'desktop'): T {
  // Placeholder for content adaptation logic
  // This would be expanded based on specific needs
  return content;
}