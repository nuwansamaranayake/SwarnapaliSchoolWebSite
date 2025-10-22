import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import principalImg from "@assets/image_1761150645668.png";

interface PrincipalMessageProps {
  language: string;
}

export default function PrincipalMessage({ language }: PrincipalMessageProps) {
  const content = {
    en: {
      title: "Principal's Message",
      name: "Mrs. Ayanthi Rathnayake",
      position: "Principal",
      message: "Swarnapali Balika National School has been recognized as the leading girls school in North Central Province for several decades, due to the outstanding performances displayed by our students. My appreciation focuses on the long line of past principals for their visionary leadership in developing the school to its present status. I would also like to thank the past and present teachers for their dedication and commitment to produce exceptional results in all fields of education."
    },
    si: {
      title: "විදුහල්පති පණිවුඩය",
      name: "ශ්‍රීමතී අයන්ති රත්නායක",
      position: "විදුහල්පති",
      message: "ස්වර්ණපාලි බාලිකා ජාතික පාසල දශක ගණනාවක් තිස්සේ උතුරු මධ්‍යම පළාතේ ප්‍රමුඛතම බාලිකා පාසල ලෙස පිළිගැනීමට ලක්ව ඇත. අපේ ශිෂ්‍යයන් විසින් දක්වනු ලබන විශිෂ්ට කාර්ය සාධනයන් හේතුවෙන් මෙම පාසල වර්තමාන තත්ත්වයට දියුණු කිරීම සඳහා දූරදර්ශී නායකත්වය ලබා දුන් අතීත විදුහල්පතිවරුන් සඳහා මගේ ස්තූතිය පළ කරමි."
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            {c.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <Card className="overflow-hidden border-card-border">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 relative h-64 md:h-auto">
              <img 
                src={principalImg}
                alt="Principal"
                className="w-full h-full object-cover"
                data-testid="img-principal"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card/90 to-transparent"></div>
            </div>
            
            <div className="md:col-span-3 p-8 md:p-12 relative">
              <div className="absolute top-8 left-8 text-primary/20">
                <Quote className="w-16 h-16" />
              </div>
              
              <div className="relative">
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8" data-testid="text-principal-message">
                  {c.message}
                </p>
                
                <div className="border-l-4 border-primary pl-6">
                  <div className="font-heading font-bold text-xl text-foreground" data-testid="text-principal-name">
                    {c.name}
                  </div>
                  <div className="text-muted-foreground" data-testid="text-principal-position">
                    {c.position}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
