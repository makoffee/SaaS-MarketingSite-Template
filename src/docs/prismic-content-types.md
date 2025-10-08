# Prismic CMS Content Types

This document defines the content structure for the eysign landing page in Prismic CMS.

## 📄 Content Types Overview

### 1. Homepage (Single Type)
**API ID:** `homepage`

#### Hero Section
- `hero_badge_text` - Key Text
- `hero_headline_part1` - Key Text  
- `hero_headline_highlighted` - Key Text
- `hero_headline_part2` - Key Text
- `hero_subheadline` - Rich Text (single line)
- `hero_cta_primary` - Key Text
- `hero_cta_secondary` - Key Text
- `hero_upload_prompt` - Key Text
- `hero_social_proof` - Group (repeatable)
  - `icon` - Select (globe, shield, zap)
  - `text` - Key Text

#### Features Section
- `features_subheading` - Key Text
- `features_headline` - Rich Text
- `features_description` - Rich Text
- `features_list` - Group (repeatable)
  - `icon` - Select (languages, volume2, eye, shield, settings, zap)
  - `title` - Key Text
  - `description` - Rich Text

#### Solutions Section  
- `solutions_badge` - Key Text
- `solutions_headline_part1` - Key Text
- `solutions_headline_highlighted` - Key Text
- `solutions_subheadline` - Rich Text
- `solutions_use_cases_headline` - Key Text
- `solutions_use_cases_subheadline` - Rich Text

#### Pricing Section
- `pricing_badge` - Key Text
- `pricing_headline_part1` - Key Text
- `pricing_headline_highlighted` - Key Text
- `pricing_subheadline` - Rich Text
- `pricing_faq_headline` - Key Text

#### Call to Action Section
- `cta_headline_part1` - Key Text
- `cta_headline_highlighted` - Key Text
- `cta_description` - Rich Text
- `cta_upload_title` - Key Text
- `cta_upload_description` - Key Text
- `cta_primary_button` - Key Text
- `cta_secondary_button` - Key Text
- `cta_file_support_text` - Key Text

### 2. Navigation (Single Type)
**API ID:** `navigation`

- `logo_text` - Key Text
- `nav_items` - Group (repeatable)
  - `label` - Key Text
  - `href` - Key Text
- `cta_button_text` - Key Text

### 3. Target Audience (Repeatable Type)
**API ID:** `target_audience`

- `badge` - Key Text
- `title` - Key Text
- `description` - Rich Text
- `gradient` - Key Text (CSS classes)
- `icon` - Select (user, users, building2)
- `popular` - Boolean
- `features` - Key Text (repeatable)
- `stats` - Key Text
- `cta` - Key Text

### 4. Pricing Plan (Repeatable Type)
**API ID:** `pricing_plan`

- `name` - Key Text
- `badge` - Key Text
- `icon` - Select (zap, users, building2)
- `price` - Key Text
- `period` - Key Text
- `description` - Rich Text
- `features` - Group (repeatable)
  - `feature` - Key Text
  - `included` - Boolean
- `cta_text` - Key Text
- `popular` - Boolean
- `gradient` - Key Text (CSS classes)

### 5. FAQ Item (Repeatable Type)
**API ID:** `faq_item`

- `question` - Key Text
- `answer` - Rich Text
- `category` - Select (general, pricing, technical, billing)

### 6. Feature Item (Repeatable Type)
**API ID:** `feature_item`

- `icon` - Select (languages, shield, zap, users, lock, activity, volume2, eye, settings)
- `title` - Key Text
- `description` - Rich Text
- `order` - Number

### 7. Use Case (Repeatable Type)
**API ID:** `use_case`

- `icon` - Select (play, zap, globe, trending-up, shield, target)
- `title` - Key Text
- `description` - Rich Text
- `color` - Key Text (Tailwind color class)

### 8. Footer (Single Type)
**API ID:** `footer`

- `company_description` - Rich Text
- `footer_links` - Group (repeatable)
  - `section_title` - Key Text
  - `links` - Group (repeatable)
    - `label` - Key Text
    - `href` - Key Text
- `social_links` - Group (repeatable)
  - `platform` - Select (twitter, linkedin, github)
  - `url` - Link
- `copyright_text` - Key Text

## 🔧 Prismic Configuration

### Slice Machine Setup
```json
{
  "repositoryName": "eysign",
  "adapter": "@slicemachine/adapter-next",
  "libraries": ["./slices"]
}
```

### Custom Types JSON
Export these content types from the Prismic dashboard or import via Slice Machine.

## 📊 Content Migration Strategy

### Phase 1: Static Content
1. Create all Single Types first
2. Import content from `/config/content.ts`
3. Test with sample data

### Phase 2: Dynamic Content  
1. Create Repeatable Types
2. Add sample entries for testing
3. Implement fetching logic

### Phase 3: Optimization
1. Add content relationships
2. Implement rich text rendering
3. Add image optimization

## 🎨 Rich Text Configuration

Configure allowed formatting:
- **Bold** and *italic* text
- Links (internal and external)
- Headings (H2-H4)
- Lists (bulleted and numbered)
- Code snippets

## 🖼️ Image Fields

All images should include:
- Alt text (required)
- Multiple sizes for responsive images
- WebP format support
- Lazy loading attributes

## 🔄 Content Relationships

Setup relationships between:
- Homepage → Pricing Plans
- Homepage → Features
- Homepage → FAQ Items
- Solutions → Target Audiences

## 📝 Content Guidelines

### Writing Style
- Professional, technical tone
- Action-oriented CTAs
- Clear, concise descriptions
- SEO-optimized headings

### Image Requirements
- High resolution (min 1920px width)
- Professional quality
- Brand-consistent colors
- Optimized file sizes

### Color Codes
**Primary Purple Gradient:** `from-indigo-500 to-purple-600`
**Secondary Teal Gradient:** `from-cyan-500 to-teal-500`
**Individual Colors:** `indigo-500`, `purple-600`, `cyan-500`, `teal-500`

## 🚀 Publishing Workflow

1. **Draft** - Content team edits
2. **Review** - Stakeholder approval  
3. **Schedule** - Release coordination
4. **Publish** - Live deployment
5. **Archive** - Version management

## 🔍 SEO Fields

Add to each content type:
- `meta_title` - Key Text (60 chars max)
- `meta_description` - Key Text (160 chars max) 
- `og_image` - Image
- `canonical_url` - Link