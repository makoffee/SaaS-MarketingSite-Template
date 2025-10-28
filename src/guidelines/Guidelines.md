# Project Guidelines

## Project Overview

This is a professional SaaS landing page template for video localization and accessibility platforms targeting studios, production houses, and media enterprises.

**Tech Stack:**
- **Frontend:** React to Next.js 14+ (App Router)
- **CMS:** Prismic CMS
- **Styling:** Tailwind CSS v4 + Tailwind UI
- **Components:** shadcn/ui + Tailwind UI components
- **Animations:** Motion/React (Framer Motion)
- **Deployment:** Vercel

## Design System

### Brand Assets

**Logo System:**
- Logo files stored in `/assets/` directory
- **Full logo:**
  - Light mode: `logo-light.svg` (black text)
  - Dark mode: `logo-dark.svg` (white text)
  - Dimensions: 115x32px (viewBox), displayed at h-7 (28px height)
- **Icon-only logo:**
  - Light mode: `logo-icon-light.svg`
  - Dark mode: `logo-icon-dark.svg`
  - Dimensions: 32x32px (viewBox)
- Centralized `<Logo>` component (`/components/Logo.tsx`) automatically switches based on theme
- Usage: `<Logo className="h-7 w-auto" />` for full logo
- Usage: `<Logo iconOnly className="h-8 w-8" />` for icon-only version

**To update logos:**
1. Replace SVG files in `/assets/` directory
2. Maintain same viewBox dimensions for consistency
3. Light versions should have dark/black text
4. Dark versions should have white text
5. Icon-only versions contain just the gradient square with symbol

### Brand Colors
- **Primary Purple Gradient:** `from-indigo-500 to-purple-600`
- **Secondary Teal Gradient:** `from-cyan-500 to-teal-500` 
- **Individual Colors:** `indigo-500`, `purple-600`, `cyan-500`, `teal-500`

### Typography Rules
- **NEVER** override font sizes, weights, or line-heights with Tailwind classes unless specifically requested
- Use the typography system defined in `globals.css`
- **Root Size:** 16px
- **Type Scale:** Custom (xs: 12px, sm: 14px, base: 16px, lg: 18px, xl: 20px, 2xl: 24px, 3xl: 30px, 4xl: 36px)
- **Line Heights:** Golden ratio system (1.4, 1.3, 1.4, 1.5, 1.618)
- **Font Weights:** normal (400), medium (500), black (900)
- **Fonts:** Inter (UI/body), Satoshi (headings)
- **Font Loading:** Critical fonts preloaded with `font-display: block` to prevent FOUT
- **EU GDPR Compliant:** Local fonts hosted instead of Google Fonts to prevent IP leakage

### Component Guidelines
- Use shadcn/ui components from `/components/ui/`
- Integrate Tailwind UI components for advanced layouts
- **IMPORTANT:** Explicitly override component defaults with custom styling
- Maintain consistent border radius: `0.625rem` (override component defaults)
- Always include proper TypeScript interfaces
- Ensure responsive design across all breakpoints

### Styling Override Requirements
- **Base components may have baked-in styling defaults**
- **Always explicitly set styling from guidelines to override defaults:**
  - Gap spacing: Use `gap-*` classes explicitly
  - Typography: Override with custom text sizes when needed
  - Colors: Explicitly apply brand gradients and colors
  - Spacing: Set padding/margin to match design system

## Technical Requirements

### Next.js Migration Readiness
- All components designed to accept props for CMS integration
- Server/Client component separation clearly documented
- Performance optimizations ready for implementation
- SEO and accessibility built-in

### Animation Standards
- Use very subtle scroll reveal animations (20px max movement)
- Animations should trigger once only
- Professional easing curves: `[0.25, 0.1, 0.25, 1]`
- Performance-first approach with transform/opacity only

### Code Quality
- Use absolute imports with `@/` alias for Next.js
- Implement proper TypeScript interfaces
- Follow React best practices and performance patterns
- Keep components modular and reusable

## Responsive Design

### Breakpoint System
```css
Mobile: 100% width, 1rem padding
Small: 640px max, 1.5rem padding  
Medium: 768px max, 2rem padding
Intermediate: 900px max (prevents tight gutters)
Large: 1024px max
XL: 1280px max
2XL: 1536px max
```

**Note:** The 900px breakpoint was added to prevent tight container gutters at viewport widths around 987px, ensuring the logo and content have adequate breathing room.

