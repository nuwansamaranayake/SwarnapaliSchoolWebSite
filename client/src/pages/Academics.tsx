import { useApp } from "@/contexts/AppContext";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  FlaskConical, 
  Calculator, 
  Palette, 
  Music, 
  Trophy,
  Globe,
  Briefcase,
  Microscope
} from "lucide-react";

export default function Academics() {
  const { language } = useApp();

  const content = {
    en: {
      pageTitle: "Academics",
      subtitle: "Excellence in Education Across All Levels",
      gradeLevelsTitle: "Grade Levels",
      gradeLevelsSubtitle: "Comprehensive education from primary to advanced levels",
      streamsTitle: "A/L Subject Streams",
      streamsSubtitle: "Choose your path to success",
      extracurricularTitle: "Extra-Curricular Activities",
      extracurricularSubtitle: "Developing well-rounded individuals"
    },
    si: {
      pageTitle: "අධ්‍යාපනික",
      subtitle: "සියලු මට්ටම්වල අධ්‍යාපනයේ විශිෂ්ටත්වය",
      gradeLevelsTitle: "ශ්‍රේණි මට්ටම්",
      gradeLevelsSubtitle: "ප්‍රාථමික සිට උසස් මට්ටම් දක්වා සවිස්තරාත්මක අධ්‍යාපනය",
      streamsTitle: "උ.පෙ. විෂය ප්‍රවාහ",
      streamsSubtitle: "ඔබේ සාර්ථකත්වයට මාර්ගය තෝරන්න",
      extracurricularTitle: "විෂය සහ සංචාරක ක්‍රියාකාරකම්",
      extracurricularSubtitle: "සමබර පුද්ගලයින් වර්ධනය කිරීම"
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  const gradeLevels = [
    {
      id: 1,
      icon: BookOpen,
      titleEn: "Primary (Grade 1-5)",
      titleSi: "ප්‍රාථමික (1-5 ශ්‍රේණි)",
      descEn: "Foundation years focusing on basic literacy, numeracy, and character development with interactive learning methods.",
      descSi: "අන්තර්ක්‍රියාකාරී ඉගෙනුම් ක්‍රම සමඟින් මූලික සාක්ෂරතාව, සංඛ්‍යාව සහ චරිත වර්ධනය කෙරෙහි අවධානය යොමු කරයි.",
      students: "850+"
    },
    {
      id: 2,
      icon: Users,
      titleEn: "Secondary (Grade 6-9)",
      titleSi: "ද්විතීයික (6-9 ශ්‍රේණි)",
      descEn: "Building strong academic foundation across all subjects, preparing students for O/L examination.",
      descSi: "සා.පෙ. විභාගය සඳහා සිසුන් සූදානම් කරමින් සියලුම විෂයයන් හරහා ශක්තිමත් අධ්‍යාපනික පදනමක් ගොඩනැගීම.",
      students: "720+"
    },
    {
      id: 3,
      icon: FlaskConical,
      titleEn: "O/L (Grade 10-11)",
      titleSi: "සා.පෙ. (10-11 ශ්‍රේණි)",
      descEn: "Intensive preparation for Ordinary Level examination with specialized teaching and resources.",
      descSi: "විශේෂිත ඉගැන්වීම් සහ සම්පත් සමඟින් සාමාන්‍ය පෙළ විභාගය සඳහා දැඩි සූදානමක්.",
      students: "480+"
    },
    {
      id: 4,
      icon: Calculator,
      titleEn: "A/L (Grade 12-13)",
      titleSi: "උ.පෙ. (12-13 ශ්‍රේණි)",
      descEn: "Advanced Level education across four streams, preparing students for university entrance.",
      descSi: "විශ්වවිද්‍යාල ඇතුළත් වීම සඳහා සිසුන් සූදානම් කරමින් ප්‍රවාහ හතරක් හරහා උසස් පෙළ අධ්‍යාපනය.",
      students: "320+"
    }
  ];

  const streams = [
    {
      id: 1,
      icon: Microscope,
      titleEn: "Physical Science",
      titleSi: "භෞතික විද්‍යා",
      descEn: "Combined Mathematics, Physics, Chemistry - Ideal for aspiring engineers and physical scientists.",
      descSi: "ඒකාබද්ධ ගණිතය, භෞතික විද්‍යාව, රසායන විද්‍යාව - ඉංජිනේරුවන් සහ භෞතික විද්‍යාඥයින් සඳහා.",
      color: "text-blue-500"
    },
    {
      id: 2,
      icon: FlaskConical,
      titleEn: "Biological Science",
      titleSi: "ජීව විද්‍යා",
      descEn: "Biology, Chemistry, Physics - Perfect pathway for medical and life sciences careers.",
      descSi: "ජීව විද්‍යාව, රසායන විද්‍යාව, භෞතික විද්‍යාව - වෛද්‍ය සහ ජීව විද්‍යා වෘත්තීන් සඳහා.",
      color: "text-green-500"
    },
    {
      id: 3,
      icon: Briefcase,
      titleEn: "Commerce",
      titleSi: "වාණිජ",
      descEn: "Accounting, Business Studies, Economics - Foundation for business and management careers.",
      descSi: "ගිණුම්කරණය, ව්‍යාපාර අධ්‍යයනය, ආර්ථික විද්‍යාව - ව්‍යාපාර සහ කළමනාකරණ වෘත්තීන් සඳහා.",
      color: "text-orange-500"
    },
    {
      id: 4,
      icon: Globe,
      titleEn: "Arts",
      titleSi: "කලා",
      descEn: "Literature, History, Geography - Preparing students for humanities and social sciences.",
      descSi: "සාහිත්‍යය, ඉතිහාසය, භූගෝල විද්‍යාව - මානව ශාස්ත්‍ර සහ සමාජ විද්‍යා සඳහා සිසුන් සූදානම් කිරීම.",
      color: "text-purple-500"
    }
  ];

  const activities = [
    {
      id: 1,
      icon: Music,
      titleEn: "Music & Dance",
      titleSi: "සංගීතය සහ නැටුම්",
      descEn: "Traditional and contemporary music education, cultural dance forms",
      descSi: "සම්ප්‍රදායික සහ සමකාලීන සංගීත අධ්‍යාපනය, සංස්කෘතික නැටුම් ආකාර"
    },
    {
      id: 2,
      icon: Palette,
      titleEn: "Arts & Crafts",
      titleSi: "චිත්‍ර හා අත්කම්",
      descEn: "Painting, sculpture, traditional arts, and creative expression",
      descSi: "චිත්‍ර ඇඳීම, මූර්ති, සම්ප්‍රදායික කලාව සහ නිර්මාණාත්මක ප්‍රකාශනය"
    },
    {
      id: 3,
      icon: Trophy,
      titleEn: "Sports",
      titleSi: "ක්‍රීඩා",
      descEn: "Athletics, netball, badminton, swimming, and various team sports",
      descSi: "මලල ක්‍රීඩා, දැල්බෝල, බැඩ්මින්ටන්, පිහිනීම සහ විවිධ කණ්ඩායම් ක්‍රීඩා"
    },
    {
      id: 4,
      icon: Users,
      titleEn: "Clubs & Societies",
      titleSi: "සමාජ",
      descEn: "Science club, debating, drama, literature, environmental club",
      descSi: "විද්‍යා සමාජය, විවාදය, නාට්‍ය, සාහිත්‍යය, පරිසර සමාජය"
    }
  ];

  return (
    <PageLayout>
      <div className="relative h-[400px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=80')`,
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
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-grade-levels-title">
              {c.gradeLevelsTitle}
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-grade-levels-subtitle">
              {c.gradeLevelsSubtitle}
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {gradeLevels.map((level) => {
              const Icon = level.icon;
              return (
                <Card 
                  key={level.id} 
                  className="hover-elevate cursor-pointer border-card-border"
                  data-testid={`card-grade-level-${level.id}`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl" data-testid={`text-grade-level-title-${level.id}`}>
                      {language === 'en' ? level.titleEn : level.titleSi}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4" data-testid={`text-grade-level-desc-${level.id}`}>
                      {language === 'en' ? level.descEn : level.descSi}
                    </p>
                    <Badge variant="secondary" data-testid={`badge-students-${level.id}`}>
                      {level.students} {language === 'en' ? 'Students' : 'සිසුන්'}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-streams-title">
              {c.streamsTitle}
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-streams-subtitle">
              {c.streamsSubtitle}
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {streams.map((stream) => {
              const Icon = stream.icon;
              return (
                <Card 
                  key={stream.id} 
                  className="hover-elevate border-card-border"
                  data-testid={`card-stream-${stream.id}`}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 bg-card rounded-lg flex items-center justify-center border-2 ${stream.color}`}>
                        <Icon className={`w-7 h-7 ${stream.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl" data-testid={`text-stream-title-${stream.id}`}>
                          {language === 'en' ? stream.titleEn : stream.titleSi}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground" data-testid={`text-stream-desc-${stream.id}`}>
                      {language === 'en' ? stream.descEn : stream.descSi}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-activities-title">
              {c.extracurricularTitle}
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-activities-subtitle">
              {c.extracurricularSubtitle}
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <Card 
                  key={activity.id} 
                  className="hover-elevate border-card-border text-center"
                  data-testid={`card-activity-${activity.id}`}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg" data-testid={`text-activity-title-${activity.id}`}>
                      {language === 'en' ? activity.titleEn : activity.titleSi}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm" data-testid={`text-activity-desc-${activity.id}`}>
                      {language === 'en' ? activity.descEn : activity.descSi}
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
