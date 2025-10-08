// TypeScript interfaces for Prismic content types
// This will replace /config/content.ts in the Next.js version

export interface HeroSection {
  badge: {
    text: string;
  };
  headline: {
    part1: string;
    highlighted: string;
    part2: string;
  };
  subheadline: string;
  cta: {
    primary: string;
    secondary: string;
  };
  uploadPrompt: string;
  socialProof: Array<{
    icon: 'globe' | 'shield' | 'zap';
    text: string;
  }>;
}

export interface FeaturesSection {
  subheading: string;
  headline: string;
  description: string;
  features: Array<{
    icon: 'languages' | 'volume2' | 'eye' | 'shield' | 'settings' | 'zap';
    title: string;
    description: string;
  }>;
}

export interface SolutionsSection {
  badge: string;
  headline: {
    part1: string;
    highlighted: string;
  };
  subheadline: string;
  targetAudiences: TargetAudience[];
  useCases: {
    headline: string;
    subheadline: string;
    items: UseCase[];
  };
}

export interface TargetAudience {
  badge: string;
  title: string;
  description: string;
  gradient: string;
  icon: 'user' | 'users' | 'building2';
  popular?: boolean;
  features: string[];
  stats: string;
  cta: string;
}

export interface UseCase {
  icon: 'play' | 'zap' | 'globe' | 'trending-up' | 'shield' | 'target';
  title: string;
  description: string;
  color: string;
}

export interface PricingSection {
  badge: string;
  headline: {
    part1: string;
    highlighted: string;
  };
  subheadline: string;
  plans: PricingPlan[];
  faq: {
    headline: string;
    items: FAQItem[];
  };
}

export interface PricingPlan {
  name: string;
  badge: string;
  icon: 'zap' | 'users' | 'building2';
  price: string;
  period: string;
  description: string;
  features: Array<{
    feature: string;
    included: boolean;
  }>;
  cta: string;
  popular?: boolean;
  gradient: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: 'general' | 'pricing' | 'technical' | 'billing';
}

export interface CallToActionSection {
  headline: {
    part1: string;
    highlighted: string;
  };
  description: string;
  upload: {
    title: string;
    description: string;
    supportText: string;
  };
  cta: {
    primary: string;
    secondary: string;
  };
  trustIndicators: Array<{
    icon: 'shield' | 'globe' | 'zap' | 'check';
    text: string;
  }>;
}

export interface NavigationData {
  logoText: string;
  items: Array<{
    label: string;
    href: string;
  }>;
  ctaButton: string;
}

export interface FooterData {
  companyDescription: string;
  links: Array<{
    sectionTitle: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
  socialLinks: Array<{
    platform: 'twitter' | 'linkedin' | 'github';
    url: string;
  }>;
  copyrightText: string;
}

// Main homepage content interface
export interface HomepageContent {
  hero: HeroSection;
  features: FeaturesSection;
  solutions: SolutionsSection;
  pricing: PricingSection;
  callToAction: CallToActionSection;
}

// Prismic document types
export interface PrismicHomepage {
  data: HomepageContent;
}

export interface PrismicNavigation {
  data: NavigationData;
}

export interface PrismicFooter {
  data: FooterData;
}

// Utility types for Prismic
export interface PrismicDocument<T = any> {
  id: string;
  uid?: string;
  type: string;
  lang: string;
  data: T;
  first_publication_date: string;
  last_publication_date: string;
}

export type PrismicContent = 
  | PrismicHomepage
  | PrismicNavigation
  | PrismicFooter;