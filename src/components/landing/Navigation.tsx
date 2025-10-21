/**
 * Navigation Component
 * Production-ready navigation with TypeScript interfaces and accessibility
 */

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ThemeToggle";
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
}

export function Navigation({ 
  content: navigationContent = content.navigation,
  className = ""
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60${className ? ` ${className}` : ''}`}>
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
          <span className={`${content.company.nameClass} text-xl font-semibold`}>{content.company.name}</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
          {navigationContent.links.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm">
            {navigationContent.auth.login}
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
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
          <div className="container py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              {navigationContent.links.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-sm font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
            
            {/* Mobile Actions */}
            <div className="pt-4 border-t border-border/20 space-y-3">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                {navigationContent.auth.login}
              </Button>
              <Button size="sm" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
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