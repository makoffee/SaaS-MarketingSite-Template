# eysign Design System Specification

## Overview
This document provides a comprehensive reference for the eysign landing page design system, including colors, typography, spacing, components, and layout specifications.

---

## 🎨 Color Palette

### Brand Colors
```css
/* Primary Brand Gradients */
--gradient-primary: linear-gradient(to right, #6366f1, #9333ea);     /* Indigo to Purple */
--gradient-secondary: linear-gradient(to right, #06b6d4, #14b8a6);   /* Cyan to Teal */
--gradient-tertiary: linear-gradient(to right, #9333ea, #ec4899);    /* Purple to Pink */

/* Mathematical Color Wheel Relationships */
/* Purple (270°) + Teal (180°) = 90° separation for harmonious contrast */

/* Individual Brand Colors */
--indigo-500: #6366f1;
--purple-500: #9333ea;
--purple-600: #7c3aed;
--cyan-500: #06b6d4;
--teal-500: #14b8a6;
--pink-500: #ec4899;
```

### System Colors (Light Mode)
```css
--background: #ffffff;
--foreground: oklch(0.145 0 0);              /* Near black */
--muted: #ececf0;                            /* Light gray */
--muted-foreground: #717182;                 /* Medium gray */
--border: rgba(0, 0, 0, 0.1);                /* 10% black */
--card: #ffffff;
--secondary: oklch(0.95 0.0058 264.53);      /* Very light purple */
--accent: #e9ebef;                           /* Light blue-gray */
```

### System Colors (Dark Mode)
```css
--background: oklch(0.145 0 0);              /* Dark background */
--foreground: oklch(0.985 0 0);              /* Near white */
--muted: oklch(0.269 0 0);                   /* Dark gray */
--muted-foreground: oklch(0.708 0 0);        /* Medium gray */
--border: oklch(0.269 0 0);                  /* Dark border */
--card: oklch(0.145 0 0);                    /* Dark card */
--secondary: oklch(0.269 0 0);               /* Dark secondary */
```

### Semantic Colors
```css
/* Success/Positive (Using Teal for Brand Consistency) */
--teal-500: #14b8a6;

/* Warning/Attention */
--yellow-500: #f59e0b;

/* Error/Destructive */
--red-500: #ef4444;
--destructive: #d4183d;

/* Info/Neutral */
--blue-500: #3b82f6;
```

### Color Usage Guidelines
```css
/* Primary Actions & Main Elements */
.primary-gradient { background: linear-gradient(to right, #6366f1, #9333ea); }

/* Secondary Actions & Creator-focused Elements */
.secondary-gradient { background: linear-gradient(to right, #06b6d4, #14b8a6); }

/* Success States & Checkmarks */
.success-color { color: #14b8a6; } /* Teal instead of traditional green */

/* Creator/Individual Elements */
.creator-accent { color: #14b8a6; } /* Upload icons, individual plan bullets */

/* Popular/Highlighted Badges */
.popular-badge { background: linear-gradient(to right, #06b6d4, #14b8a6); }
```

---

## 📝 Typography

### Base Configuration
```css
--font-size: 16px;                          /* Root font size */
--font-weight-normal: 400;
--font-weight-medium: 500;
```

### Typography Scale
```css
/* Headings */
h1: 2xl (32px) - Used for main hero heading
h2: xl (24px) - Used for section headings  
h3: lg (20px) - Used for subsection headings
h4: base (16px) - Used for card titles

/* Body Text */
p: base (16px) - Standard paragraph text
label: base (16px) - Form labels
button: base (16px) - Button text
input: base (16px) - Input text

/* Special Sizes */
text-5xl: 48px - Large hero text (mobile)
text-7xl: 72px - Large hero text (desktop)
text-4xl: 36px - Section headlines
text-6xl: 60px - CTA headlines
text-2xl: 24px - Subheadings
text-xl: 20px - Large body text
text-sm: 14px - Small text, captions
text-xs: 12px - Micro text
```

