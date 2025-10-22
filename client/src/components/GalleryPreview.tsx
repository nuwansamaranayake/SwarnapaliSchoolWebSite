import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import img1 from "@assets/stock_images/sri_lankan_school_bu_f6e3c24d.jpg";
import img2 from "@assets/stock_images/school_sports_day_at_9d91c8e1.jpg";
import img3 from "@assets/stock_images/school_library_stude_4237ecc1.jpg";
import img4 from "@assets/stock_images/students_cultural_da_0530a279.jpg";
import img5 from "@assets/stock_images/school_computer_lab__171354a2.jpg";
import img6 from "@assets/stock_images/female_students_in_u_938ca3ad.jpg";

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
    { id: 1, src: img1, alt: "School Building" },
    { id: 2, src: img2, alt: "Sports Day" },
    { id: 3, src: img3, alt: "Library" },
    { id: 4, src: img4, alt: "Cultural Performance" },
    { id: 5, src: img5, alt: "Computer Lab" },
    { id: 6, src: img6, alt: "Students Learning" },
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
            <div 
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-md group cursor-pointer hover-elevate"
              data-testid={`gallery-image-${image.id}`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-sm font-medium">{image.alt}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="default" 
            size="lg"
            className="hover-elevate active-elevate-2"
            data-testid="button-view-gallery"
          >
            {c.viewAll}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
