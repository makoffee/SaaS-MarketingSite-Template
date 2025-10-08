# Local Fonts for EU GDPR Compliance

This directory contains locally hosted font files to avoid sending user data to Google servers.

## Font Files Structure

```
/fonts/
├── inter/
│   ├── Inter-Regular.woff2
│   ├── Inter-Medium.woff2
│   └── Inter-SemiBold.woff2
└── satoshi/
    ├── Satoshi-Regular.woff2
    ├── Satoshi-Medium.woff2
    ├── Satoshi-SemiBold.woff2
    └── Satoshi-Bold.woff2
```

## How to obtain the fonts:

### Inter (Open Source)
1. Download from: https://github.com/rsms/inter/releases
2. Extract the `InterVariable.woff2` file or individual weight files
3. Place in `/fonts/inter/` directory

### Satoshi (Commercial - if licensed)
1. If you have a Satoshi license, place the .woff2 files in `/fonts/satoshi/`
2. Alternative: Replace with similar open-source fonts like:
   - **Outfit** (Google Fonts alternative)
   - **Public Sans** (Open source, similar geometry)
   - **Manrope** (Open source, modern geometric)

## GDPR Compliance
- ✅ No external requests to Google servers
- ✅ No IP address leakage to third parties
- ✅ Full control over font loading and caching
- ✅ Better performance (no external DNS lookups)

## Performance Benefits
- Faster loading (no external requests)
- Better caching control
- Reduced dependency on external services
- Improved Core Web Vitals scores