### Font Weights
- **Normal (400)**: Body text, descriptions
- **Medium (500)**: Headings, labels, buttons, emphasis

### Line Height
- **Standard**: 1.5 (24px for 16px text)
- **Relaxed**: Used for hero subheading for better readability

---

## 📐 Spacing & Layout

### Container System
```css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;              /* Mobile: 16px */
}

/* Responsive breakpoints */
@media (min-width: 640px) {     /* sm */
  .container { 
    max-width: 640px; 
    padding: 0 1.5rem;          /* 24px */
  }
}

@media (min-width: 768px) {     /* md */
  .container { 
    max-width: 768px; 
    padding: 0 2rem;            /* 32px */
  }
}

@media (min-width: 1024px) {    /* lg */
  .container { max-width: 1024px; }
}

@media (min-width: 1280px) {    /* xl */
  .container { max-width: 1280px; }
}

@media (min-width: 1536px) {    /* 2xl */
  .container { max-width: 1536px; }
}
```

### Section Spacing
```css
/* Vertical section padding */
.section-padding: py-24 (96px top/bottom)

/* Content max-widths */
.content-narrow: max-w-3xl (768px)     /* Hero subtext, section descriptions */
.content-medium: max-w-4xl (896px)     /* FAQ section, CTA content */
.content-wide: max-w-6xl (1152px)      /* Card grids, main content */
```

### Component Spacing
```css
/* Common spacing values */
space-2: 8px       /* Small gaps */
space-3: 12px      /* Feature list items */
space-4: 16px      /* Standard gaps */
space-6: 24px      /* Card content padding */
space-8: 32px      /* Large gaps, card grid */
space-12: 48px     /* Section element spacing */
space-16: 64px     /* Large section margins */
```

---

## 🧩 Component Specifications

### Cards
```css
/* Standard card */
.card {
  border: 0;                             /* No border */
  border-radius: var(--radius);         /* 10px */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);  /* shadow-lg */
  background: var(--card);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); /* shadow-xl */
}

/* Popular/highlighted card */
.card-highlighted {
  ring: 2px solid var(--indigo-500);    /* ring-2 ring-indigo-500 */
}
```

### Buttons

#### Primary Button
```css
.button-primary {
  background: linear-gradient(to right, #6366f1, #9333ea);
  color: white;
  padding: 12px 32px;                    /* h-12 px-8 */
  border-radius: var(--radius);
  font-weight: 500;
  transition: all 0.3s ease;
}

.button-primary:hover {
  background: linear-gradient(to right, #4f46e5, #7c3aed);
}
```

#### Secondary Button
```css
.button-secondary {
  border: 1px solid var(--border);
  background: transparent;
  color: var(--foreground);
  padding: 12px 32px;
  border-radius: var(--radius);
}
```

### Badges
```css
.badge {
  padding: 8px 16px;                     /* px-4 py-2 */
  border-radius: var(--radius);
  font-size: 14px;                       /* text-sm */
  font-weight: 500;
}

.badge-gradient {
  background: linear-gradient(to right, #6366f1, #9333ea);
  color: white;
}

.badge-outline {
  border: 1px solid var(--border);
  background: transparent;
}
```

---

## 📱 Responsive Breakpoints

### Grid Systems
```css
/* Mobile First Approach */

/* Mobile (default) */
.grid-responsive {
  grid-template-columns: 1fr;
  gap: 2rem;                             /* gap-8 */
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .grid-2-col { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .grid-3-col { grid-template-columns: repeat(3, 1fr); }
  .grid-6-col { grid-template-columns: repeat(6, 1fr); }
}
```

### Typography Responsive
```css
/* Headings scale responsively */
.hero-heading {
  font-size: 3rem;                       /* text-5xl - Mobile */
}

@media (min-width: 768px) {
  .hero-heading {
    font-size: 4.5rem;                   /* text-7xl - Desktop */
  }
}

.section-heading {
  font-size: 2.25rem;                    /* text-4xl - Mobile */
}

@media (min-width: 768px) {
  .section-heading {
    font-size: 3rem;                     /* text-5xl - Desktop */
  }
}
```

