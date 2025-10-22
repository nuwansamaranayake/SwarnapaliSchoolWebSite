import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import sportsImg from "@assets/stock_images/sri_lankan_school_gi_cb56b1dc.jpg";
import culturalImg from "@assets/stock_images/sri_lankan_school_cu_8cf41eba.jpg";

interface GalleryPreviewProps {
  language: string;
}

export default function GalleryPreview({ language }: GalleryPreviewProps) {
  const content = {
    en: {
      title: "Gallery",
      subtitle: "Glimpses of life at Swarnapali Balika",
      viewAll: "View Full Gallery"
    },
    si: {
      title: "ඡායාරූප",
      subtitle: "ස්වර්ණපාලි බාලිකාවේ ජීවිතය",
      viewAll: "සම්පූර්ණ ගැලරිය"
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  const images = [
    { 
      id: 1, 
      src: "https://swarnapalibalika.lk/img/school1.jpg", 
      altEn: "School Building",
      altSi: "පාසල් ගොඩනැගිල්ල"
    },
    { 
      id: 2, 
      src: sportsImg, 
      altEn: "Annual Sports Day",
      altSi: "වාර්ෂික ක්‍රීඩා දිනය"
    },
    { 
      id: 3, 
      src: "https://swarnapalibalika.lk/img/school4.jpg", 
      altEn: "School Facilities",
      altSi: "පාසල් පහසුකම්"
    },
    { 
      id: 4, 
      src: culturalImg, 
      altEn: "Cultural Performance",
      altSi: "සංස්කෘතික ප්‍රසංගය"
    },
    { 
      id: 5, 
      src: "https://swarnapalibalika.lk/img/school5.jpg", 
      altEn: "School Grounds",
      altSi: "පාසල් පිටිය"
    },
    { 
      id: 6, 
      src: "https://swarnapalibalika.lk/img/student.JPG", 
      altEn: "Student Life",
      altSi: "ශිෂ්‍ය ජීවිතය"
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-gallery-title">
            {c.title}
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-gallery-subtitle">
            {c.subtitle}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {images.map((image) => (
            <Link key={image.id} href="/gallery">
              <div 
                className="relative aspect-square overflow-hidden rounded-md group cursor-pointer hover-elevate"
                data-testid={`gallery-image-${image.id}`}
              >
                <img 
                  src={image.src}
                  alt={language === 'en' ? image.altEn : image.altSi}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-sm font-medium">
                      {language === 'en' ? image.altEn : image.altSi}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <Button 
              variant="default" 
              size="lg"
              className="hover-elevate active-elevate-2"
              data-testid="button-view-gallery"
            >
              {c.viewAll}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
