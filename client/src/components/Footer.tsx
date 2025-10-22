import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  language: string;
}

export default function Footer({ language }: FooterProps) {
  const content = {
    en: {
      about: "About",
      aboutItems: ["History", "Vision & Mission", "Principal's Message", "Faculty"],
      quickLinks: "Quick Links",
      quickLinkItems: ["Admissions", "Academics", "News & Events", "Contact Us"],
      contact: "Contact Us",
      address: "Swarnapali Balika National School, Anuradhapura, Sri Lanka",
      copyright: "© 2024 Swarnapali Balika National School. All rights reserved.",
      followUs: "Follow Us"
    },
    si: {
      about: "අප ගැන",
      aboutItems: ["ඉතිහාසය", "දැක්ම සහ මෙහෙවර", "විදුහල්පති පණිවුඩය", "පීඨය"],
      quickLinks: "ඉක්මන් සබැඳි",
      quickLinkItems: ["ඇතුළත් වීම", "අධ්‍යාපනික", "ප්‍රවෘත්ති", "අප අමතන්න"],
      contact: "අප අමතන්න",
      address: "ස්වර්ණපාලි බාලිකා ජාතික පාසල, අනුරාධපුරය, ශ්‍රී ලංකාව",
      copyright: "© 2024 ස්වර්ණපාලි බාලිකා ජාතික පාසල. සියලුම හිමිකම් ඇවිරිණි.",
      followUs: "අප අනුගමනය කරන්න"
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-foreground">
                  {language === 'en' ? 'Swarnapali Balika' : 'ස්වර්ණපාලි බාලිකා'}
                </div>
                <div className="text-xs text-muted-foreground">
                  {language === 'en' ? 'National School' : 'ජාතික පාසල'}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              {language === 'en' 
                ? 'Excellence Through Knowledge and Virtue' 
                : 'දැනුමෙන්, ගුණයෙන් විශිෂ්ටත්වය'}
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4" data-testid="text-footer-about">
              {c.about}
            </h3>
            <ul className="space-y-2">
              {c.aboutItems.map((item, index) => (
                <li key={index}>
                  <Link href="/about">
                    <a className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4" data-testid="text-footer-quick-links">
              {c.quickLinks}
            </h3>
            <ul className="space-y-2">
              {c.quickLinkItems.map((item, index) => (
                <li key={index}>
                  <Link href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                    <a className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4" data-testid="text-footer-contact">
              {c.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{c.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+94252222334" className="text-muted-foreground hover:text-primary transition-colors">
                  +94 25 222 2334
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@swarnapalibalika.lk" className="text-muted-foreground hover:text-primary transition-colors">
                  info@swarnapalibalika.lk
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold text-foreground text-sm mb-3">{c.followUs}</h4>
              <div className="flex space-x-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover-elevate active-elevate-2"
                  data-testid="button-facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover-elevate active-elevate-2"
                  data-testid="button-youtube"
                >
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover-elevate active-elevate-2"
                  data-testid="button-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground" data-testid="text-copyright">
            {c.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
