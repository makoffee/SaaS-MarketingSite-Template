# Next.js + Prismic CMS Migration Guide

## Overview
This template is currently built as a React SPA but is designed to be easily migrated to Next.js 14+ with Prismic CMS integration.

## 📁 Project Structure for Next.js

```
src/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout (move ThemeProvider here)
│   ├── page.tsx                 # Homepage (current App.tsx content)
│   ├── globals.css              # Move from /styles/globals.css
│   └── api/                     # API routes (if needed)
├── components/                   # Keep existing structure
├── lib/                         # Utilities
│   ├── prismic.ts              # Prismic client configuration
│   └── utils.ts                # Current utils
├── types/                       # TypeScript definitions
│   └── prismic.ts              # Prismic content types
└── slices/                      # Prismic Slice Machine components
```

## 🔧 Migration Steps

### 1. Install Next.js Dependencies
```bash
npm install next@latest react@latest react-dom@latest
npm install @prismicio/client @prismicio/next @prismicio/react
npm install @types/node @types/react @types/react-dom typescript

# Tailwind UI (if not already included)
npm install @headlessui/react @heroicons/react
```

### 2. Move Files
- Move `/styles/globals.css` → `/src/app/globals.css`
- Convert `/App.tsx` → `/src/app/page.tsx`
- Create `/src/app/layout.tsx` with ThemeProvider

### 3. Update Import Paths
Replace relative imports with absolute imports using `@/` alias:
```typescript
// Before
import { Navigation } from "./components/landing/Navigation"

// After  
import { Navigation } from "@/components/landing/Navigation"
```

### 4. Environment Variables
Create `.env.local`:
```
PRISMIC_REPOSITORY_NAME=your-repo-name
PRISMIC_ACCESS_TOKEN=your-access-token
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=production
```

## 🎨 Prismic CMS Integration

### Content Structure
Current `/config/content.ts` should be replaced with Prismic content types:

1. **Homepage** - Single type
2. **Navigation** - Single type  
3. **Features** - Repeatable type
4. **Solutions** - Repeatable type
5. **Pricing Plans** - Repeatable type
6. **FAQ Items** - Repeatable type

### Prismic Client Setup
```typescript
// src/lib/prismic.ts
import * as prismic from '@prismicio/client'

export const repositoryName = process.env.PRISMIC_REPOSITORY_NAME!

export const client = prismic.createClient(repositoryName, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
})
```

## 🔄 Component Updates Needed

### Server Components (fetch data)
- Hero section
- Features section  
- Solutions section
- Pricing section

### Client Components (interactivity)
- Navigation (mobile menu)
- Theme toggle
- Scroll reveal animations
- Call-to-action forms

## 📱 Current Features to Preserve

✅ **Already Next.js Ready:**
- Tailwind CSS v4 configuration
- TypeScript setup
- Component structure
- Responsive design
- Dark mode support
- Scroll reveal animations

✅ **Compatible Libraries:**
- shadcn/ui components
- Tailwind UI components
- Lucide React icons
- Motion/React (Framer Motion)
- All current dependencies

✅ **Styling Preservation:**
- Complete Tailwind v4 setup maintained
- Custom CSS variables and design tokens preserved
- Brand gradients and color system intact
- Typography system with proper overrides

## 🚀 Performance Optimizations

### Image Optimization
Replace current image imports with Next.js Image component:
```typescript
// Before
import mixerBackground from 'figma:asset/...'

// After
import Image from 'next/image'
<Image src="/images/mixer-background.jpg" alt="..." />
```

### Font Optimization
Add to layout.tsx:
```typescript
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

## 🔍 SEO & Metadata

Each page should include proper metadata:
```typescript
export const metadata = {
  title: 'eysign - AI-Powered Video Localization',
  description: 'Professional subtitle generation and accessibility tools...',
  openGraph: { ... },
  twitter: { ... }
}
```

## 📊 Analytics Integration

Ready for:
- Google Analytics 4
- Vercel Analytics  
- PostHog
- Mixpanel

## 🔐 Security Considerations

- Environment variables properly configured
- API routes for sensitive operations
- Rate limiting for forms
- CSRF protection

## 🧪 Testing Setup

Recommended testing stack:
- Jest + React Testing Library
- Playwright for E2E
- Storybook for component documentation

## 📦 Deployment

Optimized for:
- **Vercel** (recommended)
- Netlify
- Railway
- Any Node.js hosting

## 🎯 Next Steps for Developer

1. Initialize Next.js project
2. Set up Prismic repository
3. Create content types in Prismic
4. Migrate components one by one
5. Test responsive design
6. Set up deployment pipeline
7. Configure analytics
8. Performance optimization