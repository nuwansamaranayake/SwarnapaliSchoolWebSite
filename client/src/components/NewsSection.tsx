import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import culturalImg from "@assets/stock_images/sri_lankan_school_cu_7f1b3a04.jpg";

interface NewsSectionProps {
  language: string;
}

export default function NewsSection({ language }: NewsSectionProps) {
  const content = {
    en: {
      title: "Latest News & Updates",
      subtitle: "Stay informed about school activities and achievements",
      viewAll: "View All News"
    },
    si: {
      title: "නවතම ප්‍රවෘත්ති",
      subtitle: "පාසල් ක්‍රියාකාරකම් පිළිබඳව දැනුවත්ව සිටින්න",
      viewAll: "සියලු ප්‍රවෘත්ති"
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  // TODO: remove mock data
  const newsItems = [
    {
      id: 1,
      title: language === 'en' ? "Outstanding O/L Results 2023" : "2023 සා.පෙ. විශිෂ්ට ප්‍රතිඵල",
      excerpt: language === 'en' 
        ? "Swarnapali Balika achieves 95% pass rate in O/L examination, highest in the province."
        : "ස්වර්ණපාලි බාලිකා සා.පෙ. විභාගයෙන් 95% සමත්වීමක් ලබා ගනිමින් පළාතේ ඉහළම ප්‍රතිඵලය ලබා ගනී.",
      category: language === 'en' ? "Achievement" : "ජයග්‍රහණ",
      date: "2024-03-15",
      image: "https://swarnapalibalika.lk/img/Olevel-2023.jpg"
    },
    {
      id: 2,
      title: language === 'en' ? "New Science Laboratory Inaugurated" : "නව විද්‍යා විද්‍යාගාරය විවෘත කෙරේ",
      excerpt: language === 'en'
        ? "State-of-the-art science laboratory equipped with modern facilities now available for students."
        : "නවීන පහසුකම් සහිත නවීන විද්‍යා විද්‍යාගාරය දැන් සිසුන් සඳහා ලබා ගත හැකිය.",
      category: language === 'en' ? "Infrastructure" : "යටිතල පහසුකම්",
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
      date: "2024-03-05",
      image: culturalImg
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-news-title">
            {c.title}
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-news-subtitle">
            {c.subtitle}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {newsItems.map((item) => (
            <Link key={item.id} href="/news">
              <Card 
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
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/news">
            <Button 
              variant="outline" 
              size="lg"
              className="hover-elevate active-elevate-2"
              data-testid="button-view-all-news"
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
