# Component Documentation

## 🧩 Landing Page Components

### Navigation (`/components/landing/Navigation.tsx`)
**Type:** Client Component (has interactivity)

**Features:**
- Responsive hamburger menu for mobile
- Dark mode toggle integration
- Smooth scroll to sections
- Backdrop blur effects
- Mobile-optimized button layouts

**Props:** None (uses static content)
**Dependencies:** ThemeToggle, Button, Lucide icons

**Next.js Migration:**
```typescript
'use client' // Required for mobile menu state
```

---

### Hero (`/components/landing/Hero.tsx`)
**Type:** Server Component (can fetch data)

**Features:**
- Gradient text effects
- Scroll reveal animations
- Responsive typography
- Social proof indicators
- Dual CTA buttons

**Props:** 
```typescript
interface HeroProps {
  content: HeroSection;
}
```

**Animation Dependencies:** Motion/React, useScrollReveal hook

---

### Features (`/components/landing/Features.tsx`)
**Type:** Server Component

**Features:**
- Professional audio mixer background
- Left-aligned content layout
- Icon-based feature grid
- Subtle scroll animations
- Dark overlay for text readability

**Background Image:** `figma:asset/0766bbcde351369ab1690bbc245e1082c1e07bc5.png`

**Props:**
```typescript
interface FeaturesProps {
  content: FeaturesSection;
}
```

---

### Solutions (`/components/landing/Solutions.tsx`)
**Type:** Server Component

**Features:**
- Target audience cards with gradients
- Use case icons with hover effects
- Popular badge system
- Responsive 3-column grid
- Statistics display

**Props:**
```typescript
interface SolutionsProps {
  content: SolutionsSection;
}
```

---

### Pricing (`/components/landing/Pricing.tsx`)
**Type:** Server Component

**Features:**
- Three-tier pricing cards
- Feature comparison lists
- Popular plan highlighting
- FAQ section integration
- Gradient buttons per plan

**Props:**
```typescript
interface PricingProps {
  content: PricingSection;
}
```

---

### CallToAction (`/components/landing/CallToAction.tsx`)
**Type:** Client Component (file upload interaction)

**Features:**
- File drop zone
- Upload progress states
- Trust indicators
- Dual CTA options
- Background gradient effects

**Props:**
```typescript
interface CallToActionProps {
  content: CallToActionSection;
}
```

---

### Footer (`/components/landing/Footer.tsx`)
**Type:** Server Component

**Features:**
- Multi-column link sections
- Social media icons
- Company description
- Copyright information
- Dark mode support

**Props:**
```typescript
interface FooterProps {
  content: FooterData;
}
```

## 🎨 UI Components (shadcn/ui)

### Available Components
- `Button` - Primary, secondary, outline variants
- `Card` - Content containers with shadows
- `Badge` - Status and category indicators
- `Input` - Form inputs with validation states
- All other shadcn/ui components in `/components/ui/`

### Theme Integration
All components support:
- Light/dark mode automatic switching
- Custom color palette from globals.css
- Consistent border radius (0.625rem)
- Professional typography scale

## 🎭 Animation System

### useScrollReveal Hook (`/hooks/useScrollReveal.ts`)
**Type:** Client-side hook

**Variants:**
- `fadeInUp` - 20px upward movement with fade
- `fadeIn` - Simple opacity transition  
- `slideInFromLeft` - 30px left slide with fade

**Usage:**
```typescript
const reveal = useScrollReveal('fadeInUp');

<reveal.motion.div
  ref={reveal.ref}
  initial={reveal.initial}
  animate={reveal.animate}
  variants={reveal.variants}
>
  Content here
</reveal.motion.div>
```

**Performance:** 
- Uses Intersection Observer
- Animations trigger once only
- 50px margin for early activation
- Smooth cubic-bezier easing

## 🎯 Theme System

### ThemeProvider (`/components/ThemeProvider.tsx`)
**Features:**
- System preference detection
- Manual toggle support  
- Persistence across sessions
- Context-based theme access

### ThemeToggle (`/components/ThemeToggle.tsx`)
**Features:**
- Sun/moon icon transition
- Smooth animation effects
- Accessible keyboard navigation
- Integration with theme context

## 📱 Responsive Breakpoints

### Container System
```css
Mobile: 100% width, 1rem padding
Small: 640px max, 1.5rem padding  
Medium: 768px max, 2rem padding
Large: 1024px max
XL: 1280px max
2XL: 1536px max
```

### Component Responsiveness
- **Navigation:** Hamburger menu below 768px
- **Hero:** Typography scales from 5xl to 7xl
- **Features:** Grid collapses to single column
- **Solutions:** 3-column to 1-column layout
- **Pricing:** Cards stack vertically on mobile

## 🔧 Performance Optimizations

### Current Optimizations
- CSS-only animations where possible
- Lazy loading with Intersection Observer
- Efficient re-renders with React.memo
- Optimized image formats

### Next.js Additions Needed
- Next.js Image component for images
- Dynamic imports for heavy components
- Route-based code splitting
- Static generation for content

## 🧪 Testing Strategy

### Component Testing
```typescript
// Example test structure
describe('Hero Component', () => {
  test('renders headline correctly', () => {
    // Test implementation
  });
  
  test('shows CTA buttons', () => {
    // Test implementation
  });
  
  test('handles scroll animations', () => {
    // Test implementation
  });
});
```

### Recommended Testing Tools
- **Jest** + **React Testing Library** for unit tests
- **Playwright** for E2E testing
- **Storybook** for component documentation
- **Chromatic** for visual regression testing

## 🔄 Content Management

### Static Content (Current)
All content in `/config/content.ts` - easy to migrate to Prismic

### Dynamic Content (Prismic Ready)
Components designed to accept props, making CMS integration straightforward:

```typescript
// Current static usage
<Hero />

// Future Prismic usage  
<Hero content={prismicData.hero} />
```

## 🚀 Deployment Considerations

### Build Optimization
- Tree shaking enabled
- CSS purging via Tailwind
- Bundle size monitoring needed
- Performance budgets recommended

### Environment Variables
```
NEXT_PUBLIC_SITE_URL=https://eysign.com
PRISMIC_REPOSITORY_NAME=eysign
PRISMIC_ACCESS_TOKEN=xxx
NEXT_PUBLIC_ANALYTICS_ID=xxx
```

## 📊 Analytics Integration Points

### Conversion Tracking
- Hero CTA clicks
- Pricing plan selections  
- File upload attempts
- Navigation interactions
- Theme toggle usage

### Performance Monitoring
- Page load times
- Animation performance
- Mobile responsiveness
- User engagement metrics