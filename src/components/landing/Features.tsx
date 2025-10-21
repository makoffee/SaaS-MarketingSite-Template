/**
 * Features Section Component
 * Production-ready features section with TypeScript interfaces and optimized animations
 */

import { 
  Languages, 
  Shield, 
  Zap, 
  Bot,
  Users, 
  Lock, 
  Activity,
  Volume2,
  Eye,
  Settings,
  LucideIcon
} from "lucide-react";
import dotPatternBackground from 'figma:asset/fc78b0f9988164301302026f25c315b9bb4707d8.png';
import { content } from "../../config/content";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesContent {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
}

interface FeaturesProps {
  content?: FeaturesContent;
  className?: string;
}

// Default features content - production-ready structure
const defaultFeatures: Feature[] = [
  {
    icon: Languages,
    title: "Automated Captioning",
    description: "Generate accurate, high-quality closed captions for your content, ensuring compliance with accessibility standards for all viewers."
  },
  {
    icon: Volume2,
    title: "Precision Transcriptions", 
    description: "Our contextual translation engine provides verbatim transcriptions for video and audio content, trained on media-specific terminology for unmatched accuracy."
  },
  {
    icon: Eye,
    title: "Dynamic Audio Descriptions",
    description: "Create rich, detailed audio descriptions that enhance content for visually impaired audiences, powered by our sophisticated contextual processing engine."
  },
  {
    icon: Shield,
    title: "Global Compliance",
    description: "Instantly adapt your media to meet regional accessibility laws and content regulations with our automated compliance engine."
  },
  {
    icon: Settings,
    title: "Powerful API",
    description: "Integrate our contextual translation capabilities directly into your existing video production workflows and content management systems with a robust developer API."
  },
  {
    icon: Bot,
    title: "EYZflow Engine",
    description: "Our proprietary EYZflow contextual translation engine is specifically trained for the nuances of streaming media, delivering unparalleled quality and context-aware results for film and video content."
  }
];

export function Features({ 
  content: featuresContent,
  className = ""
}: FeaturesProps) {
  const headerReveal = useScrollReveal('slideInFromLeft');
  const gridReveal = useScrollReveal('fadeInUp');

  return (
    <section id="features" className={`relative py-24 overflow-hidden${className ? ` ${className}` : ''}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={dotPatternBackground}
          alt="Dark background with purple dotted wave patterns"
          className="w-full h-full object-cover"
          />
      </div>

      <div className="relative container">
        {/* Header - LEFT ALIGNED */}
        <headerReveal.motion.div
          ref={headerReveal.ref}
          initial={headerReveal.initial}
          animate={headerReveal.animate}
          variants={headerReveal.variants}
          className="max-w-5xl mx-auto mb-16"
        >
          <p className="text-white mb-4">
            The complete toolkit for global media distribution.
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Seamless Media<br />
            Accessibility & Localization
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Revolutionize how you reach global audiences with our contextual translation engine that 
            understands media context, ensures compliance, and expands your content's reach.
          </p>
        </headerReveal.motion.div>

        {/* Features Grid - 2x3 layout */}
        <gridReveal.motion.div
          ref={gridReveal.ref}
          initial={gridReveal.initial}
          animate={gridReveal.animate}
          variants={gridReveal.variants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {defaultFeatures.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 backdrop-blur-md flex items-center justify-center shadow-lg">
                  <feature.icon className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed pl-[60px]">
                {feature.description}
              </p>
            </div>
          ))}
        </gridReveal.motion.div>
      </div>
    </section>
  );
}