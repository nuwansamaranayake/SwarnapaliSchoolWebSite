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
import schoolLogo from "@assets/image_1761150455059.png";

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
        <div className="flex items-center justify-between gap-4 h-16">
          <Link href="/" data-testid="link-home" className="flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 cursor-pointer hover-elevate active-elevate-2 px-2 sm:px-3 py-2 rounded-md">
              <img 
                src={schoolLogo} 
                alt="Swarnapali Balika National School Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
                data-testid="img-school-logo"
              />
              <div className="hidden sm:block min-w-[140px]">
                <div className="font-heading font-bold text-sm sm:text-base leading-tight text-foreground whitespace-nowrap">
                  {currentLanguage === 'en' ? 'Swarnapali Balika' : 'ස්වර්ණපාලි බාලිකා'}
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                  {currentLanguage === 'en' ? 'National School' : 'ජාතික පාසල'}
                </div>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-nav-${item.path.slice(1) || 'home'}`}>
                <Button
                  variant={isActive(item.path) ? "secondary" : "ghost"}
                  size="sm"
                  className="hover-elevate active-elevate-2"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
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
              className="hover-elevate active-elevate-2 hidden md:flex"
              data-testid="button-notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </Button>

            <Button
              variant="default"
              size="sm"
              className="hidden md:flex hover-elevate active-elevate-2"
              onClick={onLoginClick}
              data-testid="button-student-login"
            >
              <LogIn className="h-4 w-4 mr-2" />
              <span className="hidden lg:inline">{currentLanguage === 'en' ? 'Student Login' : 'ශිෂ්‍ය පිවිසුම'}</span>
              <span className="lg:hidden">{currentLanguage === 'en' ? 'Login' : 'පිවිසුම'}</span>
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
