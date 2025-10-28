import { useEffect, useState } from 'react';
import { Navigation } from "./components/landing/Navigation";
import { Hero } from "./components/landing/Hero";
import { Features } from "./components/landing/Features";
import { Solutions } from "./components/landing/Solutions";
import { Pricing } from "./components/landing/Pricing";
import { CallToAction } from "./components/landing/CallToAction";
import { Footer } from "./components/landing/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthScreen } from "./components/auth/AuthScreen";
import { DashboardLayout } from "./components/dashboard/DashboardLayout";
import { DashboardOverview } from "./components/dashboard/DashboardOverview";
import { ProjectsView } from "./components/dashboard/ProjectsView";

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

type ViewType = 'landing' | 'auth' | 'dashboard';
type DashboardView = 'dashboard' | 'projects' | 'analytics' | 'team' | 'billing' | 'settings' | 'support';

export default function App(): JSX.Element {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [activeDashboardView, setActiveDashboardView] = useState<DashboardView>('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    preloadFonts();
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('landing');
  };

  const handleGetStarted = () => {
    setCurrentView('auth');
  };

  const handleNavigateHome = () => {
    setCurrentView('landing');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        {currentView === 'landing' && (
          <>
            <Navigation onGetStarted={handleGetStarted} onLogoClick={handleNavigateHome} />
            
            <main role="main">
              <Hero />
              <Features />
              <Solutions />
              <Pricing />
              <CallToAction />
            </main>
            
            <Footer />
          </>
        )}

        {currentView === 'auth' && (
          <AuthScreen onLogin={handleLogin} onBackToLanding={handleNavigateHome} />
        )}

        {currentView === 'dashboard' && (
          <DashboardLayout 
            onLogout={handleLogout}
            activeView={activeDashboardView}
            onNavigate={setActiveDashboardView}
          >
            {activeDashboardView === 'dashboard' && <DashboardOverview />}
            {activeDashboardView === 'projects' && <ProjectsView />}
          </DashboardLayout>
        )}
      </div>
    </ThemeProvider>
  );
}
