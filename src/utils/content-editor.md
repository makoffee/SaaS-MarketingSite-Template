# Content Editor Guide

## 📝 Quick Content Editing

The eysign landing page now uses a centralized content management system. All text content is located in `/config/content.ts`, making it easy to update copy without touching component code.

## 🎯 How to Edit Content

### 1. Open the Content File
Navigate to `/config/content.ts` - this contains all text content for the landing page.

### 2. Find the Section You Want to Edit
The content is organized by page sections:

```typescript
export const content = {
  company: {/*...*/},        // Company info, name, tagline
  navigation: {/*...*/},      // Navigation menu items
  hero: {/*...*/},           // Hero section (main headline area)
  features: {/*...*/},       // Features section
  solutions: {/*...*/},      // Solutions/target audience section
  pricing: {/*...*/},        // Pricing plans and FAQ
  cta: {/*...*/},           // Call-to-action section
  footer: {/*...*/}         // Footer content
}
```

### 3. Edit the Content
Simply change the text values. For example:

```typescript
// Change the main headline
hero: {
  headline: {
    part1: "Global Media",           // ← Edit this
    highlighted: "Accessibility",   // ← Edit this  
    part2: "Made Simple"            // ← Edit this
  },
  subheadline: "Your new description here...", // ← Edit this
}
```

## 🔧 Content Structure Examples

### Headlines with Highlighted Text
```typescript
headline: {
  part1: "First part of headline",
  highlighted: "highlighted portion",  // This gets gradient styling
  part2: "final part"
}
```

### Button Text
```typescript
cta: {
  primary: "Start Free Trial",
  secondary: "Watch Demo"
}
```

### Lists of Features/Items
```typescript
features: [
  "First feature description",
  "Second feature description", 
  "Third feature description"
]
```

### Navigation Links
```typescript
links: [
  { text: "Features", href: "#features" },
  { text: "Pricing", href: "#pricing" }
]
```

## ⚡ Components Using Centralized Content

The following components have been updated to use centralized content:

- ✅ **Hero** (`/components/landing/Hero.tsx`)
- ✅ **Navigation** (`/components/landing/Navigation.tsx`)
- 🔄 **Features** (needs updating)
- 🔄 **Solutions** (needs updating)  
- 🔄 **Pricing** (needs updating)
- 🔄 **CallToAction** (needs updating)
- 🔄 **Footer** (needs updating)

## 🎨 Styling Notes

- Text marked as `highlighted` automatically gets gradient styling
- Icons are referenced by name (e.g., "zap", "shield", "globe")
- All spacing, colors, and styling remain in the components
- Only the actual text content is centralized

## 📋 Common Editing Tasks

### Change Company Name
```typescript
company: {
  name: "yournewname",  // ← Change this
}
```

### Update Pricing
```typescript
pricing: {
  plans: [
    {
      name: "Individual",
      price: "19",        // ← Change price
      currency: "€",      // ← Change currency
      features: [         // ← Add/remove/edit features
        "Feature 1",
        "Feature 2"
      ]
    }
  ]
}
```

### Modify Hero Message
```typescript
hero: {
  subheadline: "Your new compelling message here...",
  cta: {
    primary: "Your New CTA",
    secondary: "Alternative Action"
  }
}
```

### Add FAQ Items
```typescript
faq: {
  items: [
    {
      question: "Your question?",
      answer: "Your detailed answer here."
    }
  ]
}
```

## 🔒 Type Safety

The content system includes TypeScript types, so you'll get helpful autocomplete and error checking when editing content in a TypeScript-aware editor.

## 🌐 Future: Localization Ready

This centralized system makes it easy to add multiple languages in the future by:
1. Creating separate content files for each language (e.g., `content-es.ts`, `content-fr.ts`)
2. Switching between them based on user language preference
3. Maintaining the same structure across all languages

---

*Need to update more components to use centralized content? Follow the pattern shown in Hero.tsx and Navigation.tsx - import the content object and replace hardcoded strings with content references.*