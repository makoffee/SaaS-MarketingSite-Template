import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Logo } from "../Logo";
import { content } from "../../config/content";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail,
  ArrowRight 
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="support" className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container py-8 md:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">{content.footer.newsletter.headline}</h3>
              <p className="text-slate-400">
                {content.footer.newsletter.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Input 
                placeholder={content.footer.newsletter.placeholder}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="bg-white text-slate-900 hover:bg-slate-100">
                {content.footer.newsletter.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Logo className="h-7 w-auto" />
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              {content.company.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(content.footer.links).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-6">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-slate-800" />
      <div className="container py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {currentYear} {content.company.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>{content.company.madeWith}</span>
            <a href="#" className="hover:text-white transition-colors">
              {content.footer.bottom.systemStatus}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}