# Deployment Guide

## 🚀 Production Deployment

### Recommended Platform: Vercel

**Why Vercel:**
- Optimized for Next.js applications
- Automatic deployments from Git
- Built-in performance monitoring
- Edge computing capabilities
- Excellent Prismic CMS integration

### Alternative Platforms
- **Netlify** - Great for static sites, good Next.js support
- **Railway** - Full-stack hosting with databases
- **DigitalOcean App Platform** - Scalable container hosting
- **AWS Amplify** - Enterprise-grade with AWS ecosystem

## 🔧 Environment Setup

### Required Environment Variables

```bash
# Prismic CMS Configuration
PRISMIC_REPOSITORY_NAME=eysign
PRISMIC_ACCESS_TOKEN=your_access_token_here
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=production

# Analytics (Optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS=true

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://eysign.com
NEXT_PUBLIC_SITE_NAME="eysign"

# Email/Contact Forms (if added)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=noreply@eysign.com
SMTP_PASS=your_app_password

# Security
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=https://eysign.com
```

### Vercel Deployment Steps

1. **Connect Repository**
   ```bash
   # Push code to GitHub/GitLab
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. **Import Project**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Choose "Next.js" preset

3. **Configure Build Settings**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".next",
     "installCommand": "npm install",
     "framework": "nextjs"
   }
   ```

4. **Set Environment Variables**
   - Navigate to Project Settings → Environment Variables
   - Add all required variables listed above
   - Enable for Production, Preview, and Development

5. **Configure Custom Domain**
   - Add domain in Project Settings → Domains
   - Update DNS records as instructed
   - SSL certificates automatically provisioned

## 🔍 Performance Optimization

### Next.js Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.prismic.io'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig
```

### Image Optimization

```typescript
// Replace Figma assets with optimized images
import Image from 'next/image'

// Before
<img src={mixerBackground} alt="Audio mixer" />

// After  
<Image
  src="/images/mixer-background.jpg"
  alt="Professional audio mixing console"
  width={1920}
  height={1080}
  priority={true} // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Font Optimization

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
```

## 📊 Monitoring & Analytics

### Core Web Vitals Tracking

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### Error Monitoring

```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
})
```

## 🔒 Security & SEO

### Security Headers

```javascript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}
```

### SEO Optimization

```typescript
// app/layout.tsx
export const metadata = {
  metadataBase: new URL('https://eysign.com'),
  title: {
    default: 'eysign - AI-Powered Video Localization & Accessibility',
    template: '%s | eysign'
  },
  description: 'Professional subtitle generation, accessibility tools, and video localization powered by advanced AI. Trusted by studios, creators, and enterprises worldwide.',
  keywords: ['video localization', 'AI subtitles', 'accessibility', 'captions', 'transcription'],
  authors: [{ name: 'eysign Team' }],
  creator: 'eysign',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eysign.com',
    siteName: 'eysign',
    title: 'eysign - AI-Powered Video Localization',
    description: 'Professional subtitle generation and accessibility tools powered by advanced AI.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'eysign - AI-Powered Video Localization'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eysign - AI-Powered Video Localization',
    description: 'Professional subtitle generation and accessibility tools.',
    images: ['/og-image.jpg'],
    creator: '@eysign'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

## 🧪 Testing Before Deployment

### Pre-deployment Checklist

```bash
# 1. Run all tests
npm run test

# 2. Type checking
npm run type-check

# 3. Linting
npm run lint

# 4. Build locally
npm run build

# 5. Test production build
npm run start

# 6. Lighthouse audit
npx lighthouse http://localhost:3000 --view

# 7. Bundle analysis
npm run analyze
```

### Automated Testing Pipeline

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build application
        run: npm run build
      
      - name: Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.12.x
          lhci autorun
```

## 🔄 Deployment Workflow

### Branching Strategy

```
main (production) ← merge from develop
├── develop (staging) ← merge from feature branches  
├── feature/new-feature
├── hotfix/urgent-fix
└── release/v1.0.0
```

### Environment Mapping

- **Production:** `main` branch → eysign.com
- **Staging:** `develop` branch → staging.eysign.com  
- **Preview:** Feature branches → auto-generated URLs

### Release Process

1. **Feature Development**
   ```bash
   git checkout -b feature/new-feature
   # Make changes
   git push origin feature/new-feature
   # Create pull request to develop
   ```

2. **Staging Testing**
   ```bash
   git checkout develop
   git merge feature/new-feature
   git push origin develop
   # Automatic deployment to staging
   ```

3. **Production Release**
   ```bash
   git checkout main
   git merge develop
   git tag v1.0.0
   git push origin main --tags
   # Automatic deployment to production
   ```

## 📈 Post-Deployment

### Monitoring Checklist

- [ ] Site loads correctly
- [ ] All animations work smoothly
- [ ] Dark mode toggle functions
- [ ] Mobile navigation works
- [ ] Forms submit properly
- [ ] Images load with correct optimization
- [ ] SEO meta tags are present
- [ ] Analytics tracking is active
- [ ] Core Web Vitals are good
- [ ] SSL certificate is valid

### Performance Targets

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **First Input Delay:** < 100ms
- **Lighthouse Score:** > 90

### Support & Maintenance

- Set up error monitoring alerts
- Schedule regular dependency updates
- Monitor Core Web Vitals monthly
- Review analytics data weekly
- Backup Prismic content regularly