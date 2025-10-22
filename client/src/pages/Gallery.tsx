import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import img1 from "@assets/stock_images/female_students_in_u_2bec6baa.jpg";
import img2 from "@assets/stock_images/female_students_in_u_938ca3ad.jpg";
import img3 from "@assets/stock_images/female_students_in_u_d73621ce.jpg";
import img4 from "@assets/stock_images/professional_woman_p_08980561.jpg";
import img5 from "@assets/stock_images/school_computer_lab__171354a2.jpg";
import img6 from "@assets/stock_images/school_library_stude_4237ecc1.jpg";
import img7 from "@assets/stock_images/school_science_labor_82058253.jpg";
import img8 from "@assets/stock_images/school_sports_day_at_0031217f.jpg";
import img9 from "@assets/stock_images/school_sports_day_at_9d91c8e1.jpg";
import img10 from "@assets/stock_images/sri_lankan_school_bu_f6e3c24d.jpg";
import img11 from "@assets/stock_images/students_cultural_da_0530a279.jpg";
import img12 from "@assets/stock_images/students_cultural_da_0a34e028.jpg";

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
      image: img1,
      titleEn: "Students in Uniform",
      titleSi: "නිල ඇඳුමින් සිසුන්",
      category: "school-life"
    },
    {
      id: 2,
      image: img2,
      titleEn: "School Assembly",
      titleSi: "පාසල් රැස්වීම",
      category: "school-life"
    },
    {
      id: 3,
      image: img3,
      titleEn: "Classroom Learning",
      titleSi: "පන්ති කාමර ඉගෙනීම",
      category: "school-life"
    },
    {
      id: 4,
      image: img4,
      titleEn: "Principal's Office",
      titleSi: "විදුහල්පති කාර්යාලය",
      category: "infrastructure"
    },
    {
      id: 5,
      image: img5,
      titleEn: "Computer Laboratory",
      titleSi: "පරිගණක විද්‍යාගාරය",
      category: "infrastructure"
    },
    {
      id: 6,
      image: img6,
      titleEn: "School Library",
      titleSi: "පාසල් පුස්තකාලය",
      category: "infrastructure"
    },
    {
      id: 7,
      image: img7,
      titleEn: "Science Laboratory",
      titleSi: "විද්‍යා විද්‍යාගාරය",
      category: "infrastructure"
    },
    {
      id: 8,
      image: img8,
      titleEn: "Annual Sports Day",
      titleSi: "වාර්ෂික ක්‍රීඩා දිනය",
      category: "sports"
    },
    {
      id: 9,
      image: img9,
      titleEn: "Athletic Meet",
      titleSi: "මලල ක්‍රීඩා රැස්වීම",
      category: "sports"
    },
    {
      id: 10,
      image: img10,
      titleEn: "School Building",
      titleSi: "පාසල් ගොඩනැගිල්ල",
      category: "infrastructure"
    },
    {
      id: 11,
      image: img11,
      titleEn: "Cultural Performance",
      titleSi: "සංස්කෘතික ප්‍රසංගය",
      category: "cultural"
    },
    {
      id: 12,
      image: img12,
      titleEn: "Traditional Dance",
      titleSi: "සම්ප්‍රදායික නැටුම්",
      category: "cultural"
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
