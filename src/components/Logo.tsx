/**
 * Logo Component
 * Theme-aware logo that switches between light and dark mode versions
 */

import { useTheme } from "./ThemeProvider";
import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";
import LogoIconLight from "../assets/logo-icon-light.svg";
import LogoIconDark from "../assets/logo-icon-dark.svg";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className = "", iconOnly = false }: LogoProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const logoSrc = iconOnly 
    ? (isDark ? LogoIconDark : LogoIconLight)
    : (isDark ? LogoDark : LogoLight);
  
  return (
    <img
      src={logoSrc}
      alt="eysign"
      className={className}
    />
  );
}
