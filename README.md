# SaaS Landing Page

A production-ready landing page template for SaaS applications. Built with React, TypeScript, and Tailwind CSS. Designed for easy migration to Next.js 14+ with Prismic CMS integration.

## Tech Stack

- React 18+ with TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Motion/React animations
- Prismic CMS ready

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
├── App.tsx                 # Main entry point
├── components/
│   ├── landing/           # Landing page sections
│   ├── ui/                # shadcn/ui components
│   └── ThemeProvider.tsx  # Dark mode system
├── config/
│   └── content.ts         # Static content
├── styles/
│   └── globals.css        # Tailwind + design system
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript interfaces
└── docs/                  # Documentation
```

## Key Features

- Responsive design with mobile navigation
- Dark/light mode theme toggle
- Scroll animations
- Three-tier pricing component
- Multilingual typewriter animation
- Ready for CMS integration

## Fonts

Local fonts for GDPR compliance. Place font files in `/fonts/` directory:

```bash
chmod +x scripts/setup-fonts.sh
./scripts/setup-fonts.sh
```

See `/fonts/README.md` for details.

## Next.js Migration

This template is built for Next.js 14+ App Router. See `/docs/nextjs-migration-guide.md` for complete migration steps.

Quick overview:
1. Initialize Next.js 14+ project
2. Copy components and configuration
3. Update imports to use `@/` alias
4. Configure Prismic CMS

## Prismic CMS Setup

Content types are defined and ready for Prismic integration.

```bash
npm install @prismicio/client @prismicio/next
```

Environment variables:
```env
PRISMIC_REPOSITORY_NAME=your_repository
PRISMIC_ACCESS_TOKEN=your_token
```

See `/docs/prismic-content-types.md` for content type schemas.

## Deployment

Recommended platform: Vercel

```bash
# Deploy to Vercel
npx vercel --prod
```

See `/docs/deployment-guide.md` for detailed instructions.

## Documentation

- `/docs/nextjs-migration-guide.md` - Next.js migration steps
- `/docs/prismic-content-types.md` - CMS content schemas
- `/docs/component-documentation.md` - Component API reference
- `/docs/deployment-guide.md` - Deployment instructions
- `/guidelines/Guidelines.md` - Design system and standards

## Design System

Brand colors and styling are defined in `styles/globals.css` and `guidelines/Guidelines.md`.

Key conventions:
- Purple/teal gradient system
- Typography defaults in globals.css (don't override with Tailwind classes)
- Component styling must explicitly override defaults

## License

MIT