### Mobile-First Approach
- Navigation collapses to hamburger menu below 768px
- Typography scales appropriately (5xl to 7xl)
- Grid layouts stack vertically on mobile
- Touch-friendly interaction areas (44px minimum)

## Theme System

### Dark Mode Support
- All components must support light/dark themes
- Use CSS custom properties from globals.css
- Theme toggle should be accessible and smooth
- Test all components in both modes

### Color Usage
- Use semantic color tokens (background, foreground, muted, etc.)
- Maintain proper contrast ratios (WCAG AA)
- Purple gradients for primary CTAs
- Teal gradients for secondary elements

## Content Management

### Two-Tier Content Strategy

| Content Type | System | Purpose |
|--------------|--------|---------|
| Landing Page | `content.ts` → Prismic CMS | Marketing content |
| Application UI | i18n JSON → react-i18next | Interface text |

### Internationalization (i18n)

Application UI uses react-i18next for translations. See `/docs/i18n.md` for setup.

Files:
- `/config/icon-registry.ts` - Icon mapping
- `/i18n/config.ts` - i18n setup
- `/locales/en/*.json` - Translation files
- `/utils/i18n-helpers.ts` - Helper hooks

Usage:
```tsx
import { useButtonConfig } from '@/utils/i18n-helpers';

const config = useButtonConfig('buttons.upload');
<Button>
  <config.Icon className="h-4 w-4 mr-2" />
  {config.label}
</Button>
```

### Prismic CMS

Landing page content managed in Prismic. See `/docs/prismic-content-types.md`.

## Performance Standards

### Core Web Vitals Targets
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s  
- **Cumulative Layout Shift:** < 0.1
- **First Input Delay:** < 100ms
- **Lighthouse Score:** > 90

### Optimization Requirements
- Next.js Image component for all images
- Lazy loading for below-the-fold content
- Code splitting at route level
- Bundle size monitoring

## SEO & Accessibility

### SEO Requirements
- Semantic HTML structure
- Proper heading hierarchy (h1 to h6)
- Meta tags and Open Graph data
- Structured data where applicable

### Accessibility Standards
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Focus management in interactive elements

## Testing Strategy

### Required Testing
- Unit tests for components (Jest + RTL)
- E2E tests for user flows (Playwright)
- Visual regression testing (Storybook + Chromatic)
- Performance monitoring (Lighthouse CI)

### Quality Gates
- All tests must pass before deployment
- Type checking with no errors
- Linting with no warnings
- Build succeeds without issues

## Deployment

### Environment Requirements
```bash
PRISMIC_REPOSITORY_NAME=your_project
PRISMIC_ACCESS_TOKEN=xxx
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Deployment Pipeline
- **Staging:** `develop` branch to staging environment
- **Production:** `main` branch to production
- Automatic deployments via Vercel
- Preview URLs for feature branches

## Development Workflow

### Branching Strategy
```
main (production)
├── develop (staging)
├── feature/component-name
├── hotfix/urgent-fix
└── release/v1.0.0
```

### Code Review Requirements
- All changes via pull requests
- Peer review required
- Automated testing passes
- Performance impact assessed

## Developer Handoff Checklist

### Documentation Complete
- [ ] Next.js migration guide created
- [ ] Prismic content types defined
- [ ] Component documentation written
- [ ] Deployment guide provided
- [ ] TypeScript interfaces defined

### Code Ready
- [ ] All components properly typed
- [ ] Responsive design tested
- [ ] Dark mode support verified
- [ ] Animations working smoothly
- [ ] Performance optimized

### CMS Integration
- [ ] Content structure documented
- [ ] Migration strategy defined
- [ ] Sample data provided
- [ ] Rich text configuration

### Production Ready
- [ ] Environment variables documented
- [ ] Security headers configured
- [ ] Analytics integration planned
- [ ] Error monitoring setup

## Success Metrics

### User Experience
- Page load time < 2 seconds
- Mobile responsiveness score > 95%
- Accessibility score > 95%
- User engagement metrics

### Technical Performance
- Bundle size < 500KB
- First paint < 1.5s
- Zero runtime errors
- 99.9% uptime SLA

### Business Goals
- Conversion rate optimization
- Lead generation effectiveness
- Brand perception enhancement
- Global market expansion support

---

This document serves as the single source of truth for the project. All development decisions should align with these guidelines to ensure consistency, quality, and maintainability.
