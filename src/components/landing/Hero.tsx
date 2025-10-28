/**
 * Hero Section Component
 * Production-ready hero with TypeScript interfaces and performance optimizations
 */

import { Button } from "../ui/button";
import { Play, ArrowRight, Upload, Zap, Globe, Shield, Bot } from "lucide-react";
import { Badge } from "../ui/badge";
import { content } from "../../config/content";
import dashboardScreenshotLight from "figma:asset/0079ce6d6aa3f4d01be1bef8a07912e85a95c9e3.png";
import dashboardScreenshotDark from "figma:asset/b06ecfadacb0da547dac2f8a29b475e51c45f1a0.png";
import { MultilingualTypewriterH1 } from "./MultilingualTypewriterH1";

interface HeroContent {
  badge: {
    text: string;
    icon: "zap" | "bot";
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
  uploadPrompt?: string;
  socialProof: Array<{
    icon: "globe" | "shield" | "zap" | "bot";
    text: string;
  }>;
}

interface HeroProps {
  content?: HeroContent;
  className?: string;
}

export function Hero({ 
  content: heroContent = content.hero,
  className = ""
}: HeroProps) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-background dark:to-slate-800 pt-20 md:pt-24${className ? ` ${className}` : ''}`}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-500/15 dark:to-pink-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-cyan-500/25 to-teal-500/25 dark:from-cyan-500/15 dark:to-teal-500/15 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            {heroContent.badge.icon === "zap" && <Zap className="w-4 h-4 mr-2" />}
            {heroContent.badge.icon === "bot" && <Bot className="w-4 h-4 mr-2" />}
            {heroContent.badge.text}
          </Badge>

          {/* Main heading - Multilingual typewriter animation */}
          <MultilingualTypewriterH1 />

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-5xl leading-snug">
            {heroContent.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
              {heroContent.cta.primary}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8">
              <Play className="mr-2 h-5 w-5" />
              {heroContent.cta.secondary}
            </Button>
          </div>

          {/* Quick upload CTA */}
          {heroContent.uploadPrompt && (
            <div className="flex items-center space-x-4 pt-8 text-sm">
              <div className="flex items-center space-x-3 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg">
                <Upload className="h-4 w-4" />
                <span className="font-medium">{heroContent.uploadPrompt}</span>
              </div>
            </div>
          )}

          {/* Social proof */}
          <div className="flex items-center space-x-8 pt-12 text-sm">
            {heroContent.socialProof.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                {item.icon === "globe" && <Globe className="h-4 w-4 text-indigo-500" />}
                {item.icon === "shield" && <Shield className="h-4 w-4 text-indigo-500" />}
                {item.icon === "zap" && <Zap className="h-4 w-4 text-indigo-500" />}
                {item.icon === "bot" && <Bot className="h-4 w-4 text-indigo-500" />}
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Dashboard Screenshot */}
          <div className="pt-16 pb-8 w-full max-w-6xl">
            <div className="relative group">
              {/* Subtle background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              
              {/* Screenshot with bordered frame - Light Mode */}
              <div className="relative rounded-xl bg-slate-50 dark:bg-slate-900 p-2 ring-1 ring-slate-900/10 dark:ring-slate-100/10 shadow-2xl dark:hidden">
                <img 
                  src={dashboardScreenshotLight} 
                  alt="eysign Dashboard - Contextual Translation Platform"
                  className="w-full h-auto rounded-lg ring-1 ring-slate-900/10"
                  loading="lazy"
                />
              </div>
              
              {/* Screenshot with bordered frame - Dark Mode */}
              <div className="relative rounded-xl bg-slate-900 p-2 ring-1 ring-slate-100/10 shadow-2xl hidden dark:block">
                <img 
                  src={dashboardScreenshotDark} 
                  alt="eysign Dashboard - Contextual Translation Platform"
                  className="w-full h-auto rounded-lg ring-1 ring-slate-100/10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}