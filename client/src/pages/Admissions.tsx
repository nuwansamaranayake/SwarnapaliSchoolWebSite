import { useApp } from "@/contexts/AppContext";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  FileText, 
  CheckCircle2, 
  Calendar,
  Download,
  Users,
  ClipboardCheck
} from "lucide-react";

export default function Admissions() {
  const { language } = useApp();

  const content = {
    en: {
      pageTitle: "Admissions 2025",
      subtitle: "Join the legacy of excellence at Swarnapali Balika",
      processTitle: "Admission Process",
      processSubtitle: "Follow these simple steps to apply",
      eligibilityTitle: "Eligibility Criteria",
      datesTitle: "Important Dates",
      faqTitle: "Frequently Asked Questions",
      downloadForm: "Download Application Form"
    },
    si: {
      pageTitle: "ඇතුළත් කර ගැනීම 2025",
      subtitle: "ස්වර්ණපාලි බාලිකාවේ විශිෂ්ටත්වයට එක්වන්න",
      processTitle: "ඇතුළත් වීමේ ක්‍රියාවලිය",
      processSubtitle: "අයදුම් කිරීමට මෙම සරල පියවර අනුගමනය කරන්න",
      eligibilityTitle: "සුදුසුකම් නිර්ණායක",
      datesTitle: "වැදගත් දිනයන්",
      faqTitle: "නිතර අසන ප්‍රශ්න",
      downloadForm: "අයදුම්පත බාගන්න"
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  const steps = [
    {
      id: 1,
      icon: FileText,
      titleEn: "Obtain Application",
      titleSi: "අයදුම්පත ලබා ගන්න",
      descEn: "Download the application form from our website or collect it from the school office during working hours.",
      descSi: "අපගේ වෙබ් අඩවියෙන් අයදුම්පත බාගන්න හෝ කාර්යාල වේලාවන් තුළ පාසල් කාර්යාලයෙන් එය එකතු කරන්න."
    },
    {
      id: 2,
      icon: ClipboardCheck,
      titleEn: "Complete Form",
      titleSi: "පෝරමය සම්පූර්ණ කරන්න",
      descEn: "Fill out all sections of the application form accurately. Attach required documents including birth certificate and recent photographs.",
      descSi: "අයදුම්පත්‍රයේ සියලුම කොටස් නිවැරදිව පුරවන්න. උප්පැන්න සහතිකය සහ මෑත කාලීන ඡායාරූප ඇතුළු අවශ්‍ය ලේඛන අමුණන්න."
    },
    {
      id: 3,
      icon: Users,
      titleEn: "Submit Application",
      titleSi: "අයදුම්පත ඉදිරිපත් කරන්න",
      descEn: "Submit the completed application with all documents to the admission office before the deadline. Pay the required application fee.",
      descSi: "අවසාන දිනයට පෙර සියලු ලේඛන සමඟ සම්පූර්ණ කළ අයදුම්පත ප්‍රවේශ කාර්යාලයට ඉදිරිපත් කරන්න. අවශ්‍ය අයදුම් ගාස්තුව ගෙවන්න."
    },
    {
      id: 4,
      icon: CheckCircle2,
      titleEn: "Interview & Selection",
      titleSi: "සම්මුඛ පරීක්ෂණය සහ තේරීම",
      descEn: "Attend the scheduled interview with the student. Selection results will be announced based on merit and available spaces.",
      descSi: "සිසුන් සමඟ කාලසටහන්ගත සම්මුඛ පරීක්ෂණයට සහභාගී වන්න. කුසලතා සහ පවතින ඉඩ මත පදනම්ව තෝරා ගැනීමේ ප්‍රතිඵල ප්‍රකාශයට පත් කෙරේ."
    }
  ];

  const eligibilityCriteria = [
    {
      id: 1,
      gradeEn: "Grade 1",
      gradeSi: "1 ශ්‍රේණිය",
      criteriaEn: "Age 5+ by January 31st, 2025. Proximity to school considered.",
      criteriaSi: "2025 ජනවාරි 31 වනදා වයස අවුරුදු 5+. පාසලට සමීපත්වය සලකා බලයි."
    },
    {
      id: 2,
      gradeEn: "Grade 6",
      gradeSi: "6 ශ්‍රේණිය",
      criteriaEn: "Successful completion of Grade 5 scholarship exam or equivalent assessment.",
      criteriaSi: "5 ශ්‍රේණිය ශිෂ්‍යත්ව විභාගය හෝ සමාන ඇගයීම සාර්ථකව සම්පූර්ණ කිරීම."
    },
    {
      id: 3,
      gradeEn: "A/L (Grade 12)",
      gradeSi: "උ.පෙ. (12 ශ්‍රේණිය)",
      criteriaEn: "Minimum 6 passes in O/L examination with specific subject requirements for each stream.",
      criteriaSi: "එක් එක් ප්‍රවාහය සඳහා විශේෂිත විෂය අවශ්‍යතා සහිතව සා.පෙ. විභාගයේ අවම සමත්වීම් 6ක්."
    }
  ];

  const importantDates = [
    {
      id: 1,
      dateEn: "January 15, 2025",
      dateSi: "2025 ජනවාරි 15",
      eventEn: "Application Forms Available",
      eventSi: "අයදුම්පත් ලබා ගත හැකිය"
    },
    {
      id: 2,
      dateEn: "February 28, 2025",
      dateSi: "2025 පෙබරවාරි 28",
      eventEn: "Application Deadline",
      eventSi: "අයදුම්පත් අවසන් දිනය"
    },
    {
      id: 3,
      dateEn: "March 15-20, 2025",
      dateSi: "2025 මාර්තු 15-20",
      eventEn: "Interviews Conducted",
      eventSi: "සම්මුඛ පරීක්ෂණ පවත්වයි"
    },
    {
      id: 4,
      dateEn: "April 5, 2025",
      dateSi: "2025 අප්‍රේල් 5",
      eventEn: "Results Announced",
      eventSi: "ප්‍රතිඵල ප්‍රකාශ කෙරේ"
    }
  ];

  const faqs = [
    {
      id: 1,
      questionEn: "What documents are required for admission?",
      questionSi: "ඇතුළත් වීම සඳහා අවශ්‍ය ලේඛන මොනවාද?",
      answerEn: "Required documents include: Birth certificate (original and certified copy), Recent passport-size photographs, Previous school report cards, Proof of residence, Parent/guardian ID copies.",
      answerSi: "අවශ්‍ය ලේඛන: උප්පැන්න සහතිකය (මුල් සහ සහතික පිටපත), මෑත කාලීන ඡායාරූප, පෙර පාසල් වාර්තා කාඩ්පත්, පදිංචිය පිළිබඳ සාක්ෂි, දෙමාපිය/භාරකරු හැඳුනුම්පත් පිටපත්."
    },
    {
      id: 2,
      questionEn: "Is there an entrance examination?",
      questionSi: "ප්‍රවේශ විභාගයක් තිබේද?",
      answerEn: "For Grade 1, there is no entrance exam, but a simple assessment may be conducted. For higher grades, students may need to sit for a placement test in core subjects.",
      answerSi: "1 ශ්‍රේණිය සඳහා ප්‍රවේශ විභාගයක් නැත, නමුත් සරල තක්සේරුවක් පවත්වා ගත හැක. ඉහළ ශ්‍රේණි සඳහා, සිසුන්ට මූලික විෂයයන්හි ස්ථානගත කිරීමේ පරීක්ෂණයක් සඳහා වාඩි විය හැක."
    },
    {
      id: 3,
      questionEn: "What is the application fee?",
      questionSi: "අයදුම් ගාස්තුව කීයද?",
      answerEn: "The application fee is LKR 1,500 for all grades. This is a non-refundable processing fee. Additional fees will be charged upon admission confirmation.",
      answerSi: "සියලුම ශ්‍රේණි සඳහා අයදුම් ගාස්තුව රු. 1,500 කි. මෙය ආපසු ගෙවිය නොහැකි සැකසුම් ගාස්තුවකි. ඇතුළත් කිරීම තහවුරු කිරීමෙන් පසු අතිරේක ගාස්තු අය කෙරේ."
    },
    {
      id: 4,
      questionEn: "Can transfer students apply?",
      questionSi: "මාරු සිසුන්ට අයදුම් කළ හැකිද?",
      answerEn: "Yes, we accept transfer students based on availability of seats. Transfer students must provide school leaving certificates, report cards, and meet the grade-specific requirements.",
      answerSi: "ඔව්, අපි ආසන ලබා ගත හැකි බව මත පදනම්ව මාරු සිසුන් පිළිගනිමු. මාරු සිසුන් පාසල් අතහැර යාමේ සහතික, වාර්තා කාඩ්පත් සැපයිය යුතු අතර ශ්‍රේණිය-විශේෂිත අවශ්‍යතා සපුරාලිය යුතුය."
    },
    {
      id: 5,
      questionEn: "Are scholarships available?",
      questionSi: "ශිෂ්‍යත්ව ලබා ගත හැකිද?",
      answerEn: "Yes, we offer merit-based scholarships and financial assistance for deserving students. Scholarship applications must be submitted separately along with the admission application.",
      answerSi: "ඔව්, අපි සුදුසු සිසුන් සඳහා කුසලතා පදනම් කරගත් ශිෂ්‍යත්ව සහ මූල්‍ය ආධාර ලබා දෙමු. ශිෂ්‍යත්ව අයදුම්පත් ඇතුළත් වීමේ අයදුම්පත සමඟ වෙන වෙනම ඉදිරිපත් කළ යුතුය."
    }
  ];

  return (
    <PageLayout>
      <div className="relative h-[400px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=2000&q=80')`,
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-process-title">
              {c.processTitle}
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-process-subtitle">
              {c.processSubtitle}
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={step.id} 
                  className="hover-elevate border-card-border relative"
                  data-testid={`card-step-${step.id}`}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                    {step.id}
                  </div>
                  <CardHeader className="pt-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg" data-testid={`text-step-title-${step.id}`}>
                      {language === 'en' ? step.titleEn : step.titleSi}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm" data-testid={`text-step-desc-${step.id}`}>
                      {language === 'en' ? step.descEn : step.descSi}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-eligibility-title">
                {c.eligibilityTitle}
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {eligibilityCriteria.map((criteria) => (
                <Card 
                  key={criteria.id} 
                  className="border-card-border"
                  data-testid={`card-eligibility-${criteria.id}`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-primary" data-testid={`text-eligibility-grade-${criteria.id}`}>
                      {language === 'en' ? criteria.gradeEn : criteria.gradeSi}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground" data-testid={`text-eligibility-criteria-${criteria.id}`}>
                      {language === 'en' ? criteria.criteriaEn : criteria.criteriaSi}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-dates-title">
                {c.datesTitle}
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {importantDates.map((item) => (
                <Card 
                  key={item.id} 
                  className="border-card-border"
                  data-testid={`card-date-${item.id}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground" data-testid={`text-date-event-${item.id}`}>
                            {language === 'en' ? item.eventEn : item.eventSi}
                          </p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-date-${item.id}`}>
                            {language === 'en' ? item.dateEn : item.dateSi}
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary">
                        {language === 'en' ? 'Mark Calendar' : 'දින දර්ශනයට එක් කරන්න'}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                size="lg" 
                className="hover-elevate active-elevate-2"
                data-testid="button-download-form"
              >
                <Download className="mr-2 h-5 w-5" />
                {c.downloadForm}
              </Button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-faq-title">
                {c.faqTitle}
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            </div>

            <Accordion type="single" collapsible className="w-full" data-testid="accordion-faq">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`} data-testid={`accordion-item-${faq.id}`}>
                  <AccordionTrigger className="text-left" data-testid={`accordion-trigger-${faq.id}`}>
                    {language === 'en' ? faq.questionEn : faq.questionSi}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground" data-testid={`accordion-content-${faq.id}`}>
                    {language === 'en' ? faq.answerEn : faq.answerSi}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
