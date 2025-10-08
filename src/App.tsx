/**
 * eysign Landing Page Application
 * Production-ready React application for eysign SaaS platform
 * 
 * @author eysign Team
 * @version 1.0.0
 */

import { Navigation } from "./components/landing/Navigation";
import { Hero } from "./components/landing/Hero";
import { Features } from "./components/landing/Features";
import { Solutions } from "./components/landing/Solutions";
import { Pricing } from "./components/landing/Pricing";
import { CallToAction } from "./components/landing/CallToAction";
import { Footer } from "./components/landing/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

/**
 * Main Application Component
 * 
 * This is the entry point for the eysign landing page.
 * All components are production-ready and typed for Prismic CMS integration.
 * 
 * @returns {JSX.Element} The complete landing page
 */
export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        {/* Navigation - Fixed header with theme toggle */}
        <Navigation />
        
        {/* Main Content Areas */}
        <main role="main">
          <Hero />
          <Features />
          <Solutions />
          <Pricing />
          <CallToAction />
        </main>
        
        {/* Footer - Links and newsletter signup */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}