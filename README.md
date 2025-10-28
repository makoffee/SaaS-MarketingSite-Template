# SaaS Localization Platform

Professional SaaS application for studios and production houses to localize and generate accessibility subtitles using advanced contextual translation technology.

## Tech Stack

- **Frontend:** React 18+ with TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animation:** Motion/React (Framer Motion)
- **i18n:** react-i18next
- **Auth:** AWS Cognito (ready)
- **Payments:** Stripe (ready)
- **Icons:** lucide-react
- **CMS:** Prismic (ready)

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

```
├── components/
│   ├── auth/              # Authentication screens
│   ├── dashboard/         # Dashboard & projects view
│   ├── landing/           # Landing page sections
│   └── ui/                # shadcn/ui components
├── config/
│   ├── content.ts         # Landing page content
│   └── icon-registry.ts   # Icon mappings
├── i18n/                  # i18n configuration
├── locales/               # Translation files
├── styles/
│   └── globals.css        # Design system tokens
├── docs/                  # Technical documentation
└── guidelines/            # Design guidelines
```

## Key Features

- Three-tier pricing system
- Dark/light mode with theme toggle
- Comprehensive i18n architecture
- Dashboard with projects management
- Mobile-responsive design
- GDPR-compliant local font hosting
- Clean HTML markup for Figma sync

## Documentation

- `/guidelines/Guidelines.md` - Complete design system
- `/docs/i18n.md` - Internationalization setup
- `/docs/nextjs-migration-guide.md` - Next.js migration
- `/docs/prismic-content-types.md` - CMS integration
- `/docs/deployment-guide.md` - Deployment guide

## Environment Variables

```env
# Prismic CMS
PRISMIC_REPOSITORY_NAME=your_project
PRISMIC_ACCESS_TOKEN=xxx

# AWS Cognito
NEXT_PUBLIC_AWS_REGION=xxx
NEXT_PUBLIC_USER_POOL_ID=xxx
NEXT_PUBLIC_CLIENT_ID=xxx

# Stripe
NEXT_PUBLIC_STRIPE_KEY=xxx

# Site
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Design System

See `/guidelines/Guidelines.md` for complete design system documentation.

**Brand Colors:**
- Primary: Purple gradient `from-indigo-500 to-purple-600`
- Secondary: Teal gradient `from-cyan-500 to-teal-500`

**Typography:**
- UI/Body: Inter (400, 500, 900)
- Headings: Satoshi (medium)
- Local GDPR-compliant font hosting

**Important:**
- Never override font sizes/weights with Tailwind unless requested
- Typography system defined in `globals.css`
- Border radius: `0.625rem` throughout

## License

MIT
