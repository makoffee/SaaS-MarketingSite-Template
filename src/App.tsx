import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { Navigation } from "./components/landing/Navigation";
import { Hero } from "./components/landing/Hero";
import { Features } from "./components/landing/Features";
import { Solutions } from "./components/landing/Solutions";
import { Pricing } from "./components/landing/Pricing";
import { CallToAction } from "./components/landing/CallToAction";
import { Footer } from "./components/landing/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthScreen } from "./components/auth/AuthScreen";
import { SelectPlan } from "./components/onboarding/SelectPlan";
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

type DashboardView = 'dashboard' | 'projects' | 'analytics' | 'team' | 'billing' | 'settings' | 'support';

// Landing page wrapper component
function LandingPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation for landing page sections
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top when navigating to landing page
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleGetStarted = () => {
    navigate('/auth?mode=signup');
  };

  const handleLogin = () => {
    navigate('/auth?mode=login');
  };

  const handlePlanSelect = (planName: string) => {
    // Flow 2: User selects plan from pricing page > creates account > app dashboard
    navigate(`/auth?mode=signup&plan=${encodeURIComponent(planName)}`);
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <>
      <Navigation onGetStarted={handleGetStarted} onLogin={handleLogin} onLogoClick={handleNavigateHome} />
      
      <main role="main">
        <Hero onGetStarted={handleGetStarted} />
        <Features />
        <Solutions />
        <Pricing onPlanSelect={handlePlanSelect} />
        <CallToAction onGetStarted={handleGetStarted} />
      </main>
      
      <Footer />
    </>
  );
}

// Auth page wrapper component
function AuthPage({ onLogin }: { onLogin: (skipPlanSelection?: boolean) => void }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const mode = searchParams.get('mode') as 'login' | 'signup' | null;
  const selectedPlan = searchParams.get('plan');

  const handleBackToLanding = () => {
    navigate('/');
  };

  const handleLogin = () => {
    // If user selected a plan from pricing page (Flow 2), skip plan selection
    // Also skip if user is logging in (not signing up)
    if (selectedPlan || mode === 'login') {
      onLogin(true); // Skip plan selection, go straight to dashboard
    } else {
      onLogin(false); // Go to plan selection (for signup without plan)
    }
  };

  return (
    <AuthScreen 
      onLogin={handleLogin} 
      onBackToLanding={handleBackToLanding}
      selectedPlan={selectedPlan || undefined}
      initialMode={mode || 'login'}
    />
  );
}

// Select Plan page wrapper component
function SelectPlanPage({ onSelectPlan }: { onSelectPlan: () => void }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return <SelectPlan onSelectPlan={onSelectPlan} onBack={handleBack} />;
}

// Dashboard wrapper component
function DashboardPage({ onLogout }: { onLogout: () => void }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [projectsSearchQuery, setProjectsSearchQuery] = useState<string>('');

  // Determine active view from URL
  const getActiveView = (): DashboardView => {
    const path = location.pathname;
    if (path === '/app/projects') return 'projects';
    if (path === '/app/analytics') return 'analytics';
    if (path === '/app/team') return 'team';
    if (path === '/app/billing') return 'billing';
    if (path === '/app/settings') return 'settings';
    if (path === '/app/support') return 'support';
    return 'dashboard';
  };

  const handleNavigate = (view: DashboardView) => {
    if (view === 'dashboard') {
      navigate('/app');
    } else {
      navigate(`/app/${view}`);
    }
  };

  const handleSearchProjects = (query: string) => {
    setProjectsSearchQuery(query);
    navigate('/app/projects');
  };

  const activeView = getActiveView();

  return (
    <DashboardLayout 
      onLogout={onLogout}
      activeView={activeView}
      onNavigate={handleNavigate}
      onSearch={handleSearchProjects}
    >
      <Routes>
        <Route path="/" element={<DashboardOverview />} />
        <Route path="/projects" element={<ProjectsView initialSearchQuery={projectsSearchQuery} />} />
        <Route path="/analytics" element={<PlaceholderView title="Analytics" />} />
        <Route path="/team" element={<PlaceholderView title="Team" />} />
        <Route path="/billing" element={<PlaceholderView title="Billing" />} />
        <Route path="/settings" element={<PlaceholderView title="Settings" />} />
        <Route path="/support" element={<PlaceholderView title="Support" />} />
      </Routes>
    </DashboardLayout>
  );
}

// Placeholder view for unimplemented dashboard sections
function PlaceholderView({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
      <div className="text-center">
        <h1 className="text-muted-foreground">{title} View</h1>
        <p className="text-sm text-muted-foreground mt-2">Coming soon...</p>
      </div>
    </div>
  );
}

// Main App component with routing
function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [needsPlanSelection, setNeedsPlanSelection] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    preloadFonts();
  }, []);

  const handleLogin = (skipPlanSelection: boolean = false) => {
    setIsAuthenticated(true);
    
    if (skipPlanSelection) {
      // Flow 2: User selected plan from pricing page, go straight to dashboard
      navigate('/app');
    } else {
      // Flow 1: User signed up without selecting a plan, show plan selection
      setNeedsPlanSelection(true);
      navigate('/select-plan');
    }
  };

  const handleSelectPlan = () => {
    setNeedsPlanSelection(false);
    // Use replace to avoid back button issues
    navigate('/app', { replace: true });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setNeedsPlanSelection(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage onLogin={handleLogin} />} />
        
        {/* Semi-protected route - accessible only after auth but before plan selection */}
        <Route 
          path="/select-plan" 
          element={
            isAuthenticated 
              ? (needsPlanSelection ? <SelectPlanPage onSelectPlan={handleSelectPlan} /> : <Navigate to="/app" replace />) 
              : <Navigate to="/" replace />
          } 
        />
        
        {/* Protected routes */}
        <Route 
          path="/app/*" 
          element={isAuthenticated ? <DashboardPage onLogout={handleLogout} /> : <Navigate to="/auth" />} 
        />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
