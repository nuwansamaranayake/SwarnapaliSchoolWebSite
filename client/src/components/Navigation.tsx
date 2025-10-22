import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Bell, LogIn } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationProps {
  onLoginClick: () => void;
  onLanguageChange: (lang: string) => void;
  currentLanguage: string;
}

export default function Navigation({ onLoginClick, onLanguageChange, currentLanguage }: NavigationProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: currentLanguage === 'en' ? "Home" : "මුල් පිටුව" },
    { path: "/about", label: currentLanguage === 'en' ? "About Us" : "අප ගැන" },
    { path: "/academics", label: currentLanguage === 'en' ? "Academics" : "අධ්‍යාපනික" },
    { path: "/admissions", label: currentLanguage === 'en' ? "Admissions" : "ඇතුළත් කර ගැනීම" },
    { path: "/news", label: currentLanguage === 'en' ? "News & Events" : "ප්‍රවෘත්ති" },
    { path: "/gallery", label: currentLanguage === 'en' ? "Gallery" : "ඡායාරූප" },
    { path: "/contact", label: currentLanguage === 'en' ? "Contact" : "අප අමතන්න" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center space-x-3 cursor-pointer hover-elevate active-elevate-2 px-3 py-2 rounded-md">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <div className="hidden md:block">
                <div className="font-heading font-bold text-lg text-foreground">
                  {currentLanguage === 'en' ? 'Swarnapali Balika' : 'ස්වර්ණපාලි බාලිකා'}
                </div>
                <div className="text-xs text-muted-foreground">
                  {currentLanguage === 'en' ? 'National School' : 'ජාතික පාසල'}
                </div>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-nav-${item.path.slice(1) || 'home'}`}>
                <Button
                  variant={isActive(item.path) ? "secondary" : "ghost"}
                  className="hover-elevate active-elevate-2"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover-elevate active-elevate-2" data-testid="button-language-toggle">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onLanguageChange('en')} data-testid="button-language-english">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onLanguageChange('si')} data-testid="button-language-sinhala">
                  සිංහල
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="hover-elevate active-elevate-2 hidden sm:flex"
              data-testid="button-notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </Button>

            <Button
              variant="default"
              className="hidden sm:flex hover-elevate active-elevate-2"
              onClick={onLoginClick}
              data-testid="button-student-login"
            >
              <LogIn className="h-4 w-4 mr-2" />
              {currentLanguage === 'en' ? 'Student Login' : 'ශිෂ්‍ය පිවිසුම'}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover-elevate active-elevate-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-card">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-mobile-${item.path.slice(1) || 'home'}`}>
                <Button
                  variant={isActive(item.path) ? "secondary" : "ghost"}
                  className="w-full justify-start hover-elevate active-elevate-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Button
              variant="default"
              className="w-full hover-elevate active-elevate-2 mt-4"
              onClick={() => {
                onLoginClick();
                setMobileMenuOpen(false);
              }}
              data-testid="button-mobile-login"
            >
              <LogIn className="h-4 w-4 mr-2" />
              {currentLanguage === 'en' ? 'Student Login' : 'ශිෂ්‍ය පිවිසුම'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
