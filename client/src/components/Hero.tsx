import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  language: string;
}

export default function Hero({ language }: HeroProps) {
  const content = {
    en: {
      subtitle: "Leading Girls' School in North Central Province",
      title: "Excellence Through Knowledge and Virtue",
      titleSinhala: "දැනුමෙන්, ගුණයෙන්",
      description: "Swarnapali Balika National School has been recognized as the leading girls school in North Central Province for several decades, producing outstanding students in all fields of education.",
      cta1: "Take Virtual Tour",
      cta2: "Admissions 2025"
    },
    si: {
      subtitle: "උතුරු මධ්‍යම පළාතේ ප්‍රමුඛ පෙළේ බාලිකා පාසල",
      title: "දැනුමෙන්, ගුණයෙන් විශිෂ්ටත්වය",
      titleSinhala: "දැනුමෙන්, ගුණයෙන්",
      description: "ස්වර්ණපාලි බාලිකා ජාතික පාසල දශක ගණනාවක් තිස්සේ උතුරු මධ්‍යම පළාතේ ප්‍රමුඛතම බාලිකා පාසල ලෙස පිළිගැනීමට ලක්ව ඇත.",
      cta1: "අථත්‍ය චාරිකාව",
      cta2: "ඇතුළත් වීම 2025"
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  return (
    <div className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full">
            <span className="text-primary text-sm font-medium" data-testid="text-hero-subtitle">{c.subtitle}</span>
          </div>
          
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-4" data-testid="text-hero-title">
            {c.title}
          </h1>
          
          <p className="font-sinhala text-2xl md:text-3xl text-primary mb-6" data-testid="text-hero-title-sinhala">
            {c.titleSinhala}
          </p>

          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed" data-testid="text-hero-description">
            {c.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="default"
              className="text-base hover-elevate active-elevate-2"
              data-testid="button-virtual-tour"
            >
              {c.cta1}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover-elevate active-elevate-2"
              data-testid="button-admissions"
            >
              <Play className="mr-2 h-5 w-5" />
              {c.cta2}
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