---

## 🎭 Component Patterns

### Section Header Pattern
```html
<div class="text-center space-y-4 mb-16">
  <Badge variant="outline">Section Badge</Badge>
  <h2 class="text-4xl md:text-5xl font-bold">
    Headline Part
    <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
      Highlighted Part
    </span>
  </h2>
  <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
    Section description
  </p>
</div>
```

### Card Grid Pattern
```html
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  <!-- Cards go here -->
</div>
```

### Gradient Text Pattern
```css
.gradient-text {
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

---

## 🌙 Dark Mode Implementation

### Theme Toggle
- Uses CSS custom properties for seamless switching
- All colors defined in both light and dark variants
- `.dark` class applied to root element triggers dark mode

### Dark Mode Colors
- Background: Very dark gray (`oklch(0.145 0 0)`)
- Text: Near white (`oklch(0.985 0 0)`)
- Cards: Same as background for seamless integration
- Borders: Subtle dark gray for definition

---

## 🎨 Icon System

### Primary Icons (Lucide React)
```typescript
// Navigation & Actions
ArrowRight, Play, Upload, Star

// Features & Benefits  
Zap, Shield, Globe, Users, Building2, Brain

// Social & Communication
Twitter, Linkedin, Github, Mail

// Interface
Check, X, Menu, Search
```

### Icon Sizing
- **Small**: w-4 h-4 (16px) - In text, badges
- **Medium**: w-5 h-5 (20px) - Buttons
- **Large**: w-6 h-6 (24px) - Feature icons in gradients
- **XL**: w-8 h-8 (32px) - Large feature displays
- **2XL**: w-12 h-12 (48px) - Upload areas, major CTAs

---

## 📊 Layout Specifications

### Navigation
- **Height**: 64px (`h-16`)
- **Background**: Backdrop blur with 95% opacity
- **Position**: Fixed top with z-index 50
- **Logo**: 32px square gradient box + text

### Hero Section
- **Min Height**: 100vh
- **Background**: Gradient from slate-50 to indigo-50
- **Content**: Centered with max-width 4xl (896px)

### Section Spacing
- **Vertical**: 96px top/bottom (`py-24`)
- **Content Margin**: 64px between content blocks (`mb-16`)

### Footer
- **Background**: slate-900 (dark)
- **Newsletter Section**: 64px padding (`py-16`)
- **Main Footer**: 64px padding (`py-16`)
- **Bottom Bar**: 24px padding (`py-6`)

---

## ⚡ Animation & Transitions

### Standard Transitions
```css
.transition-standard {
  transition: all 0.3s ease;
}

.transition-colors {
  transition: color 0.3s ease;
}

.transition-shadow {
  transition: box-shadow 0.3s ease;
}
```

### Hover Effects
- **Cards**: Elevation increase (shadow-lg to shadow-xl)
- **Buttons**: Subtle gradient shift
- **Links**: Color change to primary
- **Icons**: Scale transform (scale-110)

### Background Decorations
- **Blur**: blur-3xl for gradient orbs
- **Opacity**: 30% for light mode, 20% for dark mode
- **Positioning**: Absolute with inset-0

---

## 🔧 Technical Implementation

### CSS Custom Properties
All colors use CSS custom properties for theme switching:
```css
color: var(--foreground);
background: var(--background);
border-color: var(--border);
```

### Tailwind Integration
- Uses Tailwind v4.0 with @theme inline
- Custom properties mapped to Tailwind color system
- Responsive utilities for all breakpoints

### Component Architecture
- Modular components in `/components/landing/`
- Centralized content in `/config/content.ts`
- Theme system in `/components/ThemeProvider.tsx`

---

*This specification serves as the single source of truth for eysign's design system. All components should adhere to these specifications for consistency and maintainability.*