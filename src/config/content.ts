/**
 * Centralized Content Management for eysign Landing Page
 * 
 * This file contains all text content, making it easy to:
 * - Update copy in one central location
 * - Maintain consistency across components
 * - Support future localization efforts
 * - Enable content editing without touching component code
 */

export const content = {
  // Company Information
  company: {
    name: "eysign",
    nameClass: "font-black", // Apply black font weight (900) to brand name
    tagline: "Global Media Accessibility Made Simple",
    description: "Making global media accessible to everyone through specialized contextual translation engines and accessibility solutions.",
    copyright: "© 2024 eysign. All rights reserved.",
    madeWith: "Made with ❤️ for global creators"
  },

  // Navigation
  navigation: {
    logo: "eysign",
    links: [
      { text: "Features", href: "#features" },
      { text: "Solutions", href: "#solutions" },
      { text: "Pricing", href: "#pricing" },
      { text: "Enterprise", href: "#enterprise" },
      { text: "Support", href: "#support" }
    ],
    auth: {
      login: "Log in",
      getStarted: "Get eysign"
    }
  },

  // Hero Section
  hero: {
    badge: {
      text: "Contextual Translation Engine",
      icon: "bot"
    },
    headline: {
      part1: "Global Media",
      highlighted: "Accessibility",
      part2: "Made Simple"
    },
    subheadline: "Transform your content for global audiences with our contextual translation engine that understands media context, ensures compliance, and scales with your needs.",
    cta: {
      primary: "Get Started",
      secondary: "Watch Demo"
    },
    uploadPrompt: "",
    socialProof: [
      { icon: "globe", text: "30+ Languages Supported" },
      { icon: "shield", text: "European Accessibility Act Compliant" },
      { icon: "bot", text: "Media-Trained Precision" }
    ]
  },

  // Features Section
  features: {
    badge: "Powerful Features",
    headline: {
      part1: "Everything you need to",
      highlighted: "go global"
    },
    subheadline: "Our comprehensive suite of media-specialized tools ensures your content meets the highest standards of accessibility and localization.",
    items: [
      {
        icon: "brain",
        title: "Contextual Translation Engine",
        description: "Advanced algorithms trained on media content that understand industry terminology, cultural nuances, and maintain consistent tone across languages."
      },
      {
        icon: "accessibility",
        title: "Full Accessibility Compliance",
        description: "Generate subtitles that meet WCAG 2.1 AA standards, including proper timing, contrast, and readability requirements."
      },
      {
        icon: "bot",
        title: "Lightning-Fast Processing",
        description: "Process hours of content in minutes with our optimized media processing pipeline. Batch processing available for large projects."
      },
      {
        icon: "users",
        title: "Team Collaboration",
        description: "Built-in review workflows, version control, and real-time collaboration tools for production teams."
      },
      {
        icon: "shield",
        title: "Digital Rights Management",
        description: "Google Widevine, Microsoft PlayReady, and Apple FairPlay compatible"
      },
      {
        icon: "api",
        title: "Streaming API & Integrations",
        description: "REST API with HLS/DASH output, Amazon, Apple, and Netflix packaging support, and pre-built media pipeline integrations."
      }
    ]
  },

  // Solutions Section
  solutions: {
    badge: "Solutions",
    headline: {
      part1: "Built for every",
      highlighted: "project's scale"
    },
    subheadline: "From individual creators to global enterprises, discover how eysign adapts to your content localization needs.",
    targetAudiences: [
      {
        badge: "Individual",
        title: "Content Creators & Freelancers",
        description: "Perfect for social media creators and marketing professionals",
        features: [
          "Contextual subtitles in 30+ languages",
          "Easy drag & drop video upload",
          "Export in multiple formats",
          "Share your content with the world"
        ],
        cta: "Start Creating",
        stats: "150min/month",
        gradient: "from-cyan-500 to-teal-500"
      },
      {
        badge: "Studio",
        title: "Teams and Production Studios",
        description: "Self-service SaaS portal for media accessibility at scale",
        features: [
          "Intuitive management console",
          "Up to 5 users",
          "HLS and DASH support",
          "Packaging and delivery"
        ],
        cta: "Try Studio",
        stats: "1500min/month",
        gradient: "from-indigo-500 to-purple-500"
      },
      {
        badge: "Enterprise",
        title: "Global Media Distribution",
        description: "For large organisations and corporations",
        features: [
          "Custom API integrations",
          "Dedicated account management",
          "White-label OTT solutions",
          "Direct distribution to streaming platforms"
        ],
        cta: "Contact Sales",
        stats: "Unlimited",
        gradient: "from-purple-500 to-pink-500"
      }
    ],
    useCases: {
      headline: "Perfect for any use case",
      subheadline: "From entertainment to education, our platform adapts to your industry's unique requirements",
      items: [
        {
          icon: "play",
          title: "Streaming Platforms",
          description: "HLS/DASH delivery with automated subtitle packaging",
          color: "text-red-500"
        },
        {
          icon: "radio",
          title: "Live Events",
          description: "Real-time captioning for broadcasts and conferences",
          color: "text-yellow-500"
        },
        {
          icon: "graduation-cap",
          title: "Educational Content",
          description: "Make learning accessible across languages and abilities",
          color: "text-teal-500"
        },
        {
          icon: "megaphone",
          title: "Marketing Videos",
          description: "Expand campaign reach with multilingual content",
          color: "text-purple-500"
        },
        {
          icon: "handshake",
          title: "Corporate Training",
          description: "Ensure compliance with accessibility standards",
          color: "text-blue-500"
        },
        {
          icon: "camera",
          title: "Social Media",
          description: "Optimize content for platform-specific requirements",
          color: "text-pink-500"
        }
      ]
    }
  },

  // Pricing Section
  pricing: {
    badge: "Simple Pricing",
    headline: {
      part1: "Plans that scale",
      highlighted: "with your needs"
    },
    subheadline: "From content creators to global distributors, eysign has plans to fit any project's accessibility and localisation needs.",
    plans: [
      {
        name: "Individual",
        price: "99",
        currency: "€",
        period: "/month",
        description: "Perfect for content creators and marketing freelancers",
        gradient: "from-cyan-500 to-teal-500",
        features: [
          "150 film minutes/month",
          "30+ languages & dialects",
          "Social media format exports",
          "Community support",
          "HD video support (1080p)"
        ],
        cta: "Start Individual",
        popular: false,
        additionalSeats: "Everything you need to go global"
      },
      {
        name: "Studio",
        price: "499",
        currency: "€",
        period: "/month",
        description: "For teams and professional production workflows",
        gradient: "from-indigo-500 to-purple-500",
        features: [
          "1,500 film minutes/month",
          "Up to 5 team members included*",
          "Professional delivery pipelines",
          "HLS and DASH support",
          "Priority processing queue",
          "API access (1,000 calls/day)",
          "4K video support"
        ],
        cta: "Try Studio",
        popular: true,
        additionalSeats: "Additional seats from €10/month"
      },
      {
        name: "Enterprise",
        price: "5k",
        currency: "€",
        period: "/month*",
        description: "For large organisations and global media distributors",
        gradient: "from-purple-500 to-pink-500",
        features: [
          "Custom ingestion and delivery integrations",
          "Unlimited API integrations",
          "HLS & DASH support",
          "Amazon, Apple, & Netflix packaging",
          "Multi-platform delivery support",
          "Digital Rights Management",
          "Packaging & delivery",
          "Single sign-on support",
          "8K video support"
        ],
        cta: "Contact Sales",
        popular: false,
        additionalSeats: "*Inquire about custom solutions",
        enterprise: true
      }
    ],
    faq: {
      headline: "Frequently asked questions",
      items: [
        {
          question: "How does the onboarding process work?",
          answer: "Simply upload your video to get started. Our contextual translation engine will process it instantly, then you'll select a plan and create your account to download the results. No upfront commitment required."
        },
        {
          question: "Can I change plans anytime?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly."
        },
        {
          question: "What happens if I exceed my processing limits?",
          answer: "We'll notify you when you approach your limits. You can either upgrade your plan or purchase additional processing minutes as needed."
        },
        {
          question: "Do enterprise clients get custom integrations?",
          answer: "Yes! Enterprise plans include custom API integrations, pipeline connections, and white-label solutions tailored to your existing workflow."
        }
      ]
    }
  },

  // Call to Action Section
  cta: {
    headline: {
      part1: "Ready to reach your",
      highlighted: "global audience?"
    },
    subheadline: "Join thousands of creators, studios, and enterprises who trust eysign to make their content accessible and engaging for audiences worldwide.",
    upload: {
      headline: "Drop your video file here",
      description: "Get contextual subtitles in 30+ languages instantly",
      button: "Browse Files",
      supportedFormats: "Supports MP4, MOV, AVI up to 5GB • Create account after processing"
    },
    buttons: {
      primary: "Get Started",
      secondary: "Schedule Demo"
    },
    trustIndicators: [
      { icon: "globe", text: "30+ Languages" },
      { icon: "bot", text: "Media-Trained Precision" },
      { icon: "shield", text: "DRM protected workflows" },
      { icon: "check", text: "EAA compliant" }
    ]
  },

  // Footer Section
  footer: {
    newsletter: {
      headline: "Stay updated with eysign",
      description: "Get the latest features, industry insights, and product updates delivered to your inbox.",
      placeholder: "Enter your email",
      button: "Subscribe"
    },
    links: {
      Product: [
        { name: "Features", href: "#features" },
        { name: "Solutions", href: "#solutions" },
        { name: "Pricing", href: "#pricing" },
        { name: "API Documentation", href: "#" },
        { name: "Integrations", href: "#" }
      ],
      Company: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" }
      ],
      Resources: [
        { name: "Help Center", href: "#" },
        { name: "Community", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Status Page", href: "#" }
      ],
      Legal: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Security", href: "#" },
        { name: "Compliance", href: "#" }
      ]
    },
    bottom: {
      systemStatus: "System Status"
    }
  }
} as const;

// Type for content access - ensures type safety when using content
export type ContentType = typeof content;