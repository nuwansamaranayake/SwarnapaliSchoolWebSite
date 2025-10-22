import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import sportsImg1 from "@assets/stock_images/sri_lankan_school_gi_cb56b1dc.jpg";
import sportsImg2 from "@assets/stock_images/sri_lankan_school_gi_9e145391.jpg";
import sportsImg3 from "@assets/stock_images/sri_lankan_school_gi_019a88cc.jpg";
import culturalImg1 from "@assets/stock_images/sri_lankan_school_cu_8cf41eba.jpg";
import culturalImg2 from "@assets/stock_images/sri_lankan_school_cu_7f1b3a04.jpg";
import culturalImg3 from "@assets/stock_images/sri_lankan_school_cu_0ae1f61c.jpg";
import ceremonyImg1 from "@assets/stock_images/sri_lankan_school_an_dec45e84.jpg";
import ceremonyImg2 from "@assets/stock_images/sri_lankan_school_an_3d1299c8.jpg";

export default function Gallery() {
  const { language } = useApp();
  const [activeCategory, setActiveCategory] = useState("all");

  const content = {
    en: {
      pageTitle: "Photo Gallery",
      subtitle: "Capturing memorable moments at Swarnapali Balika",
      categoryAll: "All",
      categorySchoolLife: "School Life",
      categorySports: "Sports",
      categoryCultural: "Cultural",
      categoryInfrastructure: "Infrastructure"
    },
    si: {
      pageTitle: "ඡායාරූප ගැලරිය",
      subtitle: "ස්වර්ණපාලි බාලිකාවේ අමතක නොවන අවස්ථා",
      categoryAll: "සියල්ල",
      categorySchoolLife: "පාසල් ජීවිතය",
      categorySports: "ක්‍රීඩා",
      categoryCultural: "සංස්කෘතික",
      categoryInfrastructure: "යටිතල පහසුකම්"
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  const categories = [
    { id: "all", labelEn: "All", labelSi: "සියල්ල" },
    { id: "school-life", labelEn: "School Life", labelSi: "පාසල් ජීවිතය" },
    { id: "sports", labelEn: "Sports", labelSi: "ක්‍රීඩා" },
    { id: "cultural", labelEn: "Cultural", labelSi: "සංස්කෘතික" },
    { id: "infrastructure", labelEn: "Infrastructure", labelSi: "යටිතල පහසුකම්" }
  ];

  const galleryItems = [
    {
      id: 1,
      image: "https://swarnapalibalika.lk/img/school1.jpg",
      titleEn: "School Building - Front View",
      titleSi: "පාසල් ගොඩනැගිල්ල - ඉදිරිපස දසුන",
      category: "infrastructure"
    },
    {
      id: 2,
      image: "https://swarnapalibalika.lk/img/school2.jpg",
      titleEn: "School Campus",
      titleSi: "පාසල් පරිශ්‍රය",
      category: "infrastructure"
    },
    {
      id: 3,
      image: "https://swarnapalibalika.lk/img/school4.jpg",
      titleEn: "School Facilities",
      titleSi: "පාසල් පහසුකම්",
      category: "infrastructure"
    },
    {
      id: 4,
      image: "https://swarnapalibalika.lk/img/school5.jpg",
      titleEn: "School Grounds",
      titleSi: "පාසල් පිටිය",
      category: "school-life"
    },
    {
      id: 5,
      image: "https://swarnapalibalika.lk/img/school7.jpg",
      titleEn: "School Activities",
      titleSi: "පාසල් ක්‍රියාකාරකම්",
      category: "school-life"
    },
    {
      id: 6,
      image: "https://swarnapalibalika.lk/img/school8.jpg",
      titleEn: "School Environment",
      titleSi: "පාසල් පරිසරය",
      category: "school-life"
    },
    {
      id: 7,
      image: "https://swarnapalibalika.lk/img/Olevel-2023.jpg",
      titleEn: "O/L 2023 Achievement",
      titleSi: "සා.පෙ. 2023 ජයග්‍රහණය",
      category: "school-life"
    },
    {
      id: 8,
      image: "https://swarnapalibalika.lk/img/student.JPG",
      titleEn: "Student Life",
      titleSi: "ශිෂ්‍ය ජීවිතය",
      category: "school-life"
    },
    {
      id: 9,
      image: "https://swarnapalibalika.lk/img/our.teachers_01.jpg",
      titleEn: "Our Teachers",
      titleSi: "අපේ ගුරුවරු",
      category: "school-life"
    },
    {
      id: 10,
      image: "https://swarnapalibalika.lk/img/information.JPG",
      titleEn: "School Information",
      titleSi: "පාසල් තොරතුරු",
      category: "infrastructure"
    },
    {
      id: 11,
      image: sportsImg1,
      titleEn: "Annual Sports Meet",
      titleSi: "වාර්ෂික ක්‍රීඩා රැස්වීම",
      category: "sports"
    },
    {
      id: 12,
      image: sportsImg2,
      titleEn: "Athletics Competition",
      titleSi: "මලල ක්‍රීඩා තරඟාවලිය",
      category: "sports"
    },
    {
      id: 13,
      image: sportsImg3,
      titleEn: "Sports Day Events",
      titleSi: "ක්‍රීඩා දින උත්සව",
      category: "sports"
    },
    {
      id: 14,
      image: culturalImg1,
      titleEn: "Traditional Dance Performance",
      titleSi: "සම්ප්‍රදායික නර්තන ප්‍රසංගය",
      category: "cultural"
    },
    {
      id: 15,
      image: culturalImg2,
      titleEn: "Kandyan Dance",
      titleSi: "කන්දුයන් නැටුම්",
      category: "cultural"
    },
    {
      id: 16,
      image: culturalImg3,
      titleEn: "Cultural Festival",
      titleSi: "සංස්කෘතික උත්සවය",
      category: "cultural"
    },
    {
      id: 17,
      image: ceremonyImg1,
      titleEn: "Prize Giving Ceremony",
      titleSi: "ත්‍යාග ප්‍රදානෝත්සවය",
      category: "school-life"
    },
    {
      id: 18,
      image: ceremonyImg2,
      titleEn: "Annual Celebration",
      titleSi: "වාර්ෂික සැමරුම",
      category: "school-life"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <PageLayout>
      <div className="relative h-[400px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-4" data-testid="text-page-title">
              {c.pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-200" data-testid="text-page-subtitle">
              {c.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12" data-testid="category-filters">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="hover-elevate active-elevate-2"
                data-testid={`button-category-${category.id}`}
              >
                {language === 'en' ? category.labelEn : category.labelSi}
              </Button>
            ))}
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
                data-testid={`gallery-item-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={language === 'en' ? item.titleEn : item.titleSi}
                  className="w-full h-auto transition-transform group-hover:scale-105 duration-300"
                  data-testid={`img-gallery-${item.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold text-lg" data-testid={`text-gallery-title-${item.id}`}>
                    {language === 'en' ? item.titleEn : item.titleSi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
