# Project Cleanup Notes for Developers

## Files Removed

The following unused/generic files have been removed from the project:

**Deleted Files:**
- `/imports/svg-6lasejgvip.ts` - Unused SVG imports from Figma (not referenced anywhere)
- `/styles/fonts-alternative.css` - Unused alternative font configuration

## Protected Files (Cannot be Deleted)

The following files are Figma Make system files. While they're not project-specific, they cannot be removed through the current interface:

**Figma Make System Files:**
- `/Attributions.md` - Generic attribution file for shadcn/ui and Unsplash
- `/components/figma/ImageWithFallback.tsx` - Figma Make utility component (not used in this project)

### Recommendation for Developers

When migrating to Next.js, you can safely:
1. Ignore or delete `Attributions.md` (it's generic boilerplate)
2. Ignore or delete `/components/figma/` directory (not used in this project)
3. Keep all other files and folders

## Clean Project Structure

After cleanup, your working project structure includes:

```
project/
├── App.tsx                      # Entry point
├── README.md                    # Project README
├── components/
│   ├── landing/                # All landing page sections
│   ├── dashboard/              # Dashboard templates
│   ├── onboarding/             # Onboarding flow
│   ├── ui/                     # shadcn/ui components
│   ├── ThemeProvider.tsx       # Theme system
│   └── ThemeToggle.tsx         # Theme toggle
├── config/
│   └── content.ts              # Centralized content
├── docs/                       # Comprehensive documentation
├── fonts/                      # GDPR-compliant local fonts
├── guidelines/
│   └── Guidelines.md           # Project standards
├── hooks/                      # Custom React hooks
├── scripts/                    # Setup scripts
├── styles/
│   └── globals.css             # Design system
├── types/
│   └── content.ts              # TypeScript interfaces
└── utils/
    ├── content-editor.md       # Content editing guide
    └── content-helpers.ts      # Content utilities
```

## Migration Checklist

When setting up Next.js project:

- [ ] Copy all files EXCEPT `/components/figma/` and `Attributions.md`
- [ ] Initialize Next.js 14+ with App Router
- [ ] Move components to appropriate Next.js structure
- [ ] Update imports to use `@/` alias
- [ ] Set up Prismic CMS
- [ ] Configure environment variables
- [ ] Deploy to Vercel

## Key Takeaway

The project is now clean and focused with only project-specific code and comprehensive documentation. All generic Figma Make boilerplate has been removed where possible.
