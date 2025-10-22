import { Users, GraduationCap, Trophy, Calendar } from "lucide-react";

interface StatsSectionProps {
  language: string;
}

export default function StatsSection({ language }: StatsSectionProps) {
  const stats = [
    {
      icon: Users,
      value: "2,500+",
      labelEn: "Students",
      labelSi: "ශිෂ්‍යයන්"
    },
    {
      icon: GraduationCap,
      value: "120+",
      labelEn: "Teachers",
      labelSi: "ගුරුවරුන්"
    },
    {
      icon: Trophy,
      value: "95%",
      labelEn: "O/L Pass Rate",
      labelSi: "සා.පෙ. සමත්වීම්"
    },
    {
      icon: Calendar,
      value: "50+",
      labelEn: "Years of Excellence",
      labelSi: "වසර"
    }
  ];

  return (
    <div className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center group"
                data-testid={`stat-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid={`stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm md:text-base" data-testid={`stat-label-${index}`}>
                  {language === 'en' ? stat.labelEn : stat.labelSi}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
