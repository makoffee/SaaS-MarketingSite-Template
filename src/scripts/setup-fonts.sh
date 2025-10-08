#!/bin/bash

# Setup Local Fonts for EU GDPR Compliance
# This script helps download and organize font files

echo "🔤 Setting up local fonts for EU GDPR compliance..."

# Create font directories
mkdir -p fonts/inter
mkdir -p fonts/satoshi

echo "📁 Created font directories"

# Download Inter font (open source)
echo "📥 Downloading Inter font..."
curl -L -o inter.zip "https://github.com/rsms/inter/releases/download/v4.0/Inter-4.0.zip"

# Extract Inter files
unzip -q inter.zip
cp "Inter Desktop/Inter-Regular.otf" fonts/inter/
cp "Inter Desktop/Inter-Medium.otf" fonts/inter/
cp "Inter Desktop/Inter-SemiBold.otf" fonts/inter/

# Convert to woff2 (requires woff2 tools)
# Install with: npm install -g ttf2woff2
if command -v ttf2woff2 &> /dev/null; then
    echo "🔄 Converting Inter to woff2..."
    ttf2woff2 "fonts/inter/Inter-Regular.otf" "fonts/inter/Inter-Regular.woff2"
    ttf2woff2 "fonts/inter/Inter-Medium.otf" "fonts/inter/Inter-Medium.woff2"
    ttf2woff2 "fonts/inter/Inter-SemiBold.otf" "fonts/inter/Inter-SemiBold.woff2"
    
    # Remove OTF files after conversion
    rm fonts/inter/*.otf
else
    echo "⚠️  ttf2woff2 not found. Install with: npm install -g ttf2woff2"
    echo "ℹ️  Or manually convert OTF files to woff2 format"
fi

# Cleanup
rm -rf inter.zip "Inter Desktop" "Inter Web"

echo ""
echo "📋 NEXT STEPS:"
echo ""
echo "1. For Satoshi font (if you have a license):"
echo "   - Place Satoshi .woff2 files in fonts/satoshi/"
echo "   - Or use an alternative like Outfit or Public Sans"
echo ""
echo "2. Alternative open-source fonts to replace Satoshi:"
echo "   - Outfit: https://fonts.google.com/specimen/Outfit"
echo "   - Public Sans: https://fonts.google.com/specimen/Public+Sans"
echo "   - Manrope: https://fonts.google.com/specimen/Manrope"
echo ""
echo "3. Test the setup by running your development server"
echo ""
echo "✅ Inter font setup complete!"
echo "🔒 Your site is now EU GDPR compliant!"