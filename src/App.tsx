import { useEffect } from 'react';
import { Navigation } from "./components/landing/Navigation";
import { Hero } from "./components/landing/Hero";
import { Features } from "./components/landing/Features";
import { Solutions } from "./components/landing/Solutions";
import { Pricing } from "./components/landing/Pricing";
import { CallToAction } from "./components/landing/CallToAction";
import { Footer } from "./components/landing/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

/**
 * Preload critical fonts to prevent FOUT (Flash of Unstyled Text)
 */
function preloadFonts() {
  const fonts = [
    '/fonts/inter/Inter-Regular.woff2',
    '/fonts/inter/Inter-Medium.woff2',
    '/fonts/satoshi/Satoshi-Medium.woff2',
  ];

  fonts.forEach((font) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.href = font;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

export default function App(): JSX.Element {
  useEffect(() => {
    preloadFonts();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main role="main">
          <Hero />
          <Features />
          <Solutions />
          <Pricing />
          <CallToAction />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}
