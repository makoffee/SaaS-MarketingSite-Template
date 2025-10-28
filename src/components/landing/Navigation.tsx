/**
 * Navigation Component
 * Production-ready navigation with TypeScript interfaces and accessibility
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ThemeToggle";
import { Logo } from "../Logo";
import { content } from "../../config/content";

interface NavigationLink {
  text: string;
  href: string;
}

interface NavigationContent {
  logo: string;
  links: NavigationLink[];
  auth: {
    login: string;
    getStarted: string;
  };
}

interface NavigationProps {
  content?: NavigationContent;
  className?: string;
  onGetStarted?: () => void;
  onLogin?: () => void;
  onLogoClick?: () => void;
}

export function Navigation({ 
  content: navigationContent = content.navigation,
  className = "",
  onGetStarted,
  onLogin,
  onLogoClick
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60${className ? ` ${className}` : ''}`}>
      <div className="max-w-7xl mx-auto flex h-16 items-center px-4 md:px-2 lg:px-8">
        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Logo className="h-7 w-auto" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
          {navigationContent.links.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  const element = document.getElementById(link.href.replace('#', ''));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm" onClick={onLogin}>
            {navigationContent.auth.login}
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white" onClick={onGetStarted}>
            Get <span className="font-black">eysign</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2 ml-auto">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="max-w-7xl mx-auto py-4 px-4 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              {navigationContent.links.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="block text-sm font-medium hover:text-primary transition-colors py-2"
                  onClick={(e) => {
                    setIsOpen(false);
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      const element = document.getElementById(link.href.replace('#', ''));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {link.text}
                </a>
              ))}
            </div>
            
            {/* Mobile Actions */}
            <div className="pt-4 border-t border-border/20 space-y-3">
              <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => { setIsOpen(false); onLogin?.(); }}>
                {navigationContent.auth.login}
              </Button>
              <Button size="sm" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white" onClick={() => { setIsOpen(false); onGetStarted?.(); }}>
                Get <span className="font-black">eysign</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}