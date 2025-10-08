# SaaS Landing Page Template

A production-ready Next.js landing page template for video localization and accessibility platforms, designed for studios, production houses, and media enterprises.

[![Next.js](https://img.shields.io/badge/Next.js-14+-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC.svg)](https://tailwindcss.com/)
[![Prismic CMS](https://img.shields.io/badge/Prismic-CMS-green.svg)](https://prismic.io/)

## Overview

This template provides a professional, high-converting landing page design with three pricing tiers: Individual, Studio, and Enterprise plans. Built with modern web standards and optimized for performance and accessibility.

### Key Features

- Modern design system with purple/teal gradients
- Complete light/dark theme implementation  
- Mobile-first responsive design
- WCAG 2.1 AA accessibility compliance
- Performance optimized for Core Web Vitals
- Production-ready TypeScript interfaces
- Structured for seamless CMS integration

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14+ | Full-stack React framework with App Router |
| **React** | 18+ | Component framework |
| **TypeScript** | 5+ | Type safety & developer experience |
| **Tailwind CSS** | 4.0 | Styling & design system |
| **Prismic CMS** | Latest | Headless content management |
| **shadcn/ui** | Latest | Component library foundation |
| **Motion/React** | Latest | Smooth animations & interactions |
| **Lucide React** | Latest | Icon system |

## Quick Start

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm
- Next.js 14+ (for production deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/saas-landing-template.git
   cd saas-landing-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up fonts (if needed):
   ```bash
   chmod +x scripts/setup-fonts.sh
   ./scripts/setup-fonts.sh
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser

## Project Structure

```
saas-landing-template/
├── App.tsx                   # Main application entry point
├── components/               # React components
│   ├── landing/             # Landing page sections
│   │   ├── Navigation.tsx   # Header with theme toggle
│   │   ├── Hero.tsx        # Hero section with CTA
│   │   ├── Features.tsx    # Product features showcase
│   │   ├── Solutions.tsx   # Target audience sections
│   │   ├── Pricing.tsx     # Three-tier pricing table
│   │   ├── CallToAction.tsx # Final conversion section
│   │   └── Footer.tsx      # Footer with links
│   ├── ui/                 # shadcn/ui components
│   └── ThemeProvider.tsx   # Dark/light mode system
├── config/                 # Configuration files
│   └── content.ts         # Centralized content management
├── hooks/                  # Custom React hooks
│   ├── useScrollReveal.ts  # Animation triggers
│   └── useIntersectionObserver.ts # Performance optimized
├── types/                  # TypeScript definitions
│   └── content.ts         # Prismic-ready interfaces
├── styles/                 # Global styles
│   └── globals.css        # Tailwind v4 + design system
├── utils/                  # Utility functions
├── docs/                   # Comprehensive documentation
└── guidelines/             # Development guidelines
```

## Design System

### Brand Colors

```css
/* Primary Gradients */
--primary-gradient: from-indigo-500 to-purple-600
--secondary-gradient: from-cyan-500 to-teal-500

/* Individual Colors */
--indigo: #6366f1
--purple: #9333ea
--cyan: #06b6d4
--teal: #14b8a6
```

### Typography System

- **Headings**: Satoshi font family (h1-h4)
- **Body Text**: Inter font family (p, labels, UI)
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 900 (black)
- **GDPR Compliant**: Local font hosting (no Google Fonts)

### Component Guidelines

- Use shadcn/ui components as foundation
- Override defaults with brand styling
- Maintain 0.625rem border radius
- Follow purple/teal gradient system
- Ensure responsive behavior

## Key Components

### Navigation
```tsx
<Navigation content={navigationContent} className="custom-class" />
```
- Fixed header with theme toggle
- Mobile hamburger menu
- Brand logo with gradient
- CTA buttons

### Hero Section
```tsx
<Hero content={heroContent} className="custom-class" />
```
- Dynamic headline with gradient text
- Dual CTA buttons
- Social proof indicators
- Dashboard screenshot showcase

### Features
```tsx
<Features content={featuresContent} className="custom-class" />
```
- 2x3 grid layout
- Animated reveals on scroll
- Icon + title + description cards
- Dark background with dot pattern

### Pricing
```tsx
<Pricing content={pricingContent} className="custom-class" />
```
- Three-tier pricing table
- Individual, Studio, Enterprise plans
- Popular plan highlighting
- Feature comparison lists

## Theme System

### Dark Mode Implementation

The theme system uses CSS custom properties with automatic dark mode detection:

```tsx
import { ThemeProvider } from "./components/ThemeProvider";

<ThemeProvider>
  <App />
</ThemeProvider>
```

### Theme Toggle

```tsx
import { ThemeToggle } from "./components/ThemeToggle";

<ThemeToggle />
```

## Responsive Design

### Breakpoint System

| Breakpoint | Width | Container Max-Width | Padding |
|------------|-------|-------------------|---------|
| Mobile | < 640px | 100% | 1rem |
| Small | 640px+ | 640px | 1.5rem |
| Medium | 768px+ | 768px | 2rem |
| Large | 1024px+ | 1024px | 2rem |
| XL | 1280px+ | 1280px | 2rem |
| 2XL | 1536px+ | 1536px | 2rem |

### Mobile-First Approach

- Navigation collapses to hamburger menu < 768px
- Typography scales appropriately across devices
- Grid layouts stack vertically on mobile
- Touch-friendly interaction areas (44px minimum)

## Development

### Architecture Overview

This template is built with **Next.js 14+ App Router** architecture in mind:

- **Current State**: React components with static content for rapid prototyping
- **Production Ready**: Designed for seamless Next.js migration with Prismic CMS
- **SSG/SSR Support**: Optimized for static generation and server-side rendering
- **Performance First**: Built for Core Web Vitals and Lighthouse scores

### Content Management

**Development**: Static content in `/config/content.ts` for rapid iteration
**Production**: Prismic CMS with Next.js App Router integration

```typescript
// Static content structure (development)
export const content = {
  hero: {
    headline: { part1: "Global Media", highlighted: "Accessibility", part2: "Made Simple" },
    subheadline: "Transform your content...",
    cta: { primary: "Get Started", secondary: "Watch Demo" }
  },
  // ... more sections
};

// Production usage with Prismic
// const content = await prismic.getSingle('homepage');
```

### TypeScript Interfaces

All components use proper TypeScript interfaces for type safety:

```typescript
interface HeroProps {
  content?: HeroContent;
  className?: string;
}

interface HeroContent {
  badge: { text: string; icon: "zap" | "bot" };
  headline: { part1: string; highlighted: string; part2: string };
  // ... more properties
}
```

### Custom Hooks

#### useScrollReveal
```typescript
const { motion, ref, variants } = useScrollReveal('fadeInUp');

<motion.div
  ref={ref}
  initial={initial}
  animate={animate}
  variants={variants}
>
  Content
</motion.div>
```

#### useIntersectionObserver
```typescript
const { ref, shouldAnimate } = useIntersectionObserver({
  threshold: 0.1,
  triggerOnce: true
});
```

## Performance Standards

### Core Web Vitals Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms
- **Lighthouse Score**: > 90

### Optimization Features

- Lazy loading for images  
- Optimized animations (transform/opacity only)  
- Efficient scroll detection  
- Minimal bundle size  
- Performance-first architecture  

## Accessibility

### WCAG 2.1 AA Compliance

- Semantic HTML structure
- Proper heading hierarchy (h1 → h6)
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios
- Focus management
- ARIA labels and roles

### Testing Tools

```bash
# Install accessibility testing tools
npm install --save-dev @axe-core/react jest-axe
```

## Deployment

### Environment Variables

```env
# Production environment
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Future Prismic integration
PRISMIC_REPOSITORY_NAME=your_project
PRISMIC_ACCESS_TOKEN=your_access_token
```

### Build Commands

```bash
# Development server
npm run dev

# Production build (Next.js)
npm run build

# Production preview
npm run start

# Static export (if needed)
npm run export

# Type checking
npm run type-check

# Linting
npm run lint
```

### Deployment Platforms

**Recommended**: Vercel (optimal for Next.js), Netlify, or Cloudflare Pages

```bash
# Vercel deployment (recommended)
npx vercel --prod

# Alternative platforms
npm run build

# Manual deployment
npm run build && deploy .next/
```

## Migration to Next.js + Prismic

### Next.js Migration Checklist

This template is **Next.js App Router ready**. For production deployment:

- [ ] Initialize Next.js 14+ project with App Router
- [ ] Migrate components to `app/` directory structure
- [ ] Install Prismic dependencies (`@prismicio/client`, `@prismicio/next`)
- [ ] Set up Prismic content types (see `/docs/prismic-content-types.md`)
- [ ] Configure server/client component architecture
- [ ] Implement ISR (Incremental Static Regeneration)
- [ ] Set up environment variables
- [ ] Configure Vercel deployment pipeline

### Prismic Integration

All components are **Next.js App Router and Prismic-ready** with proper TypeScript interfaces:

```typescript
// Current development usage
<Hero content={content.hero} />

// Production Next.js + Prismic usage
export default async function HomePage() {
  const content = await prismic.getSingle('homepage');
  return <Hero content={content.data.hero} />;
}
```

See `/docs/nextjs-migration-guide.md` for detailed migration steps.

## Testing

### Testing Strategy

```bash
# Unit tests
npm run test

# E2E tests (when implemented)
npm run test:e2e

# Visual regression tests
npm run test:visual

# Performance tests
npm run lighthouse
```

### Quality Gates

- TypeScript compilation passes
- All tests pass
- Lighthouse score > 90
- Accessibility audit passes
- Cross-browser compatibility

## Documentation

Comprehensive documentation is available in the `/docs` folder:

- [Component Documentation](./docs/component-documentation.md)
- [Design Specification](./docs/design-specification.md)
- [Deployment Guide](./docs/deployment-guide.md)
- [Next.js Migration Guide](./docs/nextjs-migration-guide.md)
- [Prismic Content Types](./docs/prismic-content-types.md)
- [Tailwind UI Integration](./docs/tailwind-ui-integration.md)

## Troubleshooting

### Common Issues

**Font Loading Issues**
```bash
# Ensure fonts are in public/fonts directory
ls public/fonts/inter/
ls public/fonts/satoshi/

# Run font setup script
./scripts/setup-fonts.sh
```

**Theme Toggle Not Working**
```tsx
// Ensure ThemeProvider wraps your app
<ThemeProvider>
  <App />
</ThemeProvider>
```

**Animation Performance**
```typescript
// Use intersection observer for better performance
const { shouldAnimate } = useIntersectionObserver();
```

### Getting Help

1. Check existing documentation in `/docs`
2. Review component interfaces in `/types`
3. Examine implementation in `/components`
4. Check guidelines in `/guidelines/Guidelines.md`

## Contributing

### Development Workflow

1. **Feature Branch**: Create from `develop`
   ```bash
   git checkout -b feature/component-name
   ```

2. **Follow Guidelines**: Adhere to `/guidelines/Guidelines.md`

3. **Testing**: Ensure all tests pass and accessibility is maintained

4. **Pull Request**: Submit PR with detailed description

### Code Standards

- TypeScript strict mode
- ESLint + Prettier configuration
- Semantic commit messages
- Component documentation
- Performance considerations

## License

This project template is available for commercial use. Please review the license terms.

## Success Metrics

### Technical KPIs
- **Performance**: Lighthouse score > 90
- **Accessibility**: WCAG 2.1 AA compliance
- **Code Quality**: TypeScript strict mode, zero errors
- **Bundle Size**: < 500KB gzipped

### Business KPIs
- **Conversion Rate**: Optimized for lead generation
- **SEO Performance**: Structured data and meta optimization
- **User Experience**: Mobile-first, fast loading
- **Brand Consistency**: Professional design system

---

**Next.js 14+ Ready** | **Prismic CMS Integrated** | **Production Optimized**