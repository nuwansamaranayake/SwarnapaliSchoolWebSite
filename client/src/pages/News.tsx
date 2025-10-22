import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Search, ChevronLeft, ChevronRight } from "lucide-react";
import achievementImg from "@assets/stock_images/sri_lankan_school_gi_9f7f7e86.jpg";
import culturalImg1 from "@assets/stock_images/sri_lankan_school_cu_8cf41eba.jpg";
import culturalImg2 from "@assets/stock_images/sri_lankan_school_cu_7f1b3a04.jpg";
import culturalImg3 from "@assets/stock_images/sri_lankan_school_cu_0ae1f61c.jpg";
import sportsImg1 from "@assets/stock_images/sri_lankan_school_gi_cb56b1dc.jpg";
import sportsImg2 from "@assets/stock_images/sri_lankan_school_gi_9e145391.jpg";
import sportsImg3 from "@assets/stock_images/sri_lankan_school_gi_019a88cc.jpg";
import studentImg from "@assets/stock_images/sri_lankan_school_gi_413e6e4c.jpg";

export default function News() {
  const { language } = useApp();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const content = {
    en: {
      pageTitle: "News & Events",
      subtitle: "Stay updated with the latest happenings at Swarnapali Balika",
      searchPlaceholder: "Search news...",
      tabAll: "All",
      tabAcademic: "Academic",
      tabEvents: "Events",
      tabAchievements: "Achievements",
      previous: "Previous",
      next: "Next",
      page: "Page"
    },
    si: {
      pageTitle: "ප්‍රවෘත්ති සහ සිදුවීම්",
      subtitle: "ස්වර්ණපාලි බාලිකාවේ නවතම සිදුවීම් පිළිබඳව දැනුවත්ව සිටින්න",
      searchPlaceholder: "ප්‍රවෘත්ති සොයන්න...",
      tabAll: "සියල්ල",
      tabAcademic: "අධ්‍යාපනික",
      tabEvents: "උත්සව",
      tabAchievements: "ජයග්‍රහණ",
      previous: "පෙර",
      next: "ඊළඟ",
      page: "පිටුව"
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  const allNewsItems = [
    {
      id: 1,
      title: language === 'en' ? "Outstanding O/L Results 2023" : "2023 සා.පෙ. විශිෂ්ට ප්‍රතිඵල",
      excerpt: language === 'en' 
        ? "Swarnapali Balika achieves 95% pass rate in O/L examination, highest in the province."
        : "ස්වර්ණපාලි බාලිකා සා.පෙ. විභාගයෙන් 95% සමත්වීමක් ලබා ගනිමින් පළාතේ ඉහළම ප්‍රතිඵලය ලබා ගනී.",
      category: language === 'en' ? "Achievement" : "ජයග්‍රහණ",
      categorySlug: "achievements",
      date: "2024-03-15",
      image: achievementImg
    },
    {
      id: 2,
      title: language === 'en' ? "New Science Laboratory Inaugurated" : "නව විද්‍යා විද්‍යාගාරය විවෘත කෙරේ",
      excerpt: language === 'en'
        ? "State-of-the-art science laboratory equipped with modern facilities now available for students."
        : "නවීන පහසුකම් සහිත නවීන විද්‍යා විද්‍යාගාරය දැන් සිසුන් සඳහා ලබා ගත හැකිය.",
      category: language === 'en' ? "Academic" : "අධ්‍යාපනික",
      categorySlug: "academic",
      date: "2024-03-10",
      image: "https://swarnapalibalika.lk/img/school7.jpg"
    },
    {
      id: 3,
      title: language === 'en' ? "Cultural Festival Success" : "සංස්කෘතික උළෙල සාර්ථකත්වය",
      excerpt: language === 'en'
        ? "Annual cultural festival showcases exceptional talent of our students in traditional arts."
        : "වාර්ෂික සංස්කෘතික උළෙල අපගේ සිසුන්ගේ සම්ප්‍රදායික කලාවන්හි විශිෂ්ට දක්ෂතා ප්‍රදර්ශනය කරයි.",
      category: language === 'en' ? "Events" : "උත්සව",
      categorySlug: "events",
      date: "2024-03-05",
      image: culturalImg1
    },
    {
      id: 4,
      title: language === 'en' ? "Inter-School Sports Championship" : "අන්තර් පාසල් ක්‍රීඩා ශූරතාව",
      excerpt: language === 'en'
        ? "Our netball team wins provincial championship for the third consecutive year."
        : "අපගේ දැල්බෝල කණ්ඩායම අඛණ්ඩව තුන්වන වර්ෂය සඳහා පළාත් ශූරතාව දිනයි.",
      category: language === 'en' ? "Achievement" : "ජයග්‍රහණ",
      categorySlug: "achievements",
      date: "2024-02-28",
      image: sportsImg1
    },
    {
      id: 5,
      title: language === 'en' ? "Library Expansion Project" : "පුස්තකාල ව්‍යාප්ති ව්‍යාපෘතිය",
      excerpt: language === 'en'
        ? "New wing added to the library with 5,000 new books and digital learning resources."
        : "නව පොත් 5,000ක් සහ ඩිජිටල් ඉගෙනුම් සම්පත් සහිත පුස්තකාලයට නව අංශයක් එකතු කෙරේ.",
      category: language === 'en' ? "Academic" : "අධ්‍යාපනික",
      categorySlug: "academic",
      date: "2024-02-20",
      image: "https://swarnapalibalika.lk/img/school4.jpg"
    },
    {
      id: 6,
      title: language === 'en' ? "Student Exchange Program" : "ශිෂ්‍ය හුවමාරු වැඩසටහන",
      excerpt: language === 'en'
        ? "Selected students to participate in international exchange program with schools in Singapore."
        : "තෝරාගත් සිසුන් සිංගප්පූරුවේ පාසල් සමඟ ජාත්‍යන්තර හුවමාරු වැඩසටහනට සහභාගී වීමට.",
      category: language === 'en' ? "Events" : "උත්සව",
      categorySlug: "events",
      date: "2024-02-15",
      image: studentImg
    },
    {
      id: 7,
      title: language === 'en' ? "Traditional Dance Performance" : "සම්ප්‍රදායික නැටුම් ප්‍රසංගය",
      excerpt: language === 'en'
        ? "Students perform at National Theatre showcasing traditional Kandyan and low-country dances."
        : "ජාතික රඟහලේදී සිසුන් සම්ප්‍රදායික උඩරට සහ පහළරට නැටුම් ප්‍රදර්ශනය කරති.",
      category: language === 'en' ? "Events" : "උත්සව",
      categorySlug: "events",
      date: "2024-02-10",
      image: culturalImg2
    },
    {
      id: 8,
      title: language === 'en' ? "Annual Sports Meet 2024" : "2024 වාර්ෂික ක්‍රීඩා උළෙල",
      excerpt: language === 'en'
        ? "Colorful sports meet held with record participation from all houses. Blue House wins overall championship."
        : "සියලුම සමාජවලින් වාර්තාගත සහභාගීත්වයක් සහිතව වර්ණවත් ක්‍රීඩා උළෙලක් පවත්වයි. නිල් මන්දිරය සමස්ත ශූරතාව දිනයි.",
      category: language === 'en' ? "Events" : "උත්සව",
      categorySlug: "events",
      date: "2024-01-30",
      image: sportsImg2
    },
    {
      id: 9,
      title: language === 'en' ? "Computer Lab Upgrade" : "පරිගණක විද්‍යාගාර උත්ශ්‍රේණිකරණය",
      excerpt: language === 'en'
        ? "IT lab receives 50 new computers with latest software for enhanced digital learning experience."
        : "වැඩිදියුණු කළ ඩිජිටල් ඉගෙනුම් අත්දැකීමක් සඳහා නවතම මෘදුකාංග සහිත නව පරිගණක 50ක් IT විද්‍යාගාරයට ලැබේ.",
      category: language === 'en' ? "Academic" : "අධ්‍යාපනික",
      categorySlug: "academic",
      date: "2024-01-20",
      image: "https://swarnapalibalika.lk/img/school5.jpg"
    }
  ];

  const filteredNews = allNewsItems.filter(item => {
    const matchesTab = activeTab === 'all' || item.categorySlug === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1);
  };

  return (
    <PageLayout>
      <div className="relative h-[400px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2000&q=80')`,
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
          <div className="mb-8 space-y-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={c.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10"
                data-testid="input-news-search"
              />
            </div>

            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full" data-testid="tabs-news-filter">
              <TabsList className="grid w-full max-w-2xl grid-cols-4">
                <TabsTrigger value="all" data-testid="tab-all">{c.tabAll}</TabsTrigger>
                <TabsTrigger value="academic" data-testid="tab-academic">{c.tabAcademic}</TabsTrigger>
                <TabsTrigger value="events" data-testid="tab-events">{c.tabEvents}</TabsTrigger>
                <TabsTrigger value="achievements" data-testid="tab-achievements">{c.tabAchievements}</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedNews.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover-elevate cursor-pointer group border-card-border"
                data-testid={`card-news-${item.id}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                    data-testid={`img-news-${item.id}`}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(item.date).toLocaleDateString(language === 'en' ? 'en-US' : 'si-LK')}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors" data-testid={`text-news-title-${item.id}`}>
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground" data-testid={`text-news-excerpt-${item.id}`}>
                    {item.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4" data-testid="pagination-controls">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="hover-elevate active-elevate-2"
                data-testid="button-previous-page"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                {c.previous}
              </Button>
              
              <span className="text-muted-foreground" data-testid="text-page-info">
                {c.page} {currentPage} / {totalPages}
              </span>

              <Button
                variant="outline"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="hover-elevate active-elevate-2"
                data-testid="button-next-page"
              >
                {c.next}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
