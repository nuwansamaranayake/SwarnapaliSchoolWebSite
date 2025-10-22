import { useApp } from "@/contexts/AppContext";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Building2, FlaskConical, Library } from "lucide-react";
import principalImg from "@assets/stock_images/professional_woman_p_08980561.jpg";

export default function About() {
  const { language } = useApp();

  const content = {
    en: {
      pageTitle: "About Us",
      subtitle: "Discover our rich history and commitment to excellence",
      historyTitle: "Our History",
      historyText: "Swarnapali Balika National School was established with a vision to provide quality education to girls in the North Central Province. Over the decades, we have grown from a small institution to the province's leading girls' school, maintaining our commitment to academic excellence and character development.",
      visionTitle: "Our Vision",
      visionText: "To be the leading educational institution that nurtures confident, competent, and compassionate young women who will contribute positively to society.",
      missionTitle: "Our Mission",
      missionText: "To provide a holistic education that develops academic excellence, cultural awareness, and moral values, preparing students for success in an ever-changing world.",
      motto: "Excellence Through Knowledge and Virtue",
      mottoSinhala: "දැනුමෙන්, ගුණයෙන්",
      facilitiesTitle: "Our Facilities",
      principalTitle: "Principal's Profile",
      principalName: "Mrs. K. D. Wijesinghe",
      principalPosition: "Principal",
      principalBio: "Mrs. Wijesinghe brings over 25 years of educational experience to Swarnapali Balika. Under her leadership, the school has achieved remarkable academic results and expanded its facilities to better serve students."
    },
    si: {
      pageTitle: "අප ගැන",
      subtitle: "අපගේ පොහොසත් ඉතිහාසය සහ විශිෂ්ටත්වය පිළිබඳ දැනගන්න",
      historyTitle: "අපගේ ඉතිහාසය",
      historyText: "ස්වර්ණපාලි බාලිකා ජාතික පාසල උතුරු මධ්‍යම පළාතේ ගැහැණු දරුවන්ට ගුණාත්මක අධ්‍යාපනයක් ලබා දීමේ දැක්මක් ඇතිව ආරම්භ කරන ලදී. දශක ගණනාවක් පුරා, අපි කුඩා ආයතනයක සිට පළාතේ ප්‍රමුඛ පෙළේ බාලිකා පාසල දක්වා වර්ධනය වී ඇත්තෙමු.",
      visionTitle: "අපගේ දැක්ම",
      visionText: "සමාජයට ධනාත්මක ලෙස දායක වන විශ්වාසවන්ත, දක්ෂ සහ අනුකම්පා සහගත තරුණියන් පෝෂණය කරන ප්‍රමුඛ අධ්‍යාපන ආයතනය වීම.",
      missionTitle: "අපගේ මෙහෙවර",
      missionText: "අධ්‍යාපනික විශිෂ්ටත්වය, සංස්කෘතික දැනුවත්භාවය සහ සදාචාරාත්මක වටිනාකම් වර්ධනය කරන සමස්ත අධ්‍යාපනයක් ලබා දීම.",
      motto: "දැනුමෙන්, ගුණයෙන් විශිෂ්ටත්වය",
      mottoSinhala: "දැනුමෙන්, ගුණයෙන්",
      facilitiesTitle: "අපගේ පහසුකම්",
      principalTitle: "විදුහල්පති පැතිකඩ",
      principalName: "ශ්‍රීමතී කේ. ඩී. විජේසිංහ",
      principalPosition: "විදුහල්පති",
      principalBio: "විජේසිංහ මහත්මිය ස්වර්ණපාලි බාලිකාවට අධ්‍යාපනික අත්දැකීම් වසර 25කට වැඩි කාලයක් ගෙන එයි. ඇයගේ නායකත්වය යටතේ පාසල කැපී පෙනෙන අධ්‍යාපනික ප්‍රතිඵල ලබා ගෙන ඇත."
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  const facilities = [
    {
      icon: Library,
      titleEn: "Modern Library",
      titleSi: "නවීන පුස්තකාලය",
      descEn: "Well-stocked library with over 10,000 books and digital resources",
      descSi: "පොත් 10,000කට වැඩි සහ ඩිජිටල් සම්පත් ඇති පුස්තකාලය"
    },
    {
      icon: FlaskConical,
      titleEn: "Science Laboratories",
      titleSi: "විද්‍යා විද්‍යාගාර",
      descEn: "State-of-the-art labs for Physics, Chemistry, and Biology",
      descSi: "භෞතික විද්‍යාව, රසායන විද්‍යාව සහ ජීව විද්‍යාව සඳහා නවීන විද්‍යාගාර"
    },
    {
      icon: Building2,
      titleEn: "Computer Lab",
      titleSi: "පරිගණක විද්‍යාගාරය",
      descEn: "Modern computer lab with high-speed internet connectivity",
      descSi: "අධිවේගී අන්තර්ජාල සම්බන්ධතාවයක් සහිත නවීන පරිගණක විද්‍යාගාරය"
    },
    {
      icon: Users,
      titleEn: "Auditorium",
      titleSi: "ශ්‍රවණාගාරය",
      descEn: "Spacious auditorium for cultural events and assemblies",
      descSi: "සංස්කෘතික උත්සව සහ එකලස් වීම් සඳහා ඉඩකඩ සහිත ශ්‍රවණාගාරය"
    },
    {
      icon: Award,
      titleEn: "Sports Facilities",
      titleSi: "ක්‍රීඩා පහසුකම්",
      descEn: "Athletic track, basketball court, and volleyball court",
      descSi: "මලල ක්‍රීඩා ධාවන පථය, පැසිපන්දු ක්‍රීඩාංගනය සහ වොලිබෝල් ක්‍රීඩාංගනය"
    },
    {
      icon: BookOpen,
      titleEn: "Multimedia Lab",
      titleSi: "බහුමාධ්‍ය විද්‍යාගාරය",
      descEn: "Advanced multimedia facilities for modern learning",
      descSi: "නවීන ඉගෙනීම සඳහා උසස් බහුමාධ්‍ය පහසුකම්"
    }
  ];

  const timeline = [
    { year: "1975", eventEn: "School Founded", eventSi: "පාසල ආරම්භය" },
    { year: "1985", eventEn: "Became National School", eventSi: "ජාතික පාසලක් බවට පත්වීම" },
    { year: "2000", eventEn: "New Science Block Opened", eventSi: "නව විද්‍යා ගොඩනැගිල්ල විවෘත කිරීම" },
    { year: "2015", eventEn: "Digital Learning Initiative", eventSi: "ඩිජිටල් ඉගෙනුම් පටන් ගැනීම" },
    { year: "2023", eventEn: "95% O/L Pass Rate Achieved", eventSi: "සා.පෙ. 95% සමත් අනුපාතය" }
  ];

  return (
    <PageLayout>
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-primary/90 to-primary/70 flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80')`,
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4" data-testid="text-page-title">
            {c.pageTitle}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90" data-testid="text-page-subtitle">
            {c.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6" data-testid="text-history-title">
              {c.historyTitle}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {c.historyText}
            </p>
            
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`timeline-${index}`}>
                  <Badge variant="secondary" className="text-lg font-bold min-w-20 justify-center">
                    {item.year}
                  </Badge>
                  <div className="flex-1 pt-1">
                    <p className="text-foreground font-medium">
                      {language === 'en' ? item.eventEn : item.eventSi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center" data-testid="text-vision-title">
                  <Award className="w-6 h-6 mr-3 text-primary" />
                  {c.visionTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{c.visionText}</p>
              </CardContent>
            </Card>

            <Card className="border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center" data-testid="text-mission-title">
                  <BookOpen className="w-6 h-6 mr-3 text-primary" />
                  {c.missionTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{c.missionText}</p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-primary-border">
              <CardHeader>
                <CardTitle className="text-center text-2xl">{c.motto}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sinhala text-center text-xl">{c.mottoSinhala}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <Card className="overflow-hidden border-card-border">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative h-64 md:h-auto">
                <img 
                  src={principalImg}
                  alt="Principal"
                  className="w-full h-full object-cover"
                  data-testid="img-principal"
                />
              </div>
              
              <div className="md:col-span-3 p-8 md:p-12">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4" data-testid="text-principal-title">
                  {c.principalTitle}
                </h2>
                <div className="border-l-4 border-primary pl-6 mb-6">
                  <div className="font-heading font-bold text-xl text-foreground" data-testid="text-principal-name">
                    {c.principalName}
                  </div>
                  <div className="text-muted-foreground" data-testid="text-principal-position">
                    {c.principalPosition}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{c.principalBio}</p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center" data-testid="text-facilities-title">
            {c.facilitiesTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card 
                  key={index} 
                  className="hover-elevate cursor-pointer border-card-border"
                  data-testid={`facility-${index}`}
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {language === 'en' ? facility.titleEn : facility.titleSi}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {language === 'en' ? facility.descEn : facility.descSi}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
