# Assets Directory

This directory contains all static assets for the application.

## Logo Files

The application uses theme-aware SVG logos that automatically switch based on the user's theme preference:

- **`logo-light.svg`** - Logo with black text for light mode
- **`logo-dark.svg`** - Logo with white text for dark mode

### How to Update Logos

To update the logos:

1. Replace the SVG files in this directory (`logo-light.svg` and `logo-dark.svg`)
2. Ensure both files maintain the same viewBox dimensions for consistency
3. The light mode version should have dark/black text
4. The dark mode version should have white text
5. The Logo component (`/components/Logo.tsx`) will automatically detect the current theme and display the appropriate version

### Logo Usage

The logos are displayed in the following locations:

- **Landing page navigation** (`/components/landing/Navigation.tsx`)
- **Landing page footer** (`/components/landing/Footer.tsx`)
- **Dashboard sidebar** (`/components/dashboard/DashboardLayout.tsx`)

All locations use the centralized `<Logo>` component, so updating the SVG files will update all instances across the application.

### Sizing Guidelines

Current logo specifications:
- **Height:** 32px (h-8 in Tailwind)
- **Width:** Auto (maintains aspect ratio)
- **Original dimensions:** 115x32px (viewBox)

When creating new logos, maintain these proportions for consistent display across the application.
